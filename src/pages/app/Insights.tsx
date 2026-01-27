import React from 'react';
import { useStore } from '../../lib/store';
import { FileText, ArrowUpRight, TrendingUp } from 'lucide-react';

const InsightsPage: React.FC = () => {
    const { insights } = useStore();

    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-display font-bold text-text-dark mb-1">Insights & Reports</h1>
                <p className="text-text-muted">Performance data and strategic recommendations.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Reports List */}
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-lg font-bold text-text-dark">Monthly Reports</h2>
                    {insights.map(report => (
                        <div key={report.id} className="bg-white p-6 rounded-2xl border border-gray-200 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-text-dark group-hover:text-primary transition-colors">{report.title}</h3>
                                    <p className="text-sm text-text-muted">{report.date}</p>
                                </div>
                            </div>
                            <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold text-text-dark hover:bg-gray-50">View Report</button>
                        </div>
                    ))}
                </div>

                {/* Recommendations Feed */}
                <div className="space-y-6">
                    <h2 className="text-lg font-bold text-text-dark flex items-center gap-2">
                        <TrendingUp size={20} className="text-primary" /> Recommendations
                    </h2>
                    <div className="bg-gradient-to-br from-primary/5 to-transparent p-6 rounded-2xl border border-primary/10">
                        <div className="mb-4 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> New Opportunity
                        </div>
                        <h3 className="font-bold text-text-dark mb-2">Optimize Landing Page Conversions</h3>
                        <p className="text-sm text-text-muted leading-relaxed mb-6">
                            We've noticed a 15% drop in conversion rate on the pricing page. We recommend running an A/B test on the CTA copy.
                        </p>
                        <button className="w-full py-3 bg-white border border-gray-200 rounded-xl text-primary font-bold text-sm hover:shadow-md transition-all flex items-center justify-center gap-2">
                            Create Request <ArrowUpRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InsightsPage;
