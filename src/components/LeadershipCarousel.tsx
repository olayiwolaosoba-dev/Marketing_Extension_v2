import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Linkedin } from 'lucide-react';

import oshobaImg from '../assets/team/oshoba.png';
import adebolaImg from '../assets/team/adebola.png';
import favourImg from '../assets/team/favour.png';
import motilolaImg from '../assets/team/motilola.png';
import temiladeImg from '../assets/team/temilade.png';
import preciousImg from '../assets/team/precious.png';
import stanleyImg from '../assets/team/stanley.png';
import ladeImg from '../assets/team/lade.png';

interface LeaderProfile {
    id: number;
    name: string;
    role: string;
    image?: string;           // Optional — shows gradient placeholder when absent
    capsules: string[];
    linkedinUrl?: string;
}

const LEADERS: LeaderProfile[] = [
    {
        id: 1,
        name: "Hugh Oshoba",
        role: "Principal Marketing Consultant",
        image: oshobaImg,
        capsules: ["Growth Advisory", "Brand Strategy", "Performance Mktg", "MarComms"],
    },
    {
        id: 2,
        name: "Adebola Olusunmade",
        role: "Director of Operations & Engagement",
        image: adebolaImg,
        capsules: ["Operations", "Client Engagement", "Project Delivery", "Team Leadership"],
    },
    {
        id: 3,
        name: "Temilade Adedire",
        role: "Business Operations Associate",
        image: temiladeImg,
        capsules: ["Business Ops", "Project Coordination", "Client Support", "Reporting"],
    },
    {
        id: 4,
        name: "Motilola Fabowale",
        role: "Senior Manager, Accounts & Consulting",
        image: motilolaImg,
        capsules: ["Account Strategy", "GTM Consulting", "Client Leadership", "Pipeline"],
    },
    {
        id: 5,
        name: "Favour Eze",
        role: "Manager, Accounts & Consulting",
        image: favourImg,
        capsules: ["Account Mgmt", "Growth Campaigns", "Content Strategy", "Analytics"],
    },
    {
        id: 6,
        name: "Precious Atuonwu",
        role: "Senior Associate, Accounts & Consulting",
        image: preciousImg,
        capsules: ["Account Support", "Campaign Exec", "Content Creation", "Research"],
    },
    {
        id: 7,
        name: "Stanley Onwuka",
        role: "Director of Engineering & Technology",
        image: stanleyImg,
        capsules: ["Engineering", "MarTech Stack", "AI Integration", "Platform Dev"],
    },
    {
        id: 8,
        name: "Lade Koleowo",
        role: "Design & Creative Lead",
        image: ladeImg,
        capsules: ["Brand Design", "Creative Direction", "Visual Identity", "Content Design"],
    },
];

// Duplicate cards for seamless infinite loop: [L0..L7, L0'..L7']
const LOOP_LEADERS = [...LEADERS, ...LEADERS];

/* ─────────────────────────────────────────────────────────────────────────────
   Extracts two-letter initials (first + last name first chars)
────────────────────────────────────────────────────────────────────────────── */
const getInitials = (name: string) =>
    name.split(' ').slice(0, 2).map(n => n[0].toUpperCase()).join('');

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
                    const hasImage = !!leader.image;
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
                            {/* ── Photo or gradient placeholder ─────────────────── */}
                            {hasImage ? (
                                /*
                                 * FULL-CARD IMAGE
                                 * Default: scale(1.35) from top — clips to show face + chest only
                                 * Hover:   scale(1.0)  — zooms out to reveal full illustrated portrait
                                 */
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
                            ) : (
                                /*
                                 * PLACEHOLDER — shown while a photo hasn't been uploaded yet.
                                 * Dark brand-tinted gradient with ghost initials.
                                 */
                                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#0f0f1a] to-[#05060A] flex items-center justify-center">
                                    {/* Subtle grid texture */}
                                    <div
                                        className="absolute inset-0 opacity-[0.04]"
                                        style={{
                                            backgroundImage: 'linear-gradient(#FF6B3D 1px, transparent 1px), linear-gradient(90deg, #FF6B3D 1px, transparent 1px)',
                                            backgroundSize: '40px 40px',
                                        }}
                                    />
                                    {/* Ghost initials */}
                                    <span className="relative text-white/10 font-display font-bold leading-none select-none"
                                          style={{ fontSize: 'clamp(5rem, 18vw, 9rem)' }}>
                                        {getInitials(leader.name)}
                                    </span>
                                    {/* "Photo coming soon" chip */}
                                    <span className="absolute bottom-[128px] left-1/2 -translate-x-1/2 whitespace-nowrap
                                                     px-3 py-1 rounded-full bg-white/5 border border-white/10
                                                     text-[9px] font-bold uppercase tracking-[0.15em] text-white/30">
                                        Photo coming soon
                                    </span>
                                </div>
                            )}

                            {/*
                             * Gradient veil — keeps footer text readable.
                             * Only rendered for photo cards (placeholder has its own dark bg).
                             */}
                            {hasImage && (
                                <div className="absolute inset-0 bg-gradient-to-t
                                                from-black/55 via-black/10 to-transparent
                                                transition-opacity duration-500
                                                opacity-80 group-hover/card:opacity-100
                                                pointer-events-none" />
                            )}

                            {/*
                             * FOOTER OVERLAY — fixed h-[112px] so every card's white
                             * section starts at the identical position from the bottom,
                             * regardless of capsule wrap behaviour.
                             */}
                            <div className="absolute bottom-0 left-0 right-0 h-[112px]
                                            bg-white overflow-hidden
                                            group-hover/card:bg-white/92 group-hover/card:backdrop-blur-sm
                                            transition-colors duration-500
                                            px-4 pt-3.5 pb-3.5 flex flex-col justify-between">

                                {/* Name + LinkedIn row */}
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

                                {/* Skill capsules — wrap freely inside fixed-height container */}
                                <div className="flex flex-wrap gap-1.5">
                                    {leader.capsules.map((cap, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-[3px] bg-gray-50 text-[9px] font-bold
                                                       uppercase tracking-wider text-text-muted rounded
                                                       border border-gray-100 leading-none"
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
