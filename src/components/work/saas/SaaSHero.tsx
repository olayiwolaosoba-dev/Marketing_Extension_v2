import React from 'react';
import { ArrowRight, Shield, Activity, Users, Lock, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const SaaSHero: React.FC = () => {
    return (
        <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-bg-light">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                        <Search size={12} />
                        <span>B2B SaaS & Platforms Vertical</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-display font-bold text-text-dark mb-8 tracking-tight">
                        Pipeline engines for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">scalable revenue growth</span>
                    </h1>

                    <p className="text-xl lg:text-2xl text-text-dark/70 mb-12 max-w-3xl mx-auto leading-relaxed">
                        We help B2B SaaS platforms fix leaky funnels, align sales & marketing, and drive efficient CAC at scale.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <Link to="/audit" className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20">
                            Get a free audit
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/case-studies" className="border-2 border-primary/10 text-text-dark px-8 py-4 rounded-full font-bold text-lg hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center gap-2 bg-white">
                            View case studies
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                    {/* Microproof chips */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto border-t border-gray-200 pt-8">
                        <div className="flex flex-col gap-2">
                            <span className="text-xs font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
                                <Users size={12} /> Buyers
                            </span>
                            <span className="text-sm font-medium text-text-dark">Enterprise IT · Department Heads · SMBs</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-xs font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
                                <Activity size={12} /> Growth Motion
                            </span>
                            <span className="text-sm font-medium text-text-dark">Inbound/PLG · Outbound/ABM · Hybrid</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-xs font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
                                <Lock size={12} /> Trust Blockers
                            </span>
                            <span className="text-sm font-medium text-text-dark">Competition · Churn · Feature bloat</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SaaSHero;
