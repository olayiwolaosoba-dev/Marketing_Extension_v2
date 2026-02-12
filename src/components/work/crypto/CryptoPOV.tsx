import React from 'react';
import { Target, Users, AlertTriangle, TrendingUp } from 'lucide-react';

const CryptoPOV: React.FC = () => {
    const cards = [
        {
            icon: Target,
            label: 'Market Reality',
            text: 'Hype is free. Sustainable adoption requires education, not just speculation.',
        },
        {
            icon: Users,
            label: 'Community Dynamics',
            text: 'Your community is your marketing team, but they need a narrative to rally behind.',
        },
        {
            icon: AlertTriangle,
            label: 'What Breaks Growth',
            text: 'Technical jargon that alienates institutions and confuses retail users.',
        },
        {
            icon: TrendingUp,
            label: 'What Wins',
            text: 'Educational content + Institutional-grade trust + Clear utility narratives.',
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <h2 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-12">Industry POV</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, idx) => (
                        <div key={idx} className="p-8 rounded-2xl bg-bg-light hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/10 group">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <card.icon size={24} />
                            </div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted mb-3">{card.label}</h3>
                            <p className="text-xl font-display font-medium text-text-dark leading-snug">
                                "{card.text}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CryptoPOV;
