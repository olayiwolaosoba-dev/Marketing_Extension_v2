import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { industries } from '../../data/caseStudies';

// Industry Data with Narrative
const industryData = {
    'fintech': {
        title: 'Trust engines for regulated payments growth',
        label: 'Payments & Fintech Infrastructure Vertical',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800',
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
        link: '/work/payments-fintech-infra'
    },
    'crypto': {
        title: 'Growth that builds trust, not hype',
        label: 'Crypto & Digital Assets Vertical',
        image: 'https://images.unsplash.com/photo-1621504450168-b8c6816db70a?auto=format&fit=crop&q=80&w=800',
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
        link: '/services/marketing-consulting'
    },
    'regtech': {
        title: 'Make complex security and compliance feel simple',
        label: 'RegTech & Cybersecurity Vertical',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
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
        link: '/services/marketing-consulting'
    },
    'saas': {
        title: 'Demand engines for platform and product-led growth',
        label: 'B2B SaaS & Platforms Vertical',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
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
        link: '/services/marketing-consulting'
    },
    'consulting': {
        title: 'Authority-building engines that convert to pipeline',
        label: 'Professional Services & Consulting Vertical',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
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
        link: '/services/marketing-consulting'
    }
};

const IndustryFocus: React.FC = () => {
    const [selectedIndustry, setSelectedIndustry] = useState(industries[0].id);
    const data = industryData[selectedIndustry as keyof typeof industryData];

    return (
        <section className="py-24 bg-gray-50 mb-20" id="industries">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

                    {/* Sticky Sidebar Navigation */}
                    <div className="w-full lg:w-1/4 lg:sticky lg:top-32 z-10">
                        <h3 className="text-sm font-bold text-text-muted uppercase tracking-widest mb-6">Our Focus Areas</h3>
                        <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 no-scrollbar">
                            {industries.map((ind) => (
                                <button
                                    key={ind.id}
                                    onClick={() => setSelectedIndustry(ind.id)}
                                    className={`text-left px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 whitespace-nowrap lg:whitespace-normal ${selectedIndustry === ind.id
                                        ? 'bg-text-dark text-white shadow-lg translate-x-1'
                                        : 'bg-white text-text-muted hover:bg-white/80 hover:text-text-dark border border-gray-100'
                                        }`}
                                >
                                    {ind.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="w-full lg:w-3/4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedIndustry}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                {/* Narrative Card */}
                                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 mb-8 max-w-4xl">
                                    <div className="relative h-64 md:h-80 w-full overflow-hidden">
                                        <img src={data.image} alt={data.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                        <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white">
                                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 leading-tight">{data.title}</h2>
                                            <p className="text-white/80 text-lg md:max-w-xl leading-relaxed font-bold">{data.label}</p>
                                        </div>
                                    </div>

                                    <div className="p-8 md:p-10 grid md:grid-cols-2 gap-10">
                                        <div>
                                            <h4 className="font-bold text-text-dark mb-4 flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-red-400" />
                                                CHALLENGES
                                            </h4>
                                            <ul className="space-y-3">
                                                {data.challenges.map((c, i) => (
                                                    <li key={i} className="text-sm text-text-muted leading-relaxed pl-4 border-l border-gray-100">{c}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-text-dark mb-4 flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-primary" />
                                                HOW WE SOLVE THEM
                                            </h4>
                                            <ul className="space-y-3">
                                                {data.solutions.map((s, i) => (
                                                    <li key={i} className="text-sm text-text-dark font-medium leading-relaxed flex items-start gap-2">
                                                        <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                                        {s}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Action Row */}
                                    <div className="px-8 md:px-10 pb-8 md:pb-10 pt-4 border-t border-gray-50 mt-2">
                                        <Link to={data.link} className="bg-primary text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:gap-3 inline-flex">
                                            {data.ctaText}
                                            <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryFocus;
