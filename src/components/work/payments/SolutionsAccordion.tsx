import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, FileText, BarChart3, Rocket, MessageSquare } from 'lucide-react';

const SolutionsAccordion: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const solutions = [
        {
            title: "Message architecture that regulators and sales can both repeat",
            icon: MessageSquare,
            content: {
                playbook: "Translate infra value → outcomes; create proof taxonomy; align language across teams",
                deliverables: "Narrative framework, messaging map, proof library",
                kpi: "Shorter sales-cycle friction + improved stakeholder alignment"
            }
        },
        {
            title: "Adoption system for post-integration activation",
            icon: Rocket,
            content: {
                playbook: null,
                deliverables: "Activation journey, onboarding comms, partner enablement kits",
                kpi: "Higher activation rate after go-live"
            }
        },
        {
            title: "Partner GTM as a product (launches that keep compounding)",
            icon: UsersIcon,
            content: {
                playbook: null,
                deliverables: "Partner launch kit, co-marketing calendar, press + comms system",
                kpi: "Sustained pipeline from partner channels"
            }
        },
        {
            title: "Marketing OS for regulated cadence",
            icon: SettingsIcon,
            content: {
                playbook: null,
                deliverables: "Monthly growth rhythm, reporting templates, experiment backlog",
                kpi: "Faster iteration without brand drift"
            }
        },
        {
            title: "Measurement that survives attribution debates",
            icon: BarChart3,
            content: {
                playbook: null,
                deliverables: "Pipeline mapping, dashboard spec, KPI definitions",
                kpi: "Cleaner decision-making on channel ROI"
            }
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">How We Solve It</h2>
                    <h3 className="text-4xl font-display font-bold text-text-dark">A system for trust-led growth.</h3>
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

// Helper components for icons not imported above
const UsersIcon = ({ size, className }: { size?: number, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);
const SettingsIcon = ({ size, className }: { size?: number, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
);


export default SolutionsAccordion;
