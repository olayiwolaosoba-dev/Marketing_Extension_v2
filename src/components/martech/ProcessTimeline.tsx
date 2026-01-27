import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { processTimeline } from '../../data/martech';
import { CheckCircle2, FileText, User, ArrowRight, Activity, ChevronDown, ChevronUp } from 'lucide-react';

const ProcessTimeline: React.FC = () => {
    const [activeStepId, setActiveStepId] = useState(1);
    const activeStep = processTimeline.find(s => s.id === activeStepId) || processTimeline[0];

    return (
        <section id="process" className="bg-bg-dark py-24 relative border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">How we deliver (without chaos)</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                            A productized build system.
                        </h2>
                        <p className="text-white/60 text-lg">
                            Audit → Blueprint → Ship → Optimize. No endless consulting loops.
                        </p>
                    </div>

                    {/* Top CTAs */}
                    <div className="flex gap-4">
                        <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-2 rounded-full text-sm font-bold transition-all">
                            See deliverables
                        </button>
                    </div>
                </div>

                {/* Desktop: Horizontal Stepper */}
                <div className="hidden lg:block mb-12">
                    <div className="flex items-center justify-between relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -z-10" />

                        {processTimeline.map((step) => {
                            const isActive = activeStepId === step.id;
                            const isPast = activeStepId > step.id;

                            return (
                                <button
                                    key={step.id}
                                    onClick={() => setActiveStepId(step.id)}
                                    className="group relative flex flex-col items-center gap-4 bg-bg-dark px-4 z-10 focus:outline-none"
                                >
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isActive ? 'bg-primary border-primary text-white scale-110 shadow-[0_0_20px_rgba(255,107,61,0.4)]' : isPast ? 'bg-primary/20 border-primary text-primary' : 'bg-bg-dark border-white/20 text-white/40 group-hover:border-white/50'}`}>
                                        <span className="font-bold font-mono">{step.id}</span>
                                    </div>
                                    <div className="text-center">
                                        <div className={`font-bold transition-colors ${isActive ? 'text-white' : 'text-white/50'}`}>{step.title}</div>
                                        <div className="text-xs text-white/30 font-mono uppercase tracking-wider">{step.subtitle}</div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Main Content Stage (Desktop + Tablet) */}
                <div className="hidden lg:grid grid-cols-12 gap-12 items-start h-[500px]">

                    {/* Left: Detail Panel */}
                    <div className="col-span-12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStepId}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-12 gap-8"
                            >
                                {/* LEFT: Description & Details */}
                                <div className="col-span-5 space-y-8">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-white/40 text-xs font-mono mb-4 border border-white/5">
                                            <Activity size={12} className="text-primary" />
                                            <span>PHASE 0{activeStep.id}: {activeStep.title.toUpperCase()}</span>
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{activeStep.description}</h3>
                                        <div className="flex flex-col gap-3">
                                            {activeStep.details?.map((detail, i) => (
                                                <div key={i} className="flex items-center gap-3 text-white/70">
                                                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                                                    <span>{detail}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                                        <div>
                                            <div className="text-xs text-white/30 uppercase tracking-widest mb-1">Duration</div>
                                            <div className="text-white font-bold">{activeStep.duration}</div>
                                        </div>
                                        <div className="w-px h-8 bg-white/10" />
                                        <div>
                                            <div className="text-xs text-white/30 uppercase tracking-widest mb-1">Owner</div>
                                            <div className="text-white font-bold">{activeStep.role}</div>
                                        </div>
                                    </div>

                                    <button className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white hover:text-bg-dark transition-all">
                                        Start this phase <ArrowRight size={18} />
                                    </button>
                                </div>

                                {/* RIGHT: Artifact Preview & Signal Strip */}
                                <div className="col-span-7 pl-12 border-l border-white/5">
                                    <div className="bg-white/5 rounded-2xl p-8 border border-white/10 relative overflow-hidden h-full flex flex-col justify-between group cursor-default hover:bg-white-[0.07] transition-all">

                                        {/* Deliverables Chips */}
                                        <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                                            {activeStep.deliverables?.map((d, i) => (
                                                <span key={i} className="px-3 py-1.5 rounded-md bg-black/40 border border-white/10 text-xs font-mono text-white/60">
                                                    {d}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Output Hero */}
                                        <div className="mb-auto relative z-10">
                                            <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Phase Output</div>
                                            <div className="text-3xl font-display font-bold text-white">{activeStep.output}</div>
                                        </div>

                                        {/* Fake Artifact Preview (Abstract) */}
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-all duration-700" />

                                        {/* Signal Strip (Bottom) */}
                                        <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/30 relative z-10">
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                                {activeStep.signal || "System Active"}
                                            </div>
                                            <div>ID: {activeStep.output.replace(/\s/g, '_').toUpperCase()}</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Mobile: Vertical Accordion */}
                <div className="lg:hidden space-y-4">
                    {processTimeline.map((step) => {
                        const isActive = activeStepId === step.id;
                        return (
                            <div
                                key={step.id}
                                className={`rounded-xl border transition-all duration-300 ${isActive ? 'bg-white/5 border-primary' : 'bg-transparent border-white/10'}`}
                            >
                                <button
                                    onClick={() => setActiveStepId(isActive ? 0 : step.id)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className={`font-mono text-sm ${isActive ? 'text-primary' : 'text-white/40'}`}>0{step.id}</span>
                                        <span className={`font-bold text-lg ${isActive ? 'text-white' : 'text-white/70'}`}>{step.title}</span>
                                    </div>
                                    {isActive ? <ChevronUp className="text-white/40" /> : <ChevronDown className="text-white/40" />}
                                </button>

                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-0 border-t border-white/5 mt-2">
                                                <p className="text-white/70 mb-4 pt-4">{step.description}</p>

                                                <div className="space-y-2 mb-6">
                                                    {step.details?.slice(0, 2).map((detail, i) => (
                                                        <div key={i} className="flex items-center gap-3 text-sm text-white/50">
                                                            <div className="w-1 h-1 rounded-full bg-primary" />
                                                            <span>{detail}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                                                    <div className="text-xs text-white/30 uppercase mb-1">Output</div>
                                                    <div className="font-bold text-white">{step.output}</div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default ProcessTimeline;
