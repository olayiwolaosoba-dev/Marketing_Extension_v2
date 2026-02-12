import React from 'react';

const TrustBar: React.FC = () => {
    // Placeholder logic for logos - using text or generic shapes if images aren't real yet.
    // User requested placeholders if real logos not available.
    return (
        <section className="bg-bg-dark pb-32">
            <div className="container mx-auto px-6 max-w-7xl border-t border-white/10 pt-16">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="shrink-0 text-center md:text-left">
                        <h3 className="text-white font-bold text-lg">Trusted by ambitious teams</h3>
                        <p className="text-white/40 text-sm">Fintech, Infrastructure, Venture, Growth</p>
                    </div>

                    {/* Logo Row Gradient Mask */}
                    <div className="flex-1 w-full overflow-hidden relative mask-gradient-horizontal">
                        <div className="flex items-center justify-between gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                            {/* Placeholders for logos */}
                            {['Paystack', 'Kuda', 'Eden Life', 'Bamboo', 'Chowdeck', 'Moniepoint'].map((name, i) => (
                                <div key={i} className="text-white font-display font-bold text-2xl shrink-0">
                                    {name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
