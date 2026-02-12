import React from 'react';
import { Play } from 'lucide-react';

const CompetitiveAdvantage: React.FC = () => {
    return (
        <section className="bg-bg-light py-24 md:py-32">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <p className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-6">
                            A New Era of Marketing Work
                        </p>
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-bg-dark mb-6 leading-tight">
                            A shortcut to marketing <span className="font-serif italic text-primary">clarity.</span>
                        </h2>
                        <p className="text-xl text-text-muted mb-8 font-light">
                            AI compresses cycles—research → positioning → content → iteration → reporting—without lowering the bar.
                        </p>
                        <p className="text-text-muted mb-10 leading-relaxed bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            Our workflows protect quality through guardrails: brand voice checks, factuality checks, performance reviews, and human sign-off.
                        </p>
                    </div>

                    {/* Visual Content (Video Collage Placeholder) */}
                    <div className="order-1 lg:order-2 bg-black rounded-[40px] aspect-square relative overflow-hidden group cursor-pointer shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play fill="white" className="text-white ml-1" size={32} />
                            </div>
                        </div>
                        <div className="absolute bottom-8 left-8 text-white">
                            <p className="font-bold text-lg">Watch our workflow</p>
                            <p className="text-sm text-white/60">Positioning → Design → Launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompetitiveAdvantage;
