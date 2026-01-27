
import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import ModalForm from '../common/ModalForm';

interface WhyUsHeroProps {
    pill: string;
    title: string;
    subtitle: string;
    RightVisual: React.FC;
}

const WhyUsHero: React.FC<WhyUsHeroProps> = ({ pill, title, subtitle, RightVisual }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="bg-bg-dark relative pt-32 pb-24 overflow-hidden">
            <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} context={pill} />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm">
                                <span className="text-white/60 font-bold text-[10px] uppercase tracking-[0.2em]">{pill}</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
                                {title}
                            </h1>

                            <p className="text-xl text-white/60 mb-10 max-w-lg leading-relaxed font-light">
                                {subtitle}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full sm:w-auto bg-primary text-white border border-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-bg-dark hover:border-white transition-all shadow-[0_4px_20px_rgba(255,107,61,0.3)] hover:shadow-[0_4px_30px_rgba(255,107,61,0.5)] flex items-center justify-center gap-2 group"
                                >
                                    Book a call
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                                    className="w-full sm:w-auto bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                                >
                                    See how we work
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Visual Tile */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative z-10 bg-white/5 border border-white/10 rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] shadow-2xl backdrop-blur-sm"
                        >
                            <RightVisual />

                            {/* Reflection/Glare */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                        </motion.div>

                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUsHero;
