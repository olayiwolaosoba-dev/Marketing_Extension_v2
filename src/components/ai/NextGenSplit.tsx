import React from 'react';
import { ArrowRight } from 'lucide-react';

const NextGenSplit: React.FC = () => {
    return (
        <section className="bg-bg-dark py-24 md:py-32 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                    {/* Visual Content */}
                    <div className="aspect-[4/5] rounded-[40px] overflow-hidden relative group">
                        <img
                            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent" />
                    </div>

                    {/* Text Content */}
                    <div>
                        <p className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-6">
                            Next-Gen Marketing
                        </p>
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6 leading-tight">
                            The future of marketing is systems + <span className="font-serif italic text-white/50">taste.</span>
                        </h2>
                        <p className="text-xl text-white/80 mb-8 font-light">
                            AI helps us move faster. Taste keeps the work sharp. Systems keep it repeatable.
                        </p>
                        <p className="text-white/60 mb-10 leading-relaxed">
                            We test, evaluate, and operationalize the best AI workflows—so our team can deliver exceptional work, smarter and faster.
                        </p>

                        <a href="#principles" className="text-primary font-bold text-lg flex items-center gap-2 hover:gap-4 transition-all">
                            Read our AI principles <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NextGenSplit;
