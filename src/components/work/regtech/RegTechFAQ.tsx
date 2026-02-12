import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const RegTechFAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        { q: "Our product is extremely technical. Can your team handle it?", a: "Yes. We specialize in 'technical translation'. We interview your engineers and product managers to understand the nuance, then translate that into value propositions that resonate with CISOs and business buyers." },
        { q: "How do you help with Analyst Relations (Gartner/Forrester)?", a: "We prepare the 'briefing deck' and help structure your differentiation story. We ensure your capability model aligns with what analysts are currently grading on (e.g., 'zero trust', 'platform consolidation')." },
        { q: "Do you write whitepapers?", a: "Yes. But we don't write 'fluff' whitepapers. We write technical, problem-solution whitepapers that are designed to be used in the sales process to validate your methodology." },
        { q: "How do we market to CISOs who hate marketing?", a: "You don't 'market' to them. You educate them and give them ammo to sell internally. We focus on 'champion enablement'—giving your internal champion the data and slides they need to get budget approval." },
        { q: "Can you help with our Trust Center?", a: "Absolutely. We view the Trust Center as a primary marketing asset, not just a compliance checkbox. We help write the copy and structure the narrative around your certifications (SOC2, ISO, etc.)." },
        { q: "What about channel partners / MSSPs?", a: "We build 'partner-in-a-box' kits that make it easy for MSSPs and resellers to sell your solution. If you make it easy for them to sell, they will prioritize your product." },
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

export default RegTechFAQ;
