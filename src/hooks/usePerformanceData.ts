import { useState, useEffect } from 'react';
import { POSITIONS } from '../data';
import type { PerformancePoint } from '../data';

export function usePerformanceData() {
    const [data, setData] = useState<PerformancePoint[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                // 1. Fetch S&P 500 CSV
                const response = await fetch('/sp500.csv');
                if (!response.ok) throw new Error('Failed to fetch S&P 500 data');
                const text = await response.text();

                // 2. Parse CSV
                const sp500Map = new Map<string, number>();
                const lines = text.split('\n');
                let lastValue = 0;

                // Skip header
                for (let i = 1; i < lines.length; i++) {
                    const line = lines[i].trim();
                    if (!line) continue;
                    const [date, valueStr] = line.split(',');

                    let value = parseFloat(valueStr);
                    if (isNaN(value)) {
                        // Handle missing data ('.') by using last known value
                        value = lastValue;
                    } else {
                        lastValue = value;
                    }

                    if (value > 0) {
                        sp500Map.set(date, value);
                    }
                }

                // 3. Calculate Performance
                const sortedPositions = [...POSITIONS].sort((a, b) => new Date(a.dateAcquired).getTime() - new Date(b.dateAcquired).getTime());
                if (sortedPositions.length === 0) {
                    setData([]);
                    setLoading(false);
                    return;
                }

                const startDate = new Date(sortedPositions[0].dateAcquired);
                // Use today as end date, or the last date in S&P data
                const endDate = new Date("2025-11-24"); // Based on the file we saw

                const chartData: PerformancePoint[] = [];
                let currentDate = new Date(startDate);

                // Find S&P 500 start value
                // If start date is a weekend/holiday, look forward a few days
                let sp500StartValue = 0;
                let tempDate = new Date(startDate);
                while (sp500StartValue === 0 && tempDate <= endDate) {
                    const dateStr = tempDate.toISOString().split('T')[0];
                    if (sp500Map.has(dateStr)) {
                        sp500StartValue = sp500Map.get(dateStr)!;
                    }
                    tempDate.setDate(tempDate.getDate() + 1);
                }

                let cumulativeRealizedPL = 0;
                let cumulativeCostBasis = 0;

                // Pre-process position events
                const events: Record<string, { pl: number, costBasis: number }> = {};
                POSITIONS.forEach(pos => {
                    const soldDate = pos.dateSold;
                    const pl = (pos.longTermGainLoss || 0) + (pos.shortTermGainLoss || 0);

                    if (!events[soldDate]) {
                        events[soldDate] = { pl: 0, costBasis: 0 };
                    }
                    events[soldDate].pl += pl;
                    events[soldDate].costBasis += pos.costBasis;
                });

                while (currentDate <= endDate) {
                    const dateStr = currentDate.toISOString().split('T')[0];

                    // Update Portfolio Stats
                    if (events[dateStr]) {
                        cumulativeRealizedPL += events[dateStr].pl;
                        cumulativeCostBasis += events[dateStr].costBasis;
                    }

                    // Calculate Portfolio Return %
                    // Logic: Cumulative Realized P&L / Cumulative Cost Basis
                    const portfolioReturn = cumulativeCostBasis > 0 ? (cumulativeRealizedPL / cumulativeCostBasis) * 100 : 0;

                    // Calculate S&P 500 Return %
                    // Logic: (Current Value - Start Value) / Start Value
                    // Note: sp500Return calculation moved to second pass

                    // Let's refine the loop
                    // We need to handle the case where sp500StartValue is 0 (data missing at start)

                    // ... (see implementation below)

                    chartData.push({
                        date: dateStr,
                        portfolioValue: portfolioReturn,
                        sp500Value: 0, // Placeholder
                    });

                    currentDate.setDate(currentDate.getDate() + 1);
                }

                // Second pass to fill S&P values correctly with look-forward/back?
                // Actually, let's just do it in one pass with a "last known" tracker.

                let lastKnownSp500 = sp500StartValue;

                const finalData = chartData.map(point => {
                    const val = sp500Map.get(point.date);
                    if (val !== undefined) {
                        lastKnownSp500 = val;
                    }

                    const sp500Return = sp500StartValue > 0 ? ((lastKnownSp500 - sp500StartValue) / sp500StartValue) * 100 : 0;

                    return {
                        ...point,
                        sp500Value: sp500Return
                    };
                });

                setData(finalData);
                setLoading(false);

            } catch (err) {
                console.error(err);
                setError(err instanceof Error ? err.message : 'Unknown error');
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return { data, loading, error };
}
