import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 bg-bg-dark border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, s) => (
                                    <span key={s} className="text-primary text-sm">★</span>
                                ))}
                            </div>
                            <p className="text-white/80 italic mb-6">
                                "The level of strategic clarity Marketing Extension brought to our chaotic startup environment was exactly what we needed to close our Series A."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20" />
                                <div>
                                    <p className="text-white font-bold text-sm">Client Name</p>
                                    <p className="text-white/40 text-xs">CEO, Fintech Co.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
