import React from 'react';
import { Check } from 'lucide-react';

const CryptoDeliverables: React.FC = () => {
    const rows = [
        { name: 'Tokenomics Narrative', baseline: true, growth: true, leader: true },
        { name: 'Community Sprints', baseline: true, growth: true, leader: true },
        { name: 'Exchange/Dev Rel', baseline: false, growth: true, leader: true },
        { name: 'KOL Management', baseline: false, growth: true, leader: true },
        { name: 'On-chain Analytics', baseline: false, growth: false, leader: true },
    ];

    return (
        <section className="py-24 bg-white border-y border-gray-100">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-display font-bold text-text-dark">Scope that scales with your market cap.</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px]">
                        <thead>
                            <tr className="border-b-2 border-gray-100">
                                <th className="text-left py-4 px-6 text-sm font-bold uppercase tracking-widest text-text-muted w-1/4">Capability</th>
                                <th className="text-center py-4 px-6 text-sm font-bold uppercase tracking-widest text-text-muted w-1/4">Launch</th>
                                <th className="text-center py-4 px-6 text-sm font-bold uppercase tracking-widest text-primary w-1/4">Growth</th>
                                <th className="text-center py-4 px-6 text-sm font-bold uppercase tracking-widest text-text-dark w-1/4">Dominance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, idx) => (
                                <tr key={idx} className="border-b border-gray-50 hover:bg-bg-light transition-colors">
                                    <td className="py-6 px-6 font-bold text-text-dark">{row.name}</td>
                                    <td className="py-6 px-6 text-center">
                                        {row.baseline ? <Check className="inline-block text-text-dark/40" size={20} /> : <span className="block w-2 h-2 rounded-full bg-gray-200 mx-auto" />}
                                    </td>
                                    <td className="py-6 px-6 text-center bg-bg-light/50">
                                        {row.growth ? <Check className="inline-block text-primary" size={20} /> : <span className="block w-2 h-2 rounded-full bg-gray-200 mx-auto" />}
                                    </td>
                                    <td className="py-6 px-6 text-center">
                                        {row.leader ? <Check className="inline-block text-text-dark" size={20} /> : <span className="block w-2 h-2 rounded-full bg-gray-200 mx-auto" />}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
};

export default CryptoDeliverables;
