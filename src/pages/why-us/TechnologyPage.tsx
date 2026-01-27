
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Network, Layout, Activity, ChevronDown, CheckCircle } from 'lucide-react';
import WhyUsHero from '../../components/why-us/WhyUsHero';
import ProofStrip from '../../components/why-us/ProofStrip';
import FeatureTile from '../../components/why-us/FeatureTile';
import CaseStudyCard from '../../components/why-us/CaseStudyCard';
import ModalForm from '../../components/common/ModalForm';
import { techData, caseStudies } from '../../data/whyUs';

// --- VISUALS ---

const SystemMapVisual = () => (
    <div className="w-full h-full bg-[#0a0a0a] p-8 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Nodes */}
        <div className="relative z-10 grid grid-cols-2 gap-8 w-64">
            <motion.div
                className="w-16 h-16 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center"
                animate={{ boxShadow: ['0 0 0px rgba(0,0,0,0)', '0 0 20px rgba(255,107,61,0.3)', '0 0 0px rgba(0,0,0,0)'] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                <Database size={24} className="text-white/60" />
            </motion.div>
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                <Network size={24} className="text-white/60" />
            </div>
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                <Activity size={24} className="text-white/60" />
            </div>
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                <Layout size={24} className="text-white/60" />
            </div>

            {/* Connectors */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                <path d="M40 40 L160 40" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                <path d="M40 40 L40 160" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                <path d="M160 160 L40 160" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                <motion.circle r="3" fill="#FF6B3D">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M40 40 L160 40 L160 160 L40 160 L40 40" />
                </motion.circle>
            </svg>
        </div>
    </div>
);

// --- SECTIONS ---

const ProblemSection = () => (
    <section className="py-24 bg-bg-dark">
        <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16 text-center max-w-3xl mx-auto">
                {techData.problem.title}
            </h2>
            <div className="grid md:grid-cols-4 gap-6 mb-16">
                {techData.problem.cards.map((card, i) => (
                    <FeatureTile key={i} index={i} title={card.title} description={card.desc} />
                ))}
            </div>
        </div>
    </section>
);

const ArchitectureSection = () => {
    const [activeLayer, setActiveLayer] = useState<number | null>(0);

    return (
        <section className="py-24 bg-black border-y border-white/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">Reference Architecture</h2>
                        <p className="text-white/60 mb-12">
                            A standardized, scalable stack blueprint we deploy for every client.
                        </p>

                        <div className="space-y-4">
                            {techData.architecture.map((layer, i) => (
                                <div key={i} className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
                                    <button
                                        onClick={() => setActiveLayer(activeLayer === i ? null : i)}
                                        className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors"
                                    >
                                        <span className="font-bold text-white text-lg">{layer.layer}</span>
                                        <ChevronDown className={`text-white/40 transition-transform ${activeLayer === i ? 'rotate-180' : ''}`} />
                                    </button>

                                    {activeLayer === i && (
                                        <div className="px-6 pb-6 pt-0 bg-black/20">
                                            <div className="h-px w-full bg-white/5 mb-4" />
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <div className="text-xs text-white/40 uppercase mb-1">Components</div>
                                                    <div className="text-sm text-white/80">{layer.desc}</div>
                                                </div>
                                                <div>
                                                    <div className="text-xs text-primary uppercase mb-1">The Fix</div>
                                                    <div className="text-sm text-white/80">{layer.fix}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Placeholder */}
                    <div className="hidden lg:flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 p-12">
                        <div className="text-center">
                            <Database size={64} className="text-white/20 mx-auto mb-4" />
                            <div className="text-white/40 font-mono text-sm">Architecture Diagram</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ManagedSection = () => (
    <section className="py-24 bg-bg-dark">
        <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16 text-center">{techData.managed.title}</h2>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-white mb-6">Operate Mode</h3>
                    <ul className="space-y-4">
                        {techData.managed.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-white">
                                <CheckCircle size={20} className="text-green-400" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-[#0f1115] border border-white/10 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-white mb-6">Continuous Monitoring</h3>
                    <div className="grid grid-cols-1 gap-2">
                        {techData.managed.monitors.map((mon, i) => (
                            <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded border border-white/5">
                                <span className="text-white/80 text-sm">{mon}</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[10px] text-green-500 font-bold">LIVE</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const TechnologyPage: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-bg-dark text-white selection:bg-primary selection:text-white">
            <ModalForm isOpen={modalOpen} onClose={() => setModalOpen(false)} context="Technology Page" />

            <WhyUsHero
                {...techData.hero}
                RightVisual={SystemMapVisual}
            />

            <ProofStrip />
            <ProblemSection />
            <ArchitectureSection />
            <ManagedSection />

            {/* Case Studies */}
            <section className="py-24 bg-bg-dark border-t border-white/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16 text-center">Built & Shipped</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {caseStudies.map((study) => (
                            <CaseStudyCard key={study.id} {...study} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-gradient-to-t from-black to-bg-dark border-t border-white/5 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Ready to stabilize your stack?</h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => setModalOpen(true)}
                            className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-bg-dark transition-all"
                        >
                            Request Audit
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TechnologyPage;
