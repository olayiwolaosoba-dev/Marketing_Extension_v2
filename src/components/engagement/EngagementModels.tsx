import React from 'react';
import { ArrowUpRight, Users, Zap, Target, BookOpen } from 'lucide-react';

const EngagementModels: React.FC = () => {
    const models = [
        {
            title: "Embedded Marketing Office",
            icon: <Users size={24} className="text-primary" />,
            bestFor: "Post-Series A Startups",
            duration: "6-12 Months",
            desc: "We become your entire marketing department. Strategy, execution, and hiring support to bridge the gap to your next stage.",
            features: ["Fractional CMO", "Content & Growth Pod", "MarTech Implementation"]
        },
        {
            title: "Project & Launch Squads",
            icon: <Zap size={24} className="text-orange-400" />,
            bestFor: "Launching a New Vertical",
            duration: "3-4 Months",
            desc: "A dedicated SWAT team to execute a specific GTM motion, product launch, or rebrand with high velocity.",
            features: ["Launch Strategy", "Campaign Execution", "Asset Production"]
        },
        {
            title: "Fractional Leadership",
            icon: <Target size={24} className="text-purple-500" />,
            bestFor: "Teams Needing Direction",
            duration: "Ongoing Retainer",
            desc: "Strategic guidance for founders or junior marketing teams. We set the course; your team steers the ship.",
            features: ["Weekly Strategy Calls", "Team Mentorship", "Hiring Support"]
        },
        {
            title: "Training & Capability",
            icon: <BookOpen size={24} className="text-green-500" />,
            bestFor: "In-House Teams",
            duration: "4-6 Weeks",
            desc: "Workshops and systems implementation to upgrade your team's skills in content, growth, or operations.",
            features: ["Custom Workshops", "Playbook Installation", "Team Assessment"]
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Engagement Models</span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-text-dark">
                        Flexible ways to <span className="text-primary italic">win.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {models.map((model, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all group flex flex-col">
                            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {model.icon}
                            </div>

                            <h3 className="text-xl font-bold text-text-dark mb-2">{model.title}</h3>
                            <p className="text-sm text-text-muted mb-4 leading-relaxed flex-1">
                                {model.desc}
                            </p>

                            <div className="border-t border-b border-gray-50 py-4 mb-6 space-y-2">
                                <div className="flex justify-between text-xs">
                                    <span className="text-text-muted uppercase font-bold">Best For</span>
                                    <span className="text-text-dark font-medium text-right">{model.bestFor}</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-text-muted uppercase font-bold">Duration</span>
                                    <span className="text-text-dark font-medium text-right">{model.duration}</span>
                                </div>
                            </div>

                            <button className="w-full flex items-center justify-center gap-2 text-sm font-bold text-text-dark bg-gray-50 py-3 rounded-lg group-hover:bg-text-dark group-hover:text-white transition-colors">
                                Discuss Fit
                                <ArrowUpRight size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EngagementModels;
