import { useState, useEffect } from 'react';
import { POSITIONS } from '../data';
import type { PerformancePoint } from '../data';

const CACHE_KEY = 'sp500_data_v2';
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

interface CachedSp500 {
    fetchedAt: number;
    entries: [string, number][];
}

async function fetchSp500FromYahoo(startDate: Date, endDate: Date): Promise<Map<string, number>> {
    const period1 = Math.floor(startDate.getTime() / 1000);
    const period2 = Math.floor(endDate.getTime() / 1000);
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/%5EGSPC?interval=1d&period1=${period1}&period2=${period2}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error(`Yahoo Finance returned ${response.status}`);

    const json = await response.json();
    const result = json.chart?.result?.[0];
    if (!result) throw new Error('Unexpected Yahoo Finance response shape');

    const timestamps: number[] = result.timestamp;
    const closes: (number | null)[] = result.indicators.quote[0].close;

    const map = new Map<string, number>();
    timestamps.forEach((ts, i) => {
        const close = closes[i];
        if (close != null) {
            map.set(new Date(ts * 1000).toISOString().split('T')[0], close);
        }
    });
    return map;
}

async function loadSp500(startDate: Date, endDate: Date): Promise<Map<string, number>> {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
        const parsed: CachedSp500 = JSON.parse(cached);
        if (Date.now() - parsed.fetchedAt < CACHE_TTL_MS) {
            return new Map(parsed.entries);
        }
    }

    try {
        const map = await fetchSp500FromYahoo(startDate, endDate);
        const toCache: CachedSp500 = { fetchedAt: Date.now(), entries: [...map.entries()] };
        localStorage.setItem(CACHE_KEY, JSON.stringify(toCache));
        return map;
    } catch (err) {
        console.warn('Yahoo Finance unavailable, falling back to bundled sp500.csv:', err);
    }

    const resp = await fetch(`${import.meta.env.BASE_URL}sp500.csv`);
    if (!resp.ok) throw new Error('S&P 500 data unavailable');
    const text = await resp.text();
    const map = new Map<string, number>();
    let lastVal = 0;
    text.split('\n').slice(1).forEach(line => {
        const [date, valStr] = line.trim().split(',');
        if (!date) return;
        const val = parseFloat(valStr);
        lastVal = isNaN(val) ? lastVal : val;
        if (lastVal > 0) map.set(date, lastVal);
    });
    return map;
}

export function usePerformanceData() {
    const [data, setData] = useState<PerformancePoint[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function build() {
            try {
                const sorted = [...POSITIONS].sort((a, b) =>
                    new Date(a.dateAcquired).getTime() - new Date(b.dateAcquired).getTime()
                );
                if (sorted.length === 0) { setData([]); setLoading(false); return; }

                const startDate = new Date(sorted[0].dateAcquired);
                const endDate = POSITIONS.reduce((max, p) => {
                    const d = new Date(p.dateSold);
                    return d > max ? d : max;
                }, new Date(sorted[0].dateSold));

                const sp500Map = await loadSp500(startDate, endDate);

                // Find S&P 500 value at start, skipping market holidays/weekends
                let sp500StartValue = 0;
                const probe = new Date(startDate);
                while (sp500StartValue === 0 && probe <= endDate) {
                    sp500StartValue = sp500Map.get(probe.toISOString().split('T')[0]) ?? 0;
                    probe.setDate(probe.getDate() + 1);
                }

                // Aggregate realized P&L and cost basis by sold date
                const events: Record<string, { pl: number; costBasis: number }> = {};
                POSITIONS.forEach(pos => {
                    const pl = (pos.longTermGainLoss ?? 0) + (pos.shortTermGainLoss ?? 0);
                    if (!events[pos.dateSold]) events[pos.dateSold] = { pl: 0, costBasis: 0 };
                    events[pos.dateSold].pl += pl;
                    events[pos.dateSold].costBasis += pos.costBasis;
                });

                let cumulativePL = 0;
                let cumulativeCost = 0;
                let lastKnownSp500 = sp500StartValue;
                const chartData: PerformancePoint[] = [];
                const current = new Date(startDate);

                while (current <= endDate) {
                    const dateStr = current.toISOString().split('T')[0];

                    if (events[dateStr]) {
                        cumulativePL += events[dateStr].pl;
                        cumulativeCost += events[dateStr].costBasis;
                    }

                    const sp500Val = sp500Map.get(dateStr);
                    if (sp500Val !== undefined) lastKnownSp500 = sp500Val;

                    const portfolioReturn = cumulativeCost > 0 ? (cumulativePL / cumulativeCost) * 100 : 0;
                    const sp500Return = sp500StartValue > 0
                        ? ((lastKnownSp500 - sp500StartValue) / sp500StartValue) * 100
                        : 0;

                    chartData.push({ date: dateStr, portfolioValue: portfolioReturn, sp500Value: sp500Return });
                    current.setDate(current.getDate() + 1);
                }

                setData(chartData);
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
                setLoading(false);
            }
        }

        build();
    }, []);

    return { data, loading, error };
}
