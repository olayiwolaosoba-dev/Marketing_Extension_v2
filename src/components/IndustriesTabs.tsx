
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IndustryExpertise } from '../types';

interface ExtendedIndustryExpertise extends Omit<IndustryExpertise, 'video'> {
  video: string; // Keeping 'video' property name for image URL as per original component
  label: string; // For the image overlay
  ctaText: string;
  link: string;
}

const industries: ExtendedIndustryExpertise[] = [
  {
    id: 'fintech',
    name: 'Payments & Fintech',
    label: 'Payments & Fintech Infrastructure Vertical',
    title: 'Trust engines for regulated payments growth',
    challenges: [
      'Long sales cycles and multiple stakeholders (banks, regulators, partners)',
      'Hard-to-explain infrastructure value (network effects, reliability, compliance)',
      'Category skepticism and “prove it” risk for adoption'
    ],
    solutions: [
      'Category narrative + GTM positioning leaders can repeat',
      'Executive PR + ecosystem storytelling to build credibility',
      'Marketing OS with adoption funnels, partner comms, and reporting cadence'
    ],
    ctaText: 'Explore Payments & Fintech Infra services',
    video: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800',
    link: '/work/payments-fintech-infra'
  },
  {
    id: 'crypto',
    name: 'Crypto & Digital Assets',
    label: 'Crypto & Digital Assets Vertical',
    title: 'Growth that builds trust, not hype',
    challenges: [
      'Low trust and high perceived risk in the category',
      'Education gaps that block activation and retention',
      'Compliance-sensitive messaging across channels'
    ],
    solutions: [
      'Culture + education-led growth systems (brand + community + onboarding)',
      'Clear product stories that reduce fear and increase first actions',
      'Campaign platforms built to scale across PR, content, creators, and paid'
    ],
    ctaText: 'Explore Crypto & Digital Assets services',
    video: 'https://images.unsplash.com/photo-1621504450168-b8c6816db70a?auto=format&fit=crop&q=80&w=800',
    link: '/services/marketing-consulting'
  },
  {
    id: 'regtech',
    name: 'RegTech & Cybersecurity',
    label: 'RegTech & Cybersecurity Vertical',
    title: 'Make complex security and compliance feel simple',
    challenges: [
      'Dense, technical products that are hard to explain fast',
      'Buyers demand credibility, proof, and risk clarity',
      'Fragmented suites or multiple products competing for attention'
    ],
    solutions: [
      'Message architecture that simplifies without dumbing down',
      'Product-by-segment GTM playbooks (enterprise, mid-market, SMB)',
      'Demand + credibility engine: webinars, thought leadership, partner programs, PR'
    ],
    ctaText: 'Explore RegTech & Cybersecurity services',
    video: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    link: '/services/marketing-consulting'
  },
  {
    id: 'saas',
    name: 'B2B SaaS & Platforms',
    label: 'B2B SaaS & Platforms Vertical',
    title: 'Demand engines for platform and product-led growth',
    challenges: [
      'ICP uncertainty and weak targeting = wasted effort',
      'Traffic without conversion (leaky funnels, unclear offers)',
      'Activity without measurement (attribution debates, scattered data)'
    ],
    solutions: [
      'ICP + positioning sprints that lock the “who and why”',
      'Full-funnel design: landing pages, lifecycle flows, conversion experiments',
      'Analytics + dashboards that tie marketing to pipeline and revenue'
    ],
    ctaText: 'Explore B2B SaaS services',
    video: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    link: '/services/marketing-consulting'
  },
  {
    id: 'consulting',
    name: 'Professional Services',
    label: 'Professional Services & Consulting Vertical',
    title: 'Authority-building engines that convert to pipeline',
    challenges: [
      'Services are hard to differentiate (“we do everything”)',
      'Founder-led selling without a scalable marketing system',
      'Credibility gaps when competing with bigger firms'
    ],
    solutions: [
      'Offer design + packaging (clear categories, outcomes, proof points)',
      'Thought-leadership system that builds authority over time',
      'Content + PR + partnerships cadence tied to pipeline goals'
    ],
    ctaText: 'Explore Consulting services',
    video: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    link: '/services/marketing-consulting'
  }
];

const IndustriesTabs: React.FC = () => {
  const [active, setActive] = useState(industries[0]);

  return (
    <section className="bg-white py-32 border-t border-gray-100" id="industries">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-6">Our Areas of Expertise</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Specialized growth <span className="text-primary">expertise</span>
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar mb-16 pb-4 border-b border-gray-100">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActive(ind)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 whitespace-nowrap ${active.id === ind.id ? 'bg-text-dark text-white' : 'bg-bg-gray text-text-muted hover:bg-bg-gray/80'}`}
            >
              {ind.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-16"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-bg-gray relative group">
              <img src={active.video} alt={active.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-10">
                <p className="text-white font-display text-2xl font-bold">{active.label}</p>
              </div>
            </div>

            <div>
              <h3 className="text-4xl font-display font-bold mb-12 text-text-dark">{active.title}</h3>

              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <div className="flex items-center gap-2 text-text-muted font-bold text-xs uppercase mb-6 tracking-widest">
                    <AlertCircle size={14} /> Challenges
                  </div>
                  <ul className="space-y-4">
                    {active.challenges.map((c, i) => (
                      <li key={i} className="text-text-dark font-semibold leading-relaxed pl-4 border-l-2 border-primary/20">{c}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase mb-6 tracking-widest">
                    <CheckCircle2 size={14} /> How we solve them
                  </div>
                  <ul className="space-y-4">
                    {active.solutions.map((s, i) => (
                      <li key={i} className="text-text-dark font-semibold leading-relaxed pl-4 border-l-2 border-primary">{s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                to={active.link}
                className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-text-dark transition-all duration-300 inline-flex"
              >
                {active.ctaText}
                <ArrowRight size={20} />
              </Link>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default IndustriesTabs;
