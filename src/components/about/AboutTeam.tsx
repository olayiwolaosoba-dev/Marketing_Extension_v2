import React from 'react';
import { Globe } from 'lucide-react';

const AboutTeam: React.FC = () => {
    const leaders = [
        {
            name: "Osoba",
            role: "Founding Principal & Marketing Systems Architect",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Motilola",
            role: "Practice Lead, Growth & Client Partnerships",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Lade",
            role: "Practice Lead, Creative Experience & Content+",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Stanley",
            role: "Practice Lead, Technology & Systems",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Adebola",
            role: "Director of Operations & Performance",
            image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <section className="bg-white pb-32" id="team">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-bg-dark mb-4">
                        A team of operators <br />
                        <span className="font-serif italic text-primary">and leaders.</span>
                    </h2>
                </div>

                {/* Leadership Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
                    {leaders.map((leader, i) => (
                        <div key={i} className="group">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-gray-100 relative">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <h4 className="font-bold text-lg text-bg-dark">{leader.name}</h4>
                            <p className="text-text-muted text-sm leading-snug">{leader.role}</p>
                        </div>
                    ))}
                </div>

                {/* Global Bench */}
                <div className="bg-bg-dark rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-no-repeat bg-center bg-contain" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                                <Globe className="text-primary" /> Global Bench
                            </h3>
                            <p className="text-white/60 max-w-lg">
                                115+ consultants and specialists across Nigeria, Ghana, Kenya, Rwanda, South Africa, Canada, and the UK.
                            </p>
                        </div>
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="w-12 h-12 rounded-full border-2 border-bg-dark bg-gray-600 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full border-2 border-bg-dark bg-primary flex items-center justify-center text-white font-bold text-xs">
                                +100
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTeam;
