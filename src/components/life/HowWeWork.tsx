import React from 'react';
import { VolumeX, Settings, Cpu, Handshake, Globe } from 'lucide-react';

const HowWeWork: React.FC = () => {
    return (
        <section className="bg-bg-light py-24 md:py-32">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-bg-dark mb-6">How we work</h2>
                    <p className="text-xl text-text-muted font-light">
                        Quality isn’t a personality trait here. It’s a system.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {[
                        { icon: VolumeX, title: "Clarity over noise", desc: "No jargon. Simple thinking." },
                        { icon: Settings, title: "Quality is a system", desc: "Templates, QA, & reviews." },
                        { icon: Cpu, title: "AI-native craft", desc: "Automation + prompts." },
                        { icon: Handshake, title: "Partners, not vendors", desc: "We co-own outcomes." },
                        { icon: Globe, title: "African depth", desc: "Global standards." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all group">
                            <item.icon className="text-primary mb-4" size={32} strokeWidth={1.5} />
                            <h3 className="font-bold text-lg text-bg-dark mb-2">{item.title}</h3>
                            <p className="text-text-muted text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
