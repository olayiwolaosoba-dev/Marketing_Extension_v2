import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Linkedin } from 'lucide-react';

import oshobaImg from '../assets/team/oshoba.png';
import adebolaImg from '../assets/team/adebola.png';
import favourImg from '../assets/team/favour.png';
import motilolaImg from '../assets/team/motilola.png';
import temiladeImg from '../assets/team/temilade.png';
import preciousImg from '../assets/team/precious.png';

interface LeaderProfile {
    id: number;
    name: string;
    role: string;
    image: string;
    capsules: string[];
    linkedinUrl?: string;
}

const LEADERS: LeaderProfile[] = [
    {
        id: 1,
        name: "Hugh Oshoba",
        role: "Chief Executive Officer",
        image: oshobaImg,
        capsules: ["Growth Strategy", "Corp Dev", "Brand Vision", "Leadership"],
    },
    {
        id: 2,
        name: "Adebola Olusunmade",
        role: "Chief Technology Officer",
        image: adebolaImg,
        capsules: ["AI Infrastructure", "MarTech", "Product Eng", "Scale"],
    },
    {
        id: 3,
        name: "Favour",
        role: "VP of Growth",
        image: favourImg,
        capsules: ["Demand Gen", "Paid Media", "Lifecycle", "Analytics"],
    },
    {
        id: 4,
        name: "Motilola",
        role: "Head of Strategy",
        image: motilolaImg,
        capsules: ["GTM", "Partnerships", "Market Research", "Ops"],
    },
    {
        id: 5,
        name: "Temilade",
        role: "Creative Director",
        image: temiladeImg,
        capsules: ["Brand Design", "UX/UI", "Content Strategy", "Storytelling"],
    },
    {
        id: 6,
        name: "Precious",
        role: "VP of Sales",
        image: preciousImg,
        capsules: ["Enterprise Sales", "RevOps", "Negotiation", "Team Building"],
    },
];

const LeadershipCarousel: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isPaused, setIsPaused] = useState(false);

    // Check scroll buttons visibility & Update Active Index
    const updateScrollState = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

            // Calculate active index based on LEFT position for snap-start
            const cards = containerRef.current.querySelectorAll('[data-card-index]');
            let closestCard = 0;
            let minDistance = Infinity;

            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();
                const containerRect = containerRef.current!.getBoundingClientRect();

                // Distance from left edge of container
                const distance = Math.abs(rect.left - containerRect.left);

                if (distance < minDistance) {
                    minDistance = distance;
                    const index = Number(card.getAttribute('data-card-index'));
                    closestCard = index;
                }
            });
            setActiveIndex(closestCard);
        }
    };

    // Auto-scroll effect
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (!isPaused) {
            interval = setInterval(() => {
                const nextIndex = (activeIndex + 1) % LEADERS.length;
                // If we reach the end, scroll back to start? 
                // Alternatively, just standard infinite or stop at end. 
                // User said "scroll automatically after every 2 seconds". 
                // Standard behavior: loop or bounce. Let's loop for now by scrolling to next.
                // But scrollToCard(0) might be abrupt if we are at the end.
                // Let's standard "next" behavior.
                if (activeIndex < LEADERS.length - 1) {
                    scrollToCard(activeIndex + 1);
                } else {
                    scrollToCard(0); // Reset to start
                }
            }, 3000); // 3 seconds is better for "slowly". 2 seconds is quite fast. User said "slowly". 
            // Wait, request said "after every 2 seconds but slowly". 
            // Setting to 2500ms for balance.
        }

        return () => clearInterval(interval);
    }, [activeIndex, isPaused]);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', updateScrollState);
            updateScrollState();
            window.addEventListener('resize', updateScrollState);
        }
        return () => {
            if (container) container.removeEventListener('scroll', updateScrollState);
            window.removeEventListener('resize', updateScrollState);
        };
    }, []);

    const scrollToCard = (index: number) => {
        if (containerRef.current) {
            const cards = containerRef.current.querySelectorAll('[data-card-index]');
            if (cards[index]) {
                const card = cards[index] as HTMLElement;
                const container = containerRef.current;

                // Calculate position to center or align left? Logic was 'inline: start' which means align left.
                // We want to align the card to the left of the container.
                // So we just need the card's offsetLeft relative to the container.

                // However, card.offsetLeft is relative to offsetParent. 
                // If container is relative, then card.offsetLeft is correct.

                const scrollLeft = card.offsetLeft;
                container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            }
        }
    };

    const scrollNext = () => {
        if (activeIndex < LEADERS.length - 1) {
            scrollToCard(activeIndex + 1);
        }
    };

    const scrollPrev = () => {
        if (activeIndex > 0) {
            scrollToCard(activeIndex - 1);
        }
    };

    return (
        <div
            className="relative group/carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Carousel Container */}
            <div
                ref={containerRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 px-6 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {LEADERS.map((leader, index) => (
                    <motion.div
                        key={leader.id}
                        data-card-index={index}
                        className={"relative flex-shrink-0 snap-start w-[85vw] md:w-[360px] aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-[#ECECEC] shadow-sm hover:shadow-md transition-all duration-500 group/card " + (activeIndex === index ? "opacity-100" : "opacity-80 group-hover/carousel:opacity-100")}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex flex-col h-full w-full">
                            {/* Image Section */}
                            <div className="relative h-[68%] w-full overflow-hidden bg-gray-100">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    width="800"
                                    height="1067"
                                    loading="lazy"
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/card:scale-105"
                                />
                            </div>

                            {/* Footer Section */}
                            <div className="bg-white flex-1 p-5 flex flex-col justify-between border-t border-gray-100 relative">
                                <div>
                                    <div className="flex justify-between items-start mb-1">
                                        <div>
                                            <h3 className="text-xl font-bold font-display text-gray-900 tracking-tight">{leader.name}</h3>
                                            <p className="text-sm font-medium text-primary mt-1">{leader.role}</p>
                                        </div>
                                        <button
                                            aria-label={`View ${leader.name}'s LinkedIn profile`}
                                            className="text-gray-400 hover:text-[#0077b5] transition-colors p-1"
                                        >
                                            <Linkedin size={20} />
                                        </button>
                                    </div>

                                    <div className="w-12 h-0.5 bg-gray-100 my-4" />

                                    <div className="flex flex-wrap gap-2">
                                        {leader.capsules.map((cap, i) => (
                                            <span
                                                key={i}
                                                className="px-2.5 py-1 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-text-muted rounded-md border border-gray-100"
                                            >
                                                {cap}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                ))}
            </div>

            {/* Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none flex justify-between px-4 md:px-8">
                { /* Prev Arrow */}
                <button
                    aria-label="Previous team member"
                    onClick={scrollPrev}
                    className={`
            w-12 h-12 rounded-full bg-white/90 shadow-lg backdrop-blur-sm
            flex items-center justify-center text-text-dark
            pointer-events-auto transition-all duration-300
            hover:scale-110 hover:text-primary border border-gray-100
            ${!canScrollLeft ? 'opacity-0 translate-x-4 pointer-events-none' : 'opacity-0 group-hover/carousel:opacity-100 translate-x-0'}
          `}
                >
                    <ArrowLeft size={20} />
                </button>

                { /* Next Arrow */}
                <button
                    aria-label="Next team member"
                    onClick={scrollNext}
                    className={`
            w-12 h-12 rounded-full bg-white/90 shadow-lg backdrop-blur-sm
            flex items-center justify-center text-text-dark
            pointer-events-auto transition-all duration-300
            hover:scale-110 hover:text-primary border border-gray-100
            ${!canScrollRight ? 'opacity-0 -translate-x-4 pointer-events-none' : 'opacity-0 group-hover/carousel:opacity-100 translate-x-0'}
          `}
                >
                    <ArrowRight size={20} />
                </button>
            </div>

            {/* Progress Indicator (Line + Dots) */}
            <div className="flex items-center justify-center mt-8 gap-1">
                <div className="h-[2px] w-24 bg-gray-200 rounded-full overflow-hidden mr-4 hidden md:block">
                    <motion.div
                        className="h-full bg-primary"
                        animate={{ width: `${((activeIndex + 1) / LEADERS.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>

                {LEADERS.map((leader, idx) => (
                    <button
                        key={idx}
                        aria-label={`Go to ${leader.name}'s card`}
                        aria-current={activeIndex === idx ? 'true' : undefined}
                        onClick={() => scrollToCard(idx)}
                        className={`
              h-2 rounded-full transition-all duration-300
              ${activeIndex === idx ? 'w-6 bg-primary' : 'w-2 bg-gray-300 hover:bg-gray-400'}
            `}
                    />
                ))}
            </div>
        </div>
    );
};

export default LeadershipCarousel;
