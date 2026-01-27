import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { processSteps } from '../../data/consulting';
import { Check, ChevronRight } from 'lucide-react';

const OperatingSystemSteps: React.FC = () => {
    const [activeStep, setActiveStep] = useState(processSteps[0].id);

    return (
        <section className="bg-bg-dark py-24 text-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        From Chaos to <span className="text-primary">Cadence.</span>
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl">
                        A structured 4-stage sprint to install your marketing operating system. No guesswork, just execution.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left: Sticky Navigation */}
                    <div className="lg:w-1/3">
                        <div className="space-y-4">
                            {processSteps.map((step, index) => (
                                <button
                                    key={step.id}
                                    onClick={() => setActiveStep(step.id)}
                                    className={`w-full text-left p-6 rounded-xl transition-all duration-300 border ${activeStep === step.id
                                            ? 'bg-white/10 border-primary border-l-4 border-l-primary'
                                            : 'bg-transparent border-white/5 hover:bg-white/5 border-l-4 border-l-transparent'
                                        }`}
                                >
                                    <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">
                                        Stage 0{index + 1}
                                    </span>
                                    <div className="flex items-center justify-between">
                                        <h3 className={`text-xl font-bold ${activeStep === step.id ? 'text-white' : 'text-white/60'}`}>
                                            {step.title}
                                        </h3>
                                        {activeStep === step.id && <ChevronRight className="text-primary" size={20} />}
                                    </div>
                                    <p className={`text-sm mt-2 transition-all ${activeStep === step.id ? 'text-white/80' : 'text-white/40 h-0 overflow-hidden opacity-0'}`}>
                                        {step.subtitle}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Dynamic Content */}
                    <div className="lg:w-2/3 min-h-[500px] relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white/5 border border-white/10 rounded-3xl p-10 h-full backdrop-blur-sm"
                            >
                                {processSteps.find(s => s.id === activeStep) && (
                                    <>
                                        <div className="flex items-center gap-4 mb-8">
                                            <span className="bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-bold border border-primary/20">
                                                {processSteps.find(s => s.id === activeStep)?.duration}
                                            </span>
                                            <span className="text-white/40 text-sm font-medium">Est. Completion Time</span>
                                        </div>

                                        <h3 className="text-3xl font-display font-bold mb-6">
                                            {processSteps.find(s => s.id === activeStep)?.description}
                                        </h3>

                                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                                            <div>
                                                <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-6 pb-2 border-b border-white/10">Inputs</h4>
                                                <ul className="space-y-4">
                                                    {processSteps.find(s => s.id === activeStep)?.inputs.map((item, i) => (
                                                        <li key={i} className="text-white/70 text-sm flex items-start gap-3">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-6 pb-2 border-b border-white/10">Key Activities</h4>
                                                <ul className="space-y-4">
                                                    {processSteps.find(s => s.id === activeStep)?.activities.map((item, i) => (
                                                        <li key={i} className="text-white/70 text-sm flex items-start gap-3">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-6 pb-2 border-b border-white/10">Deliverables</h4>
                                                <ul className="space-y-4">
                                                    {processSteps.find(s => s.id === activeStep)?.outputs.map((item, i) => (
                                                        <li key={i} className="text-white text-sm font-medium flex items-start gap-3">
                                                            <Check size={16} className="text-primary mt-0.5" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OperatingSystemSteps;
