import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ExternalLink } from 'lucide-react';

interface CaseStudyDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    caseId?: string; // In real app, fetch data based on this
}

const CaseStudyDrawer: React.FC<CaseStudyDrawerProps> = ({ isOpen, onClose }) => {
    // Mock Data for the drawer content
    const data = {
        client: "[Fintech ScaleTup]",
        title: "From Seed to Series A: Installing the Growth Engine",
        stats: [
            { label: "MQL Increase", value: "+140%" },
            { label: "CAC Reduction", value: "-35%" },
            { label: "Payback Period", value: "< 6 Mo" }
        ]
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-white z-50 shadow-2xl overflow-y-auto"
                    >
                        <div className="p-8 md:p-12">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-12">
                                <span className="text-xs font-bold uppercase tracking-widest text-primary border border-primary/20 px-3 py-1 rounded-full">
                                    Case Study
                                </span>
                                <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                    <X size={24} className="text-bg-dark" />
                                </button>
                            </div>

                            {/* Content */}
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-bg-dark mb-6 leading-tight">
                                {data.title}
                            </h2>
                            <p className="text-xl text-bg-dark/60 mb-12 leading-relaxed">
                                How a fintech challenger utilized our "Operating System" module to restructure their marketing function before raising their Series A.
                            </p>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-3 gap-4 mb-12 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                {data.stats.map((stat, i) => (
                                    <div key={i} className="text-center">
                                        <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                                        <div className="text-xs font-medium text-bg-dark/50 uppercase tracking-wide">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Narrative Sections */}
                            <div className="space-y-12">
                                <div>
                                    <h3 className="text-xl font-bold text-bg-dark mb-4">The Challenge</h3>
                                    <p className="text-bg-dark/70 leading-relaxed">
                                        The founder was still leading marketing. Ad spend was scaling, but CAC was out of control, and there was no clear attribution model. They needed to hire a VP of Marketing but didn't know what profile to look for.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-bg-dark mb-4">The Solution</h3>
                                    <p className="text-bg-dark/70 leading-relaxed">
                                        We started with the <strong>Diagnostic Audit</strong> to map the broken funnels. We then deployed a <strong>Fractional Head of Growth</strong> to stabilize ad spend while we built the internal <strong>Operating Model</strong>.
                                    </p>
                                </div>

                                {/* Artifact Carousel Placeholder */}
                                <div>
                                    <h3 className="text-xl font-bold text-bg-dark mb-4">Key Artifacts</h3>
                                    <div className="flex gap-4 overflow-x-auto pb-4">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="min-w-[200px] aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                                                <span className="text-xs font-bold text-gray-400">Artifact Preview {i}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="mt-16 pt-8 border-t border-gray-100">
                                <h4 className="font-bold text-bg-dark mb-4">Ready to replicate these results?</h4>
                                <button className="w-full bg-bg-dark text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors">
                                    Book a Growth Audit <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CaseStudyDrawer;
