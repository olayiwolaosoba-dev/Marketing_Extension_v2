import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import AboutHero from '../components/about/AboutHero';
import Manifesto from '../components/about/Manifesto';
import TrustBar from '../components/about/TrustBar';
import SmarterWay from '../components/about/SmarterWay';
import FounderQuote from '../components/about/FounderQuote';
import Values from '../components/about/Values';
import OperatingSystem from '../components/about/OperatingSystem';
import AboutTeam from '../components/about/AboutTeam';
import CareersCTA from '../components/about/CareersCTA';
import AboutTestimonials from '../components/about/AboutTestimonials';

const AboutPage: React.FC = () => {
    // Sticky Nav Logic
    const [activeTab, setActiveTab] = useState('overview');
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.getElementById('about-nav');
            if (nav) {
                const sticky = nav.offsetTop;
                setIsSticky(window.pageYOffset > sticky);
            }

            // Simple spy logic for active tab (can be improved)
            const sections = ['overview', 'how-we-work', 'values', 'team', 'careers'];
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        setActiveTab(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setActiveTab(id);
        const el = document.getElementById(id);
        if (el) {
            window.scrollTo({
                top: el.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-bg-light min-h-screen">
            <AboutHero />

            {/* Sticky Sub Nav */}
            <div id="about-nav" className={`z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-all ${isSticky ? 'fixed top-[72px] left-0 right-0 shadow-sm' : 'relative'}`}>
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex items-center gap-8 overflow-x-auto no-scrollbar py-4">
                        {[
                            { id: 'overview', label: 'Overview' },
                            { id: 'careers', label: 'Careers' },
                            { id: 'life-at-me', label: 'Life at ME', path: '/about/life-at-marketing-extension' },
                            { id: 'how-we-use-ai', label: 'How We Use AI', path: '/about/how-we-use-ai' }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => tab.path ? window.location.href = tab.path : scrollToSection(tab.id)}
                                className={`text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-colors pb-1 border-b-2 ${activeTab === tab.id ? 'text-primary border-primary' : 'text-text-muted border-transparent hover:text-text-dark'}`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <Manifesto />
            <TrustBar />
            <OperatingSystem /> {/* Serves as Overview content roughly */}
            <SmarterWay />
            <FounderQuote />
            <Values />
            <AboutTeam />
            <AboutTestimonials />
            <CareersCTA />
        </div>
    );
};

export default AboutPage;
