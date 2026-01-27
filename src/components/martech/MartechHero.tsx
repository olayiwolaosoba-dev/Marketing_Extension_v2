import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, AlertTriangle, Database, Zap, Brain, Activity, ArrowUpRight } from 'lucide-react';
import GrowthStackMap from './GrowthStackMap';

const MartechHero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -50]);

    return (
        <section ref={containerRef} className="relative min-h-[95vh] bg-bg-dark pt-32 pb-20 overflow-hidden flex items-center">
            {/* Background Grid - Darker, finer */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/0 via-bg-dark/50 to-bg-dark" />

            {/* Premium Gradient Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none opacity-50" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none opacity-30" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Copy */}
                    <motion.div
                        style={{ y: y1 }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 mb-8 bg-white/5 backdrop-blur-md">
                            <span className="text-primary font-bold text-[11px] uppercase tracking-[0.2em] flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                MarTech Studio
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.05] mb-8 tracking-[-0.02em]">
                            Engineering for <br />
                            marketing teams <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">that ship.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-lg leading-relaxed font-light">
                            We design and build marketing websites, dashboards, automations, and internal web products—then operationalize data + AI so your stack performs reliably in production.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                            <button onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 hover:bg-white hover:text-text-dark transition-all shadow-[0_0_20px_rgba(255,107,61,0.3)] hover:shadow-[0_0_30px_rgba(255,107,61,0.5)]">
                                Request an Audit
                                <ArrowRight size={18} />
                            </button>
                            <button onClick={() => document.getElementById('builds')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto border border-white/10 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/5 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
                                See what we build
                            </button>
                        </div>

                        <a href="#scan" className="text-white/40 text-sm hover:text-primary transition-colors flex items-center gap-1 group">
                            Take the Free Stack + AI Readiness Scan
                            <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Right: Growth Stack Map & Status Cards */}
                    <motion.div
                        style={{ y: y2 }}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        {/* Map Panel Title */}
                        <div className="absolute -top-10 right-0 text-white/20 font-mono text-xs tracking-widest uppercase">
                            Marketing Engine Map v2.0
                        </div>

                        <div className="relative z-10 glass rounded-2xl p-2 border border-white/10 shadow-2xl">
                            {/* The Map */}
                            <div className="bg-bg-dark/50 rounded-xl overflow-hidden border border-white/5 relative">
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-bg-dark/0 to-bg-dark/0" />
                                <GrowthStackMap />
                            </div>

                            {/* Status Cards Grid */}
                            <div className="grid grid-cols-2 gap-3 mt-3">
                                <StatusCard
                                    icon={Database}
                                    label="Data Layer"
                                    value="Connected"
                                    status="Drift"
                                    statusColor="text-amber-500"
                                    delay={0.6}
                                />
                                <StatusCard
                                    icon={Zap}
                                    label="Automation"
                                    value="Bottleneck"
                                    status="Unknown"
                                    statusColor="text-red-500"
                                    delay={0.7}
                                />
                                <StatusCard
                                    icon={Brain}
                                    label="AI Readiness"
                                    value="62%"
                                    status="In Progress"
                                    statusColor="text-blue-400"
                                    delay={0.8}
                                />
                                <StatusCard
                                    icon={Activity}
                                    label="Velocity"
                                    value="1.2 / wk"
                                    status="Low"
                                    statusColor="text-white/40"
                                    delay={0.9}
                                />
                            </div>
                        </div>

                        {/* Decorative background behind right column */}
                        <div className="absolute -inset-20 bg-gradient-to-tr from-primary/10 via-transparent to-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

const StatusCard = ({ icon: Icon, label, value, status, statusColor, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.8 }}
        className="bg-white/5 border border-white/5 rounded-lg p-3 hover:bg-white/10 transition-all group flex items-start gap-3"
    >
        <div className="p-2 rounded-md bg-white/5 text-white/40 group-hover:text-primary transition-colors">
            <Icon size={16} />
        </div>
        <div>
            <div className="text-white/30 text-[9px] font-bold uppercase tracking-wider mb-0.5">{label}</div>
            <div className="flex items-center gap-2">
                <span className="text-white font-mono font-bold text-xs">{value}</span>
                {status && (
                    <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full bg-white/5 ${statusColor}`}>
                        {status}
                    </span>
                )}
            </div>
        </div>
    </motion.div>
);

export default MartechHero;
