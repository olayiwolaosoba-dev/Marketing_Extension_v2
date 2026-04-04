import React from 'react';
import { Download, FileSpreadsheet, LayoutTemplate, FileText, CheckSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const playbooks = [
    {
        title: "The Series A Marketing Org Chart",
        type: "Template",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600",
        desc: "Complete role definitions, 18-month hiring sequence, and compensation benchmarks for Fintech & B2B SaaS founders building their marketing function post-Series A.",
        href: "/resources/series-a-org-chart.html",
        format: "PDF · Template",
    },
    {
        title: "SaaS GTM Checklist 2025",
        type: "Checklist",
        image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&q=80&w=600",
        desc: "The 50-point audit we run before every product launch — across ICP, messaging, channels, analytics, and launch execution.",
        href: "/resources/saas-gtm-checklist.html",
        format: "PDF · Checklist",
    },
    {
        title: "Budgeting for Hypergrowth",
        type: "Calculator",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600",
        desc: "CAC, LTV and burn-rate framework with 3 budget scenarios and channel allocation benchmarks for Series A and B companies.",
        href: "/resources/budgeting-hypergrowth.html",
        format: "PDF · Calculator",
    },
    {
        title: "The Narrative Design Framework",
        type: "Guide",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
        desc: "A half-day workshop guide to build a category-defining brand story — from defining the enemy to cascading your POV across every channel.",
        href: "/resources/narrative-design-framework.html",
        format: "PDF · Workshop Guide",
    },
];

const typeIcon = (type: string) => {
    if (type === 'Calculator') return <FileSpreadsheet className="text-white" size={18} />;
    if (type === 'Template')   return <LayoutTemplate className="text-white" size={18} />;
    if (type === 'Checklist')  return <CheckSquare className="text-white" size={18} />;
    return <FileText className="text-white" size={18} />;
};

const GrowthPlaybooks: React.FC = () => {
    return (
        <section className="bg-bg-gray py-24 border-t border-gray-200">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl font-display font-bold text-bg-dark mb-4">Growth Playbooks</h2>
                        <p className="text-xl text-bg-dark/60 max-w-2xl">
                            Steal our internal tools. We open-sourced the spreadsheets, templates, and frameworks we use with clients.
                        </p>
                    </div>
                    <Link
                        to="/resources/playbooks"
                        className="flex items-center gap-2 text-primary font-bold text-sm border-b border-primary pb-0.5 hover:text-orange-600 hover:border-orange-600 transition-colors whitespace-nowrap group"
                    >
                        View All Resources
                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {playbooks.map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-2xl overflow-hidden border border-gray-200/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full flex flex-col no-underline"
                            aria-label={`Open ${item.title}`}
                        >
                            {/* Image */}
                            <div className="h-48 relative overflow-hidden bg-gray-100">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 saturate-0 group-hover:saturate-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                {/* Type icon badge */}
                                <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-lg">
                                    {typeIcon(item.type)}
                                </div>

                                {/* "Open" hover hint */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                                        <Download size={11} /> Open &amp; Download
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="mb-4">
                                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm bg-green-50 text-green-600">
                                        {item.type}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-bg-dark mb-3 leading-tight group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-bg-dark/60 mb-6 leading-relaxed">
                                    {item.desc}
                                </p>

                                <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
                                    <span className="text-xs font-bold text-bg-dark/40">{item.format}</span>
                                    <span className="flex items-center gap-2 text-xs font-bold text-primary group-hover:gap-3 transition-all">
                                        <Download size={13} />
                                        Download Free
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Bottom CTA strip */}
                <div className="mt-16 bg-bg-dark rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-display font-bold text-white mb-2">Want these applied to your business?</h3>
                        <p className="text-white/50 text-sm max-w-xl">Our consulting team runs these frameworks with clients every week. Book a strategy call and we'll bring them to your company.</p>
                    </div>
                    <Link
                        to="/strategy-call"
                        className="flex-shrink-0 bg-primary text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-orange-500 transition-colors flex items-center gap-2"
                    >
                        Book a Strategy Call <ArrowRight size={15} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default GrowthPlaybooks;
