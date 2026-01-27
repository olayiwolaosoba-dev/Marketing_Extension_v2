import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Brain, CheckCircle, ArrowRight, Shield, Search } from 'lucide-react';
import AuditProduct from '../../components/martech/AuditProduct';

const AiAuditPage: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="bg-bg-dark min-h-screen pt-32">
            <div className="container mx-auto px-6 max-w-4xl text-center mb-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6 border border-purple-500/20">
                    <Brain size={12} /> AI Readiness
                </div>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-8">
                    Is your stack actually <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">ready for AI?</span>
                </h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                    Most marketing teams are just pasting prompts into ChatGPT. We audit your data structure, governance, and workflows to build true AI infrastructure.
                </p>
            </div>

            {/* Core Pillars */}
            <div className="container mx-auto px-6 max-w-7xl mb-24">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Data Context", desc: "AI models are only as good as their context window. We structure your CDP data so agents can actually read it.", icon: Search },
                        { title: "Governance", desc: "Prevent PII leaks. We implement enterprise-grade guardrails and role-based access for all AI tools.", icon: Shield },
                        { title: "Agent Architecture", desc: "Moving beyond chatbots. We design multi-agent systems that can autonomously execute tasks.", icon: Brain }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-xl flex items-center justify-center mb-6">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-white/60 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <AuditProduct />
            <Footer />
        </div>
    );
};

export default AiAuditPage;
