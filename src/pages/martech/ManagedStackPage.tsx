import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Clock, Sliders } from 'lucide-react';

const ManagedStackPage: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="bg-bg-dark min-h-screen pt-32">
            <div className="container mx-auto px-6 max-w-4xl text-center mb-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6 border border-amber-500/20">
                    <ShieldCheck size={12} /> Managed MarTech
                </div>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-8">
                    We guard the stack. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">You run the plays.</span>
                </h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                    Think of us as SREs (Site Reliability Engineers) for your marketing stack. We monitor uptime, fix breaks, and manage vendors so you don't have to.
                </p>
            </div>

            <div className="container mx-auto px-6 max-w-5xl mb-24">
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "24/7 Monitoring", desc: "We catch API failures before your CEO does.", icon: Activity },
                        { title: "Vendor Management", desc: "We handle the renewals, seat provisioning, and support tickets.", icon: Clock },
                        { title: "Monthly Tuning", desc: "Regular audits to remove unused fields and optimize costs.", icon: Sliders },
                        { title: "Incident Response", desc: "If a workflow breaks at 2 AM, we fix it.", icon: ShieldCheck }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                            <item.icon className="text-amber-400 mb-4" size={32} />
                            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-white/60">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ManagedStackPage;
