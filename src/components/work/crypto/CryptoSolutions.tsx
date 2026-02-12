import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, MessageSquare, Rocket, Users, BarChart3, ShieldCheck } from 'lucide-react';

const CryptoSolutions: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const solutions = [
        {
            title: "Trust-first narrative for institutional adoption",
            icon: MessageSquare,
            content: {
                playbook: "Move beyond 'yield' to 'utility'; simplify technical concepts; align with regulatory compliance",
                deliverables: "Institutional pitch deck, whitepaper polish, compliance-safe messaging",
                kpi: "Increased engagement from institutional partners/investors"
            }
        },
        {
            title: "Community engagement system (that actually scales)",
            icon: Users,
            content: {
                playbook: null,
                deliverables: "Ambassador program structure, Discord/Telegram engagement playbooks, meme/content cadence",
                kpi: "Growth in active community members (not just bots)"
            }
        },
        {
            title: "Token utility & ecosystem growth GTM",
            icon: Rocket,
            content: {
                playbook: null,
                deliverables: "Token launch roadmap, ecosystem grant program marketing, developer rels kit",
                kpi: "Developer adoption & on-chain activity"
            }
        },
        {
            title: "Regulatory-safe marketing operations",
            icon: ShieldCheck,
            content: {
                playbook: null,
                deliverables: "Compliance review workflow, crisis comms playbook, transparency reports",
                kpi: "Zero regulatory flagging incidents"
            }
        },
        {
            title: "On-chain & off-chain attribution",
            icon: BarChart3,
            content: {
                playbook: null,
                deliverables: "Wallet connection analytics, campaign dashboard, conversion funnel mapping",
                kpi: "Clear ROI on marketing spend vs TVL/Volume"
            }
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">How We Solve It</h2>
                    <h3 className="text-4xl font-display font-bold text-text-dark">A growth engine for the digital economy.</h3>
                </div>

                <div className="max-w-4xl">
                    {solutions.map((item, idx) => (
                        <div key={idx} className="border-b border-gray-100 last:border-0">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full py-8 flex items-center justify-between group text-left"
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${openIndex === idx ? 'bg-primary text-white' : 'bg-bg-light text-text-muted group-hover:bg-primary/10 group-hover:text-primary'}`}>
                                        <item.icon size={24} />
                                    </div>
                                    <span className={`text-xl md:text-2xl font-display font-medium transition-colors ${openIndex === idx ? 'text-text-dark' : 'text-text-muted group-hover:text-text-dark'}`}>
                                        {item.title}
                                    </span>
                                </div>
                                <ChevronDown className={`text-text-muted transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
                            </button>

                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
                                <div className="pl-[72px] grid md:grid-cols-2 gap-8">
                                    {item.content.playbook && (
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">The Playbook</h4>
                                            <p className="text-text-dark/80 leading-relaxed">{item.content.playbook}</p>
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">Deliverables</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {item.content.deliverables.split(', ').map(d => (
                                                <span key={d} className="px-3 py-1 rounded-md bg-bg-light text-sm text-text-dark border border-gray-100">{d}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={item.content.playbook ? 'md:col-span-2' : ''}>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">The KPI</h4>
                                        <div className="flex items-center gap-2 text-primary font-medium">
                                            <CheckCircle2 size={16} />
                                            {item.content.kpi}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CryptoSolutions;
