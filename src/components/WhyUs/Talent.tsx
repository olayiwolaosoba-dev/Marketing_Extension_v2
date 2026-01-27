import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, MessageSquare, Target, BookOpen, Layers } from 'lucide-react';

const Talent: React.FC = () => {
    return (
        <div className="pt-24 pb-20">
            {/* Hero Section */}
            <section className="container mx-auto px-6 max-w-7xl mb-24">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                            Strategic Talent
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-text-dark mb-8 leading-tight">
                            Senior strategists who <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                                speak your language.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-text-muted leading-relaxed max-w-2xl">
                            No juniors learning on your dime. We plug experienced operators directly into your roadmap to drive revenue from day one.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* The Problem/Solution Grid */}
            <section className="bg-bg-dark text-white py-24 rounded-[40px] mb-24 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
                                The agency model is broken. <br />
                                <span className="text-primary">We fixed it.</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                Traditional agencies isolate their team from yours. Information gets lost, context is missing, and alignment drifts. We take a different approach.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: 'Fully Embedded', desc: 'We join your Slack, Jira, and standups.' },
                                    { title: 'Context Aware', desc: 'We understand your unit economics and P&L.' },
                                    { title: 'Outcome Focused', desc: 'Compensated on growth, not hours billed.' }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                                            <p className="text-gray-500">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { icon: Users, label: 'No Middlemen', text: 'Talk directly to the experts doing the work.' },
                                { icon: Zap, label: 'High Velocity', text: 'Decisions made in minutes, not weekly syncs.' },
                                { icon: MessageSquare, label: 'Radical Candor', text: 'We tell you what you need to hear, not just what you want.' },
                                { icon: Target, label: 'Revenue First', text: 'Every action is tied to a revenue metric.' }
                            ].map((card, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
                                >
                                    <card.icon className="text-primary w-8 h-8 mb-4" />
                                    <h3 className="font-bold text-lg mb-2">{card.label}</h3>
                                    <p className="text-sm text-gray-400">{card.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display font-bold mb-4">Mastery across the stack</h2>
                    <p className="text-text-muted text-lg">We bring deep expertise in the disciplines that matter most for scale.</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { title: 'Growth Strategy', icon: Target },
                        { title: 'Performance Marketing', icon: Zap },
                        { title: 'Content Strategy', icon: BookOpen },
                        { title: 'RevOps & Data', icon: Layers },
                    ].map((skill, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-3xl bg-bg-gray hover:bg-white border border-transparent hover:border-primary/10 hover:shadow-xl transition-all duration-300 text-center group"
                        >
                            <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-primary">
                                <skill.icon size={32} />
                            </div>
                            <h3 className="font-display font-bold text-xl text-text-dark">{skill.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Talent;
