import React, { useMemo, useState } from 'react';
import { getConsolidatedPositions, type Position } from '../data';
import { clsx } from 'clsx';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
};

type SortKey = keyof Position | 'returnPct';
type SortDirection = 'asc' | 'desc';

interface SortConfig {
    key: SortKey;
    direction: SortDirection;
}

export const PositionsTable: React.FC = () => {
    const positions = useMemo(() => getConsolidatedPositions(), []);
    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'dateSold', direction: 'desc' });

    const sortedPositions = useMemo(() => {
        const sorted = [...positions];
        sorted.sort((a, b) => {
            let aValue: any = a[sortConfig.key as keyof Position];
            let bValue: any = b[sortConfig.key as keyof Position];

            // Handle computed columns
            if (sortConfig.key === 'returnPct') {
                const aGain = (a.longTermGainLoss || 0) + (a.shortTermGainLoss || 0);
                const bGain = (b.longTermGainLoss || 0) + (b.shortTermGainLoss || 0);
                aValue = a.costBasis > 0 ? (aGain / a.costBasis) : 0;
                bValue = b.costBasis > 0 ? (bGain / b.costBasis) : 0;
            }

            if (aValue < bValue) {
                return sortConfig.direction === 'asc' ? -1 : 1;
            }
            if (aValue > bValue) {
                return sortConfig.direction === 'asc' ? 1 : -1;
            }
            return 0;
        });
        return sorted;
    }, [positions, sortConfig]);

    const requestSort = (key: SortKey) => {
        let direction: SortDirection = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const SortIcon = ({ columnKey }: { columnKey: SortKey }) => {
        if (sortConfig.key !== columnKey) {
            return <ArrowUpDown size={14} className="ml-1 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />;
        }
        return sortConfig.direction === 'asc'
            ? <ArrowUp size={14} className="ml-1 text-emerald-600" />
            : <ArrowDown size={14} className="ml-1 text-emerald-600" />;
    };

    const HeaderCell = ({ label, columnKey, align = 'left' }: { label: string, columnKey: SortKey, align?: 'left' | 'right' }) => (
        <th
            className={clsx(
                "px-4 py-3 font-medium cursor-pointer group select-none hover:bg-gray-50 transition-colors",
                align === 'right' ? "text-right" : "text-left"
            )}
            onClick={() => requestSort(columnKey)}
        >
            <div className={clsx("flex items-center", align === 'right' ? "justify-end" : "justify-start")}>
                {label}
                <SortIcon columnKey={columnKey} />
            </div>
        </th>
    );

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead className="border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
                    <tr>
                        <HeaderCell label="Symbol" columnKey="symbol" />
                        <HeaderCell label="Description" columnKey="description" />
                        <HeaderCell label="Acquired" columnKey="dateAcquired" />
                        <HeaderCell label="Sold" columnKey="dateSold" />
                        <HeaderCell label="Return %" columnKey="returnPct" align="right" />
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {sortedPositions.map((pos, idx) => {
                        const gainLoss = (pos.longTermGainLoss || 0) + (pos.shortTermGainLoss || 0);
                        const returnPct = pos.costBasis > 0 ? (gainLoss / pos.costBasis) * 100 : 0;
                        const isPositive = gainLoss >= 0;

                        return (
                            <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 font-medium text-gray-900">{pos.symbol.split('(')[0]}</td>
                                <td className="px-4 py-3 text-gray-600 max-w-xs truncate" title={pos.description}>
                                    {pos.description}
                                </td>
                                <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{formatDate(pos.dateAcquired)}</td>
                                <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{formatDate(pos.dateSold)}</td>
                                <td className={clsx("px-4 py-3 text-right font-medium", isPositive ? "text-emerald-600" : "text-rose-600")}>
                                    {returnPct > 0 ? '+' : ''}{returnPct.toFixed(2)}%
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
