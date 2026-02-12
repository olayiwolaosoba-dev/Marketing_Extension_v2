import React from 'react';
import { Layers, PenTool, Database } from 'lucide-react';

const InnovationChapter: React.FC = () => {
    return (
        <section className="bg-white py-24 md:py-32">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="max-w-4xl mb-20">
                    <p className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-6">
                        Built on Innovation
                    </p>
                    <h2 className="text-4xl md:text-6xl font-display font-medium text-bg-dark mb-8 leading-tight">
                        Pioneering the future of <br /> <span className="font-serif italic text-primary">marketing operations.</span>
                    </h2>
                    <p className="text-xl text-text-muted leading-relaxed max-w-2xl">
                        We blend human judgment with machine-level discipline—playbooks, automation, and analytics—so marketing becomes repeatable.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Consulting-led clarity", icon: Layers },
                        { title: "Content that converts", icon: PenTool },
                        { title: "MarTech that scales", icon: Database }
                    ].map((item, i) => (
                        <div key={i} className="bg-bg-gray p-10 rounded-3xl border border-gray-100 hover:border-primary/20 transition-all group">
                            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-bg-dark mb-6 group-hover:scale-110 transition-transform text-primary">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-bg-dark">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InnovationChapter;
