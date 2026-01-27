import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

interface ProofBannerProps {
    onOpen: () => void;
}

const ProofBanner: React.FC<ProofBannerProps> = ({ onOpen }) => {
    return (
        <section className="bg-white py-12 border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="relative rounded-2xl overflow-hidden bg-bg-dark text-white shadow-2xl group cursor-pointer" onClick={onOpen}>
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3"
                            alt="Background"
                            className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 group-hover:scale-105 transform"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/90 to-transparent" />
                    </div>

                    <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">

                        {/* Left: Content */}
                        <div className="flex items-center gap-8">
                            {/* Featured Image Thumbnail */}
                            <div className="hidden md:block w-32 h-32 rounded-lg overflow-hidden border border-white/10 shadow-lg shrink-0">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
                                    alt="Fintech Growth Graph"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="bg-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white">
                                        Featured Case Study
                                    </span>
                                    <span className="text-white/40 text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                                        <TrendingUp size={12} className="text-green-400" /> +140% MQLs
                                    </span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                                    From Seed to Series A: <br className="hidden md:block" />
                                    Installing the Growth Engine
                                </h3>

                                <p className="text-white/60 text-sm max-w-lg line-clamp-2 md:line-clamp-1">
                                    How a fintech challenger utilized our "Operating System" module to restructure marketing before raising $15M.
                                </p>
                            </div>
                        </div>

                        {/* Right: CTA */}
                        <div className="shrink-0 w-full md:w-auto">
                            <button className="w-full md:w-auto bg-white text-bg-dark px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-primary/25">
                                Read Case Study
                                <ArrowRight size={20} />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProofBanner;
