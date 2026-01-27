import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, CheckCircle2, Clock } from 'lucide-react';
import { auditDeliverables } from '../../data/martech';

const AuditProduct: React.FC = () => {
    return (
        <section id="audit" className="bg-bg-dark py-24 relative overflow-hidden">
            {/* Background Details */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Text */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-white/10 shadow-lg">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            Use Case 01
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                            Know what’s broken. <br />
                            <span className="text-white/40">Fix what matters.</span>
                        </h2>
                        <p className="text-xl text-white/60 mb-8 max-w-lg font-light leading-relaxed">
                            Most stacks are a mess of disconnected tools and bad data. Our AI + MarTech Audit gives you a clear, redlined map of your infrastructure—and a 90-day plan to fix it.
                        </p>

                        <button className="bg-white text-bg-dark px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all shadow-xl hover:shadow-white/20 hover:-translate-y-0.5">
                            Book an Audit Call
                            <ArrowRight size={20} />
                        </button>
                    </div>

                    {/* Right: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        {/* Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl opacity-30 rounded-[32px] -z-10" />

                        <div className="relative backdrop-blur-xl bg-white/5 rounded-[32px] shadow-2xl border border-white/10 p-8 md:p-10 overflow-hidden">
                            {/* Inner Grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                                    <div>
                                        <h3 className="font-display font-bold text-2xl text-white mb-1">Audit Output Pack</h3>
                                        <p className="text-sm text-white/50 font-medium">Includes 6 core artifacts</p>
                                    </div>
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-primary ring-1 ring-white/20 shadow-inner">
                                        <FileText size={24} />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {auditDeliverables.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + (i * 0.1) }}
                                            className="p-4 rounded-xl bg-bg-dark/50 border border-white/5 hover:border-primary/50 hover:bg-white/5 transition-all group cursor-default"
                                        >
                                            <div className="font-bold text-white mb-1.5 flex items-center gap-2">
                                                <CheckCircle2 size={16} className="text-primary group-hover:scale-110 transition-transform" />
                                                {item.label}
                                            </div>
                                            <div className="text-xs text-white/40 leading-relaxed pl-6">{item.desc}</div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-white/60 text-sm">
                                        <Clock size={16} className="text-primary" />
                                        <span>Delivered in <span className="text-white font-bold">1-2 weeks</span></span>
                                    </div>
                                    <a href="#contact" className="text-sm font-bold text-white hover:text-primary transition-colors flex items-center gap-1">
                                        Book Call <ArrowRight size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AuditProduct;
