import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareersCTA: React.FC = () => {
    return (
        <section className="bg-primary/90 py-24 relative overflow-hidden text-white" id="careers">
            <div className="absolute inset-0 bg-bg-dark mix-blend-multiply opacity-50" />
            <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                    Help build the marketing <br />
                    operating system for Africa.
                </h2>
                <p className="text-xl opacity-90 leading-relaxed mb-10 max-w-2xl mx-auto">
                    To build the definitive marketing operating system and playbook for Africa’s most ambitious organisations—so marketing finally pulls its weight as a disciplined driver of business outcomes.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/about/careers"
                        className="bg-white text-bg-dark px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2"
                    >
                        Explore Careers <ArrowRight size={20} />
                    </Link>
                    <Link
                        to="/strategy-call"
                        className="px-8 py-4 rounded-full font-bold text-lg border border-white/30 hover:bg-white/10 transition-colors"
                    >
                        Book a demo
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CareersCTA;
