import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

import zoneImg from '../assets/case-studies/zone.jpg';
import quidaxImg from '../assets/case-studies/quidax.jpg';
import smartcomplyImg from '../assets/case-studies/smartcomply.jpg';
import verypayImg from '../assets/case-studies/verypay.jpg';
import mercurieImg from '../assets/case-studies/mercurie.png';
import sabitrackImg from '../assets/case-studies/sabitrack.jpg';
import tamyImg from '../assets/case-studies/tamy.jpg';
import googleImg from '../assets/case-studies/google.jpg';

interface WinCardProps {
  image: string;
  name: string;
  desc: string;
  metric: string;
  tags: string[];
  delay: number;
}

const WinCard: React.FC<WinCardProps> = ({ image, name, desc, metric, tags, delay }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Auto-dismiss reveal when card scrolls out of view (mobile fix)
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && isRevealed) {
          setIsRevealed(false);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isRevealed]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative h-[82vh] md:h-[540px] lg:h-[500px] overflow-hidden cursor-pointer snap-start"
      onClick={() => setIsRevealed(!isRevealed)}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Default gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-500" />

      {/* Hover / Click reveal overlay */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${
          isRevealed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-8 md:p-8">
        {/* Top: Client name */}
        <p className="text-white/70 text-xs font-bold uppercase tracking-[0.15em]">{name}</p>

        {/* Middle: Description (revealed on hover/click) */}
        <div
          className={`mt-6 transition-all duration-500 ${
            isRevealed
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'
          }`}
        >
          <p className="text-white/90 text-sm md:text-sm leading-relaxed max-w-[320px]">{desc}</p>
        </div>

        {/* Bottom: Metric (hover/click only) + Tags (always visible) */}
        <div className="mt-auto">
          <div
            className={`text-2xl md:text-2xl font-display font-bold text-white mb-4 leading-tight transition-all duration-500 ${
              isRevealed
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'
            }`}
          >
            {metric}
          </div>

          <div className="flex gap-2 flex-wrap">
            {tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-[10px] font-bold uppercase tracking-tight text-white/80 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedWins: React.FC = () => {
  const wins = [
    { image: zoneImg, name: 'Zone', desc: 'Regulated blockchain payment infrastructure network.', metric: '₦1T+ Transactions', tags: ['Fintech', 'Nigeria'], delay: 0.1 },
    { image: quidaxImg, name: 'Quidax', desc: 'Making crypto feel mainstream through culture-led, education-first growth.', metric: '100K+ Signups', tags: ['Crypto', 'West Africa'], delay: 0.2 },
    { image: smartcomplyImg, name: 'Smartcomply', desc: 'Group narrative + demand engine across a multi-product cybersecurity & compliance suite.', metric: '2–3× Enterprise Pipeline Growth', tags: ['RegTech', 'Africa'], delay: 0.3 },
    { image: verypayImg, name: 'VERYPAY', desc: 'Embedded in-country marketing leadership for multi-market expansion and adoption.', metric: '4+ In-Country Teams Deployed', tags: ['Fintech', 'Africa'], delay: 0.4 },
    { image: mercurieImg, name: 'Mercurie', desc: 'Reframed "payments for SaaS" into an infrastructure story that travels across markets.', metric: '~40% Admin Savings', tags: ['B2B SaaS', 'Nigeria'], delay: 0.1 },
    { image: sabitrackImg, name: 'SabiTrack', desc: 'From early-stage idea to launch-ready narrative, assets, and GTM foundations.', metric: 'Launched in <6 Months', tags: ['B2B SaaS', 'UK'], delay: 0.2 },
    { image: tamyImg, name: 'Tamy Consulting', desc: 'Consulting repositioning + content and PR system built for pipeline credibility.', metric: '3–4 Tier-1 Features Secured', tags: ['Consulting', 'Nigeria'], delay: 0.3 },
    { image: googleImg, name: 'Google West Africa', desc: 'Content Production (The Buffet) for a leading telecommunications provider.', metric: '1M+ Views', tags: ['Tech', 'West Africa'], delay: 0.4 },
  ];

  return (
    <section className="bg-bg-light pt-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-6">Growth Marketing Case Studies</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Our <span className="text-primary">featured</span> client wins
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 snap-y snap-mandatory md:snap-none">
        {wins.map((win) => (
          <WinCard key={win.name} {...win} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedWins;
