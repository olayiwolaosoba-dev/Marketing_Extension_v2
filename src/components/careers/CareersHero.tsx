import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const CareersHero: React.FC = () => {
    return (
        <section className="bg-bg-light pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header Content */}
                <div className="max-w-5xl mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-text-muted font-bold tracking-[0.2em] text-sm uppercase mb-6"
                    >
                        Careers at Marketing Extension
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tight text-bg-dark mb-8"
                    >
                        Build the marketing <br />
                        engine that <span className="font-serif italic font-medium text-primary">actually ships.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-text-muted leading-relaxed max-w-2xl mb-10 font-light"
                    >
                        We’re an embedded marketing team—strategy, creative, and systems—built for ambitious organizations across Africa and beyond.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <a href="#open-roles" className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all flex items-center gap-2">
                            See job openings <ArrowRight size={20} />
                        </a>
                        <a href="#culture" className="px-8 py-4 rounded-full font-bold text-lg border border-gray-200 hover:border-bg-dark transition-all text-bg-dark">
                            Meet the team
                        </a>
                    </motion.div>
                </div>

                {/* Culture Video Strip + Images */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[400px] md:h-[500px]">
                    {/* Main Video Area (Placeholder) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-8 bg-black rounded-3xl overflow-hidden relative group"
                    >
                        {/* Placeholder for video */}
                        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center group-hover:bg-gray-800 transition-colors cursor-pointer">
                            <span className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                                <Play size={32} fill="white" />
                            </span>
                        </div>
                        <div className="absolute bottom-6 left-6 text-white z-10">
                            <h3 className="font-bold text-xl">Life at our Lagos HQ</h3>
                        </div>
                    </motion.div>

                    {/* Side Stack */}
                    <div className="md:col-span-4 flex flex-col gap-4 h-full">
                        {[
                            { title: "Critique & craft", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" },
                            { title: "Workshops & strategy", img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800" },
                            { title: "Shipping in the real world", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + (i * 0.1) }}
                                className="flex-1 relative rounded-2xl overflow-hidden group"
                            >
                                <img src={item.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                <div className="absolute bottom-4 left-4 text-white font-bold text-sm tracking-wide">{item.title}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareersHero;
