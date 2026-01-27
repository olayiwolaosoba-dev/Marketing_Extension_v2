import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { GitBranch, Zap, RefreshCw, Database } from 'lucide-react';

const AutomationRevOpsPage: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="bg-bg-dark min-h-screen pt-32">
            <div className="container mx-auto px-6 max-w-4xl text-center mb-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-widest mb-6 border border-green-500/20">
                    <Zap size={12} /> Automation & RevOps
                </div>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-8">
                    The plumbing that makes <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">growth repeatable.</span>
                </h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                    We replace "duct-taped" Zapier zaps with robust, error-handled orchestration layers. Clean data in, revenue out.
                </p>
            </div>

            <div className="container mx-auto px-6 max-w-7xl mb-24 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    {[
                        { title: "Lifecycle Orchestration", desc: "Complex multi-channel journeys that actually adapt to user behavior.", icon: GitBranch },
                        { title: "Data Enrichment", desc: "Auto-fill firmographics and contact data before sales ever sees the lead.", icon: Database },
                        { title: "Bi-Directional Sync", desc: "Keeping HubSpot, Salesforce, and your warehouse in perfect harmony.", icon: RefreshCw }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 flex-shrink-0">
                                <item.icon size={20} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 aspect-square flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-transparent" />
                    <div className="text-center">
                        <div className="text-6xl font-bold text-white mb-2">100%</div>
                        <div className="text-green-400 font-bold uppercase tracking-widest text-sm">Automated Handoff</div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AutomationRevOpsPage;
