import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Brain, Sparkles, Zap, Cpu, Fingerprint } from 'lucide-react';

const AiHuman: React.FC = () => {
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
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
                            AI + Human
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-text-dark mb-8 leading-tight">
                            The speed of silicon. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                The soul of carbon.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-text-muted leading-relaxed max-w-2xl">
                            We don't replace humans with AI. We arm them with it. The result? 10x output without sacrificing the creative spark.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="container mx-auto px-6 max-w-7xl mb-32">
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-[40px] bg-bg-gray border border-gray-100"
                    >
                        <Bot size={48} className="text-blue-600 mb-6" />
                        <h3 className="text-3xl font-display font-bold mb-4">What AI does best</h3>
                        <ul className="space-y-4">
                            {[
                                'Analyzing millions of data points',
                                'Pattern recognition at scale',
                                'Hyper-personalized variations',
                                '24/7 always-on optimization'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                    <span className="text-lg text-text-muted">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-[40px] bg-white border border-gray-100 shadow-xl"
                    >
                        <Brain size={48} className="text-purple-600 mb-6" />
                        <h3 className="text-3xl font-display font-bold mb-4">What Humans do best</h3>
                        <ul className="space-y-4">
                            {[
                                'Deep empathy and emotional resonance',
                                'Strategic lateral thinking',
                                'Cultural nuance and taste',
                                'Defining constraints and goals'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                                    <span className="text-lg text-text-muted">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* The Workflow */}
            <section className="bg-text-dark text-white py-24 rounded-[40px] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold mb-4">The Augmented Workflow</h2>
                        <p className="text-gray-400">How we turn "or" into "and".</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
                        {[
                            {
                                icon: Sparkles,
                                step: '01. Inspiration',
                                title: 'AI-Powered Research',
                                desc: 'We use LLMs to digest competitor reports, reviews, and market data in seconds, not weeks.'
                            },
                            {
                                icon: Fingerprint,
                                step: '02. Creation',
                                title: 'Human Direction',
                                desc: 'Our strategists define the angle, tone, and "hook" that will resonate emotionally.'
                            },
                            {
                                icon: Cpu,
                                step: '03. Scale',
                                title: 'Algorithmic Distribution',
                                desc: 'We use generative tools to version assets for every channel, format, and audience segment.'
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="relative"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/10 mx-auto mb-6 flex items-center justify-center backdrop-blur-sm border border-white/10">
                                    <item.icon className="text-white" size={32} />
                                </div>
                                <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{item.step}</div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>

                                {i < 2 && (
                                    <div className="hidden md:block absolute top-12 left-2/3 w-2/3 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AiHuman;
