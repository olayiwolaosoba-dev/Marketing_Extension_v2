import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import zoneImg from '../assets/case-studies/zone.jpg';
import quidaxImg from '../assets/case-studies/quidax.jpg';
import smartcomplyImg from '../assets/case-studies/smartcomply.jpg';
import verypayImg from '../assets/case-studies/verypay.jpg';
import mercurieImg from '../assets/case-studies/mercurie.png';
import sabitrackImg from '../assets/case-studies/sabitrack.jpg';
import tamyImg from '../assets/case-studies/tamy.jpg';
import googleImg from '../assets/case-studies/google.jpg';

interface WinData {
  image: string;
  name: string;
  desc: string;
  metric: string;
  tags: string[];
  delay: number;
}

const WINS: WinData[] = [
  { image: zoneImg,        name: 'Zone',             desc: 'Regulated blockchain payment infrastructure network.',                                               metric: '₦1T+ Transactions',           tags: ['Fintech', 'Nigeria'],      delay: 0.1 },
  { image: quidaxImg,      name: 'Quidax',           desc: 'Making crypto feel mainstream through culture-led, education-first growth.',                         metric: '100K+ Signups',               tags: ['Crypto', 'West Africa'],   delay: 0.2 },
  { image: smartcomplyImg, name: 'Smartcomply',      desc: 'Group narrative + demand engine across a multi-product cybersecurity & compliance suite.',            metric: '2–3× Enterprise Pipeline',    tags: ['RegTech', 'Africa'],       delay: 0.3 },
  { image: verypayImg,     name: 'VERYPAY',          desc: 'Embedded in-country marketing leadership for multi-market expansion and adoption.',                   metric: '4+ In-Country Teams',         tags: ['Fintech', 'Africa'],       delay: 0.4 },
  { image: mercurieImg,    name: 'Mercurie',         desc: 'Reframed "payments for SaaS" into an infrastructure story that travels across markets.',             metric: '~40% Admin Savings',          tags: ['B2B SaaS', 'Nigeria'],     delay: 0.1 },
  { image: sabitrackImg,   name: 'SabiTrack',        desc: 'From early-stage idea to launch-ready narrative, assets, and GTM foundations.',                      metric: 'Launched in <6 Months',       tags: ['B2B SaaS', 'UK'],          delay: 0.2 },
  { image: tamyImg,        name: 'Tamy Consulting',  desc: 'Consulting repositioning + content and PR system built for pipeline credibility.',                    metric: '3–4 Tier-1 Features Secured', tags: ['Consulting', 'Nigeria'],   delay: 0.3 },
  { image: googleImg,      name: 'Google West Africa', desc: 'Content Production (The Buffet) for a leading telecommunications provider.',                       metric: '1M+ Views',                   tags: ['Tech', 'West Africa'],     delay: 0.4 },
];

/* ─────────────────────────────────────────────────────────────
   DESKTOP CARD  (tall, used in the 4-col grid on lg+)
   • Starts in greyscale; click unlocks full colour (toggles).
   • Hover still shows description + metric text (desktop UX).
   • Auto-resets colour when scrolled out of view.
───────────────────────────────────────────────────────────── */
const DesktopWinCard: React.FC<WinData> = ({ image, name, desc, metric, tags, delay }) => {
  const [colourUnlocked, setColourUnlocked] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (!entry.isIntersecting) setColourUnlocked(false); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative h-[500px] overflow-hidden cursor-pointer"
      onClick={() => setColourUnlocked(c => !c)}
    >
      {/* Image — greyscale by default, colour on click */}
      <img
        src={image}
        alt={name}
        className={[
          'absolute inset-0 w-full h-full object-cover',
          'transition-all duration-700 group-hover:scale-105',
          colourUnlocked ? 'grayscale-0' : 'grayscale',
        ].join(' ')}
      />

      {/* Base gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />

      {/* Hover / revealed overlay */}
      <div className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${
        colourUnlocked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
      }`} />

      {/* Colour-unlocked border accent */}
      {colourUnlocked && (
        <div className="absolute inset-0 ring-1 ring-inset ring-primary/60 pointer-events-none" />
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-7">
        <p className="text-white/70 text-[10px] font-bold uppercase tracking-[0.18em]">{name}</p>

        {/* Description — hover or click */}
        <div className={`mt-5 transition-all duration-500 ${
          colourUnlocked
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0'
        }`}>
          <p className="text-white/90 text-sm leading-relaxed">{desc}</p>
        </div>

        {/* Metric + tags */}
        <div className="mt-auto">
          <div className={`text-xl font-display font-bold text-white mb-3 leading-tight transition-all duration-500 ${
            colourUnlocked
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0'
          }`}>
            {metric}
          </div>
          <div className="flex gap-2 flex-wrap">
            {tags.map(tag => (
              <span key={tag} className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-[10px] font-bold uppercase tracking-tight text-white/80 border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────────────────────
   MOBILE CARD  (compact, lives inside horizontal carousels)
   • Same greyscale → colour-on-click behaviour.
   • No hover states (touch devices have none).
   • Compact height for two-row layout.
───────────────────────────────────────────────────────────── */
const MobileWinCard: React.FC<WinData & { scrollContainerRef: React.RefObject<HTMLDivElement> }> = ({
  image, name, desc, metric, tags, scrollContainerRef,
}) => {
  const [colourUnlocked, setColourUnlocked] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Reset colour when card scrolls out of the horizontal container's view
  useEffect(() => {
    const card = cardRef.current;
    const container = scrollContainerRef.current;
    if (!card || !container) return;

    const check = () => {
      const cRect = container.getBoundingClientRect();
      const kRect = card.getBoundingClientRect();
      const visible = kRect.left < cRect.right - 20 && kRect.right > cRect.left + 20;
      if (!visible) setColourUnlocked(false);
    };

    container.addEventListener('scroll', check, { passive: true });
    return () => container.removeEventListener('scroll', check);
  }, [scrollContainerRef]);

  return (
    <div
      ref={cardRef}
      className="relative w-[88vw] max-w-[420px] aspect-[9/16] overflow-hidden cursor-pointer rounded-2xl"
      onClick={() => setColourUnlocked(c => !c)}
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        loading="lazy"
        className={[
          'absolute inset-0 w-full h-full object-cover',
          'transition-all duration-700',
          colourUnlocked ? 'grayscale-0 scale-105' : 'grayscale scale-100',
        ].join(' ')}
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5" />

      {/* Reveal overlay */}
      <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${
        colourUnlocked ? 'opacity-100' : 'opacity-0'
      }`} />

      {/* Colour-unlock accent ring */}
      {colourUnlocked && (
        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/70 pointer-events-none" />
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-6">
        <p className="text-white/70 text-[10px] font-bold uppercase tracking-[0.18em]">{name}</p>

        {/* Description — only shown when colour is unlocked */}
        <div className={`mt-3 transition-all duration-500 ${
          colourUnlocked ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <p className="text-white/90 text-sm leading-relaxed line-clamp-5">{desc}</p>
        </div>

        <div className="mt-auto">
          <div className={`text-xl font-display font-bold text-white mb-3 leading-tight transition-all duration-500 ${
            colourUnlocked ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
            {metric}
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {tags.map(tag => (
              <span key={tag} className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-[9px] font-bold uppercase tracking-tight text-white/80 border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   MOBILE CAROUSEL ROW
   Horizontal snap scroll with subtle ghost prev/next arrows.
   Arrows are only shown on mobile and only when scrollable
   in that direction — they never appear on desktop.
───────────────────────────────────────────────────────────── */
const MobileCarouselRow: React.FC<{ cards: WinData[] }> = ({ cards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft]   = useState(false);
  const [canRight, setCanRight] = useState(true);

  const syncState = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener('scroll', syncState, { passive: true });
    syncState();
    return () => el.removeEventListener('scroll', syncState);
  }, [syncState]);

  const scrollBy = (dir: 1 | -1) => {
    const el = containerRef.current;
    if (!el) return;
    // Snap to next/prev card width
    const cardW = el.querySelector('[data-mobile-card]')?.clientWidth ?? 240;
    el.scrollBy({ left: dir * (cardW + 12), behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Horizontal scroll track */}
      <div
        ref={containerRef}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory px-[6vw] pb-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cards.map(card => (
          <div key={card.name} data-mobile-card className="flex-shrink-0 snap-center">
            <MobileWinCard {...card} scrollContainerRef={containerRef} />
          </div>
        ))}
      </div>

      {/*
        Subtle ghost arrow — prev
        Design: tiny frosted circle, low-opacity icon.
        Only renders on mobile (parent hides on lg+).
        Fades in/out based on scroll position.
      */}
      <button
        aria-label="Scroll left"
        onClick={() => scrollBy(-1)}
        className={[
          'absolute left-0 top-1/2 -translate-y-1/2 z-10',
          'w-7 h-7 rounded-full flex items-center justify-center',
          'bg-black/20 backdrop-blur-sm border border-white/15',
          'transition-all duration-300',
          canLeft ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
      >
        <ChevronLeft size={13} className="text-white/80" />
      </button>

      {/* Subtle ghost arrow — next */}
      <button
        aria-label="Scroll right"
        onClick={() => scrollBy(1)}
        className={[
          'absolute right-0 top-1/2 -translate-y-1/2 z-10',
          'w-7 h-7 rounded-full flex items-center justify-center',
          'bg-black/20 backdrop-blur-sm border border-white/15',
          'transition-all duration-300',
          canRight ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
      >
        <ChevronRight size={13} className="text-white/80" />
      </button>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   DESKTOP CAROUSEL  (lg+)
   One full-width row — 4 cards visible at a time.
   Subtle prev/next arrows fade in on hover; hidden when at limits.
   Mobile is completely untouched.
───────────────────────────────────────────────────────────── */
const DesktopCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft]   = useState(false);
  const [canRight, setCanRight] = useState(true);

  const syncState = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener('scroll', syncState, { passive: true });
    syncState();
    return () => el.removeEventListener('scroll', syncState);
  }, [syncState]);

  const scrollBy = (dir: 1 | -1) => {
    const el = containerRef.current;
    if (!el) return;
    // Scroll exactly one card width (each card = 25% of container)
    const cardW = el.querySelector('[data-desk-card]')?.clientWidth ?? el.clientWidth / 4;
    el.scrollBy({ left: dir * cardW, behavior: 'smooth' });
  };

  return (
    <div className="relative group/desk-carousel">
      {/* Scroll track — no gap, flush cards exactly like the original grid */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto overflow-y-hidden overscroll-x-contain snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {WINS.map(win => (
          <div key={win.name} data-desk-card className="flex-shrink-0 snap-start w-1/4">
            <DesktopWinCard {...win} />
          </div>
        ))}
      </div>

      {/* ── Prev arrow ── */}
      <button
        aria-label="Previous case study"
        onClick={() => scrollBy(-1)}
        className={[
          'absolute left-3 top-1/2 -translate-y-1/2 z-20',
          'w-9 h-9 rounded-full flex items-center justify-center',
          'bg-black/30 backdrop-blur-md border border-white/12',
          'text-white/65 hover:text-white hover:bg-black/50',
          'transition-all duration-300',
          // fade in on hover of parent; disappear when nothing to scroll
          canLeft
            ? 'opacity-0 group-hover/desk-carousel:opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none',
        ].join(' ')}
      >
        <ChevronLeft size={15} />
      </button>

      {/* ── Next arrow ── */}
      <button
        aria-label="Next case study"
        onClick={() => scrollBy(1)}
        className={[
          'absolute right-3 top-1/2 -translate-y-1/2 z-20',
          'w-9 h-9 rounded-full flex items-center justify-center',
          'bg-black/30 backdrop-blur-md border border-white/12',
          'text-white/65 hover:text-white hover:bg-black/50',
          'transition-all duration-300',
          canRight
            ? 'opacity-0 group-hover/desk-carousel:opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none',
        ].join(' ')}
      >
        <ChevronRight size={15} />
      </button>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   FEATURED WINS  (main export)

   Mobile  (<lg):  header + single horizontal snap carousel
   Desktop (≥lg):  header + single-row carousel with subtle arrows
───────────────────────────────────────────────────────────── */
const FeaturedWins: React.FC = () => {
  // Single row — all 8 wins scroll horizontally on mobile

  return (
    <section className="bg-bg-light pt-24 md:pt-32">
      {/* Section header */}
      <div className="container mx-auto px-6 max-w-7xl mb-12 md:mb-20">
        <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-6">
          Growth Marketing Case Studies
        </p>
        <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
          Our <span className="text-primary">featured</span> client wins
        </h2>
        {/* Mobile hint */}
        <p className="lg:hidden mt-3 text-sm text-text-muted">
          Tap a card to reveal the story in colour.
        </p>
      </div>

      {/* ── MOBILE: single horizontal snap carousel (IG reel size) ── */}
      <div className="lg:hidden">
        <MobileCarouselRow cards={WINS} />
      </div>

      {/* ── DESKTOP: single-row carousel with subtle prev/next arrows ── */}
      <div className="hidden lg:block">
        <DesktopCarousel />
      </div>
    </section>
  );
};

export default FeaturedWins;
