import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const FlexibilityChapter: React.FC = () => {
    return (
        <section className="bg-white pb-32">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="bg-bg-gray rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    <div className="flex-1">
                        <p className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-6">
                            Fueling Excellence
                        </p>
                        <h2 className="text-4xl md:text-6xl font-display font-medium text-bg-dark mb-8 leading-tight">
                            Empowered to work <br /> <span className="font-serif italic text-primary">your way.</span>
                        </h2>
                        <p className="text-lg text-text-muted leading-relaxed mb-10">
                            Remote-first. Outcome-driven. Deep work blocks. Clear rituals. Documented playbooks. We trust you to manage your time and output.
                        </p>

                        <div className="space-y-4 mb-10">
                            {['Remote-first & async-friendly', 'Deep work blocks', 'Weekly review rituals', 'Critique culture', 'AI-native workflows'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    <span className="font-medium text-bg-dark">{item}</span>
                                </div>
                            ))}
                        </div>

                        <a href="#life" className="text-bg-dark font-bold text-lg flex items-center gap-3 group hover:text-primary transition-colors">
                            Life at Marketing Extension <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </a>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1593642632823-8f78536788c6?auto=format&fit=crop&q=80&w=800"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FlexibilityChapter;
