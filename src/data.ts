export interface Position {
    symbol: string;
    description: string;
    dateAcquired: string;
    dateSold: string;
    quantity: number;
    costBasis: number;
    proceeds: number;
    shortTermGainLoss: number | null;
    longTermGainLoss: number | null;
}

export const POSITIONS: Position[] = [
    {
        symbol: "PSKY(925CSH033)",
        description: "PARAMOUNT GLOBAL CLASS B COM - TENDERED FROM CUSIP 92556H206",
        dateAcquired: "2024-11-04",
        dateSold: "2025-08-07",
        quantity: 27,
        costBasis: 297.00,
        proceeds: 405.00,
        shortTermGainLoss: 108.00,
        longTermGainLoss: null,
    },
    {
        symbol: "CROX(227046109)",
        description: "CROCS INC",
        dateAcquired: "2024-11-04",
        dateSold: "2025-10-24",
        quantity: 5,
        costBasis: 526.45,
        proceeds: 417.73,
        shortTermGainLoss: -108.72,
        longTermGainLoss: null,
    },
    {
        symbol: "GAMB(G3R239101)",
        description: "GAMBLING.COM GROUP LIMITED ORD NPV",
        dateAcquired: "2024-07-01",
        dateSold: "2025-07-03",
        quantity: 0.423,
        costBasis: 3.39,
        proceeds: 5.10,
        shortTermGainLoss: null,
        longTermGainLoss: 1.71,
    },
    {
        symbol: "GAMB(G3R239101)",
        description: "GAMBLING.COM GROUP LIMITED ORD NPV",
        dateAcquired: "2024-07-01",
        dateSold: "2025-07-03",
        quantity: 0.423,
        costBasis: 3.38,
        proceeds: 5.10,
        shortTermGainLoss: null,
        longTermGainLoss: 1.72,
    },
    {
        symbol: "GAMB(G3R239101)",
        description: "GAMBLING.COM GROUP LIMITED ORD NPV",
        dateAcquired: "2024-07-01",
        dateSold: "2025-07-03",
        quantity: 61.577,
        costBasis: 493.22,
        proceeds: 742.29,
        shortTermGainLoss: null,
        longTermGainLoss: 249.07,
    },
    {
        symbol: "HPQ(40434L105)",
        description: "HP INC COM",
        dateAcquired: "2024-11-04",
        dateSold: "2025-10-24",
        quantity: 14,
        costBasis: 508.76,
        proceeds: 389.85,
        shortTermGainLoss: -118.91,
        longTermGainLoss: null,
    },
    {
        symbol: "HRMY(413197104)",
        description: "HARMONY BIOSCIENCES HLDGS INC COM",
        dateAcquired: "2024-07-01",
        dateSold: "2025-07-03",
        quantity: 15.347,
        costBasis: 460.72,
        proceeds: 491.83,
        shortTermGainLoss: null,
        longTermGainLoss: 31.11,
    },
    {
        symbol: "HRMY(413197104)",
        description: "HARMONY BIOSCIENCES HLDGS INC COM",
        dateAcquired: "2024-07-01",
        dateSold: "2025-07-03",
        quantity: 0.653,
        costBasis: 19.66,
        proceeds: 20.93,
        shortTermGainLoss: null,
        longTermGainLoss: 1.27,
    },
    {
        symbol: "HRMY(413197104)",
        description: "HARMONY BIOSCIENCES HLDGS INC COM",
        dateAcquired: "2024-07-01",
        dateSold: "2025-07-03",
        quantity: 0.653,
        costBasis: 19.60,
        proceeds: 20.96,
        shortTermGainLoss: null,
        longTermGainLoss: 1.36,
    },
    {
        symbol: "MO(02209S103)",
        description: "ALTRIA GROUP INC",
        dateAcquired: "2024-07-01",
        dateSold: "2025-07-03",
        quantity: 9.124,
        costBasis: 419.43,
        proceeds: 541.74,
        shortTermGainLoss: null,
        longTermGainLoss: 122.31,
    },
    {
        symbol: "MO(02209S103)",
        description: "ALTRIA GROUP INC",
        dateAcquired: "2024-07-01",
        dateSold: "2025-07-03",
        quantity: 0.876,
        costBasis: 40.27,
        proceeds: 52.01,
        shortTermGainLoss: null,
        longTermGainLoss: 11.74,
    },
    {
        symbol: "MO(02209S103)",
        description: "ALTRIA GROUP INC",
        dateAcquired: "2024-07-01",
        dateSold: "2025-07-03",
        quantity: 0.876,
        costBasis: 40.27,
        proceeds: 52.01,
        shortTermGainLoss: null,
        longTermGainLoss: 11.74,
    },
    {
        symbol: "PINC(74051N102)",
        description: "PREMIER INC",
        dateAcquired: "2024-07-01",
        dateSold: "2025-07-03",
        quantity: 0.867,
        costBasis: 16.13,
        proceeds: 18.95,
        shortTermGainLoss: null,
        longTermGainLoss: 2.82,
    },
    {
        symbol: "PINC(74051N102)",
        description: "PREMIER INC",
        dateAcquired: "2024-07-01",
        dateSold: "2025-07-03",
        quantity: 0.867,
        costBasis: 16.14,
        proceeds: 18.96,
        shortTermGainLoss: null,
        longTermGainLoss: 2.82,
    },
    {
        symbol: "PINC(74051N102)",
        description: "PREMIER INC",
        dateAcquired: "2024-07-01",
        dateSold: "2025-07-03",
        quantity: 25.133,
        costBasis: 467.73,
        proceeds: 549.63,
        shortTermGainLoss: null,
        longTermGainLoss: 81.90,
    },
    {
        symbol: "PSKY(69932A204)",
        description: "PARAMOUNT SKYDANCE CORP COM CL B",
        dateAcquired: "2024-11-04",
        dateSold: "2025-11-10",
        quantity: 18,
        costBasis: 198.00,
        proceeds: 272.34,
        shortTermGainLoss: null,
        longTermGainLoss: 74.34,
    },
    {
        symbol: "SIGA(826917106)",
        description: "SIGA TECHNOLOGIES INC COM",
        dateAcquired: "2024-11-04",
        dateSold: "2025-11-10",
        quantity: 70,
        costBasis: 500.50,
        proceeds: 452.90,
        shortTermGainLoss: null,
        longTermGainLoss: -47.60,
    },
    {
        symbol: "SIRI(829933100)",
        description: "SIRIUSXM HOLDINGS INC COMMON STOCK",
        dateAcquired: "2024-10-14",
        dateSold: "2025-10-24",
        quantity: 0.705,
        costBasis: 18.84,
        proceeds: 15.09,
        shortTermGainLoss: -3.75,
        longTermGainLoss: null,
    },
    {
        symbol: "SIRI(829933100)",
        description: "SIRIUSXM HOLDINGS INC COMMON STOCK",
        dateAcquired: "2024-10-14",
        dateSold: "2025-10-24",
        quantity: 0.705,
        costBasis: 18.85,
        proceeds: 15.09,
        shortTermGainLoss: -3.76,
        longTermGainLoss: null,
    },
    {
        symbol: "SIRI(829933100)",
        description: "SIRIUSXM HOLDINGS INC COMMON STOCK",
        dateAcquired: "2024-10-14",
        dateSold: "2025-10-24",
        quantity: 17.295,
        costBasis: 462.30,
        proceeds: 370.11,
        shortTermGainLoss: -92.19,
        longTermGainLoss: null,
    },
    {
        symbol: "TZOO(89421Q205)",
        description: "TRAVELZOO COM NEW",
        dateAcquired: "2024-07-01",
        dateSold: "2025-07-03",
        quantity: 65.512,
        costBasis: 492.65,
        proceeds: 877.22,
        shortTermGainLoss: null,
        longTermGainLoss: 384.57,
    },
    {
        symbol: "TZOO(89421Q205)",
        description: "TRAVELZOO COM NEW",
        dateAcquired: "2024-07-01",
        dateSold: "2025-07-03",
        quantity: 0.488,
        costBasis: 3.68,
        proceeds: 6.53,
        shortTermGainLoss: null,
        longTermGainLoss: 2.85,
    },
    {
        symbol: "TZOO(89421Q205)",
        description: "TRAVELZOO COM NEW",
        dateAcquired: "2024-07-01",
        dateSold: "2025-07-03",
        quantity: 0.488,
        costBasis: 3.67,
        proceeds: 6.56,
        shortTermGainLoss: null,
        longTermGainLoss: 2.89,
    },
    // 2026-05-29 sells — proceeds from Fidelity history; costBasis and gain/loss need to be filled from purchase records
    {
        symbol: "ANF",
        description: "ABERCROMBIE & FITCH CO CL A COM USD0.01",
        dateAcquired: "2025-05-29",
        dateSold: "2026-05-29",
        quantity: 5,
        costBasis: 512.21,
        proceeds: 385.05,
        shortTermGainLoss: null,
        longTermGainLoss: -127.16,
    },
    {
        symbol: "BKE",
        description: "BUCKLE INC COM",
        dateAcquired: "2025-05-29",
        dateSold: "2026-05-29",
        quantity: 12.912,
        costBasis: 499.98,
        proceeds: 597.68,
        shortTermGainLoss: null,
        longTermGainLoss: 97.70,
    },
    {
        symbol: "BMBL",
        description: "BUMBLE INC COM CL A",
        dateAcquired: "2025-05-29",
        dateSold: "2026-05-29",
        quantity: 101.419,
        costBasis: 500.00,
        proceeds: 325.59,
        shortTermGainLoss: null,
        longTermGainLoss: -174.41,
    },
    {
        symbol: "PLTK",
        description: "PLAYTIKA HLDG CORP COM",
        dateAcquired: "2025-05-29",
        dateSold: "2026-05-29",
        quantity: 97.971,
        costBasis: 500.00,
        proceeds: 370.33,
        shortTermGainLoss: null,
        longTermGainLoss: -129.67,
    },
    {
        symbol: "VYGR",
        description: "VOYAGER THERAPEUTICS INC COM",
        dateAcquired: "2025-05-29",
        dateSold: "2026-05-29",
        quantity: 127.551,
        costBasis: 500.00,
        proceeds: 496.17,
        shortTermGainLoss: null,
        longTermGainLoss: -3.83,
    },
];

export interface PerformancePoint {
    date: string;
    portfolioValue: number;
    sp500Value: number;
}

// Mock S&P 500 growth (approx 10% annual)
const SP500_GROWTH_RATE_DAILY = Math.pow(1.10, 1 / 365) - 1;

export function getConsolidatedPositions(): Position[] {
    const grouped: Record<string, Position> = {};

    POSITIONS.forEach(pos => {
        const symbol = pos.symbol;
        if (!grouped[symbol]) {
            grouped[symbol] = { ...pos };
        } else {
            grouped[symbol].quantity += pos.quantity;
            grouped[symbol].costBasis += pos.costBasis;
            grouped[symbol].proceeds += pos.proceeds;

            // Handle nulls for gain/loss
            const currentShort = grouped[symbol].shortTermGainLoss || 0;
            const newShort = pos.shortTermGainLoss || 0;
            grouped[symbol].shortTermGainLoss = currentShort + newShort;

            const currentLong = grouped[symbol].longTermGainLoss || 0;
            const newLong = pos.longTermGainLoss || 0;
            grouped[symbol].longTermGainLoss = currentLong + newLong;

            // Check for different dates
            if (grouped[symbol].dateAcquired !== pos.dateAcquired) {
                // Simple logic: if multiple, maybe show range or just keep first?
                // Let's keep the earliest acquired date for simplicity in this view
                if (new Date(pos.dateAcquired) < new Date(grouped[symbol].dateAcquired)) {
                    grouped[symbol].dateAcquired = pos.dateAcquired;
                }
            }
            if (grouped[symbol].dateSold !== pos.dateSold) {
                // Keep latest sold date
                if (new Date(pos.dateSold) > new Date(grouped[symbol].dateSold)) {
                    grouped[symbol].dateSold = pos.dateSold;
                }
            }
        }
    });

    return Object.values(grouped).sort((a, b) => a.symbol.localeCompare(b.symbol));
}

export function getPerformanceData(): PerformancePoint[] {
    // Sort positions by date acquired to find the start
    const sortedPositions = [...POSITIONS].sort((a, b) => new Date(a.dateAcquired).getTime() - new Date(b.dateAcquired).getTime());

    if (sortedPositions.length === 0) return [];

    const startDate = new Date(sortedPositions[0].dateAcquired);
    const endDate = new Date("2026-05-29"); // Max date in data

    const data: PerformancePoint[] = [];
    let currentDate = new Date(startDate);

    // We want to track % Return of the Portfolio vs S&P 500.
    // Portfolio Return % = (Total Realized Gain / Total Cost Basis of Closed Positions) * 100 ??
    // No, that's just final return. We want over time.

    // Time-Weighted Return is complex.
    // Simple Return over time:
    // On day T, what is the cumulative realized gain as a % of the total capital invested in those closed positions?
    // This is a bit weird because the capital base changes.

    // Alternative: "Growth of $10,000" chart style.
    // Start at 0%.
    // When a gain is realized, it adds to the numerator.
    // Denominator = Cumulative Cost Basis of all closed positions so far?

    // Let's try: Cumulative Realized P&L / Cumulative Cost Basis * 100

    let cumulativeRealizedPL = 0;
    let cumulativeCostBasis = 0;

    // For S&P 500, we simulate a steady growth from Day 0.
    // S&P 500 % = (1 + daily_rate)^days - 1

    const startTimestamp = startDate.getTime();

    // Create a map of events
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

        if (events[dateStr]) {
            cumulativeRealizedPL += events[dateStr].pl;
            cumulativeCostBasis += events[dateStr].costBasis;
        }

        // Avoid division by zero
        const portfolioReturn = cumulativeCostBasis > 0 ? (cumulativeRealizedPL / cumulativeCostBasis) * 100 : 0;

        // S&P 500 Simulation:
        // Simply (1.10)^(years since start) - 1
        const daysSinceStart = (currentDate.getTime() - startTimestamp) / (1000 * 60 * 60 * 24);
        const sp500Return = (Math.pow(1 + SP500_GROWTH_RATE_DAILY, daysSinceStart) - 1) * 100;

        data.push({
            date: dateStr,
            portfolioValue: portfolioReturn, // Now storing %
            sp500Value: sp500Return,       // Now storing %
        });

        currentDate.setDate(currentDate.getDate() + 1);
    }

    return data;
}
