
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, AlertCircle, CheckCircle, ChevronDown, Plus, Layout, Zap, Award, BarChart } from 'lucide-react';
import WhyUsHero from '../../components/why-us/WhyUsHero';
import ProofStrip from '../../components/why-us/ProofStrip';
import CaseStudyCard from '../../components/why-us/CaseStudyCard';
import FeatureTile from '../../components/why-us/FeatureTile';
import ModalForm from '../../components/common/ModalForm';
import { talentData, caseStudies } from '../../data/whyUs';

// --- VISUALS ---

const PodBuilderVisual = () => {
    return (
        <div className="w-full h-full bg-gradient-to-br from-bg-dark to-[#1a1a1a] p-8 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

            {/* Center Core */}
            <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,107,61,0.4)] z-10 relative"
            >
                <Zap className="text-white w-10 h-10 fill-white" />
            </motion.div>

            {/* Orbiting Roles */}
            <div className="absolute inset-0 flex items-center justify-center">
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-64 h-64 rounded-full border border-white/5"
                        initial={{ rotate: deg }}
                        animate={{ rotate: deg + 360 }}
                        transition={{ duration: 40 + i * 5, repeat: Infinity, ease: "linear" }}
                    >
                        <motion.div
                            className="absolute -top-4 left-1/2 -translate-x-1/2 p-3 bg-bg-card border border-white/10 rounded-xl shadow-lg backdrop-blur-md flex items-center gap-2"
                            initial={{ rotate: -deg }}
                            animate={{ rotate: -(deg + 360) }}
                            transition={{ duration: 40 + i * 5, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-xs font-bold text-white/80">
                                {["Strategist", "Growth", "Content", "Ops", "Design", "Data"][i]}
                            </span>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            <div className="absolute bottom-8 left-8 right-8 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                <div className="flex justify-between items-center text-xs text-white/60 mb-2">
                    <span>Pod Efficiency</span>
                    <span className="text-primary font-bold">98%</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "98%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-primary"
                    />
                </div>
            </div>
        </div>
    );
};

// --- SECTIONS ---

const ProblemSection = () => (
    <section className="py-24 bg-bg-dark">
        <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16 text-center max-w-3xl mx-auto">
                {talentData.problem.title}
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
                {talentData.problem.cards.map((card, i) => (
                    <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 border-l-4 border-l-red-500/50 hover:bg-white/10 transition-colors">
                        <AlertCircle className="w-8 h-8 text-red-400 mb-6" />
                        <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                        <p className="text-white/60">{card.desc}</p>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm md:text-base">
                    <CheckCircle size={18} />
                    {talentData.problem.response}
                </div>
            </div>
        </div>
    </section>
);

const TalentModelSection = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">The Model</div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            {talentData.model.title}
                        </h2>
                        <p className="text-xl text-white/60 mb-12">
                            {talentData.model.description}
                        </p>

                        <div className="space-y-4">
                            {talentData.model.steps.map((step, i) => (
                                <div
                                    key={i}
                                    onClick={() => setActiveStep(i)}
                                    className={`p-6 rounded-xl border cursor-pointer transition-all ${activeStep === i ? 'bg-white/10 border-primary/50' : 'bg-transparent border-white/10 hover:border-white/30'}`}
                                >
                                    <h3 className={`text-lg font-bold mb-1 ${activeStep === i ? 'text-white' : 'text-white/60'}`}>{step.title}</h3>
                                    <p className={`text-sm ${activeStep === i ? 'text-white/80' : 'text-white/40'}`}>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Side */}
                    <div className="relative">
                        <div className="aspect-[4/5] bg-bg-card rounded-2xl border border-white/10 p-8 flex flex-col gap-4 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-500" />

                            {/* Dynamic Artifacts based on step */}
                            <div className="grid grid-cols-2 gap-4 h-full">
                                {talentData.model.artifacts.map((artifact, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between hover:bg-white/10 transition-colors"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-white/10 mb-4" />
                                        <div className="h-2 w-16 bg-white/20 rounded-full mb-2" />
                                        <div className="text-sm font-bold text-white">{artifact}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const VettingSection = () => (
    <section className="py-24 bg-bg-dark border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-16">
                {talentData.vetting.title}
            </h2>

            <div className="relative">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden md:block" />

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {talentData.vetting.steps.map((step, i) => (
                        <div key={i} className="relative group">
                            <div className="w-12 h-12 mx-auto bg-bg-dark border-2 border-white/10 rounded-full flex items-center justify-center text-white/40 font-bold mb-6 relative z-10 group-hover:border-primary group-hover:text-primary transition-colors">
                                {i + 1}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-sm text-white/50">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const MeetTalentSection = () => (
    <section className="py-24 bg-black">
        <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16 text-center">Meet the Talent</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {talentData.roles.map((role, i) => (
                    <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10" />
                            <div className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded">
                                TOP RATED
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{role.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {role.tags.map(tag => (
                                <span key={tag} className="text-xs text-white/60 bg-white/5 px-2 py-1 rounded">{tag}</span>
                            ))}
                        </div>
                        <div className="pt-4 border-t border-white/5">
                            <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Typical Win</div>
                            <div className="text-white font-medium text-sm">{role.wins}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const OperatingRhythmSection = () => (
    <section className="py-24 bg-bg-dark">
        <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">Operating Rhythm</h2>
                    <div className="space-y-8">
                        {talentData.timeline.map((item, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="flex flex-col items-center">
                                    <div className="w-3 h-3 rounded-full bg-primary mt-2" />
                                    {i !== talentData.timeline.length - 1 && (
                                        <div className="w-0.5 flex-1 bg-white/10 my-2" />
                                    )}
                                </div>
                                <div>
                                    <div className="text-primary font-mono text-sm mb-1">{item.week}</div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-white/60">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-fit">
                    <h3 className="text-xl font-bold text-white mb-6">Ownership Split</h3>
                    <div className="space-y-6">
                        <div>
                            <div className="text-sm text-white/40 uppercase mb-2">You Own</div>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-white/80 text-sm">
                                    <Layout size={14} className="text-white/40" /> Final Approvals
                                </li>
                                <li className="flex items-center gap-2 text-white/80 text-sm">
                                    <Layout size={14} className="text-white/40" /> Internal Context
                                </li>
                            </ul>
                        </div>
                        <div className="border-t border-white/10 pt-6">
                            <div className="text-sm text-primary uppercase mb-2">We Own</div>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-white text-sm font-medium">
                                    <CheckCircle size={14} className="text-primary" /> End-to-End Execution
                                </li>
                                <li className="flex items-center gap-2 text-white text-sm font-medium">
                                    <CheckCircle size={14} className="text-primary" /> Reporting & Insights
                                </li>
                                <li className="flex items-center gap-2 text-white text-sm font-medium">
                                    <CheckCircle size={14} className="text-primary" /> Stack Coordination
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    if (!talentData?.faqs) return null;

    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-6 max-w-4xl text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Common Questions</h2>
            </div>
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="space-y-4">
                    {talentData.faqs.map((faq, i) => (
                        <div key={i} className="border border-white/10 rounded-xl bg-white/5 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(active => active === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-bold text-white">{faq.question}</span>
                                <ChevronDown
                                    className={`text-white/40 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {openIndex === i && (
                                <div className="p-6 pt-0 text-white/60 text-sm leading-relaxed border-t border-white/5 mt-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {faq.answer}
                                    </motion.div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- PAGE COMPONENT ---

const TalentPage: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-bg-dark text-white selection:bg-primary selection:text-white">
            <ModalForm isOpen={modalOpen} onClose={() => setModalOpen(false)} context="Talent Page" />

            <WhyUsHero
                {...talentData.hero}
                RightVisual={PodBuilderVisual}
            />

            <ProofStrip />
            <ProblemSection />
            <TalentModelSection />
            <VettingSection />
            <MeetTalentSection />
            <OperatingRhythmSection />

            {/* Case Studies */}
            <section className="py-24 bg-bg-dark border-t border-white/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16 text-center">Recent Wins</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {caseStudies.map((study) => (
                            <CaseStudyCard key={study.id} {...study} />
                        ))}
                    </div>
                </div>
            </section>

            <FaqSection />

            {/* Final CTA */}
            <section className="py-32 bg-gradient-to-b from-bg-dark to-black text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Ready to build a team that ships?</h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => setModalOpen(true)}
                            className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-bg-dark transition-all"
                        >
                            Book a call
                        </button>
                        <button className="text-white/60 hover:text-white font-bold px-8 py-4 transition-colors">
                            Download model deck
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TalentPage;
