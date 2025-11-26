import React from 'react';

export const Strategy: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <section>
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">Why is the Magic Formula Underperforming?</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                    While the Magic Formula has historically delivered strong returns, its performance in recent years (particularly over the last decade) has lagged behind the S&P 500. Several structural and market factors contribute to this trend.
                </p>
            </section>

            <section className="rounded-lg bg-emerald-50 p-6 border border-emerald-100">
                <div className="flex gap-4 items-start">
                    <div className="hidden sm:block h-24 w-16 flex-shrink-0 overflow-hidden rounded shadow-sm">
                        <img src={`${import.meta.env.BASE_URL}book-cover.jpg`} alt="Book Cover" className="h-full w-full object-cover" />
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-emerald-900 mb-2">About the Strategy</h3>
                        <p className="text-sm text-emerald-800 leading-relaxed">
                            Based on Joel Greenblatt's <em>The Little Book That Beats the Market</em>, this strategy ranks companies based on two metrics: <strong>Return on Capital</strong> (quality) and <strong>Earnings Yield</strong> (price). The goal is to buy good companies at cheap prices. The formula systematically selects a portfolio of top-ranked stocks, rebalancing annually to remove emotion from investing.
                        </p>
                    </div>
                </div>
            </section>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Growth vs. Value</h3>
                    <p className="text-sm text-gray-600">
                        The last decade has been dominated by large-cap growth stocks (especially tech), while the Magic Formula is inherently a value strategy. Value investing has faced a prolonged period of underperformance relative to growth.
                    </p>
                </div>

                <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Interest Rates</h3>
                    <p className="text-sm text-gray-600">
                        Historically low interest rates favored companies with future growth potential (long duration assets) over the cash-generative, high-return-on-capital companies that the Magic Formula targets.
                    </p>
                </div>

                <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Market Efficiency</h3>
                    <p className="text-sm text-gray-600">
                        The rise of algorithmic trading and quantitative funds has made the market more efficient. The "quality at a cheap price" anomaly that the formula exploits may have been arbitraged away to some extent.
                    </p>
                </div>

                <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">The "Asset-Light" Economy</h3>
                    <p className="text-sm text-gray-600">
                        The formula relies on "Return on Capital" (ROC). In a modern economy where intangible assets (brand, IP, software) drive value but don't appear on the balance sheet like factories do, traditional ROC metrics may misidentify quality.
                    </p>
                </div>
            </div>

            <section className="rounded-lg bg-gray-50 p-6 border border-gray-100">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Conclusion</h3>
                <p className="text-sm text-gray-600">
                    The underperformance doesn't necessarily mean the strategy is broken. Value strategies often face long periods of underperformance before reverting to the mean. However, the structural shift towards intangible assets suggests that the definition of "Capital" in the formula might need modernization.
                </p>
            </section>
        </div>
    );
};
