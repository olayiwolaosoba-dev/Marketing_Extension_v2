import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../../data/martech';
import { Plus, Minus } from 'lucide-react';

const MartechFAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    return (
        <section className="bg-bg-dark py-24 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">Common Questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-bold text-white text-lg pr-8">{faq.question}</span>
                                {openIndex === i ? <Minus className="text-primary flex-shrink-0" /> : <Plus className="text-white/50 flex-shrink-0" />}
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-white/70 leading-relaxed border-t border-white/5">
                                            {faq.answer}
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

export default MartechFAQ;
