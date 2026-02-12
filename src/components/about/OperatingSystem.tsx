import React from 'react';

const OperatingSystem: React.FC = () => {
    return (
        <section className="bg-bg-gray py-24" id="overview">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-bg-dark mb-6">
                        One marketing operating system. <br />
                        Three interconnected pillars.
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            title: "Marketing Consulting",
                            desc: "Leadership + operating model. We design the engine.",
                            color: "bg-bg-dark text-white"
                        },
                        {
                            title: "Content+",
                            desc: "Plugged-in creative and content department. We fuel the engine.",
                            color: "bg-white text-bg-dark border border-gray-200"
                        },
                        {
                            title: "MarTech Studio",
                            desc: "Tools, automation, analytics. We instrument the engine.",
                            color: "bg-white text-bg-dark border border-gray-200"
                        }
                    ].map((card, i) => (
                        <div key={i} className={`p-8 rounded-2xl ${card.color} h-full flex flex-col justify-between`}>
                            <div>
                                <h3 className="text-2xl font-bold font-display mb-4">{card.title}</h3>
                                <p className="opacity-80 leading-relaxed">{card.desc}</p>
                            </div>
                            <div className="mt-8 pt-8 border-t border-current opacity-20">
                                <span className="font-mono text-xs uppercase tracking-wider">PILLAR 0{i + 1}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Timeline */}
                <div className="bg-white p-8 rounded-2xl border border-gray-100">
                    <div className="text-xs font-bold uppercase tracking-widest text-text-muted mb-8">What it looks like in 30 days</div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-3 left-0 w-full h-0.5 bg-gray-100 z-0" />

                        {[
                            { step: "Discovery", desc: "Audit & Gap Analysis" },
                            { step: "System Design", desc: "Team & Tool Config" },
                            { step: "Team Embedded", desc: "Pods Onboarded" },
                            { step: "Live", desc: "Cadence & Dashboards" }
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 flex flex-col md:items-center md:text-center gap-4">
                                <div className="w-6 h-6 rounded-full bg-primary border-4 border-white shadow-sm flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-bg-dark">{item.step}</h4>
                                    <p className="text-xs text-text-muted">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OperatingSystem;
