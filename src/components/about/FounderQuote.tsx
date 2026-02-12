import React from 'react';

const FounderQuote: React.FC = () => {
    return (
        <section className="bg-bg-dark py-24 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="bg-[#151515] rounded-[40px] p-8 md:p-16 border border-white/5 relative overflow-hidden">
                    {/* Decorative accent */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                    <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-20 items-center relative z-10">
                        {/* Portrait */}
                        <div className="relative group">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                                {/* Placeholder for Osoba */}
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                                    alt="Osoba"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent" />
                            </div>
                            {/* Accent Frame */}
                            <div className="absolute -inset-4 border border-primary/20 rounded-3xl -z-10 translate-x-2 translate-y-2" />
                        </div>

                        {/* Quote */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-px w-8 bg-primary" />
                                <span className="text-primary font-bold tracking-widest text-xs uppercase">Why We Exist</span>
                            </div>

                            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white leading-tight mb-10">
                                "We built Marketing Extension after years of sitting on both sides of the table—watching marketing get treated like campaigns instead of an engine. Our job is to install the system: <span className="text-white/40">clarity, talent, execution, and tools</span>—so marketing finally pulls its weight."
                            </blockquote>

                            <div>
                                <div className="text-white font-bold text-xl">Osoba</div>
                                <div className="text-white/60">Founding Principal & Marketing Systems Architect</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderQuote;
