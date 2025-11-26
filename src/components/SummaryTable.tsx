import React from 'react';
import { usePerformanceData } from '../hooks/usePerformanceData';
import { clsx } from 'clsx';

const formatPercentage = (value: number) => {
    return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
};

export const SummaryTable: React.FC = () => {
    const { data, loading, error } = usePerformanceData();

    if (loading || error || data.length === 0) {
        return null;
    }

    // Get the latest data point
    const latest = data[data.length - 1];
    const portfolioReturn = latest.portfolioValue;
    const sp500Return = latest.sp500Value;
    const alpha = portfolioReturn - sp500Return;

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-6">
            <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <div className="text-sm font-medium text-gray-500">Portfolio Return</div>
                <div className={clsx("mt-1 text-2xl font-semibold", portfolioReturn >= 0 ? "text-emerald-600" : "text-rose-600")}>
                    {formatPercentage(portfolioReturn)}
                </div>
            </div>
            <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <div className="text-sm font-medium text-gray-500">S&P 500 Return</div>
                <div className={clsx("mt-1 text-2xl font-semibold", sp500Return >= 0 ? "text-emerald-600" : "text-rose-600")}>
                    {formatPercentage(sp500Return)}
                </div>
            </div>
            <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <div className="text-sm font-medium text-gray-500">Alpha (vs S&P 500)</div>
                <div className={clsx("mt-1 text-2xl font-semibold", alpha >= 0 ? "text-emerald-600" : "text-rose-600")}>
                    {formatPercentage(alpha)}
                </div>
            </div>
        </div>
    );
};
