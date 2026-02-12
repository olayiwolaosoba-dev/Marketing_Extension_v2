import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ChapterNav: React.FC = () => {
    const [activeSection, setActiveSection] = useState('situation');

    // Define chapters
    const chapters = [
        { id: 'situation', label: 'The Situation' },
        { id: 'approach', label: 'Our Approach' },
        { id: 'work', label: 'The Work' },
        { id: 'results', label: 'Results' },
        { id: 'tooling', label: 'Tooling' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 300; // Offset

            chapters.forEach(chapter => {
                const element = document.getElementById(chapter.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(chapter.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
    };

    return (
        <nav className="hidden lg:block sticky top-48 w-full max-w-[200px]">
            <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold mb-6 pl-4 border-l-2 border-transparent">
                Contents
            </p>
            <div className="space-y-1">
                {chapters.map((chapter) => (
                    <button
                        key={chapter.id}
                        onClick={() => scrollTo(chapter.id)}
                        className={`block w-full text-left py-2 pl-4 text-sm font-medium border-l-2 transition-all duration-300 ${activeSection === chapter.id
                                ? 'border-primary text-bg-dark'
                                : 'border-gray-100 text-text-muted hover:text-text-dark hover:border-gray-300'
                            }`}
                    >
                        {chapter.label}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default ChapterNav;
