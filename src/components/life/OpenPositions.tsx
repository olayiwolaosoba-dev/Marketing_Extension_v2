import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const OpenPositions: React.FC = () => {
    return (
        <section className="bg-bg-dark py-24 md:py-32 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl text-center">
                <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-16">
                    Check out our open positions <br /> and apply now
                </h2>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
                    {[
                        { title: "Growth Marketing Lead", type: "Full-time", loc: "Remote" },
                        { title: "Brand Designer", type: "Contract", loc: "Remote" },
                        { title: "Marketing Ops / PMO", type: "Full-time", loc: "Remote" }
                    ].map((role, i) => (
                        <div key={i} className="bg-white/5 border border-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors text-left group cursor-pointer">
                            <h3 className="text-xl font-bold text-white mb-4">{role.title}</h3>
                            <div className="flex items-center gap-4 text-white/50 text-sm mb-8">
                                <span>{role.type}</span>
                                <span className="w-1 h-1 rounded-full bg-white/20" />
                                <span className="flex items-center gap-1"><MapPin size={12} /> {role.loc}</span>
                            </div>
                            <div className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                                Check it out <ArrowRight size={16} />
                            </div>
                        </div>
                    ))}
                </div>

                <a href="/careers" className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-colors inline-block">
                    See all positions
                </a>
            </div>
        </section>
    );
};

export default OpenPositions;
