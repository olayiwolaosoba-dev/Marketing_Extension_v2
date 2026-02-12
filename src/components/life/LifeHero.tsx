import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const LifeHero: React.FC = () => {
    return (
        <section className="bg-bg-light pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="max-w-4xl mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-6"
                    >
                        Life at Marketing Extension
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[0.9] tracking-tight text-bg-dark mb-8"
                    >
                        Join the <span className="font-serif italic text-primary">craft of modern marketing</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-text-muted leading-relaxed max-w-2xl mb-10 font-light"
                    >
                        Africa-rooted. Globally credible. Built for people who care about clarity and excellence.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <a href="/careers" className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all flex items-center gap-2">
                            View open roles <ArrowRight size={20} />
                        </a>
                        <a href="#talent-network" className="px-8 py-4 rounded-full font-bold text-lg text-bg-dark hover:bg-gray-100 transition-colors">
                            Join our talent network
                        </a>
                    </motion.div>
                </div>

                {/* Hero Media */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="rounded-3xl overflow-hidden aspect-video md:aspect-[21/9] relative group"
                >
                    <img
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2000"
                        alt="Team collaborating"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                </motion.div>

                {/* Trust Strip */}
                <div className="mt-12 flex flex-wrap gap-8 items-center justify-center md:justify-start opacity-60 grayscale mix-blend-multiply">
                    <p className="font-bold text-xs uppercase tracking-widest text-text-muted">Built with founders, startups, SMEs, and teams that need marketing to perform.</p>
                </div>
            </div>
        </section>
    );
};

export default LifeHero;
