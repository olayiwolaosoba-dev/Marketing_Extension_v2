import React from 'react';
import { Check } from 'lucide-react';

const EnvironmentSplit: React.FC = () => {
    return (
        <section className="bg-bg-dark pb-32">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                    {/* Text Content */}
                    <div>
                        <p className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-6">
                            Where Top Talent Thrives
                        </p>
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6 leading-tight">
                            An environment designed for <span className="font-serif italic text-white/40">excellence.</span>
                        </h2>
                        <p className="text-xl text-white/70 mb-10 leading-relaxed font-light">
                            Remote-first, high-trust, and deeply intentional about quality.
                        </p>

                        <div className="space-y-6">
                            {[
                                'Remote-first & async-friendly',
                                'Clear standards and feedback loops',
                                'Deep work protected',
                                'Collaboration that feels like a studio, not chaos'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="font-medium text-white text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Content (Video Call Collage) */}
                    <div className="bg-[#1A1A1A] rounded-3xl p-4 md:p-6 border border-white/10 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" className="rounded-xl aspect-[4/3] object-cover" />
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" className="rounded-xl aspect-square object-cover" />
                            </div>
                            <div className="space-y-4 pt-8">
                                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" className="rounded-xl aspect-square object-cover" />
                                <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=400" className="rounded-xl aspect-[4/3] object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnvironmentSplit;
