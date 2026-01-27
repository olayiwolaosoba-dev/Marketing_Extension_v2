import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, Calculator, Database, Brain, Shield } from 'lucide-react';

const pillars = [
    {
        id: 'product',
        title: 'Product & Web Engineering',
        desc: 'Marketing sites that feel like software products.',
        items: ['Next.js / Headless', 'Custom Calculators', 'Performance Engineering'],
        image: '/images/martech/pillar_product.png',
        icon: Calculator
    },
    {
        id: 'automation',
        title: 'Marketing Systems & Automation',
        desc: 'The plumbing that makes growth repeatable.',
        items: ['CDP & Warehouse Setup', 'Cross-Channel Orchestration', 'Revenue Data Pipelines'],
        image: '/images/martech/pillar_automation.png',
        icon: Database
    },
    {
        id: 'ai',
        title: 'AI Enablement & Agents',
        desc: 'Not just prompts. Autonomous infrastructure.',
        items: ['Proprietary LLM Agents', 'Knowledge Base APIs', 'Team AI Training'],
        image: '/images/martech/pillar_ai.png',
        icon: Brain
    },
    {
        id: 'managed',
        title: 'Managed MarTech',
        desc: 'We guard the stack while you ship campaigns.',
        items: ['24/7 Monitoring', 'Vendor Governance', 'Monthly Optimization'],
        image: '/images/martech/pillar_managed.png',
        icon: Shield
    }
];

const MartechPillars: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % pillars.length);
    };

    // Calculate visible pillars based on activeIndex
    // We want to show 3 full pillars, but in a carousel way
    // Simple verification: Just slide the "window" of pillars
    const visiblePillars = [
        pillars[activeIndex % pillars.length],
        pillars[(activeIndex + 1) % pillars.length],
        pillars[(activeIndex + 2) % pillars.length],
    ];

    return (
        <section className="bg-bg-dark py-24 border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">Core Capabilities</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white max-w-2xl">
                            Comprehensive engineering for <br /> the modern marketing stack.
                        </h2>
                    </div>
                </div>

                <div className="relative">
                    {/* Carousel Container */}
                    <div className="flex gap-6 overflow-hidden">
                        <AnimatePresence mode='popLayout'>
                            {visiblePillars.map((pillar, i) => (
                                <motion.div
                                    key={`${pillar.id}-${activeIndex}`} // Force re-render on slide for smooth animation
                                    layout
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5, ease: "circOut" }}
                                    className="relative w-full md:w-1/3 h-[600px] rounded-2xl overflow-hidden group border border-white/10 shrink-0 cursor-pointer"
                                >
                                    {/* Background Image */}
                                    <div className="absolute inset-0">
                                        <img
                                            src={pillar.image}
                                            alt={pillar.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
                                    </div>

                                    {/* Content Overlay */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                                        {/* Icon */}
                                        <div className="mb-auto p-3 rounded-xl bg-white/10 w-fit backdrop-blur-md border border-white/10 text-white group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                                            <pillar.icon size={24} />
                                        </div>

                                        {/* Title area - moves up on hover */}
                                        <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                                            <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                                                {pillar.title}
                                            </h3>

                                            {/* Details - Reveal on Hover */}
                                            <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden transition-all duration-500 delay-100">
                                                <p className="text-white/70 mb-6 text-sm leading-relaxed border-t border-white/10 pt-4 mt-2">
                                                    {pillar.desc}
                                                </p>
                                                <ul className="space-y-3 mb-6">
                                                    {pillar.items.map((item, idx) => (
                                                        <li key={idx} className="flex items-center gap-3 text-sm text-white/90">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="text-primary font-bold text-sm flex items-center gap-2 uppercase tracking-wide">
                                                    Learn More <ArrowRight size={16} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {/* Hint specific card (Arrow Area) */}
                        <button
                            onClick={nextSlide}
                            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 hover:bg-primary backdrop-blur-md rounded-full items-center justify-center border border-white/20 text-white z-20 transition-all hover:scale-110 translate-x-1/2 shadow-2xl"
                        >
                            <ChevronRight size={32} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MartechPillars;
