import React from 'react';

const AiPrinciples: React.FC = () => {
    const principles = [
        { title: "Humans decide; machines assist", desc: "We use AI to amplify human judgment, not replace it." },
        { title: "Quality over novelty", desc: "We don't use AI just because it's new. It must be better." },
        { title: "Brand voice is non-negotiable", desc: "AI output is raw material, not the final product." },
        { title: "Confidentiality first", desc: "We protect client data and IP with rigorous enterprise standards." },
        { title: "Measurable outcomes, always", desc: "Efficiency is good. Impact is better." },
        { title: "Responsible documentation", desc: "We are transparent about when and how AI is used." }
    ];

    return (
        <section className="bg-bg-dark py-24 md:py-32" id="principles">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-4xl font-display font-medium text-white mb-16 text-center">Our AI Principles</h2>

                <div className="space-y-8">
                    {principles.map((p, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 pb-8 border-b border-white/10 group hover:border-white/30 transition-colors">
                            <div className="text-primary font-display font-bold text-2xl w-12 pt-1 opacity-50 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                                <p className="text-white/60 text-lg">{p.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AiPrinciples;
