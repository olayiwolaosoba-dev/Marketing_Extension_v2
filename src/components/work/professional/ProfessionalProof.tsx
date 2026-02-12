import React from 'react';
import { ArrowRight, FileText, Image, Layout, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfessionalProof: React.FC = () => {
    return (
        <section className="py-24 bg-bg-light">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Case Studies */}
                <div className="mb-24">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-12">Proof in Action</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Tamy Consulting */}
                        <Link to="/work/tamy-consulting-growth-engine" className="group block relative overflow-hidden rounded-3xl bg-white hover:shadow-2xl transition-all duration-500">
                            <div className="aspect-[16/9] bg-gray-200 relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" alt="Tamy Consulting Case Study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-3xl font-display font-bold mb-2">Tamy Consulting</h3>
                                    <p className="opacity-90 font-medium">Consulting Growth Engine</p>
                                </div>
                            </div>
                        </Link>

                        {/* Mercurie - PR for professional services / tech */}
                        <Link to="/work/mercurie-launch-pr-narrative" className="group block relative overflow-hidden rounded-3xl bg-white hover:shadow-2xl transition-all duration-500">
                            <div className="aspect-[16/9] bg-gray-200 relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1504384308090-c54be3852f33?auto=format&fit=crop&q=80" alt="Mercurie Case Study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-3xl font-display font-bold mb-2">Mercurie</h3>
                                    <p className="opacity-90 font-medium">Strategic Narrative Launch</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-medium text-text-muted">
                            <span className="w-2 h-2 rounded-full bg-green-500" />
                            Adjacent proof: SabiTrack investor relations
                        </div>
                    </div>
                </div>

                {/* Artifacts Gallery */}
                <div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                        <div>
                            <h2 className="text-4xl font-display font-bold text-text-dark mb-4">What we actually deliver.</h2>
                            <p className="text-text-muted text-lg">Intellectual Property (IP) packaging.</p>
                        </div>
                        <Link to="/services/content-studio" className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                            Explore Studio <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: FileText, title: "Methodology Whitepaper", subtitle: "(your secret sauce)" },
                            { icon: Box, title: "Webinar Deck", subtitle: "lead generation" },
                            { icon: Layout, title: "Premium Proposal", subtitle: "high-ticket closing" },
                            { icon: Image, title: "LinkedIn Thought Leader", subtitle: "20+ posts/month" },
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

export default ProfessionalProof;
