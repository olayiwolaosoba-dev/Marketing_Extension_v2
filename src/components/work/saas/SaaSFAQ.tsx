import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const SaaSFAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        { q: "We have a PLG motion. Do we still need 'sales' marketing?", a: "Unless you have 0% churn and 100% viral adoption, yes. You need to market to the 'user' (for adoption) and the 'buyer' (for enterprise contracts). We bridge that gap for you." },
        { q: "Can you fix our HubSpot/Salesforce mess?", a: "Yes. Part of our 'Marketing OS' is cleaning up your RevOps infrastructure. We ensure lead scoring, lifecycle stages, and attribution fields are actually capturing data correctly." },
        { q: "Do you handle paid ads?", a: "We manage the strategy and creative. For execution, we can either run it ourselves (for smaller budgets) or oversee your performance agency (for large-scale spend) to ensure they aren't wasting money on vanity metrics." },
        { q: "We need more enterprise leads. How do you help?", a: "We shift your messaging from 'features' to 'business outcomes'. We build ABM (Account Based Marketing) campaigns that target specific titles at specific companies with high-value content." },
        { q: "How fast can we expect results?", a: "We work in 90-day sprints. You'll see new assets and updated messaging in month 1. You should start seeing pipeline movement (MQL to SQL conversion improvements) by end of month 2." },
        { q: "What's the difference between you and a demand gen agency?", a: "Demand gen agencies usually just run ads. We build the entire engine: strategy, content, automation, AND distribution. We care about 'Revenue', not just 'Leads'." },
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

export default SaaSFAQ;
