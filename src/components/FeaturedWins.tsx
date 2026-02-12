import React from 'react';
import { motion } from 'framer-motion';

// Client Logos
// Using placeholders for missing logos for now or reusing if appropriate
// The user provided 5 images, mapped to the first 5 available matches roughly in order?
// Zone (0), Quidax (1), Smartcomply (2), Mercurie (3), Sabi (4). 
// That leaves VERYPAY, Tamy, Google without unique logos from the upload.

interface WinCardProps {
  name: string;
  desc: string;
  metric: string;
  tags: string[];
  delay: number;
}

const WinCard: React.FC<WinCardProps> = ({ name, desc, metric, tags, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="group relative p-10 border-r border-b border-gray-100 flex flex-col h-[400px] overflow-hidden"
  >
    {/* Hover BG */}
    <div className="absolute inset-0 bg-primary translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />

    <div className="relative z-10 flex flex-col h-full">
      <div className="w-12 h-12 bg-bg-gray rounded-full mb-8 group-hover:bg-white/20 transition-colors" />

      <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-white transition-colors">{name}</h3>
      <p className="text-text-muted group-hover:text-white/80 transition-colors mb-6">{desc}</p>

      <div className="mt-auto">
        <div className="text-2xl font-display font-bold text-text-dark group-hover:text-white transition-colors mb-6 whitespace-nowrap">
          {metric}
        </div>

        <div className="flex gap-2 flex-wrap">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full bg-bg-gray text-[10px] font-bold uppercase tracking-tight text-text-muted group-hover:bg-white/20 group-hover:text-white">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const FeaturedWins: React.FC = () => {
  const wins = [
    { name: 'Zone', desc: 'Regulated blockchain payment infrastructure network.', metric: '₦1T+ Transactions', tags: ['Fintech', 'Nigeria'], delay: 0.1 },
    { name: 'Quidax', desc: 'Making crypto feel mainstream through culture-led, education-first growth.', metric: '100K+ Signups', tags: ['Crypto', 'West Africa'], delay: 0.2 },
    { name: 'Smartcomply', desc: 'Group narrative + demand engine across a multi-product cybersecurity & compliance suite.', metric: '2–3× Enterprise Pipeline Growth', tags: ['RegTech', 'Africa'], delay: 0.3 },
    { name: 'VERYPAY', desc: 'Embedded in-country marketing leadership for multi-market expansion and adoption.', metric: '4+ In-Country Teams Deployed', tags: ['Fintech', 'Africa'], delay: 0.4 },
    { name: 'Mercurie', desc: 'Reframed “payments for SaaS” into an infrastructure story that travels across markets.', metric: '~40% Admin Savings', tags: ['B2B SaaS', 'Nigeria'], delay: 0.1 },
    { name: 'SabiTrack', desc: 'From early-stage idea to launch-ready narrative, assets, and GTM foundations.', metric: 'Launched in <6 Months', tags: ['B2B SaaS', 'UK'], delay: 0.2 },
    { name: 'Tamy Consulting', desc: 'Consulting repositioning + content and PR system built for pipeline credibility.', metric: '3–4 Tier-1 Features Secured', tags: ['Consulting', 'Nigeria'], delay: 0.3 },
    { name: 'Google West Africa', desc: 'Content Production (The Buffet) for a leading telecommunications provider.', metric: '1M+ Views', tags: ['Tech', 'West Africa'], delay: 0.4 },
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

      <div className="grid md:grid-cols-2 lg:grid-cols-4 border-l border-t border-gray-100">
        {wins.map((win) => (
          <WinCard key={win.name} {...win} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedWins;
