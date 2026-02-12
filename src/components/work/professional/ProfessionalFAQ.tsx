import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const ProfessionalFAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        { q: "We get 90% of business from referrals. Why change?", a: "Referrals are great, but they are unpredictable and often price-sensitive. Building a 'brand' allows you to attract strangers who are ready to pay a premium because they trust your authority before they even speak to you." },
        { q: "Can you ghostwrite for our partners?", a: "Yes. We interview your partners for 30 minutes every two weeks and turn those conversations into LinkedIn posts, newsletters, and articles. We capture their voice, but remove the time burden." },
        { q: "Do you help with webinars/events?", a: "We don't do event logistics (booking venues), but we handle the 'Event Marketing'—the landing pages, email sequences, and slide deck creation to ensure the room is full and the presentation converts." },
        { q: "How do we productize our service?", a: "We look at your last 10 engagements. What was common? What steps did you repeat? We package that into a 'Signature Solution' with a fixed scope and price, making it easier to sell and faster to deliver." },
        { q: "Will this make us look 'cheap' or 'salesy'?", a: "No. We model our marketing after top-tier firms like McKinsey or localized boutique experts. The goal is 'Educational Authority', not 'Hype Marketing'. We sell by teaching." },
        { q: "Do you handle our website?", a: "We can. Often, professional service websites are just digital brochures. We turn them into conversion engines with clear calls-to-action, lead magnets, and case study libraries." },
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

export default ProfessionalFAQ;
