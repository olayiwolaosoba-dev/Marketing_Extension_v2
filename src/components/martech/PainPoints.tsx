import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { painPoints } from '../../data/martech';

const PainPoints: React.FC = () => {
    // Interactive Symptoms Checklist
    const [checkedItems, setCheckedItems] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        if (checkedItems.includes(index)) {
            setCheckedItems(checkedItems.filter(i => i !== index));
        } else {
            setCheckedItems([...checkedItems, index]);
        }
    };

    return (
        <section className="bg-bg-light py-24 border-b border-gray-200">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Copy */}
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-bg-dark mb-8">
                            Most MarTech stacks don't fail. <span className="text-primary">They drift.</span>
                        </h2>
                        <ul className="space-y-6">
                            {painPoints.map((point, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="mt-1">
                                        <AlertCircle className="text-orange-500" size={20} />
                                    </div>
                                    <p className="text-xl text-bg-dark/70 font-medium leading-relaxed">
                                        {point}
                                    </p>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Interactive Checklist */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                        <div className="mb-6 flex items-center justify-between">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-bg-dark/40">Symptoms we fix</h3>
                            <span className="text-xs font-bold text-primary">{checkedItems.length} Selected</span>
                        </div>

                        <div className="space-y-3">
                            {[
                                "No clear system of record",
                                "Lists uploaded manually",
                                "Reporting takes >2 hours",
                                "Duplicate leads everywhere",
                                "UTM parameters inconsistent",
                                "Email domains burning out",
                                "Sales hates the 'leads'",
                                "Tools not talking to each other"
                            ].map((symptom, i) => (
                                <div
                                    key={i}
                                    onClick={() => toggleItem(i)}
                                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${checkedItems.includes(i)
                                            ? 'bg-primary/5 border-primary text-primary font-bold'
                                            : 'bg-gray-50 border-gray-100 text-bg-dark/60 hover:bg-gray-100'
                                        }`}
                                >
                                    <span>{symptom}</span>
                                    {checkedItems.includes(i) && <CheckCircle size={18} className="text-primary" />}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PainPoints;
