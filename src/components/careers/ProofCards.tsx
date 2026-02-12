import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, ShieldCheck, Target } from 'lucide-react';

const ProofCards: React.FC = () => {
    const cards = [
        {
            icon: Target,
            title: "Operating System Thinking",
            desc: "We don’t do random marketing. We build a repeatable system: strategy → process → execution → measurement."
        },
        {
            icon: Users,
            title: "Elite African Talent",
            desc: "A rigorously vetted bench of strategists, creatives, growth operators, and marketing technologists."
        },
        {
            icon: Zap,
            title: "Speed with Standards",
            desc: "Fast turnaround without sloppiness: sharp briefs, real reviews, predictable delivery."
        },
        {
            icon: ShieldCheck,
            title: "Outcomes, not output",
            desc: "Every engagement maps to a business metric—pipeline, adoption, retention, trust."
        }
    ];

    return (
        <section className="bg-bg-dark pb-32">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-3xl">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-bg-dark p-12 hover:bg-[#1A1A1A] transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-primary mb-6 group-hover:border-primary transition-colors">
                                <card.icon size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                            <p className="text-white/60 leading-relaxed text-lg">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProofCards;
