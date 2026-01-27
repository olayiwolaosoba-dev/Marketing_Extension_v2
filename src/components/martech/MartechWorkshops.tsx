import React from 'react';
import { ArrowRight, Calendar, Users, MapPin } from 'lucide-react';

const workshops = [
    {
        title: "MarTech Stack Health Clinic",
        date: "Feb 14, 2026",
        type: "Live Workshop",
        desc: "Bring your stack diagram. We'll redline it live and identify your biggest bottlenecks."
    },
    {
        title: "AI for Marketing Ops",
        date: "Mar 02, 2026",
        type: "Hands-on Lab",
        desc: "Build your first autonomous lead enrichment agent using Clay and OpenAI."
    },
    {
        title: "Attribution Reality Check",
        date: "Mar 20, 2026",
        type: "Masterclass",
        desc: "Why GA4 is lying to you, and how to build a SQL-based attribution model."
    }
];

const MartechWorkshops: React.FC = () => {
    return (
        <section className="bg-bg-dark py-24 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Workshops for modern <br /> growth teams.
                        </h2>
                        <p className="text-white/60">Stop guessing. Learn from engineers who build this stuff daily.</p>
                    </div>
                    <button className="text-white hover:text-primary transition-colors flex items-center gap-2 font-bold">
                        View all events <ArrowRight size={16} />
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {workshops.map((event, i) => (
                        <div key={i} className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors relative overflow-hidden">
                            {/* Date Badge */}
                            <div className="absolute top-8 right-8 text-right">
                                <div className="text-xs font-bold uppercase tracking-widest text-primary mb-1">{event.type}</div>
                                <div className="text-white font-mono text-sm opacity-60">{event.date}</div>
                            </div>

                            <div className="mt-8 mb-6">
                                <h3 className="text-2xl font-bold text-white mb-4 pr-16">{event.title}</h3>
                                <p className="text-white/60 leading-relaxed text-sm">
                                    {event.desc}
                                </p>
                            </div>

                            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                <button className="text-white text-sm font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                                    Reserve a Seat <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MartechWorkshops;
