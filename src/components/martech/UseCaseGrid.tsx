import React from 'react';
import { useCases } from '../../data/martech';

const UseCaseGrid: React.FC = () => {
    return (
        <section className="bg-bg-light py-24">
            <div className="container mx-auto px-6 max-w-7xl">
                <h2 className="text-4xl font-display font-bold text-bg-dark mb-16 text-center">
                    Use cases that <span className="text-primary">compound.</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {useCases.map((uc, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                                {uc.impact}
                            </span>
                            <h3 className="text-lg font-bold text-bg-dark mb-3">{uc.title}</h3>

                            <div className="space-y-3">
                                <div className="text-xs text-red-500/80 bg-red-50 p-2 rounded-lg">
                                    <span className="font-bold block mb-1">Problem:</span>
                                    {uc.problem}
                                </div>
                                <div className="text-xs text-green-600/80 bg-green-50 p-2 rounded-lg">
                                    <span className="font-bold block mb-1">Fix:</span>
                                    {uc.solution}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCaseGrid;
