import React from 'react';

const UpskillingSection: React.FC = () => {
    return (
        <section className="bg-bg-light py-24 md:py-32">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="flex-1 sticky top-32">
                        <p className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-6">
                            Prepare for the Future
                        </p>
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-bg-dark mb-6 leading-tight">
                            Make AI your marketing <span className="font-serif italic text-primary">superpower.</span>
                        </h2>
                        <p className="text-xl text-text-muted leading-relaxed font-light mb-10">
                            We train our teams on real workflows—prompt patterns, QA checklists, brand guardrails, and measurement discipline—so AI raises our standard, not our risk.
                        </p>

                        <div className="flex gap-4">
                            <a href="/careers" className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-colors">Join the team</a>
                            <a href="/contact" className="px-8 py-3 rounded-full font-bold text-bg-dark border border-gray-300 hover:border-bg-dark transition-colors">Work with us</a>
                        </div>
                    </div>

                    <div className="flex-1 w-full space-y-6">
                        {[
                            { title: "Prompt patterns & playbooks", desc: "Repeatable recipes for high-quality output." },
                            { title: "QA + brand guardrails", desc: "Rigorous checks to ensure safety and accuracy." },
                            { title: "Reporting narratives", desc: "Turning raw data into strategic stories." }
                        ].map((card, i) => (
                            <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
                                <h3 className="text-2xl font-bold text-bg-dark mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                                <p className="text-text-muted">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpskillingSection;
