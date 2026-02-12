import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
    text: string;
}

const CTASection: React.FC<CTAProps> = ({ text }) => {
    return (
        <section id="contact" className="py-24 bg-bg-dark text-center">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-10 leading-tight">
                    {text}
                </h2>
                <a href="/strategy-call" className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/25 group">
                    Book a strategy call <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </section>
    );
};

export default CTASection;
