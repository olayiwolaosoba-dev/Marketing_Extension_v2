import React from 'react';

interface ResultsProps {
    metrics: Array<{ value: string; label: string }>;
    quote?: {
        text: string;
        author: string;
        role: string;
    };
}

const ResultsSection: React.FC<ResultsProps> = ({ metrics, quote }) => {
    return (
        <section id="results" className="py-24 bg-bg-light">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
                {metrics.map((m, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                        <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                            {m.value}
                        </div>
                        <div className="text-sm font-bold text-text-muted uppercase tracking-wider">
                            {m.label}
                        </div>
                    </div>
                ))}
            </div>

            {quote && (
                <div className="max-w-4xl mx-auto text-center">
                    <blockquote className="text-2xl md:text-3xl font-display font-medium leading-relaxed text-bg-dark mb-8">
                        "{quote.text}"
                    </blockquote>
                    <div>
                        <div className="font-bold text-bg-dark">{quote.author}</div>
                        <div className="text-text-muted text-sm">{quote.role}</div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ResultsSection;
