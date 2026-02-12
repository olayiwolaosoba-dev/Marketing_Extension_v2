import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Partner Logos
import tlcomLogo from '../assets/partners/tlcom.png';
import flourishLogo from '../assets/partners/flourish.png';
import dcgLogo from '../assets/partners/dcg.png';

const VIDEO_IDS = [
  "M7lc1UVf-VE", // Google Developers
  "bJzb-RuUcMU", // Product Launch
  "LXb3EKWsInQ", // Tech/Growth
  "5qap5aO4i9A", // Lofi Girl (Relaxing)
];

const RandomVideoPlayer = () => {
  const [videoId, setVideoId] = React.useState("");

  React.useEffect(() => {
    const randomId = VIDEO_IDS[Math.floor(Math.random() * VIDEO_IDS.length)];
    setVideoId(randomId);
  }, []);

  if (!videoId) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative aspect-video rounded-2xl overflow-hidden bg-bg-gray group shadow-2xl border border-white/10"
    >
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      ></iframe>
    </motion.div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-bg-dark pt-32 pb-20 overflow-hidden clipped-bottom">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Column: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 mb-8 bg-white/5">
              <span className="text-primary font-bold text-xs uppercase tracking-widest">Growth Marketing Partner</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-8">
              Plug-in growth marketing for teams that <span className="text-primary italic">need results now.</span>
            </h1>

            <p className="text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
              We operate as your growth marketing extension — so your pipeline never runs on empty. No fluff, just scalable performance.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/strategy-call" className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white hover:text-text-dark transition-all duration-300">
                Book a strategy call
                <ArrowRight size={20} />
              </Link>
              <Link to="/case-studies" className="w-full sm:w-auto border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                View case studies
              </Link>
            </div>

            <div className="mt-8">
              <Link to="/services/martech#scan" className="text-white/40 text-sm hover:text-primary transition-colors inline-flex items-center gap-1 group">
                Take the Free Stack + AI Readiness Scan
                <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Metrics Desktop (Staggered Grid) */}
            {/* Metrics Desktop (Staggered Grid) */}
            <div className="mt-20 hidden lg:grid grid-cols-2 gap-8">
              <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:border-primary/40 transition-colors duration-300 group">
                <h4 className="text-4xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">$100M+</h4>
                <p className="text-white/60 text-sm">Pipeline Influenced Across fintech, infra, and B2B SaaS.</p>
              </div>
              <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:border-primary/40 transition-colors duration-300 group">
                <h4 className="text-4xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">2–4×</h4>
                <p className="text-white/60 text-sm">Qualified Pipeline Growth Measured across multi-market launches.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Sticky Media & Logos */}
          <div className="lg:sticky lg:top-32">
            {/* Random YouTube Video Player */}
            <RandomVideoPlayer />

            {/* Partner Logos */}
            {/* Partner Logos */}
            <div className="mt-10">
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Embedded marketing teams for companies backed by world-class investors</p>
              <div className="flex flex-wrap items-center gap-10 opacity-80 grayscale">
                <img src={flourishLogo} alt="Flourish Ventures" className="h-6 w-auto object-contain opacity-90" />
                <img src={tlcomLogo} alt="TLcom Capital" className="h-6 w-auto object-contain opacity-90" />
                <img src={dcgLogo} alt="Digital Currency Group" className="h-6 w-auto object-contain opacity-90" />
                <span className="text-white/30 text-[10px] font-bold self-center tracking-widest pl-2 border-l border-white/10">AND MORE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
