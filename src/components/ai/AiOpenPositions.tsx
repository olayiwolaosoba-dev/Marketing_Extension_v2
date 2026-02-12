import React from 'react';
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react';

const AiOpenPositions: React.FC = () => {
    return (
        <section className="bg-bg-dark pb-32">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <h2 className="text-3xl md:text-5xl font-display font-medium text-white leading-tight">
                        Check out our open positions <br /> and apply now
                    </h2>
                    <a href="/careers" className="text-primary font-bold hover:text-white transition-colors flex items-center gap-2">
                        See all positions <ArrowRight size={20} />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Design Lead (Content+)", type: "Full-time", loc: "Remote" },
                        { title: "Growth Strategist", type: "Full-time", loc: "Hybrid" },
                        { title: "Marketing Ops (MarTech Studio)", type: "Contract", loc: "Remote" }
                    ].map((role, i) => (
                        <div key={i} className="bg-white/5 border border-white/5 p-8 rounded-3xl hover:bg-white/10 transition-colors group cursor-pointer flex flex-col justify-between min-h-[200px]">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">{role.title}</h3>
                                <div className="flex items-center gap-4 text-white/50 text-sm">
                                    <span>{role.type}</span>
                                    <span className="w-1 h-1 rounded-full bg-white/20" />
                                    <span className="flex items-center gap-1"><MapPin size={12} /> {role.loc}</span>
                                </div>
                            </div>
                            <div className="mt-8 text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                                Check it out <ArrowRight size={16} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AiOpenPositions;
