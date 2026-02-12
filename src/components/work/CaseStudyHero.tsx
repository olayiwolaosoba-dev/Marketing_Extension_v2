import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

interface CaseStudyHeroProps {
    client: string;
    headline: string;
    tags: string[];
    stats: Array<{ value: string; label: string }>;
    heroMedia: string; // URL to video or image
    heroMediaType?: 'video' | 'image';
}

const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({ client, headline, tags, stats, heroMedia, heroMediaType = 'image' }) => {
    return (
        <section className="bg-bg-light pt-32 pb-16 md:pt-48 md:pb-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">

                    {/* Text Content */}
                    <div className="relative z-10">
                        <div className="flex flex-wrap gap-3 mb-6">
                            {tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold uppercase tracking-wider text-text-muted">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-bg-dark leading-[0.95] tracking-tight mb-8">
                            {headline}
                        </h1>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-primary text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/25">
                                Book a strategy call
                            </button>
                            <button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white text-bg-dark border border-gray-200 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-gray-50 transition-all">
                                Explore artifacts
                            </button>
                        </div>

                        {/* Metrics Mobile (Hidden on Desktop, shown below hero usually but keeping compact for mobile) */}
                        <div className="mt-12 lg:hidden grid grid-cols-1 gap-6">
                            {stats.map((stat, i) => (
                                <div key={i} className="border-l-2 border-primary pl-4">
                                    <div className="text-3xl font-display font-bold text-bg-dark">{stat.value}</div>
                                    <div className="text-sm text-text-muted uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hero Media */}
                    <div className="relative z-0">
                        <div className="aspect-[4/3] md:aspect-video lg:aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl relative">
                            {heroMediaType === 'video' ? (
                                <video src={heroMedia} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                            ) : (
                                <img src={heroMedia} alt={client} className="w-full h-full object-cover" />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 to-transparent" />

                            {/* Client Logo Overlay */}
                            <div className="absolute top-6 right-6 lg:top-8 lg:right-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full">
                                <span className="font-display font-bold text-bg-dark">{client}</span>
                            </div>
                        </div>

                        {/* Desktop Metrics (Floating overlay design) */}
                        <div className="hidden lg:flex absolute -bottom-12 -left-12 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 max-w-md gap-8">
                            {stats.map((stat, i) => (
                                <div key={i} className={i !== 0 ? "border-l border-gray-100 pl-8" : ""}>
                                    <div className="text-3xl font-display font-bold text-primary mb-1">{stat.value}</div>
                                    <div className="text-xs font-bold text-text-muted uppercase tracking-wider leading-tight">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudyHero;
