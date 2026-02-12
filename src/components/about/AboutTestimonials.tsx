import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const AboutTestimonials: React.FC = () => {
    const [current, setCurrent] = useState(0);

    const testimonials = [
        {
            quote: "We don’t fabricate quotes. This section updates as clients approve public references.",
            author: "Client Voice (Coming Soon)",
            role: "Marketing Director",
            company: "Fintech Uni",
            placeholder: true
        },
        {
            quote: "Real results from real partners will appear here. We prioritize confidentiality until success is public.",
            author: "Client Voice (Coming Soon)",
            role: "VP Growth",
            company: "HealthTech Scaleup",
            placeholder: true
        }
    ];

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="bg-bg-dark py-32 overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl relative">
                <div className="absolute top-0 left-0 text-white/5">
                    <Quote size={120} />
                </div>

                <div className="relative z-10 text-center">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-white/5 p-12 rounded-3xl backdrop-blur-sm border border-white/5"
                        >
                            <p className="text-2xl md:text-3xl font-display font-medium text-white mb-8 leading-relaxed">
                                "{testimonials[current].quote}"
                            </p>
                            <div>
                                <div className="font-bold text-lg text-white">{testimonials[current].author}</div>
                                <div className="text-primary text-sm uppercase tracking-widest mt-1">
                                    {testimonials[current].role}, {testimonials[current].company}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-center gap-4 mt-8">
                        <button onClick={prev} className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={next} className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTestimonials;
