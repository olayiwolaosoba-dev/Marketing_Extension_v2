import React, { useRef, useState, useEffect, useCallback } from 'react';
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

// Duplicate cards for seamless infinite loop: [L0..L5, L0'..L5']
const LOOP_LEADERS = [...LEADERS, ...LEADERS];

const LeadershipCarousel: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    // activeIndex is always 0-5 (real card index, used for dots/display)
    const [activeIndex, setActiveIndex] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isPaused, setIsPaused] = useState(false);

    // scrollIdxRef tracks the actual scroll position across 0-11 (including clones)
    const scrollIdxRef = useRef(0);
    // prevents double-scheduling a reset when already resetting
    const resetInProgressRef = useRef(false);

    const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior = 'smooth') => {
        if (!containerRef.current) return;
        const cards = containerRef.current.querySelectorAll('[data-card-index]');
        const card = cards[index] as HTMLElement | undefined;
        if (card) {
            containerRef.current.scrollTo({ left: card.offsetLeft, behavior });
        }
    }, []);

    // After scrolling into clone zone (index >= LEADERS.length), silently snap back to real card
    const scheduleLoopReset = useCallback((cloneScrollIdx: number) => {
        if (resetInProgressRef.current) return;
        resetInProgressRef.current = true;
        const realIdx = cloneScrollIdx % LEADERS.length;
        setTimeout(() => {
            scrollToIndex(realIdx, 'instant');
            scrollIdxRef.current = realIdx;
            setActiveIndex(realIdx);
            resetInProgressRef.current = false;
        }, 500); // wait for smooth scroll animation to finish
    }, [scrollToIndex]);

    const updateScrollState = useCallback(() => {
        if (!containerRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

        const cards = containerRef.current.querySelectorAll('[data-card-index]');
        const containerRect = containerRef.current.getBoundingClientRect();
        let closest = 0;
        let minDist = Infinity;

        cards.forEach((card) => {
            const dist = Math.abs(card.getBoundingClientRect().left - containerRect.left);
            if (dist < minDist) {
                minDist = dist;
                closest = Number(card.getAttribute('data-card-index'));
            }
        });

        // If user manually scrolled into the clone zone, reset to real equivalent
        if (closest >= LEADERS.length) {
            setActiveIndex(closest % LEADERS.length);
            scheduleLoopReset(closest);
        } else {
            scrollIdxRef.current = closest;
            setActiveIndex(closest);
        }
    }, [scheduleLoopReset]);

    // Mount: reset scroll to first card
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        container.scrollLeft = 0;
        container.addEventListener('scroll', updateScrollState);
        window.addEventListener('resize', updateScrollState);
        updateScrollState();
        return () => {
            container.removeEventListener('scroll', updateScrollState);
            window.removeEventListener('resize', updateScrollState);
        };
    }, [updateScrollState]);

    // Auto-scroll: advance one card every 3s, loop seamlessly through clones
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            const next = scrollIdxRef.current + 1;
            if (next < LOOP_LEADERS.length) {
                scrollToIndex(next, 'smooth');
                scrollIdxRef.current = next;
                setActiveIndex(next % LEADERS.length);
                // If we just entered the clone zone, schedule the silent reset
                if (next >= LEADERS.length) {
                    scheduleLoopReset(next);
                }
            } else {
                // Safety fallback: beyond all clones
                scrollToIndex(0, 'instant');
                scrollIdxRef.current = 0;
                setActiveIndex(0);
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [isPaused, scrollToIndex, scheduleLoopReset]);

    const scrollNext = () => {
        const next = scrollIdxRef.current + 1;
        if (next < LOOP_LEADERS.length) {
            scrollToIndex(next, 'smooth');
            scrollIdxRef.current = next;
            setActiveIndex(next % LEADERS.length);
            if (next >= LEADERS.length) scheduleLoopReset(next);
        }
    };

    const scrollPrev = () => {
        const prev = scrollIdxRef.current - 1;
        if (prev >= 0) {
            scrollToIndex(prev, 'smooth');
            scrollIdxRef.current = prev;
            setActiveIndex(prev % LEADERS.length);
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
                {LOOP_LEADERS.map((leader, index) => {
                    const realIdx = index % LEADERS.length;
                    const isActive = activeIndex === realIdx && (
                        // highlight the real card OR the currently-visible clone
                        index === scrollIdxRef.current || index === scrollIdxRef.current % LEADERS.length
                    );
                    return (
                        <motion.div
                            key={`${leader.id}-${index}`}
                            data-card-index={index}
                            className={"relative flex-shrink-0 snap-start w-[85vw] md:w-[360px] aspect-[3/4] rounded-2xl overflow-hidden bg-white border border-[#ECECEC] shadow-sm hover:shadow-md transition-all duration-500 group/card " + (activeIndex === realIdx ? "opacity-100" : "opacity-80 group-hover/carousel:opacity-100")}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: (index < LEADERS.length ? index : 0) * 0.07 }}
                        >
                            <div className="flex flex-col h-full w-full">
                                {/* Image Section */}
                                <div className="relative h-[68%] w-full overflow-hidden bg-gray-100">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        width="800"
                                        height="1067"
                                        loading={index < LEADERS.length ? 'eager' : 'lazy'}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                                        style={{ objectPosition: 'center 8%' }}
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
                    );
                })}
            </div>

            {/* Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none flex justify-between px-4 md:px-8">
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

            {/* Progress dots — always 6, always reflect real index */}
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
                        onClick={() => {
                            scrollToIndex(idx, 'smooth');
                            scrollIdxRef.current = idx;
                            setActiveIndex(idx);
                        }}
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
