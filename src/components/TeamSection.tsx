
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import LeadershipCarousel from './LeadershipCarousel';

const TeamSection: React.FC = () => {
  return (
    <section className="bg-bg-light py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-6">Meet our Team</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            The team behind your <span className="text-primary">growth extensions</span>
          </h2>
          <p className="mt-8 text-xl text-text-muted max-w-3xl leading-relaxed">
            Marketing Extension is a distributed team of strategists, media buyers, content marketers, and growth operators across seven countries. We plug into your team, own the outcomes, and give you the speed of an in-house squad without the hiring overhead.
          </p>
        </div>

        <LeadershipCarousel />
      </div>
    </section>
  );
};

export default TeamSection;
