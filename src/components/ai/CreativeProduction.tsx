import React from 'react';
import { ArrowRight } from 'lucide-react';

const CreativeProduction: React.FC = () => {
    const capabilities = [
        "Strategic research & synthesis",
        "Positioning + messaging systems",
        "Content engines (social + long-form)",
        "Landing pages + conversion copy",
        "Design systems + brand kits",
        "Motion + micro-video",
        "Sales enablement",
        "Automation + lifecycle flows",
        "Analytics + reporting narratives",
        "Experimentation (A/B testing)",
        "Localization & transcreation",
        "AI enablement for client teams"
    ];

    return (
        <section className="bg-bg-light pb-32" id="capabilities">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <p className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4">
                        Let's Talk AI
                    </p>
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-bg-dark mb-6">
                        <span className="font-serif italic text-primary">AI-powered</span> creative production
                    </h2>
                    <p className="text-xl text-text-muted font-light">
                        From image-editing to video creation, AI is most useful when it’s not a bolt-on feature, but a foundational part of how we solve real marketing challenges.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {capabilities.map((cap, i) => (
                        <div key={i} className="aspect-square bg-white rounded-3xl p-8 flex flex-col justify-end border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all group cursor-pointer relative overflow-hidden">
                            <div className="absolute inset-0 bg-bg-gray -z-10" />
                            {/* Placeholder pattern/image */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <h3 className="font-bold text-xl text-bg-dark mb-2 z-10">{cap}</h3>
                            <p className="text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 flex items-center gap-2">
                                See examples <ArrowRight size={14} />
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CreativeProduction;
