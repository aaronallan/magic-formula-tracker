import React from 'react';
import { PositionsTable } from './PositionsTable';
import { PerformanceChart } from './PerformanceChart';
import { SummaryTable } from './SummaryTable';

export const Dashboard: React.FC = () => {
    return (
        <div className="space-y-8">
            <section>
                <div className="mb-6 flex items-baseline justify-between">
                    <h2 className="text-xl font-medium tracking-tight text-gray-900">Performance</h2>
                    <span className="text-sm text-gray-500">Cumulative Return % vs S&P 500</span>
                </div>
                <SummaryTable />
                <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                    <PerformanceChart />
                </div>
            </section>

            <section>
                <div className="mb-6 flex items-baseline justify-between">
                    <h2 className="text-xl font-medium tracking-tight text-gray-900">Closed Positions</h2>
                    <span className="text-sm text-gray-500">History</span>
                </div>
                <div className="rounded-lg border border-gray-100 bg-white shadow-sm">
                    <PositionsTable />
                </div>
            </section>
        </div>
    );
};
