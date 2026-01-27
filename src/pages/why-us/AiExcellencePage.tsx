
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Shield, Check, FileText, ArrowRight, Video } from 'lucide-react';
import WhyUsHero from '../../components/why-us/WhyUsHero';
import ProofStrip from '../../components/why-us/ProofStrip';
import CaseStudyCard from '../../components/why-us/CaseStudyCard';
import ModalForm from '../../components/common/ModalForm';
import { aiData, caseStudies } from '../../data/whyUs';

// --- VISUALS ---

const AiModelVisual = () => (
    <div className="w-full h-full bg-[#0a0f1c] p-8 flex items-center justify-center relative overflow-hidden">
        {/* Layered Diagram */}
        <div className="flex flex-col gap-4 relative z-10 w-64">
            {/* Animation Dots */}
            <div className="absolute inset-0 pointer-events-none">
                {[1, 2, 3].map(i => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400 rounded-full blur-[2px]"
                        initial={{ top: '100%', left: '50%', opacity: 0 }}
                        animate={{ top: '0%', opacity: [0, 1, 0] }}
                        transition={{ duration: 3, delay: i, repeat: Infinity, ease: "linear" }}
                    />
                ))}
            </div>

            <div className="h-16 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                <span className="text-blue-200 font-bold text-sm">Agents & Decisions</span>
            </div>
            <div className="h-24 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                <span className="text-purple-200 font-bold text-sm">Workflows</span>
            </div>
            <div className="h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                <span className="text-emerald-200 font-bold text-sm">Data & Access</span>
            </div>
        </div>

        {/* Side Governance Bar */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 h-48 w-4 bg-white/5 border border-white/10 rounded-full flex flex-col items-center justify-evenly py-4">
            <Shield size={12} className="text-white/40" />
            <div className="w-1 h-full bg-white/10 rounded-full" />
            <Shield size={12} className="text-white/40" />
        </div>
    </div>
);

// --- SECTIONS ---

const ProblemSection = () => (
    <section className="py-24 bg-bg-dark">
        <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16 text-center max-w-3xl mx-auto">
                {aiData.problem.title}
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
                {aiData.problem.cards.map((card, i) => (
                    <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <Bot className="w-8 h-8 text-blue-400 mb-6" />
                        <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                        <p className="text-white/60">{card.desc}</p>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-sm md:text-base">
                    <Check size={18} />
                    {aiData.problem.response}
                </div>
            </div>
        </div>
    </section>
);

const AuditSection = () => (
    <section className="py-24 bg-black border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">AI Audit</h2>
                    <p className="text-xl text-white/60 mb-8">
                        We map your stack, your data, and your risks before we build.
                    </p>
                    <ul className="space-y-4 mb-8">
                        {aiData.audit.assessments.map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-white/80">
                                <Check className="text-primary" size={20} />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="text-sm font-bold text-primary uppercase tracking-widest">{aiData.audit.delivery}</div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <FileText size={20} /> Audit Output Pack
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {aiData.audit.artifacts.map((art, i) => (
                            <div key={i} className="p-4 bg-black/50 rounded-lg border border-white/5 text-sm text-white/70">
                                {art}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const ReadinessCheckSection = () => {
    const [step, setStep] = useState(0);
    const [score, setScore] = useState(0);

    const questions = [
        { q: "Where does your customer data live?", options: ["Spreadsheets", "CRM (HubSpot/SFDC)", "Warehouse (Snowflake)"] },
        { q: "Are teams using AI tools today?", options: ["No / Banned", "Ad-hoc (ChatGPT)", "Integrated APIs"] },
        { q: "Do you have internal engineering?", options: ["No", "Some shared resources", "Dedicated team"] },
    ];

    return (
        <section className="py-24 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
            <div className="container mx-auto px-6 max-w-3xl text-center">
                <h2 className="text-3xl font-display font-bold text-white mb-8">AI Readiness Check</h2>

                <div className="bg-bg-dark border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                    {step < questions.length ? (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="text-left"
                        >
                            <div className="text-xs font-bold text-white/40 uppercase mb-4">Question {step + 1} of {questions.length}</div>
                            <h3 className="text-2xl font-bold text-white mb-8">{questions[step].q}</h3>
                            <div className="flex flex-col gap-3">
                                {questions[step].options.map((opt, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            setScore(s => s + i);
                                            setStep(s => s + 1);
                                        }}
                                        className="p-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-primary/50 text-left transition-all"
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check size={32} />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Assessment Complete</h3>
                            <p className="text-white/60 mb-8">Based on your answers, you are in the <strong className="text-white">Emerging</strong> stage.</p>
                            <button className="bg-white text-bg-dark px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
                                Get Full Report
                            </button>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

const TrainingSection = () => (
    <section className="py-24 bg-bg-dark">
        <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16 text-center">Enablement & Training</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {aiData.training.map((track, i) => (
                    <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                        <h3 className="text-xl font-bold text-white mb-2">{track.title}</h3>
                        <p className="text-white/60 text-sm mb-6">{track.desc}</p>
                        <ul className="space-y-2">
                            {track.modules.map(mod => (
                                <li key={mod} className="text-sm text-white/80 flex items-center gap-2">
                                    <Video size={14} className="text-white/40" /> {mod}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const AgentsSection = () => (
    <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 text-center">Agent Blueprints</h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
                Pre-built agent templates we deploy to automate your busiest workflows.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiData.agents.map((agent, i) => (
                    <div key={i} className="group p-6 bg-[#0F1115] border border-white/10 rounded-xl hover:border-blue-500/50 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                                <Bot size={20} />
                            </div>
                            <span className="text-[10px] uppercase font-bold text-white/30 bg-white/5 px-2 py-1 rounded">
                                {agent.where}
                            </span>
                        </div>
                        <h4 className="font-bold text-white text-lg mb-2">{agent.title}</h4>
                        <p className="text-white/60 text-sm">{agent.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const AiExcellencePage: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-bg-dark text-white selection:bg-purple-500 selection:text-white">
            <ModalForm isOpen={modalOpen} onClose={() => setModalOpen(false)} context="AI Excellence" />

            <WhyUsHero
                {...aiData.hero}
                RightVisual={AiModelVisual}
            />

            <ProofStrip />
            <ProblemSection />
            <AuditSection />
            <ReadinessCheckSection />
            <TrainingSection />
            <AgentsSection />

            {/* Case Studies */}
            <section className="py-24 bg-bg-dark border-t border-white/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16 text-center">Recent AI Wins</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {caseStudies.filter(c => c.category.includes('AI') || c.category.includes('Automation')).map((study) => (
                            <CaseStudyCard key={study.id} {...study} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-gray-900 border-t border-white/5 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Move from experiments to operations.</h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => setModalOpen(true)}
                            className="bg-white text-bg-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all"
                        >
                            Book a call
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AiExcellencePage;
