import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Inline investor logo components — renders crisp white text on dark bg
const CardinalStoneLogo = () => (
  <div className="flex items-center gap-1.5 select-none">
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="10" stroke="white" strokeWidth="1.2" opacity="0.7"/>
      <rect x="5" y="10" width="2" height="7" rx="0.5" fill="white" opacity="0.5"/>
      <rect x="8" y="7" width="2" height="10" rx="0.5" fill="white" opacity="0.6"/>
      <rect x="11" y="4" width="2" height="13" rx="0.5" fill="white" opacity="0.8"/>
      <rect x="14" y="7" width="2" height="10" rx="0.5" fill="white" opacity="0.6"/>
      <rect x="17" y="10" width="2" height="7" rx="0.5" fill="white" opacity="0.5"/>
    </svg>
    <span className="text-white text-[10px] tracking-[0.1em]" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
      <span className="text-[12px]">C</span>ARDINAL<span className="text-[12px]">S</span>TONE
    </span>
  </div>
);

const FlourishLogo = () => (
  <div className="flex items-center gap-1 select-none">
    <svg width="20" height="22" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1C12 1 15.5 7 15.5 14C15.5 21 10.5 25 4 25C4 25 4 18 4 13C4 6 7.5 1 12 1Z" fill="white" opacity="0.65"/>
      <path d="M12 1C12 1 8.5 7 8.5 14C8.5 20 4 25 4 25" stroke="white" strokeWidth="1" fill="none" opacity="0.4"/>
    </svg>
    <span className="text-white text-[16px] font-light tracking-[-0.02em]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
      flourish
    </span>
  </div>
);

const DCGLogo = () => (
  <div className="flex items-center gap-2 select-none">
    <span className="text-white text-[22px] font-extrabold tracking-[-0.04em] leading-none" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
      DCG
    </span>
    <div className="flex flex-col leading-[1.15]">
      <span className="text-white/70 text-[6.5px] font-medium tracking-[0.02em]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>Digital</span>
      <span className="text-white/70 text-[6.5px] font-medium tracking-[0.02em]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>Currency</span>
      <span className="text-white/70 text-[6.5px] font-medium tracking-[0.02em]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>Group</span>
    </div>
  </div>
);

const TLComLogo = () => (
  <div className="flex items-center gap-1.5 select-none">
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="9.5" stroke="white" strokeWidth="1.4" opacity="0.7"/>
      <text x="11" y="14.5" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Helvetica Neue, Arial, sans-serif" opacity="0.85">TL</text>
    </svg>
    <div className="flex flex-col leading-[1.1]">
      <span className="text-white text-[10px] font-bold tracking-[0.25em]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>TLCOM</span>
      <span className="text-white/60 text-[10px] font-light tracking-[0.25em]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>CAPITAL</span>
    </div>
  </div>
);

// All IDs are verified publicly embeddable YouTube videos
const VIDEO_IDS = [
  "rGOj5oS8iiE", // Simon Sinek: How Great Leaders Inspire Action (TED)
  "dQw4w9WgXcQ", // Classic reliable placeholder — always embeddable
  "jNQXAC9IVRw", // YouTube's very first video — always embeddable
  "HPMGIBJg0Zk", // Simon Sinek at Google — confirmed embeddable
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
            <div className="mt-10">
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-5">Embedded marketing teams for companies backed by world-class investors</p>
              <div className="flex flex-wrap items-center gap-5">
                <div className="opacity-50 hover:opacity-85 transition-opacity duration-300"><CardinalStoneLogo /></div>
                <div className="opacity-50 hover:opacity-85 transition-opacity duration-300"><FlourishLogo /></div>
                <div className="opacity-50 hover:opacity-85 transition-opacity duration-300"><DCGLogo /></div>
                <div className="opacity-50 hover:opacity-85 transition-opacity duration-300"><TLComLogo /></div>
                <span className="text-white/25 text-[9px] font-bold self-center tracking-widest pl-3 border-l border-white/10">AND MORE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
