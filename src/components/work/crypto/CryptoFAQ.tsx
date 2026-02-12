import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const CryptoFAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        { q: "How do you handle marketing during a bear market?", a: "Bear markets are for building. We shift focus from 'hype' to 'education' and 'utility', deepening relationships with developers and core community members so you're ready to surge when liquidity returns." },
        { q: "Can you help getting listed on major exchanges?", a: "We don't act as listing agents, but we build the 'listing story' that exchanges require. We ensure your community engagement, code activity, and transparent tokenomics meet the due-diligence criteria of Tier-1 CEXs." },
        { q: "Do you manage community mods and discord?", a: "We build the `community playbook` and can train your mods. For full-time moderation, we partner with specialized community management firms while we retain oversight of the narrative strategy." },
        { q: "How do you navigate SEC/regulatory risks in copy?", a: "We are not lawyers, but we are 'compliance-aware'. We avoid promissory language regarding price or profit. We focus on utility, governance rights, and technical capability—marketing the technology, not the security." },
        { q: "Do you work with DAOs?", a: "Yes. We are comfortable working with governance votes and decentralized decision-making structures. We often seek a 'mandate' or grant from the DAO for a specific 3-6 month growth sprint." },
        { q: "What is your stance on paid KOLs?", a: "Cautious. We believe in organic advocacy over paid shills. If we use KOLs, we prioritize educators and industry analysts over 'moon boys' to build long-term credibility." },
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

export default CryptoFAQ;
