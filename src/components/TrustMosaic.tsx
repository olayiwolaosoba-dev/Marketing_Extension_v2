import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';

// Import local assets
import mosaicTilesImg from '../assets/trust-mosaic/mosaic_tiles.png';
import mosaicSpeakingEventImg from '../assets/trust-mosaic/mosaic_speaking_event.png';
import mosaicDashboardBlurImg from '../assets/trust-mosaic/mosaic_dashboard_blur.png';
import mosaicPressHeadlineImg from '../assets/trust-mosaic/mosaic_press_headline.png';

interface TrustItem {
    id: number;
    type: 'leadership' | 'event' | 'dashboard' | 'deliverable' | 'press';
    image: string;
    quote: string;
    fullQuote?: string; // For drawer
    name: string; // Or "Headline" for press
    role?: string;
    company: string; // Or "Publication" for press
    bullets?: string[]; // "What we did"
    ctaLink?: string;
    size: '1x1' | '2x1' | '1x2'; // Grid span
}

const TRUST_ITEMS: TrustItem[] = [
    {
        id: 1,
        type: 'leadership',
        size: '1x1',
        image: mosaicDashboardBlurImg,
        quote: "We moved from just 'posting' to building a real pipeline engine.",
        fullQuote: "Marketing Extension helped us move from just posting on social to consistently generating qualified leads through a structured growth engine.",
        name: "Founder",
        role: "CEO",
        company: "Smartcomply",
        bullets: ["Unified Narrative", "Pipeline Dashboard", "Campaign Creative"],
        ctaLink: "/work/smartcomply-full-funnel-growth-engine"
    },
    {
        id: 2,
        type: 'event',
        size: '2x1',
        image: mosaicSpeakingEventImg,
        quote: "They helped us look like the infrastructure giant we are.",
        fullQuote: "We needed our brand to match our technology. Marketing Extension positioned us as the default infrastructure for regulated blockchain payments.",
        name: "Obi Emetarom",
        role: "CEO",
        company: "Zone",
        bullets: ["Brand Architecture", "Executive Comms", "Marketing OS"],
        ctaLink: "/work/zone-regulated-blockchain-payments"
    },
    {
        id: 3,
        type: 'dashboard',
        size: '1x1',
        image: mosaicTilesImg,
        quote: "Launched in 4 countries at once without breaking.",
        fullQuote: "They built the operating model that allowed us to launch a consistent brand across four different African markets simultaneously.",
        name: "Managing Director",
        role: "MD",
        company: "VERYPAY",
        bullets: ["Operating Model", "Hiring Rubrics", "Oversight Cadence"],
        ctaLink: "/work/verypay-multi-country-marketing-bench"
    },
    {
        id: 4,
        type: 'press',
        size: '1x1',
        image: mosaicPressHeadlineImg,
        quote: "The story that unlocked our seed round.",
        name: "Launch Narrative",
        company: "Mercurie",
        bullets: ["Launch Narrative", "PR Strategy", "Investor Clarity"],
        ctaLink: "/work/mercurie-launch-pr-narrative"
    },
    {
        id: 5,
        type: 'leadership',
        size: '2x1',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
        quote: "Finally, our digital presence matches our reputation.",
        fullQuote: "We rely on referrals, but we needed a digital home that validated our expertise. Marketing Extension gave us a voice.",
        name: "Tamara",
        role: "Principal Consultant",
        company: "Tamy Consulting",
        bullets: ["Positioning", "Digital Presence", "Content Engine"],
        ctaLink: "/work/tamy-consulting-growth-engine"
    },
    {
        id: 6,
        type: 'deliverable',
        size: '1x1',
        image: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&q=80&w=800',
        quote: "From idea to investor-ready in weeks.",
        fullQuote: "They turned a rough idea into a concrete business plan, deck, and go-to-market strategy that investors understood immediately.",
        name: "Founder",
        company: "SabiTrack",
        bullets: ["Investor Deck", "GTM Plan", "Org Design"],
        ctaLink: "/work/sabitrack-investor-ready-foundation"
    },
];

const TrustMosaic: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<TrustItem | null>(null);

    return (
        <section className="bg-white py-32 overflow-hidden" id="trust">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
                    <div>
                        <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-6">Client Feedback</p>
                        <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-text-dark">
                            Trusted across regulated markets
                        </h2>
                    </div>
                    <div className="flex gap-3">
                        <div className="px-4 py-2 bg-bg-gray rounded-full flex items-center gap-2 border border-gray-100">
                            <ShieldCheck size={16} className="text-primary" />
                            <span className="text-sm font-bold font-display text-text-dark">Fintech</span>
                        </div>
                        <div className="px-4 py-2 bg-bg-gray rounded-full flex items-center gap-2 border border-gray-100">
                            <TrendingUp size={16} className="text-primary" />
                            <span className="text-sm font-bold font-display text-text-dark">RegTech</span>
                        </div>
                    </div>
                </div>

                {/* Mosaic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
                    {TRUST_ITEMS.map((item) => (
                        <motion.div
                            key={item.id}
                            layoutId={`card-${item.id}`}
                            onClick={() => setSelectedItem(item)}
                            className={`
                                relative group cursor-pointer overflow-hidden rounded-2xl bg-gray-100
                                ${item.size === '2x1' ? 'md:col-span-2' : 'md:col-span-1'}
                                ${item.size === '1x2' ? 'md:row-span-2' : ''}
                                border border-transparent hover:border-primary/50 transition-colors duration-300
                            `}
                            whileHover={{ scale: 0.98 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                            {/* Hover Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform md:translate-y-4 md:group-hover:translate-y-0">
                                <p className="text-white text-lg font-display font-medium leading-tight mb-4 border-l-2 border-primary pl-3">
                                    "{item.quote}"
                                </p>
                                <div>
                                    <p className="text-white font-bold text-sm">{item.name}</p>
                                    <p className="text-white/70 text-xs">{item.role ? `${item.role}, ` : ''}{item.company}</p>
                                </div>
                            </div>

                            {/* Mobile/Default Label (Visible when not hovered on desktop, always visible on mobile if we want, or rely on the hover interaction which is tap on mobile)
                                Let's add a small persistent label for context if needed, but the clean look is better. 
                            */}
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Drawer */}
            <AnimatePresence>
                {selectedItem && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedItem(null)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                        />

                        {/* Drawer Panel */}
                        <motion.div
                            layoutId={`drawer-${selectedItem.id}`} // Optional: shared layout anim if we connect it
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col overflow-hidden"
                        >
                            {/* Drawer Header Image */}
                            <div className="h-64 relative flex-shrink-0">
                                <img
                                    src={selectedItem.image}
                                    alt={selectedItem.name}
                                    className="w-full h-full object-cover grayscale" // Keep it classy inside too? Or full color?
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="absolute top-6 right-6 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors"
                                >
                                    <X size={20} />
                                </button>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-2xl font-bold text-white font-display mb-1">{selectedItem.name}</h3>
                                    <p className="text-white/80">{selectedItem.role ? `${selectedItem.role} @ ` : ''}{selectedItem.company}</p>
                                </div>
                            </div>

                            {/* Drawer Content */}
                            <div className="p-8 flex-1 overflow-y-auto">
                                <blockquote className="text-xl font-display font-medium text-text-dark mb-8 leading-relaxed border-l-4 border-primary pl-4">
                                    "{selectedItem.fullQuote || selectedItem.quote}"
                                </blockquote>

                                {selectedItem.bullets && (
                                    <div className="mb-8">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4">What we did</h4>
                                        <ul className="space-y-3">
                                            {selectedItem.bullets.map((bullet, i) => (
                                                <li key={i} className="flex items-start gap-3 text-text-dark">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Footer CTA */}
                            {selectedItem.ctaLink && (
                                <div className="p-6 border-t border-gray-100">
                                    <a
                                        href={selectedItem.ctaLink}
                                        className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors"
                                    >
                                        Explore Case Study <ArrowRight size={18} />
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default TrustMosaic;
