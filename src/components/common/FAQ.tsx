import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "What’s the difference between you and a traditional agency?",
            a: "Agencies rent you heads; we build you an engine. Traditional agencies profit from your dependency. We profit from your autonomy—building systems, playbooks, and hiring your team so you eventually don't need us."
        },
        {
            q: "Do you execute or only advise?",
            a: "We do both. Strategy without execution is hallucination. We have deep 'doer' capabilities in content, design, code, and ads to validate the strategy before handing it off to your team."
        },
        {
            q: "What does an 'engine' mean in practice?",
            a: "An engine is a repeatable system. Instead of 'posting a blog', we build a Content Engine (Inputs: customer research -> System: writing/design workflow -> Outputs: blog, social, newsletter). It runs predictably, regardless of who is operating it."
        },
        {
            q: "What does onboarding look like?",
            a: "Day 1-7 is our Deep Dive Audit. We map your current state, interview team members, and access data. By Day 14, you have a 90-day execution roadmap and our systems are beginning to deploy."
        },
        {
            q: "How do you measure impact?",
            a: "We move away from vanity metrics (likes, impressions) to revenue metrics: Pipeline Generated, Qualified Conversions, Logic-based Attribution, and CAC Payback Period."
        },
        {
            q: "Can you work with in-house teams?",
            a: "Absolutely. Our 'Embedded Marketing Office' model is designed to sit alongside your team, upskilling them and filling gaps until you hire full-time roles."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-text-dark mb-4">
                        Common Questions
                    </h2>
                    <p className="text-text-muted">everything you need to know about working with us.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-300 bg-white">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                            >
                                <span className={`text-lg md:text-xl font-bold bg-clip-text ${openIndex === i ? 'text-primary' : 'text-text-dark'}`}>
                                    {faq.q}
                                </span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? 'bg-primary text-white' : 'bg-gray-100 text-text-dark'}`}>
                                    {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 md:px-8 pb-8 pt-0">
                                            <p className="text-text-muted text-lg leading-relaxed">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
