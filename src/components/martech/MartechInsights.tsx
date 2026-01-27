import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const insights = [
    {
        category: "Template",
        title: "The 2026 MarTech Stack Blueprint",
        readTime: "Download"
    },
    {
        category: "Teardown",
        title: "How Ramp scales their outbound engine",
        readTime: "5 min read"
    },
    {
        category: "Guide",
        title: "Migrating from Marketo to HubSpot: The Data/Ops Checklist",
        readTime: "12 min read"
    }
];

const MartechInsights: React.FC = () => {
    return (
        <section className="bg-bg-dark py-24 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Newsletter Side */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                            Briefs, templates, and <br /> stack teardowns.
                        </h2>
                        <p className="text-white/60 mb-8 max-w-md">
                            Join 4,000+ marketing engineers and ops leaders. We share code snippets, architectural patterns, and unfiltered tool reviews.
                        </p>

                        <form className="max-w-md relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                            <input
                                type="email"
                                placeholder="engineer@company.com"
                                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-32 text-white placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-white text-bg-dark px-6 rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-colors">
                                Subscribe
                            </button>
                        </form>
                        <p className="text-white/20 text-xs mt-4 pl-4">
                            No spam. Unsubscribe anytime.
                        </p>
                    </div>

                    {/* Content Cards */}
                    <div className="grid gap-4">
                        {insights.map((item, i) => (
                            <a key={i} href="#" className="group bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 rounded-xl p-6 flex items-center justify-between transition-all hover:translate-x-1">
                                <div>
                                    <div className="text-primary text-xs font-bold uppercase tracking-wider mb-2">{item.category}</div>
                                    <h3 className="text-lg font-bold text-white group-hover:underline decoration-primary/50 underline-offset-4 decoration-2">{item.title}</h3>
                                </div>
                                <div className="text-white/40 text-sm whitespace-nowrap pl-4 flex items-center gap-2">
                                    {item.readTime}
                                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MartechInsights;
