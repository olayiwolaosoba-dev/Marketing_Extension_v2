import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface SnapshotProps {
    data: {
        label: string;
        value: string;
    }[];
}

const StickySnapshotBar: React.FC<SnapshotProps> = ({ data }) => {
    const [isSticky, setIsSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 800);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sections = [
        { id: 'situation', label: 'Situation' },
        { id: 'approach', label: 'Approach' },
        { id: 'work', label: 'The Work' },
        { id: 'results', label: 'Results' }
    ];

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 120;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setMenuOpen(false);
    };

    return (
        <>
            <div className={`w-full border-y border-gray-200 bg-white z-40 transition-all duration-300 ${isSticky ? 'fixed top-[88px] shadow-sm' : 'relative'}`}>
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Meta Data (Hidden on mobile sticky) */}
                        <div className={`hidden md:flex items-center gap-8 ${isSticky ? 'opacity-0 lg:opacity-100 transition-opacity' : 'opacity-100'}`}>
                            {data.map((item, i) => (
                                <div key={i}>
                                    <div className="text-[10px] uppercase tracking-widest text-text-muted font-bold mb-0.5">{item.label}</div>
                                    <div className="text-sm font-medium text-bg-dark">{item.value}</div>
                                </div>
                            ))}
                        </div>

                        {/* Jump To Menu */}
                        <div className="flex-1 md:flex-none flex justify-end">
                            <div className="relative">
                                <button
                                    onClick={() => setMenuOpen(!menuOpen)}
                                    className="flex items-center gap-2 bg-bg-dark text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-primary transition-colors"
                                >
                                    Jump to section <ChevronDown size={14} className={`transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {menuOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2"
                                        >
                                            {sections.map((section) => (
                                                <button
                                                    key={section.id}
                                                    onClick={() => scrollTo(section.id)}
                                                    className="w-full text-left px-5 py-3 text-sm font-medium text-text-muted hover:bg-bg-gray hover:text-bg-dark transition-colors flex items-center justify-between group"
                                                >
                                                    {section.label}
                                                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Spacer to prevent jump when sticky */}
            {isSticky && <div className="h-20 hidden md:block" />}
        </>
    );
};

export default StickySnapshotBar;
