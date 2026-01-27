import React from 'react';
import { motion } from 'framer-motion';
import { buildGallery } from '../../data/martech';

const BuildGallery: React.FC = () => {
    return (
        <section id="builds" className="bg-bg-dark py-24 border-y border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        We don’t just advise. <br /> <span className="text-primary">We ship.</span>
                    </h2>
                    <p className="text-xl text-white/60">
                        Strategy decks don't collect revenue. We deploy production-grade code, dashboards, and workflows directly into your environment.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {buildGallery.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
                        >
                            {/* Placeholder UI visual */}
                            <div className="h-48 bg-white/5 border-b border-white/5 relative overflow-hidden group-hover:bg-white/10 transition-colors">
                                <div className="absolute inset-0 flex items-center justify-center text-white/10 group-hover:text-white/20 transition-colors">
                                    <item.icon size={64} />
                                </div>
                                <div className="absolute top-4 left-4 flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-white/20" />
                                    <div className="w-2 h-2 rounded-full bg-white/20" />
                                    <div className="w-2 h-2 rounded-full bg-white/20" />
                                </div>
                            </div>

                            <div className="p-8">
                                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded mb-3">
                                    {item.type}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-white/50 text-sm">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BuildGallery;
