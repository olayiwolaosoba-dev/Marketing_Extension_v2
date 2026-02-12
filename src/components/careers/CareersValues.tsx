import React from 'react';
import { Type, Heart, Settings, MessageCircle, RefreshCw, Flag } from 'lucide-react';

const CareersValues: React.FC = () => {
    return (
        <section className="bg-bg-dark pb-32">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
                    {/* Sticky Title */}
                    <div className="lg:sticky lg:top-32 h-fit">
                        <p className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-6">
                            Our Values
                        </p>
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-8 leading-tight">
                            This is what makes us <br /> <span className="text-white/40">Marketing Extension.</span>
                        </h2>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { icon: Type, title: "Clarity over jargon", desc: "Say it plainly. Make it usable." },
                            { icon: Heart, title: "High standards, low ego", desc: "Care about craft. Stay human." },
                            { icon: Settings, title: "Build systems, not vibes", desc: "Make marketing repeatable." },
                            { icon: MessageCircle, title: "Be kind, be direct", desc: "Respectful feedback that helps." },
                            { icon: RefreshCw, title: "Ship → learn → ship", desc: "Momentum wins." },
                            { icon: Flag, title: "Own outcomes", desc: "We take responsibility end-to-end." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                                <item.icon className="text-primary mb-6" size={28} />
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-white/60">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareersValues;
