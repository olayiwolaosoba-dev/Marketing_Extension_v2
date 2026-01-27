import React from 'react';
import { Download, Lock, FileSpreadsheet, LayoutTemplate, FileText } from 'lucide-react';

const playbooks = [
    {
        title: "The Series A Marketing Org Chart",
        type: "Template",
        locked: false,
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600", // Team/People chart feel
        desc: "Complete role definitions, hiring sequence, and salary bands for Series A."
    },
    {
        title: "SaaS GTM Checklist 2025",
        type: "Checklist",
        locked: false,
        image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&q=80&w=600", // Checklist/clipboard feel
        desc: "The 50-point audit we run before every product launch."
    },
    {
        title: "Budgeting for Hypergrowth",
        type: "Calculator",
        locked: true,
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600", // Finance/Spreadsheet
        desc: "Excel model for forecasting CAC, LTV and burn across channels."
    },
    {
        title: "The Narrative Design Framework",
        type: "Guide",
        locked: true,
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600", // Strategy/Planning
        desc: "Step-by-step workshop to build a category-defining story."
    },
];

const GrowthPlaybooks: React.FC = () => {
    return (
        <section className="bg-bg-gray py-24 border-t border-gray-200">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl font-display font-bold text-bg-dark mb-4">Growth Playbooks</h2>
                        <p className="text-xl text-bg-dark/60 max-w-2xl">
                            Steal our internal tools. We open-sourced the spreadsheets, templates, and frameworks we use with clients.
                        </p>
                    </div>
                    <button className="text-primary font-bold text-sm border-b border-primary pb-0.5 hover:text-orange-600 transition-colors">
                        View All Resources
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {playbooks.map((item, i) => (
                        <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-200/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full flex flex-col">
                            {/* Realistic Graphic / Image Top */}
                            <div className="h-48 relative overflow-hidden bg-gray-100">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 saturate-0 group-hover:saturate-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                {/* Floating Icon Badge */}
                                <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-lg">
                                    {item.type === 'Calculator' ? <FileSpreadsheet className="text-white" size={18} /> :
                                        item.type === 'Template' ? <LayoutTemplate className="text-white" size={18} /> :
                                            <FileText className="text-white" size={18} />}
                                </div>

                                {item.locked && (
                                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-1.5 rounded-full">
                                        <Lock size={14} className="text-white/80" />
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="mb-4">
                                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm ${item.locked ? 'bg-orange-50 text-orange-600' : 'bg-green-50 text-green-600'
                                        }`}>
                                        {item.type}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-bg-dark mb-3 leading-tight group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-bg-dark/60 mb-6 line-clamp-3">
                                    {item.desc}
                                </p>

                                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                    <span className="text-xs font-bold text-bg-dark/40">PDF + CSV</span>
                                    <span className="flex items-center gap-2 text-xs font-bold text-primary group-hover:gap-3 transition-all">
                                        <Download size={14} />
                                        Download Now
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GrowthPlaybooks;
