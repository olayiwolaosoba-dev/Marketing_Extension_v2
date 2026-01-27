import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { BookOpen, Users, Video, Award } from 'lucide-react';

const TrainingEnablementPage: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="bg-bg-dark min-h-screen pt-32">
            <div className="container mx-auto px-6 max-w-4xl text-center mb-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-xs font-bold uppercase tracking-widest mb-6 border border-pink-500/20">
                    <BookOpen size={12} /> Training & Enablement
                </div>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-8">
                    Don't just buy tools. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">Build capability.</span>
                </h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                    We train your team to own the machine. Custom playbooks, recorded workshops, and certification paths for your specific stack.
                </p>
            </div>

            <div className="container mx-auto px-6 max-w-7xl mb-24">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {[
                        { title: "Custom Playbooks", desc: "Written specifically for your instance and your rules.", icon: BookOpen },
                        { title: "Live Workshops", desc: "Hands-on training sessions with your actual data.", icon: Users },
                        { title: "Video Library", desc: "Screen-share recordings of every core workflow.", icon: Video }
                    ].map((item, i) => (
                        <div key={i} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/50 transition-colors">
                            <div className="w-16 h-16 mx-auto bg-black rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <item.icon className="text-pink-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-white/60">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default TrainingEnablementPage;
