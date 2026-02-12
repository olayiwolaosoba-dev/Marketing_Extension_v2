import React from 'react';
import { XCircle } from 'lucide-react';

const ProfessionalChallenges: React.FC = () => {
    const challenges = [
        "Unpredictable revenue ('Feast or Famine')",
        "Over-reliance on founder-led sales",
        "Difficulty scaling beyond 'who you know'",
        "Marketing that looks exactly like the competition",
        "Proposals getting stuck in procurement"
    ];

    return (
        <section className="py-20 bg-bg-dark text-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                            Why expertise is hard <br />
                            <span className="text-white/40">to scale.</span>
                        </h2>
                        <p className="text-xl text-white/60 max-w-lg leading-relaxed">
                            Selling "hours" doesn't scale. Selling "outcomes" does. But shifting that mindset is painful.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {challenges.map((challenge, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <XCircle className="text-red-400 shrink-0" size={24} />
                                <span className="text-lg font-medium text-white/90">{challenge}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfessionalChallenges;
