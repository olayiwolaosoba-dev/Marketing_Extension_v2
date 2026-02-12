import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const AiHero: React.FC = () => {
    return (
        <section className="bg-bg-light pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="max-w-4xl mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-6"
                    >
                        How We Use AI
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[0.9] tracking-tight text-bg-dark mb-8"
                    >
                        Human judgment. <br />
                        <span className="font-serif italic text-primary">Machine-level speed.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-text-muted leading-relaxed max-w-2xl mb-10 font-light"
                    >
                        AI is embedded in our marketing operating system—so we can think clearer, ship faster, and measure what matters.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <button
                            onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all flex items-center gap-2"
                        >
                            See the system <ArrowRight size={20} />
                        </button>
                        <a href="/contact" className="px-8 py-4 rounded-full font-bold text-lg text-bg-dark hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                            Talk to us
                        </a>
                    </motion.div>
                </div>

                {/* Hero Media */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="rounded-3xl overflow-hidden aspect-video md:aspect-[21/9] relative group shadow-2xl"
                >
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
                        alt="AI in Marketing Workflow"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />

                    {/* Badge */}
                    <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-white font-medium text-sm tracking-wide">
                            Powered by <span className="font-serif italic text-primary">AI</span> + Humans
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AiHero;
