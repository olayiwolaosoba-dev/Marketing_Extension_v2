import React from 'react';

const CultureSignals: React.FC = () => {
    return (
        <section className="bg-white pb-32">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid md:grid-cols-2 gap-8 md:gap-px bg-gray-100 border border-gray-100 rounded-3xl overflow-hidden">
                    {[
                        { value: "48h", label: "Feedback SLA", desc: "On all critical work. No chasing required." },
                        { value: "Weekly", label: "Craft Reviews", desc: "Critique sessions to elevate output quality." },
                        { value: "Monthly", label: "Learning Studio", desc: "Internal workshops on new tech & strategy." },
                        { value: "One", label: "Definition of Ready", desc: "'Client-ready' means actually ready." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-12 hover:bg-bg-gray transition-colors">
                            <div className="text-5xl md:text-6xl font-display font-medium text-primary mb-4">{item.value}</div>
                            <h3 className="text-xl font-bold text-bg-dark mb-2">{item.label}</h3>
                            <p className="text-text-muted">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CultureSignals;
