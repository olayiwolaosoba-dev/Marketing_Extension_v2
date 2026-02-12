import React from 'react';
import { Target, Users, AlertTriangle, TrendingUp } from 'lucide-react';

const ProfessionalPOV: React.FC = () => {
    const cards = [
        {
            icon: Target,
            label: 'Market Reality',
            text: 'Expertise is commoditized. Only specific, branded methodologies command a premium.',
        },
        {
            icon: Users,
            label: 'Decision Dynamics',
            text: 'Clients buy the consultant, not the firm. You need to scale the "personal brand" of your partners.',
        },
        {
            icon: AlertTriangle,
            label: 'What Breaks Growth',
            text: 'The "Feast or Famine" cycle. Relying 100% on referrals means you have no control over your pipeline.',
        },
        {
            icon: TrendingUp,
            label: 'What Wins',
            text: 'Productized services. Turning "we do everything" into "we solve this specific problem for $X".',
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

export default ProfessionalPOV;
