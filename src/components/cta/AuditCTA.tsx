import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const AuditCTA: React.FC = () => {
    return (
        <section id="audit" className="py-24 bg-bg-dark relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dotted-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-16 lg:flex gap-16 items-center">

                    {/* Left: Value Prop */}
                    <div className="lg:w-1/2 mb-12 lg:mb-0">
                        <span className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary font-bold text-xs uppercase tracking-widest mb-6">
                            Limited Availability
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                            Stop guessing. <br />
                            <span className="text-white/60">Audit your engine.</span>
                        </h2>
                        <p className="text-lg text-white/60 mb-10 leading-relaxed">
                            We'll tear down your current marketing stack, messaging, and funnel to find the hidden friction costing you pipeline. No fluff, just a roadmap.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                "90-Minute Deep Dive Workshop",
                                "Full Narrative & Messaging Stress-Test",
                                "MarTech Stack Audit & Optimization Plan",
                                "The 'Engine Blueprint' Delivery (PDF)"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                                    <span className="text-white font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Timeline */}
                        <div className="border-t border-white/10 pt-8">
                            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">What happens next?</p>
                            <div className="flex gap-4 text-xs text-white/60">
                                <div className="flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center font-bold">1</span>
                                    Book
                                </div>
                                <div className="w-4 h-[1px] bg-white/10 mt-2.5" />
                                <div className="flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center font-bold">2</span>
                                    Audit
                                </div>
                                <div className="w-4 h-[1px] bg-white/10 mt-2.5" />
                                <div className="flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center font-bold">3</span>
                                    Roadmap
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:w-1/2 w-full">
                        <form className="bg-white rounded-2xl p-8 shadow-2xl">
                            <h3 className="text-2xl font-bold text-text-dark mb-6">Request Your Audit</h3>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-text-muted uppercase mb-1">First Name</label>
                                        <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:bg-white transition-colors" placeholder="Jane" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-text-muted uppercase mb-1">Last Name</label>
                                        <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:bg-white transition-colors" placeholder="Doe" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-text-muted uppercase mb-1">Work Email</label>
                                    <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:bg-white transition-colors" placeholder="jane@company.com" />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-text-muted uppercase mb-1">Company Website</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:bg-white transition-colors" placeholder="company.com" />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-text-muted uppercase mb-1">Biggest Constraint</label>
                                    <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:bg-white transition-colors appearance-none text-text-dark">
                                        <option>Select your biggest challenge...</option>
                                        <option>Lead Quality / Targeting</option>
                                        <option>Messaging / Brand Clarity</option>
                                        <option>MarTech / Attribution</option>
                                        <option>Scaling Content</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <button type="button" className="w-full bg-primary text-white font-bold text-lg py-4 rounded-xl hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/25 mt-2 flex items-center justify-center gap-2 group">
                                    Book Audit
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>

                                <p className="text-center text-xs text-text-muted mt-4">
                                    No commitment required. 100% money-back guarantee if you don't get value.
                                </p>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AuditCTA;
