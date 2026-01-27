import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const ConsultingTestimonials: React.FC = () => {
    const [current, setCurrent] = useState(0);

    const testimonials = [
        {
            quote: "We didn't need another agency executing random tactics. We needed a brain. Marketing Extension gave us the strategy, the roadmap, and the discipline to actually hit our Series B targets.",
            author: "Alex Rivera",
            role: "Founder & CEO, FinStack",
            stats: [
                { value: "3.5x", label: "ARR Growth" },
                { value: "45%", label: "CAC Reduction" },
                { value: "Series B", label: "Funding Secured" }
            ],
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
        },
        {
            quote: "The clarity they brought to our positioning was transformative. We stopped competing on features and started winning on narrative. The GTM plan they built is our bible.",
            author: "Elena Kovic",
            role: "VP Marketing, HealthCore",
            stats: [
                { value: "2x", label: "Lead Quality" },
                { value: "3mo", label: "Sales Cycle Drop" },
                { value: "#1", label: "Category Leader" }
            ],
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-24 md:py-32 bg-bg-light relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-gray-200/50 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="mb-16">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">Executive Feedback</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-text-dark">
                        Trusted by <span className="text-primary">market leaders</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Image Column */}
                    <div className="lg:col-span-5 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src={testimonials[current].image}
                                    alt={testimonials[current].author}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </motion.div>
                        </AnimatePresence>
                        {/* Navigation Buttons floating on image or below on mobile */}
                        <div className="absolute bottom-8 right-8 flex gap-4">
                            <button
                                onClick={prev}
                                className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-text-dark transition-all duration-300 shadow-lg"
                                aria-label="Previous testimonial"
                            >
                                <ArrowLeft size={24} />
                            </button>
                            <button
                                onClick={next}
                                className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-text-dark transition-all duration-300 shadow-lg"
                                aria-label="Next testimonial"
                            >
                                <ArrowRight size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-7">
                        <Quote className="text-primary mb-8 opacity-20" size={80} fill="currentColor" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <blockquote className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-text-dark leading-tight mb-10">
                                    "{testimonials[current].quote}"
                                </blockquote>

                                <div className="mb-12 border-l-4 border-primary pl-6">
                                    <cite className="not-italic block">
                                        <span className="text-xl font-bold text-text-dark block mb-1">{testimonials[current].author}</span>
                                        <span className="text-text-muted text-lg">{testimonials[current].role}</span>
                                    </cite>
                                </div>

                                {/* Metrics Grid */}
                                <div className="grid grid-cols-3 gap-8 py-8 border-t border-gray-200">
                                    {testimonials[current].stats.map((stat, i) => (
                                        <div key={i}>
                                            <div className="text-3xl md:text-4xl font-display font-bold text-text-dark mb-1">
                                                {stat.value}
                                            </div>
                                            <div className="text-sm font-bold uppercase tracking-wide text-text-muted">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultingTestimonials;
