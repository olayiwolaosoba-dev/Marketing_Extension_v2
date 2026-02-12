import React from 'react';

const PurposeTiles: React.FC = () => {
    return (
        <section className="bg-bg-dark py-24 md:py-32">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <p className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4">
                        Our Purpose
                    </p>
                    <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-8">
                        Where world-class talent meets <span className="font-serif italic text-primary">real impact.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Vision Tile */}
                    <div className="group relative aspect-[16/10] rounded-3xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                        <div className="absolute bottom-0 left-0 p-10 md:p-12">
                            <h3 className="text-3xl font-display font-bold text-white mb-4">Our Vision</h3>
                            <p className="text-white/80 text-lg leading-relaxed">
                                To become the default operating system for high-growth marketing in Africa.
                            </p>
                        </div>
                    </div>

                    {/* Mission Tile */}
                    <div className="group relative aspect-[16/10] rounded-3xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                        <div className="absolute bottom-0 left-0 p-10 md:p-12">
                            <h3 className="text-3xl font-display font-bold text-white mb-4">Our Mission</h3>
                            <p className="text-white/80 text-lg leading-relaxed">
                                To professionalize marketing execution by bridging the gap between strategy and delivery.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PurposeTiles;
