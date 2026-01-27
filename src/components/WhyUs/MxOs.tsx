import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BarChart2, Activity, Database, Lock, Search } from 'lucide-react';

const MxOs: React.FC = () => {
    return (
        <div className="pt-24 pb-20">
            {/* Hero Section */}
            <section className="container mx-auto px-6 max-w-7xl mb-24">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest mb-6">
                            MX OS
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-text-dark mb-8 leading-tight">
                            Marketing without <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">
                                the black box.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-text-muted leading-relaxed max-w-2xl">
                            We built the operating system we always wanted as clients. Total transparency into spend, performance, and creative velocity.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* The Dashboard Preview */}
            <section className="container mx-auto px-6 max-w-7xl mb-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative bg-text-dark rounded-[32px] p-6 md:p-12 shadow-2xl overflow-hidden"
                >
                    {/* Mock UI */}
                    <div className="bg-bg-light rounded-xl overflow-hidden border border-white/10 shadow-inner">
                        <div className="bg-white border-b border-gray-200 p-4 flex items-center gap-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                            <div className="flex-1 bg-gray-100 h-8 rounded-lg flex items-center px-4 text-xs text-gray-400 font-mono">
                                mx-os.app/dashboard/growth-metrics
                            </div>
                        </div>
                        <div className="p-8 grid md:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 col-span-2">
                                <div className="flex items-center justify-between mb-8">
                                    <h4 className="font-bold text-text-dark">Growth Velocity</h4>
                                    <span className="text-green-600 bg-green-50 px-2 py-1 rounded text-xs font-bold">+24% WoW</span>
                                </div>
                                <div className="h-32 flex items-end gap-2">
                                    {[40, 65, 55, 80, 70, 95, 120, 110, 130, 145].map((h, i) => (
                                        <div key={i} className="flex-1 bg-primary/20 hover:bg-primary transition-colors rounded-t-sm relative group" style={{ height: `${h / 1.5}%` }}>
                                            <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-text-dark text-white text-xs py-1 px-2 rounded pointer-events-none">
                                                ${h}k
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
                                <h4 className="font-bold text-text-dark mb-4">Live Experiments</h4>
                                {[
                                    { label: 'Landing Page V2', status: 'Winning', color: 'text-green-600 bg-green-50' },
                                    { label: 'Checkout Flow B', status: 'Testing', color: 'text-blue-600 bg-blue-50' },
                                    { label: 'Offer Stucture', status: 'Failed', color: 'text-red-500 bg-red-50' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-gray-50">
                                        <span className="text-sm font-medium">{item.label}</span>
                                        <span className={`text-[10px] font-bold uppercase ${item.color} px-2 py-1 rounded`}>{item.status}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-gradient-to-r from-primary/20 to-purple-600/20 w-1/2 h-1/2 blur-[100px] rounded-full" />
                </motion.div>
            </section>

            {/* Features Grid */}
            <section className="container mx-auto px-6 max-w-7xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Activity,
                            title: 'Real-time Pulse',
                            desc: 'No more waiting for end-of-month reports. See campaign health as it happens.'
                        },
                        {
                            icon: Database,
                            title: 'Asset Library',
                            desc: 'Centralized access to every creative asset, accessible by your whole team.'
                        },
                        {
                            icon: Search,
                            title: 'Experiment Log',
                            desc: 'A permanent record of every test run, hypothesis tested, and result logged.'
                        },
                        {
                            icon: Lock,
                            title: 'Role-Based Access',
                            desc: 'Granular permissions for stakeholders, from CMO to junior designers.'
                        },
                        {
                            icon: BarChart2,
                            title: 'Attribution Modeling',
                            desc: 'Multi-touch analysis to understand true contribution to revenue.'
                        },
                        {
                            icon: Shield,
                            title: 'Data Sovereignty',
                            desc: 'Your data belongs to you. Export raw logs anytime via API or CSV.'
                        },
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-bg-gray flex items-center justify-center mb-6 text-primary">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="font-display font-bold text-xl mb-3">{feature.title}</h3>
                            <p className="text-text-muted leading-relaxed text-sm">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default MxOs;
