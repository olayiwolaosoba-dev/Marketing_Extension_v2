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
    const [activeIndex, setActiveIndex] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isPaused, setIsPaused] = useState(false);

    const scrollIdxRef = useRef(0);
    const resetInProgressRef = useRef(false);

    const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior = 'smooth') => {
        if (!containerRef.current) return;
        const cards = containerRef.current.querySelectorAll('[data-card-index]');
        const card = cards[index] as HTMLElement | undefined;
        if (card) containerRef.current.scrollTo({ left: card.offsetLeft, behavior });
    }, []);

    const scheduleLoopReset = useCallback((cloneScrollIdx: number) => {
        if (resetInProgressRef.current) return;
        resetInProgressRef.current = true;
        const realIdx = cloneScrollIdx % LEADERS.length;
        setTimeout(() => {
            scrollToIndex(realIdx, 'instant');
            scrollIdxRef.current = realIdx;
            setActiveIndex(realIdx);
            resetInProgressRef.current = false;
        }, 500);
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
            if (dist < minDist) { minDist = dist; closest = Number(card.getAttribute('data-card-index')); }
        });

        if (closest >= LEADERS.length) {
            setActiveIndex(closest % LEADERS.length);
            scheduleLoopReset(closest);
        } else {
            scrollIdxRef.current = closest;
            setActiveIndex(closest);
        }
    }, [scheduleLoopReset]);

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

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            const next = scrollIdxRef.current + 1;
            if (next < LOOP_LEADERS.length) {
                scrollToIndex(next, 'smooth');
                scrollIdxRef.current = next;
                setActiveIndex(next % LEADERS.length);
                if (next >= LEADERS.length) scheduleLoopReset(next);
            } else {
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
            {/* Carousel track */}
            <div
                ref={containerRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 px-6 scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {LOOP_LEADERS.map((leader, index) => {
                    const realIdx = index % LEADERS.length;
                    return (
                        <motion.div
                            key={`${leader.id}-${index}`}
                            data-card-index={index}
                            className={[
                                'relative flex-shrink-0 snap-start',
                                'w-[85vw] md:w-[360px] aspect-[3/4]',
                                'rounded-2xl overflow-hidden',
                                'shadow-sm hover:shadow-xl',
                                'border border-[#ECECEC]',
                                'transition-all duration-500 group/card',
                                activeIndex === realIdx
                                    ? 'opacity-100'
                                    : 'opacity-75 group-hover/carousel:opacity-100',
                            ].join(' ')}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: (index < LEADERS.length ? index : 0) * 0.07 }}
                        >
                            {/*
                             * FULL-CARD IMAGE
                             * Default: scale(1.35) from the top — clips to show face + chest only
                             * Hover:   scale(1.0)  — smoothly zooms out to reveal the
                             *          complete illustrated portrait
                             *
                             * object-cover + same portrait aspect-ratio → image fills
                             * the card with near-zero cropping at scale 1.0.
                             * overflow-hidden on the parent clips the overage at 1.35.
                             */}
                            <img
                                src={leader.image}
                                alt={leader.name}
                                width="800"
                                height="1067"
                                loading={index < LEADERS.length ? 'eager' : 'lazy'}
                                className="absolute inset-0 w-full h-full object-cover
                                           scale-[1.35] group-hover/card:scale-100
                                           transition-transform duration-700 ease-in-out"
                                style={{ transformOrigin: 'center top', objectPosition: 'center top' }}
                            />

                            {/*
                             * Gradient veil — keeps footer text readable over the image.
                             * Deepens slightly on hover for a cinematic look.
                             */}
                            <div className="absolute inset-0 bg-gradient-to-t
                                            from-black/55 via-black/10 to-transparent
                                            transition-opacity duration-500
                                            opacity-80 group-hover/card:opacity-100
                                            pointer-events-none" />

                            {/*
                             * COMPACT FOOTER OVERLAY
                             * Sits at the very bottom of the card (absolute).
                             * ~35% smaller than previous design:
                             *   • p-3 vs p-5  (12px vs 20px padding)
                             *   • text-[17px] vs text-xl name
                             *   • text-[11px] vs text-sm role
                             *   • no divider bar
                             *   • smaller capsule chips
                             * On hover: slight frosted-glass effect.
                             */}
                            <div className="absolute bottom-0 left-0 right-0
                                            bg-white/95 backdrop-blur-[2px]
                                            group-hover/card:bg-white/88
                                            transition-colors duration-500
                                            px-4 pt-3 pb-3">

                                {/* Name row */}
                                <div className="flex items-start justify-between gap-2">
                                    <div className="min-w-0">
                                        <h3 className="text-[17px] font-bold font-display text-gray-900 leading-snug truncate">
                                            {leader.name}
                                        </h3>
                                        <p className="text-[11px] font-semibold text-primary mt-0.5 leading-none">
                                            {leader.role}
                                        </p>
                                    </div>
                                    <button
                                        aria-label={`View ${leader.name}'s LinkedIn profile`}
                                        className="flex-shrink-0 text-gray-400 hover:text-[#0077b5] transition-colors p-0.5 mt-0.5"
                                    >
                                        <Linkedin size={17} />
                                    </button>
                                </div>

                                {/* Skill capsules */}
                                <div className="flex flex-wrap gap-1.5 mt-2.5">
                                    {leader.capsules.map((cap, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-[3px] bg-gray-50 text-[9px] font-bold uppercase
                                                       tracking-wider text-text-muted rounded border border-gray-100
                                                       leading-none"
                                        >
                                            {cap}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Prev / Next arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none flex justify-between px-4 md:px-8">
                <button
                    aria-label="Previous team member"
                    onClick={scrollPrev}
                    className={`w-12 h-12 rounded-full bg-white/90 shadow-lg backdrop-blur-sm
                                flex items-center justify-center text-text-dark
                                pointer-events-auto transition-all duration-300
                                hover:scale-110 hover:text-primary border border-gray-100
                                ${!canScrollLeft
                                    ? 'opacity-0 translate-x-4 pointer-events-none'
                                    : 'opacity-0 group-hover/carousel:opacity-100 translate-x-0'}`}
                >
                    <ArrowLeft size={20} />
                </button>
                <button
                    aria-label="Next team member"
                    onClick={scrollNext}
                    className={`w-12 h-12 rounded-full bg-white/90 shadow-lg backdrop-blur-sm
                                flex items-center justify-center text-text-dark
                                pointer-events-auto transition-all duration-300
                                hover:scale-110 hover:text-primary border border-gray-100
                                ${!canScrollRight
                                    ? 'opacity-0 -translate-x-4 pointer-events-none'
                                    : 'opacity-0 group-hover/carousel:opacity-100 translate-x-0'}`}
                >
                    <ArrowRight size={20} />
                </button>
            </div>

            {/* Progress dots */}
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
                        className={`h-2 rounded-full transition-all duration-300
                            ${activeIndex === idx ? 'w-6 bg-primary' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default LeadershipCarousel;
