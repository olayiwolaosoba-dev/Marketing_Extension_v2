
import React from 'react';


import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Check, Play } from 'lucide-react';

const CaseStudyHero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] bg-bg-dark pt-32 pb-20 overflow-hidden flex items-center">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[150px] pointer-events-none rounded-full translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-indigo-500/10 blur-[120px] pointer-events-none rounded-full -translate-x-1/3 translate-y-1/4" />
      <div className="absolute inset-0 bg-dotted-pattern opacity-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 mb-8 bg-white/5 backdrop-blur-md">
              <span className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Build Your Marketing Engine
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-8 tracking-tight">
              We build marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">engines</span>, <br className="hidden md:block" />
              not just campaigns.
            </h1>

            <p className="text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
              The premier marketing extension for growth-stage startups. We install the systems, strategy, and teams you need to scale.
            </p>

            {/* Proof Bar */}
            <div className="flex flex-wrap gap-4 md:gap-8 mb-12 text-sm text-white/50 font-medium">
              <span className="flex items-center gap-2">
                <Check size={16} className="text-primary" /> 5+ Industries
              </span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-white/20" />
              <span className="flex items-center gap-2">
                <Check size={16} className="text-primary" /> $50M+ Pipeline Gen
              </span>
              <span className="hidden md:block w-1 h-1 rounded-full bg-white/20" />
              <span className="flex items-center gap-2">
                <Check size={16} className="text-primary" /> Multi-Market Delivery
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-primary text-white px-8 py-3.5 rounded-full font-bold text-base flex items-center justify-center gap-2 hover:bg-white hover:text-text-dark transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-white/20"
              >
                Book a Growth Engine Audit
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto border border-white/20 text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Browse Case Studies
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* Right: Premium Video Tile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer aspect-video w-full bg-black">
              {/* Placeholder Image/Video Cover */}
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2674"
                alt="Agency Showreel"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <Play size={32} className="text-white fill-current ml-1" />
                </div>
              </div>

              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-lg mb-1">2025 Showreel</p>
                    <p className="text-white/60 text-xs uppercase tracking-widest font-bold">1:45 • High Impact Growth</p>
                  </div>
                  <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/10">
                    <span className="text-white/80 text-xs font-bold">4K</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-white/5 rounded-3xl" />
            <div className="absolute -z-20 -bottom-12 -right-12 w-full h-full border border-white/5 rounded-3xl opacity-50" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
