import React from 'react';
import { ArrowRight } from 'lucide-react';

const MartechAuditForm: React.FC = () => {
    return (
        <section id="audit" className="bg-bg-dark py-24 border-t border-white/10">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 backdrop-blur-sm">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Free Assessment</span>
                        <h2 className="text-4xl font-display font-bold text-white mb-6">
                            Request a MarTech Stack Audit
                        </h2>
                        <p className="text-xl text-white/60">
                            Stop guessing effectively. Let us map your stack and find the leaks.
                        </p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Name</label>
                                <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-colors" placeholder="Full Name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Work Email</label>
                                <input type="email" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-colors" placeholder="name@company.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Current Stack (Tools)</label>
                            <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-colors" placeholder="e.g. HubSpot, Salesforce, Segment..." />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Primary Goal</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {['Pipeline Visibility', 'Lifecycle Auto', 'Data Hygiene', 'Tool Consolidation'].map((goal) => (
                                    <label key={goal} className="cursor-pointer">
                                        <input type="radio" name="goal" className="peer hidden" />
                                        <div className="bg-black/20 border border-white/10 rounded-xl py-3 text-center text-sm font-bold text-white/60 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all">
                                            {goal}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 mt-8">
                            Send Audit Request <ArrowRight size={20} />
                        </button>

                        <p className="text-center text-white/30 text-xs mt-4">
                            We respect your inbox. No spam, just engineering.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MartechAuditForm;
