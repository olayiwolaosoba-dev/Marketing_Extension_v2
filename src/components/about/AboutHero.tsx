import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AboutHero: React.FC = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-bg-dark text-white">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="max-w-4xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-6"
                    >
                        About Marketing Extension
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tight mb-8"
                    >
                        The embedded <br />
                        marketing engine <br />
                        <span className="font-serif italic font-medium text-white/80">behind ambitious teams.</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col md:flex-row gap-8 md:items-end max-w-3xl"
                    >
                        <div className="flex-1">
                            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light mb-6">
                                Marketing Extension plugs into your business as an embedded marketing department—uniting strategy, content, and marketing technology into one accountable team of elite African talent.
                            </p>
                            <p className="text-lg font-medium text-white">
                                We build marketing engines, not campaigns.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap items-center gap-4 mt-10"
                    >
                        <a
                            href="#how-we-work"
                            className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all flex items-center gap-2"
                        >
                            Book a demo <ArrowRight size={20} />
                        </a>
                        <a
                            href="#how-we-work"
                            className="px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/10 transition-all text-white"
                        >
                            See how we work
                        </a>
                    </motion.div>
                </div>

                {/* Right side credibility line (absolute on large screens closer to bottom right or just aligned relative) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 md:absolute md:bottom-32 md:right-6 max-w-xs text-right hidden md:block"
                >
                    <div className="h-px w-12 bg-primary ml-auto mb-4" />
                    <p className="text-sm font-bold uppercase tracking-widest text-white/60">
                        Africa-grounded. <br />Global standard. <br />Built to ship.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHero;
