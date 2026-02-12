import React from 'react';
import { XCircle } from 'lucide-react';

const CryptoChallenges: React.FC = () => {
    const challenges = [
        "Hype cycles that crash before you launch",
        "Regulatory uncertainty freezing institutional budgets",
        "Community toxicity when token prices dip",
        "Distrust from hacks, rugs, and bad actors",
        "Technical complexity that scares off normal users"
    ];

    return (
        <section className="py-20 bg-bg-dark text-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                            Why growth feels chaotic <br />
                            <span className="text-white/40">in digital assets.</span>
                        </h2>
                        <p className="text-xl text-white/60 max-w-lg leading-relaxed">
                            You're not just fighting competitors. You're fighting scammers, regulators, and market volatility.
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

export default CryptoChallenges;
