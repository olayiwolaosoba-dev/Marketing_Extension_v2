import React from 'react';

const PeopleQuotes: React.FC = () => {
    return (
        <section className="bg-bg-light py-24 md:py-32">
            <div className="container mx-auto px-6 max-w-7xl">
                <h2 className="text-4xl font-display font-medium text-bg-dark mb-16 text-center">What it feels like</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { name: "Sola", role: "Senior Strategist", loc: "Lagos", quote: "I've never worked anywhere so obsessed with clarity. It forces you to be better." },
                        { name: "David", role: "Brand Designer", loc: "Nairobi", quote: "Finally, a place where design isn't just decoration. It's respected as a business tool." },
                        { name: "Sarah", role: "Marketing Ops", loc: "Remote", quote: "The systems here allow me to do deep work without endless unnecessary meetings." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm relative">
                            <span className="text-primary text-6xl font-serif absolute top-6 left-6 opacity-20">"</span>
                            <p className="text-lg text-bg-dark font-medium leading-relaxed mb-8 relative z-10">
                                {item.quote}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-bg-gray" />
                                <div>
                                    <p className="font-bold text-bg-dark">{item.name}</p>
                                    <p className="text-xs text-text-muted uppercase tracking-wider">{item.role} • {item.loc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PeopleQuotes;
