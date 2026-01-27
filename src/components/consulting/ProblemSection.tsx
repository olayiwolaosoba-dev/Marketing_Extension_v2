import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowDown } from 'lucide-react';
import { problems } from '../../data/consulting';

const ProblemSection: React.FC = () => {
    return (
        <section className="bg-bg-light py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="max-w-3xl mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-bg-dark mb-6">
                        Why growth stalls in <br /> <span className="text-primary">scale-ups & enterprises.</span>
                    </h2>
                    <p className="text-xl text-bg-dark/60 leading-relaxed">
                        The tactics that got you to $1M ARR won't get you to $10M. You encounter the "Growth Ceilling" typically caused by broken engines, not bad products.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((prob, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                        >
                            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <AlertTriangle size={24} className="text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-bg-dark mb-4 group-hover:text-primary transition-colors">{prob.title}</h3>
                            <p className="text-bg-dark/60 text-sm leading-relaxed">
                                {prob.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Visualization of Symptom -> Root Cause -> Fix */}
                <div className="mt-24 border-t border-gray-200 pt-16">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

                        <div className="flex-1 opacity-50">
                            <span className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2 block">The Symptom</span>
                            <h4 className="text-2xl font-display font-bold text-bg-dark">Unpredictable Revenue</h4>
                        </div>

                        <ArrowDown className="text-gray-300 rotate-0 md:-rotate-90" />

                        <div className="flex-1 opacity-75">
                            <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2 block">The Root Cause</span>
                            <h4 className="text-2xl font-display font-bold text-bg-dark">Disconnected Sytems</h4>
                        </div>

                        <ArrowDown className="text-gray-300 rotate-0 md:-rotate-90" />

                        <div className="flex-1">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">The Fix</span>
                            <h4 className="text-3xl font-display font-bold text-primary">Marketing Operating System</h4>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProblemSection;
