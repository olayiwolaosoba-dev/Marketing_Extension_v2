import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CareerGrowth: React.FC = () => {
    return (
        <section className="bg-bg-dark py-24 md:py-32 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <p className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-6">
                            Your Growth Starts Here
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white mb-8 leading-tight">
                            Accelerate <br /> <span className="font-serif italic text-primary">your career.</span>
                        </h2>
                        <p className="text-xl text-white/70 mb-10 leading-relaxed">
                            Transparent growth paths. Mentorship. Feedback that makes you better. Opportunities to lead early—based on merit, not time.
                        </p>
                        <button className="text-white font-bold text-lg flex items-center gap-3 group hover:text-primary transition-colors">
                            How we grow people <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>

                    {/* Visual Content */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="aspect-[4/5] md:aspect-square bg-gray-800 rounded-3xl overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-700">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                                className="w-full h-full object-cover opacity-80"
                            />
                        </div>

                        {/* Floating Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="absolute bottom-12 -left-8 md:-left-12 bg-white p-8 rounded-2xl shadow-xl max-w-xs"
                        >
                            <p className="font-display font-bold text-xl text-bg-dark leading-snug mb-2">
                                "High standards, low ego. Real feedback. Real growth."
                            </p>
                            <div className="h-1 w-12 bg-primary mt-4" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerGrowth;
