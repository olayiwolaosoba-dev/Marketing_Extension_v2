import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Play } from 'lucide-react';

const ConsultingHero: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] bg-bg-dark pt-32 pb-20 overflow-hidden flex items-center">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#1a1a1a] to-transparent z-0 opacity-50" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 blur-[150px] rounded-full z-0" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Copy */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 mb-8 bg-white/5 backdrop-blur-md">
                            <span className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                Operator-Grade Consulting
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.05] mb-8 tracking-tight">
                            Marketing consulting that installs a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">growth operating system.</span>
                        </h1>

                        <p className="text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
                            We don't just deliver slides. We allow you to inherit the strategy, systems, and execution muscle of a world-class marketing org.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
                            <a href="#audit" className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white hover:text-text-dark transition-all shadow-lg hover:shadow-primary/25">
                                Book a Growth Audit
                                <ArrowRight size={20} />
                            </a>
                            <a href="#proof" className="w-full sm:w-auto border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                                View Proof
                            </a>
                        </div>

                        <div className="flex gap-8 text-white/40 text-sm font-medium border-t border-white/5 pt-8">
                            {['Strategy', 'Execution', 'Systems'].map(item => (
                                <span key={item} className="flex items-center gap-2">
                                    <Check size={14} className="text-primary" /> {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Video Tile */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Decorative elements behind video */}
                        <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 translate-y-4 translate-x-4 rounded-3xl" />

                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900 aspect-video group cursor-pointer">
                            {/* Placeholder Video / Image */}
                            <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors duration-500" />
                            <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2674&ixlib=rb-4.0.3"
                                alt="Marketing OS Dashboard"
                                className="w-full h-full object-cover opacity-80 scale-100 group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Play size={32} className="text-white fill-white ml-2" />
                                </div>
                            </div>

                            {/* Video Label */}
                            <div className="absolute bottom-6 left-6 z-20">
                                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Watch the breakdown</p>
                                <h3 className="text-white font-bold text-lg">How the "Growth Engine" works</h3>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 z-30 max-w-[200px]"
                        >
                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-xs">OS</span>
                            </div>
                            <div>
                                <p className="text-bg-dark font-bold text-sm leading-tight">System Architecture</p>
                                <p className="text-bg-dark/50 text-xs">v2.4 Live</p>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default ConsultingHero;
