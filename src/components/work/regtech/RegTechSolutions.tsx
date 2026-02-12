import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, FileText, BarChart3, ShieldCheck, Database } from 'lucide-react';

const RegTechSolutions: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const solutions = [
        {
            title: "Security-first narrative alignment",
            icon: ShieldCheck,
            content: {
                playbook: "Bridge the gap between 'marketing promises' and 'engineering reality'; create specs that pass CISO review",
                deliverables: "Techncial whitepapers, architecture diagrams, security data sheets",
                kpi: "Faster security review cycles"
            }
        },
        {
            title: "Account-Based Marketing (ABM) for Enterprise",
            icon: Database,
            content: {
                playbook: null,
                deliverables: "Target account lists, personalized outreach plays, executive briefing decks",
                kpi: "Increased pipeline in Fortune 500 target accounts"
            }
        },
        {
            title: "Trust Center as a marketing asset",
            icon: FileText,
            content: {
                playbook: null,
                deliverables: "Public trust page content, compliance badge strategy, transparency reports",
                kpi: "Inbound leads requesting demos, not just pricing"
            }
        },
        {
            title: "Analyst Relations (Gartner/Forrester) Support",
            icon: BarChart3,
            content: {
                playbook: null,
                deliverables: "Briefing decks, capability mapping, differentiation matrix",
                kpi: "Mention or placement in industry reports"
            }
        },
        {
            title: "Partner Ecosystem Activation",
            icon: CheckCircle2,
            content: {
                playbook: null,
                deliverables: "MSSP enablement kits, reseller onboarding decks, joint solution briefs",
                kpi: "Channel revenue growth"
            }
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">How We Solve It</h2>
                    <h3 className="text-4xl font-display font-bold text-text-dark">A roadmap to trust.</h3>
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

export default RegTechSolutions;
