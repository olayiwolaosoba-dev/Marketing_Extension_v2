import React from 'react';
import { Layers, PenTool, BarChart3, ArrowRight } from 'lucide-react';

const MarketingOSExplainer: React.FC = () => {
    const pillars = [
        {
            icon: <Layers size={24} />,
            title: "Marketing Consulting",
            desc: "Leadership + GTM + Operating Model",
            inputs: ["Business Goals", "Market Analysis", "Team Audit"],
            outputs: ["GTM Strategy", "Org Design", "Budget Allocation"],
            color: "bg-blue-500",
            lightColor: "bg-blue-500/10",
            textColor: "text-blue-500"
        },
        {
            icon: <PenTool size={24} />,
            title: "Content+",
            desc: "Narrative + Creative + Production",
            inputs: ["Brand DNA", "Customer Interviews", "SEO Data"],
            outputs: ["Brand Voice", "Content Engine", "Sales Enablement"],
            color: "bg-primary",
            lightColor: "bg-primary/10",
            textColor: "text-primary"
        },
        {
            icon: <BarChart3 size={24} />,
            title: "MarTech Studio",
            desc: "Web + Automation + Analytics",
            inputs: ["Process Map", "Tool Stack", "Data Sources"],
            outputs: ["Automated CRM", "Dashboards", "Web Experience"],
            color: "bg-purple-500",
            lightColor: "bg-purple-500/10",
            textColor: "text-purple-500"
        }
    ];

    return (
        <section className="bg-bg-dark py-24 border-y border-white/5 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-1/3 h-full bg-primary/5 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-2 rounded-full border border-white/10 mb-6 bg-white/5 backdrop-blur-sm shadow-sm">
                        <span className="text-white font-bold text-xs uppercase tracking-widest">The Methodology</span>
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Built like software, <br />
                        <span className="text-white/50">run like a system.</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        We don't launch random tactics. We build a proprietary "Marketing OS" for your business that connects strategy, content, and technology.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {pillars.map((pillar, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white ${pillar.color} shadow-lg shadow-${pillar.color}/20`}>
                                {pillar.icon}
                            </div>

                            <h3 className="text-2xl font-display font-bold text-white mb-2">{pillar.title}</h3>
                            <p className={`text-sm font-bold uppercase tracking-wider mb-8 ${pillar.textColor}`}>{pillar.desc}</p>

                            {/* System Flow Mini-Diagram */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                    <span className="text-xs text-white/40 uppercase tracking-widest font-bold">In</span>
                                    <div className="h-[1px] flex-1 bg-white/10" />
                                </div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {pillar.inputs.map(item => (
                                        <span key={item} className="text-xs text-white/60 bg-white/5 px-2 py-1 rounded border border-white/5">{item}</span>
                                    ))}
                                </div>

                                <div className="flex justify-center my-4">
                                    <div className="bg-bg-dark border border-white/20 rounded-full p-2">
                                        <ArrowRight size={14} className="text-white/40 rotate-90" />
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    <span className="text-xs text-primary uppercase tracking-widest font-bold">Out</span>
                                    <div className="h-[1px] flex-1 bg-primary/20" />
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {pillar.outputs.map(item => (
                                        <span key={item} className="text-xs text-white bg-primary/20 px-2 py-1 rounded border border-primary/20">{item}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarketingOSExplainer;
