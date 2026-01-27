import React from 'react';

const TrustStrip: React.FC = () => {
    // Using placeholders for logos
    const logos = ['Techstars', 'Y Combinator', 'Swiss Association', 'Google', 'Meta', 'Amazon', 'Spotify', 'Uber'];

    return (
        <div className="bg-bg-dark border-t border-white/5 py-8 overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10 mb-6 text-center">
                <span className="inline-block relative text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                    <span className="relative z-10 bg-bg-dark px-4">Proof, not promises</span>
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -z-0"></div>
                </span>
            </div>

            <div className="flex overflow-hidden group mask-gradient-horizontal">
                <div className="flex space-x-16 animate-infinite-scroll whitespace-nowrap group-hover:paused">
                    {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                            {logos.map((logo, index) => (
                                <span key={`${i}-${index}`} className="text-white/30 font-display text-xl md:text-2xl font-bold mx-4 hover:text-white transition-colors duration-500 cursor-default select-none">
                                    {logo}
                                </span>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
                <div className="flex space-x-16 animate-infinite-scroll whitespace-nowrap group-hover:paused ml-16" aria-hidden="true">
                    {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                            {logos.map((logo, index) => (
                                <span key={`${i}-${index}`} className="text-white/30 font-display text-xl md:text-2xl font-bold mx-4 hover:text-white transition-colors duration-500 cursor-default select-none">
                                    {logo}
                                </span>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Fade edges for mobile scrolling */}
            <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none" />
        </div>
    );
};

export default TrustStrip;
