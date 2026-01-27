import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { modules } from '../../data/consulting';

const ModuleGrid: React.FC = () => {
    // Triple the modules creates a seamless loop even on large screens
    const carouselModules = [...modules, ...modules, ...modules];

    return (
        <section className="bg-white py-24 border-t border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">Productized Consulting</span>
                    <h2 className="text-4xl font-display font-bold text-bg-dark mb-6">
                        Modular by design. <br /> Integrated by default.
                    </h2>
                    <p className="text-xl text-bg-dark/60">
                        Choose the module you need to unplug a specific bottleneck, or deploy the full stack for a complete transformation.
                    </p>
                </div>
            </div>

            {/* Single Carousel Row (Infinite Scroll) */}
            <div className="w-full relative">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div className="flex gap-8 animate-infinite-scroll w-max hover:paused pl-6">
                    {carouselModules.map((mod, index) => (
                        <div key={`${mod.id}-${index}`} className="w-[450px] bg-white border border-gray-200 rounded-3xl p-10 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group flex-shrink-0 flex flex-col">
                            <div className="flex items-start justify-between mb-8">
                                <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-primary/10 transition-colors">
                                    <mod.icon className="text-bg-dark w-8 h-8 group-hover:text-primary transition-colors" />
                                </div>
                                <span className="text-xs font-bold bg-gray-100 px-3 py-1 rounded-full text-bg-dark/50">
                                    {mod.timeline}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-bg-dark mb-3">{mod.title}</h3>
                            <p className="text-bg-dark/60 text-base mb-8 line-clamp-2 h-12">{mod.shortDesc}</p>

                            <div className="space-y-3 mb-8 flex-grow">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-bg-dark/30 mb-2">Includes</p>
                                {mod.deliverables.slice(0, 3).map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-bg-dark/80 font-medium">
                                        <div className="min-w-[4px] h-[4px] bg-primary rounded-full" /> {item}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto border-t border-gray-100 pt-6 flex items-center justify-between">
                                <span className="text-xs font-bold text-bg-dark/40">Best for: {mod.whoFor.split(',')[0]}</span>
                                <button className="py-2 px-4 border border-gray-200 rounded-full text-xs font-bold text-bg-dark hover:bg-bg-dark hover:text-white transition-all flex items-center gap-2">
                                    View Details <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ModuleGrid;
