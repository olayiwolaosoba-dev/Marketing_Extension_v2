
import React from 'react';

const ProofStrip: React.FC = () => {
    // Placeholder logos using simple text or generic SVGs for now
    const labels = ["Fintech", "B2B SaaS", "Consumer Apps", "Enterprise", "Agency Partners"];

    return (
        <section className="bg-bg-dark border-y border-white/5 py-10 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest shrink-0">
                    Proof, not promises. Trusted by teams in:
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-12 gap-y-6 grayscale opacity-40 hover:opacity-80 transition-opacity duration-500">
                    {labels.map((label, i) => (
                        <span key={i} className="text-white font-bold text-lg font-display tracking-tight select-none">
                            {label}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProofStrip;
