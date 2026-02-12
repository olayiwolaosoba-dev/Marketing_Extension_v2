import React from 'react';

const ToolstackMarquee: React.FC = () => {
    const tools = [
        "Notion", "Airtable", "Figma", "Webflow", "HubSpot", "Zapier", "Slack", "Linear", "Midjourney", "OpenAI", "Runway", "ElevenLabs"
    ];

    return (
        <section className="bg-bg-dark pb-32 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl mb-12 text-center">
                <p className="text-white/40 font-bold tracking-[0.2em] text-xs uppercase mb-4">
                    Our Toolstack
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full">
                <div className="flex gap-16 whitespace-nowrap animate-marquee">
                    {[...tools, ...tools, ...tools].map((tool, i) => (
                        <span key={i} className="text-3xl font-display font-bold text-white/20 hover:text-white transition-colors cursor-default">
                            {tool}
                        </span>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-white/40 text-sm font-medium">Tools are interchangeable. Standards aren’t.</p>
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
             `}</style>
        </section>
    );
};

export default ToolstackMarquee;
