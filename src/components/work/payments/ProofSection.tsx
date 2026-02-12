import React from 'react';
import { ArrowRight, FileText, Image, Layout, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProofSection: React.FC = () => {
    return (
        <section className="py-24 bg-bg-light">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Case Studies */}
                <div className="mb-24">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-12">Proof in Action</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Zone */}
                        <Link to="/work/zone-regulated-blockchain-payments" className="group block relative overflow-hidden rounded-3xl bg-white hover:shadow-2xl transition-all duration-500">
                            <div className="aspect-[16/9] bg-gray-200 relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80" alt="Zone Case Study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-3xl font-display font-bold mb-2">Zone</h3>
                                    <p className="opacity-90 font-medium">Regulated Blockchain Payments</p>
                                </div>
                            </div>
                        </Link>

                        {/* VeryPay */}
                        <Link to="/work/verypay-multi-country-marketing-bench" className="group block relative overflow-hidden rounded-3xl bg-white hover:shadow-2xl transition-all duration-500">
                            <div className="aspect-[16/9] bg-gray-200 relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80" alt="VeryPay Case Study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-3xl font-display font-bold mb-2">VeryPay</h3>
                                    <p className="opacity-90 font-medium">Multi-country Marketing Bench</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-medium text-text-muted">
                            <span className="w-2 h-2 rounded-full bg-green-500" />
                            Adjacent proof: Smartcomply trust + compliance growth engine
                        </div>
                    </div>
                </div>

                {/* Artifacts Gallery */}
                <div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                        <div>
                            <h2 className="text-4xl font-display font-bold text-text-dark mb-4">What we actually deliver.</h2>
                            <p className="text-text-muted text-lg">No fluff. Just components for your growth engine.</p>
                        </div>
                        <Link to="/services/content-studio" className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                            Explore Studio <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: FileText, title: "Capital-ready narrative deck", subtitle: "(payments infra)" },
                            { icon: Box, title: "Partner launch kit", subtitle: "messaging + assets" },
                            { icon: Layout, title: "Adoption journey map", subtitle: "onboarding + retention" },
                            { icon: Image, title: "Reporting cadence", subtitle: "weekly scorecard" },
                        ].map((item, idx) => (
                            <div key={idx} className="aspect-square bg-white rounded-2xl p-8 flex flex-col justify-between border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-2xl bg-bg-light flex items-center justify-center text-text-dark group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <item.icon size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-text-dark leading-tight mb-2">{item.title}</h4>
                                    <p className="text-sm text-text-muted font-medium">{item.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProofSection;
