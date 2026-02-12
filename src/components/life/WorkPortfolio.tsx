import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const WorkPortfolio: React.FC = () => {
    const tiles = [
        { title: "Positioning & narrative", desc: "Clarifying the story." },
        { title: "GTM strategy", desc: "Market entry & growth." },
        { title: "Brand systems", desc: "Identity at scale." },
        { title: "Websites & landing pages", desc: "High-converting digital." },
        { title: "Thought leadership", desc: "Reports, decks, content." },
        { title: "MarTech & analytics", desc: "Infrastructure for growth." }
    ];

    return (
        <section className="bg-bg-dark py-32">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-16">
                    <p className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4">
                        What we build
                    </p>
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-white">
                        Work that moves the <span className="font-serif italic text-white/50">needle.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tiles.map((tile, i) => (
                        <div key={i} className="aspect-square bg-white/5 border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group">
                            <div className="flex justify-end">
                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary transition-colors">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">{tile.title}</h3>
                                <p className="text-white/60">{tile.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkPortfolio;
