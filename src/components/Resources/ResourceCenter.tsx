import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Download, Lock, FileText } from 'lucide-react';
import { resources, ResourceType } from '../../data/resources';

const ResourceCenter: React.FC = () => {
    const [activeTab, setActiveTab] = useState<ResourceType | 'All'>('All');

    const filteredResources = activeTab === 'All'
        ? resources
        : resources.filter(r => r.type === activeTab);

    const tabs: (ResourceType | 'All')[] = ['All', 'Article', 'Report', 'Playbook'];

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-text-dark mb-4">
                            Insights & Playbooks
                        </h2>
                        <p className="text-text-muted text-lg max-w-xl">
                            Steal our systems. We open-source our best thinking for marketing leaders.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex space-x-2 bg-gray-50 p-1.5 rounded-xl border border-gray-100 mt-6 md:mt-0">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === tab
                                        ? 'bg-white text-text-dark shadow-sm'
                                        : 'text-text-muted hover:text-text-dark'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredResources.map((resource) => (
                            <motion.div
                                key={resource.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="group bg-white rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                            >
                                {resource.image && (
                                    <div className="h-48 overflow-hidden relative">
                                        <img src={resource.image} alt={resource.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        {resource.isGated && (
                                            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                                                <Lock size={12} />
                                                Gated
                                            </div>
                                        )}
                                    </div>
                                )}

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${resource.type === 'Report' ? 'bg-purple-50 text-purple-600' :
                                                resource.type === 'Playbook' ? 'bg-green-50 text-green-600' :
                                                    'bg-orange-50 text-orange-600'
                                            }`}>
                                            {resource.type}
                                        </span>
                                        <span className="text-xs text-text-muted font-medium">{resource.readTime}</span>
                                    </div>

                                    <h3 className="text-lg font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">
                                        {resource.title}
                                    </h3>
                                    <p className="text-sm text-text-muted mb-6 flex-1">
                                        {resource.description}
                                    </p>

                                    <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                                        <button className="text-sm font-bold text-text-dark group-hover:text-primary transition-colors flex items-center gap-2">
                                            {resource.isGated ? 'Download Now' : 'Read Article'}
                                            {resource.isGated ? <Download size={16} /> : <ArrowRight size={16} />}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Featured Newsletter Box */}
                <div className="mt-16 bg-bg-dark rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[100px] pointer-events-none" />

                    <div className="relative z-10 max-w-xl">
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                            Join 5,000+ marketing leaders
                        </h3>
                        <p className="text-white/60">
                            Get one actionable engine-building tactic in your inbox every Tuesday. No fluff, just leverage.
                        </p>
                    </div>

                    <div className="relative z-10 w-full md:w-auto">
                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Work email address"
                                className="bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-6 py-3 rounded-xl focus:outline-none focus:border-primary focus:bg-white/20 transition-all min-w-[300px]"
                            />
                            <button className="bg-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-white hover:text-text-dark transition-all">
                                Subscribe
                            </button>
                        </form>
                        <p className="text-white/30 text-xs mt-3 text-center sm:text-left">Unsubscribe anytime.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ResourceCenter;
