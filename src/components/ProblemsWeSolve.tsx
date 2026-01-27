
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images
import imgConsulting from '../assets/service-consulting.png';
import imgContent from '../assets/service-content.png';
import imgMartech from '../assets/service-martech.png';

interface ServiceBlockProps {
  num: string;
  headline: string;
  body: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  id: string;
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({ num, headline, body, ctaText, ctaLink, image, id }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-20% 0px -20% 0px" });

  return (
    <section id={id} ref={ref} className="py-24 md:py-32 relative overflow-hidden group">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-12 gap-12 items-center">

          {/* Left Column: Number & Headline */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-primary font-bold text-5xl md:text-6xl font-display"
            >
              {num}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight text-text-dark"
            >
              {headline}
            </motion.h2>
          </div>

          {/* Middle Column: Body & CTA */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-text-muted leading-relaxed"
            >
              {body}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to={ctaLink} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300 group/cta text-lg">
                {ctaText}
                <ArrowRight size={20} className="transition-transform group-hover/cta:translate-x-1" />
                <span className="block max-w-0 group-hover/cta:max-w-full transition-all duration-500 h-0.5 bg-primary absolute bottom-0 left-0"></span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Media Tile (Liquid Glass) */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group/media"
            >
              {/* Background Image with slight parallax/scale on hover */}
              <motion.img
                src={image}
                alt={headline}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/media:scale-105"
              />

              {/* Liquid Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none" />
              <div className="absolute inset-0 backdrop-blur-[1px] bg-white/5 border border-white/20 rounded-3xl pointer-events-none" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary/90 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] group-hover/media:scale-110 group-hover/media:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all duration-500 cursor-pointer">
                  <Play size={24} fill="currentColor" className="ml-1" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ProblemsWeSolve: React.FC = () => {
  const [activeSection, setActiveSection] = useState('marketing-consulting');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['marketing-consulting', 'content-studio', 'martech-ai'];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-white">
      {/* Desktop Progress Rail */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-6 items-end">
        {[
          { id: 'marketing-consulting', label: 'Consulting' },
          { id: 'content-studio', label: 'Content+' },
          { id: 'martech-ai', label: 'MarTech' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="group flex items-center gap-3 transition-all"
          >
            <span className={`text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeSection === item.id ? 'text-text-dark opacity-100' : 'text-text-muted opacity-0 group-hover:opacity-100'}`}>
              {item.label}
            </span>
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === item.id ? 'bg-primary scale-150' : 'bg-gray-300 group-hover:bg-primary/50'}`} />
          </button>
        ))}
      </div>

      <ServiceBlock
        id="marketing-consulting"
        num="01"
        headline="Need a marketing strategy that actually ships?"
        body="We help you move from scattered tactics to a clear, executable plan. Positioning, ICP, messaging, channel strategy, GTM planning, KPI design, and weekly decision support—so your team knows exactly what to do next (and why)."
        ctaText="Get a consulting plan"
        ctaLink="/services/marketing-consulting"
        image={imgConsulting}
      />

      <ServiceBlock
        id="content-studio"
        num="02"
        headline="Need world-class content, but can’t hire a full creative team?"
        body="Our Content+ Studio becomes your always-on creative engine—design, copy, and production for social, campaigns, decks, landing pages, and brand assets. Fast turnaround with AI-assisted workflows, human taste and quality control throughout."
        ctaText="Build my content engine"
        ctaLink="/services/content-studio"
        image={imgContent}
      />

      <ServiceBlock
        id="martech-ai"
        num="03"
        headline="Tools everywhere, but growth still feels manual?"
        body="We design and implement the stack that makes marketing run smoothly—tracking, attribution, CRM, automation, reporting dashboards, and experimentation. Plus AI copilots that speed up research, content ops, and performance reporting."
        ctaText="Upgrade my stack"
        ctaLink="/services/martech-ai"
        image={imgMartech}
      />
    </section>
  );
};

export default ProblemsWeSolve;
