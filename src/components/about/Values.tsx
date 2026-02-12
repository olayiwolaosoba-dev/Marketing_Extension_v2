import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Hand, Scale, Network, MessageSquare } from 'lucide-react';

const Values: React.FC = () => {
    const values = [
        {
            icon: Eye,
            title: "Clarity over complexity",
            desc: "We kill jargon. We simplify strategy. If it can’t be explained simply, it’s not ready."
        },
        {
            icon: Hand,
            title: "Hands-on leadership",
            desc: "Senior leaders don’t just advise—they build, write, and configure."
        },
        {
            icon: Scale,
            title: "Evidence-led decisions",
            desc: "We trust data and qualitative insight over hierarchy and opinion."
        },
        {
            icon: Network,
            title: "Respect for context",
            desc: "We don’t copy-paste playbooks. We adapt to your market, stage, and reality."
        },
        {
            icon: MessageSquare,
            title: "Radical openness",
            desc: "Shared dashboards. Shared docs. No black boxes. You see what we see."
        }
    ];

    return (
        <section className="bg-white py-24 md:py-32" id="values">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-bg-dark mb-4">
                        Our principles <span className="font-serif italic text-primary">keep us honest.</span>
                    </h2>
                    <p className="text-text-muted text-lg">How we work inside your business.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((val, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-bg-gray p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all group"
                        >
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-bg-dark mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <val.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-bg-dark mb-3">{val.title}</h3>
                            <p className="text-text-muted leading-relaxed">{val.desc}</p>
                        </motion.div>
                    ))}

                    {/* Filler content card or summary */}
                    <div className="bg-bg-dark text-white p-8 rounded-2xl flex flex-col justify-center items-center text-center">
                        <p className="font-display font-bold text-2xl mb-4">Built on trust.</p>
                        <p className="text-white/60 text-sm">Everything we do is designed to build long-term systems, not short-term noise.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Values;
