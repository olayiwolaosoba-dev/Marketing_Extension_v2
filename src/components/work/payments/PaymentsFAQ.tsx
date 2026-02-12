import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const PaymentsFAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        { q: "How do you market in regulated environments without risky claims?", a: "We build `proof taxonomies` that rely on verified facts (uptime, transaction volume, certifications) rather than subjective claims. We also implement a localized legal-review workflow that pre-clears core messaging pillars." },
        { q: "Can you support partner GTM with banks and switches?", a: "Yes. This is a core part of our `Ecosystem Growth` module. We create partner-ready launch kits, co-branded assets, and enablement decks that help bank relationship managers sell your solution." },
        { q: "What do you need from our compliance/legal team?", a: "We ask for a 1-hour workshop at kickoff to establish `guardrails and non-negotiables`. After that, we batch reviews into a weekly or bi-weekly cadence to minimize their time investment." },
        { q: "How do you measure marketing when sales cycles are long?", a: "We move away from last-touch attribution and focus on `pipeline velocity` and `account penetration`. We measure intermediate signals: stakeholder engagement, content consumption depth, and sales enablement usage." },
        { q: "Do you work with internal marketing teams or replace them?", a: "We are an `extension`. We often plug in to handle the specialized product/growth marketing that generalist internal teams don't have capacity for. We can also act as the interim leadership team." },
        { q: "What does a typical 90-day engagement look like?", a: "Month 1: Audit + Narrative + Message Testing. Month 2: Asset Build (Sales Deck, Website, Launch Kit). Month 3: Go-to-Market execution and establishing the reporting rhythm." },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl font-display font-bold text-text-dark mb-12 text-center">Common Questions</h2>

                <div className="space-y-4">
                    {faqs.map((item, idx) => (
                        <div key={idx} className="border border-gray-100 rounded-xl overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full p-6 flex items-start justify-between text-left hover:bg-bg-light transition-colors"
                            >
                                <span className="font-bold text-lg text-text-dark pr-8">{item.q}</span>
                                {openIndex === idx ? <Minus className="text-primary shrink-0" /> : <Plus className="text-text-muted shrink-0" />}
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="p-6 pt-0 text-text-dark/80 leading-relaxed">
                                    {item.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PaymentsFAQ;
