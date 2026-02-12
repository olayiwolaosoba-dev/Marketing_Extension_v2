import React from 'react';

const DeiSection: React.FC = () => {
    return (
        <section className="bg-white py-24 md:py-32">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    <div className="flex-1">
                        <p className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-6">
                            DEI&A
                        </p>
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-bg-dark mb-8">
                            Diversity is in <br /> <span className="font-serif italic text-primary">our DNA.</span>
                        </h2>
                        <p className="text-xl text-text-muted leading-relaxed font-light">
                            As a globally distributed, Africa-rooted team, we bring together different perspectives, experiences, and cultures to drive creativity and innovation. We don't just hire for "culture fit" but for "culture add".
                        </p>
                    </div>
                    <div className="flex-1 w-full relative">
                        <div className="aspect-[4/3] rounded-[40px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Abstract Shape Decoration */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-bg-gray rounded-full -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeiSection;
