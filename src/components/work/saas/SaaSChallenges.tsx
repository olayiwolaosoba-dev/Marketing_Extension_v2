import React from 'react';
import { XCircle } from 'lucide-react';

const SaaSChallenges: React.FC = () => {
    const challenges = [
        "High CAC and low conversion rates",
        "Churn eating up monthly growth",
        "Product & Marketing speaking different languages",
        "Sales teams complaining about 'weak leads'",
        "Difficulty moving up-market to Enterprise"
    ];

    return (
        <section className="py-20 bg-bg-dark text-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                            Why growth stalls <br />
                            <span className="text-white/40">in B2B SaaS.</span>
                        </h2>
                        <p className="text-xl text-white/60 max-w-lg leading-relaxed">
                            Scaling isn't just about more ads. It's about fixing the leaky bucket between your product promise and the customer reality.
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

export default SaaSChallenges;
