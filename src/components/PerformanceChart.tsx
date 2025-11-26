import React, { useMemo, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { usePerformanceData } from '../hooks/usePerformanceData';
import { clsx } from 'clsx';

const formatPercentage = (value: number) => {
    return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
};

type TimeRange = '3M' | '6M' | '1Y' | 'MAX';

export const PerformanceChart: React.FC = () => {
    const { data, loading, error } = usePerformanceData();
    const [timeRange, setTimeRange] = useState<TimeRange>('MAX');

    const filteredData = useMemo(() => {
        if (data.length === 0) return [];
        if (timeRange === 'MAX') return data;

        const lastDate = new Date(data[data.length - 1].date);
        const cutoffDate = new Date(lastDate);

        switch (timeRange) {
            case '3M':
                cutoffDate.setMonth(lastDate.getMonth() - 3);
                break;
            case '6M':
                cutoffDate.setMonth(lastDate.getMonth() - 6);
                break;
            case '1Y':
                cutoffDate.setFullYear(lastDate.getFullYear() - 1);
                break;
        }

        return data.filter(point => new Date(point.date) >= cutoffDate);
    }, [data, timeRange]);

    if (loading) return <div className="h-64 flex items-center justify-center text-gray-400">Loading chart data...</div>;
    if (error) return <div className="h-64 flex items-center justify-center text-rose-500">{error}</div>;

    return (
        <div className="h-96 w-full">
            <div className="flex justify-end mb-4">
                <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
                    {(['3M', '6M', '1Y', 'MAX'] as TimeRange[]).map((range) => (
                        <button
                            key={range}
                            onClick={() => setTimeRange(range)}
                            className={clsx(
                                "px-3 py-1 text-xs font-medium rounded-md transition-all",
                                timeRange === range
                                    ? "bg-white text-gray-900 shadow-sm"
                                    : "text-gray-500 hover:text-gray-900"
                            )}
                        >
                            {range}
                        </button>
                    ))}
                </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={filteredData} margin={{ top: 5, right: 5, bottom: 30, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                    <XAxis
                        dataKey="date"
                        tickFormatter={(str) => new Date(str).toLocaleDateString(undefined, { month: 'short', year: '2-digit' })}
                        stroke="#9ca3af"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        minTickGap={30}
                        tickMargin={10}
                    />
                    <YAxis
                        tickFormatter={(val) => `${val}%`}
                        stroke="#9ca3af"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <Tooltip
                        formatter={(value: number) => [formatPercentage(value), '']}
                        labelFormatter={(label) => new Date(label).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        wrapperStyle={{ top: 0, right: 0, paddingBottom: '10px' }}
                    />
                    <Line
                        type="natural"
                        dataKey="portfolioValue"
                        name="My Portfolio Return"
                        stroke="#059669"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 6 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="sp500Value"
                        name="S&P 500 Return"
                        stroke="#9ca3af"
                        strokeWidth={2}
                        strokeDasharray="4 4"
                        dot={false}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
