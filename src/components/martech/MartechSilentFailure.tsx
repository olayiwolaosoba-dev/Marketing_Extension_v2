import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, CheckCircle2 } from 'lucide-react';



const problemPoints = [
    "Attribution Blindness: Ads spend scale, but ROI transparency vanishes.",
    "Data Silos: CRM, Ad Platforms, and Warehouse speak different languages.",
    "Slow Velocity: Engineers are stuck fixing tags instead of shipping product.",
    "Leaking Funnels: High-intent leads drop off due to broken automations."
];

const MartechSilentFailure: React.FC = () => {
    return (
        <section className="bg-bg-dark py-24 border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Video Tile */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black aspect-video cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10 mix-blend-overlay" />
                        <img
                            src="/images/martech/video_thumb.png"
                            alt="MarTech Systems Failure"
                            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                                <Play size={32} className="text-white ml-2 fill-white" />
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-6 z-20">
                            <div className="text-white/60 text-xs font-mono uppercase tracking-widest mb-1">System Diagnostic</div>
                            <div className="text-white font-bold">Why Stacks Break</div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-6">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-red-500 font-mono text-xs uppercase tracking-widest">System Alert</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-[1.1]">
                            The Silent <br />
                            <span className="text-white/40">Revenue Leaks.</span>
                        </h2>

                        <p className="text-lg text-white/60 mb-8 leading-relaxed">
                            Most revenue inefficiency isn't a strategy problem—it's an engineering problem. When your data layer breaks silently, you lose confidence, velocity, and budget.
                        </p>

                        <div className="space-y-4">
                            {problemPoints.map((point, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                                    <span className="text-white/80 font-medium">{point}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};



export default MartechSilentFailure;
