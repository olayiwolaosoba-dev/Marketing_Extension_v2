import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import { industries } from '../../data/caseStudies';

// Industry Data with Narrative
const industryData = {
    'fintech': {
        title: 'Trust engines for regulated payments growth',
        description: 'We help authorized payment institutions and infrastructure providers turn compliance and reliability into their strongest growth assets.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800',
        challenges: [
            'Long sales cycles and multiple stakeholders',
            'Hard-to-explain infrastructure value',
            'Category skepticism and "prove it" risk'
        ],
        solutions: [
            'Category narrative + GTM positioning leaders can repeat',
            'Executive PR + ecosystem storytelling',
            'Marketing OS with adoption funnels'
        ],
        miniCases: [
            { client: 'PayFlow', outcome: '3x pipeline growth', tags: ['Consulting', 'Content+'] },
            { client: 'SecurePay', outcome: 'Licence approval support', tags: ['PR', 'Strategy'] }
        ]
    },
    'crypto': {
        title: 'Growth that builds trust, not hype',
        description: 'For protocols, exchanges, and dApps that need to cross the chasm from degen adoption to institutional credibility.',
        image: 'https://images.unsplash.com/photo-1621504450168-b8c6816db70a?auto=format&fit=crop&q=80&w=800',
        challenges: [
            'Low trust and high perceived risk',
            'Education gaps blocking mainstream adoption',
            'Compliance-sensitive messaging'
        ],
        solutions: [
            'Culture + education-led growth systems',
            'Clear product stories that reduce fear',
            'Campaign platforms built to scale'
        ],
        miniCases: [
            { client: 'CoinSafe', outcome: '40% CAC reduction', tags: ['Content+', 'Performance'] },
            { client: 'ChainLink', outcome: '10k dev signups', tags: ['Community', 'DevRel'] }
        ]
    },
    'regtech': {
        title: 'Make complex security and compliance feel simple',
        description: 'Translate dense technical specifications into compelling business value for CISOs and risk officers.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
        challenges: [
            'Dense, technical products',
            'Buyers demand credibility and proof',
            'Fragmented suites competing for attention'
        ],
        solutions: [
            'Message architecture that simplifies',
            'Product-by-segment GTM playbooks',
            'Demand + credibility engine'
        ],
        miniCases: [
            { client: 'SecureNet', outcome: '200% demo increase', tags: ['Strategy', 'MarTech'] },
            { client: 'CompliBot', outcome: 'Series B raise support', tags: ['Consulting'] }
        ]
    },
    'saas': {
        title: 'Demand engines for platform and product-led growth',
        description: 'From PLG to enterprise sales motions, we build the systems that capture and convert demand efficiently.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        challenges: [
            'ICP uncertainty and weak targeting',
            'Traffic without conversion (leaky funnels)',
            'Activity without measurement'
        ],
        solutions: [
            'ICP + positioning sprints',
            'Full-funnel design and optimization',
            'Analytics + dashboards'
        ],
        miniCases: [
            { client: 'DataFlow', outcome: '$2M ARR added', tags: ['GTM', 'Scale'] },
            { client: 'SaaSify', outcome: '30% churn reduction', tags: ['Lifecycle', 'Content'] }
        ]
    },
    'consulting': {
        title: 'Authority-building engines that convert to pipeline',
        description: 'Ideally suited for boutiques and firms where the founder is the brand. We productize your expertise.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
        challenges: [
            'Services are hard to differentiate',
            'Founder-led selling limits scale',
            'Credibility gaps vs big firms'
        ],
        solutions: [
            'Offer design + packaging',
            'Thought-leadership systems',
            'Content + PR + partnerships cadence'
        ],
        miniCases: [
            { client: 'Alpha Partners', outcome: 'WSJ & Forbes features', tags: ['PR', 'Authority'] },
            { client: 'GrowthLabs', outcome: 'Booked out 6 months', tags: ['Strategy'] }
        ]
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
                                            <p className="text-white/80 text-lg md:max-w-xl leading-relaxed">{data.description}</p>
                                        </div>
                                    </div>

                                    <div className="p-8 md:p-10 grid md:grid-cols-2 gap-10">
                                        <div>
                                            <h4 className="font-bold text-text-dark mb-4 flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-red-400" />
                                                Common Challenges
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
                                                How We Solve Them
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
                                    <div className="px-8 md:px-10 pb-8 md:pb-10 pt-4 flex flex-col md:flex-row gap-6 border-t border-gray-50 mt-2">
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3">Typical Deliverables</p>
                                            <div className="flex flex-wrap gap-2">
                                                {['Strategy Audit', 'Content Engine', 'Attribution Setup'].map(d => (
                                                    <span key={d} className="text-xs bg-gray-50 text-text-dark px-2 py-1 rounded border border-gray-100">{d}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Mini Case Study Cards */}
                                <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
                                    {data.miniCases.map((mini, i) => (
                                        <div key={i} className="group bg-white p-5 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all cursor-pointer flex justify-between items-center">
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="font-display font-bold text-text-dark">{mini.client}</span>
                                                    <span className="text-xs text-text-muted">•</span>
                                                    <div className="flex gap-1">
                                                        {mini.tags.map(t => (
                                                            <span key={t} className="text-[10px] bg-gray-50 px-1.5 py-0.5 rounded text-text-muted uppercase tracking-wide">{t}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <p className="text-sm font-medium text-primary">Outcome: {mini.outcome}</p>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                                <ExternalLink size={14} />
                                            </div>
                                        </div>
                                    ))}
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
