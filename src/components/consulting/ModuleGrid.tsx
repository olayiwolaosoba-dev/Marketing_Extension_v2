import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { modules } from '../../data/consulting';

const ModuleGrid: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateState = useCallback(() => {
        const el = containerRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 10);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);

        // Find closest card to left edge
        const cards = el.querySelectorAll('[data-card-index]');
        const containerLeft = el.getBoundingClientRect().left;
        let closest = 0;
        let minDist = Infinity;
        cards.forEach((card) => {
            const dist = Math.abs(card.getBoundingClientRect().left - containerLeft);
            if (dist < minDist) {
                minDist = dist;
                closest = Number(card.getAttribute('data-card-index'));
            }
        });
        setActiveIndex(closest);
    }, []);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        el.scrollLeft = 0;
        el.addEventListener('scroll', updateState, { passive: true });
        window.addEventListener('resize', updateState);
        updateState();
        return () => {
            el.removeEventListener('scroll', updateState);
            window.removeEventListener('resize', updateState);
        };
    }, [updateState]);

    const scrollTo = (index: number) => {
        const el = containerRef.current;
        if (!el) return;
        const card = el.querySelector(`[data-card-index="${index}"]`) as HTMLElement | null;
        if (card) el.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
    };

    const prev = () => scrollTo(Math.max(0, activeIndex - 1));
    const next = () => scrollTo(Math.min(modules.length - 1, activeIndex + 1));

    return (
        <section className="bg-white py-24 border-t border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">Productized Consulting</span>
                    <h2 className="text-4xl font-display font-bold text-bg-dark mb-6">
                        Modular by design. <br /> Integrated by default.
                    </h2>
                    <p className="text-xl text-bg-dark/60">
                        Choose the module you need to unplug a specific bottleneck, or deploy the full stack for a complete transformation.
                    </p>
                </div>
            </div>

            {/* Carousel */}
            <div className="relative group/carousel">
                {/* Gradient masks */}
                <div className="absolute left-0 top-0 bottom-12 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-12 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                {/* Scrollable track */}
                <div
                    ref={containerRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-8 md:px-16"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {modules.map((mod, index) => (
                        <div
                            key={mod.id}
                            data-card-index={index}
                            className="w-[85vw] md:w-[420px] flex-shrink-0 snap-start bg-white border border-gray-200 rounded-3xl p-8 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group flex flex-col"
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-primary/10 transition-colors">
                                    <mod.icon className="text-bg-dark w-8 h-8 group-hover:text-primary transition-colors" />
                                </div>
                                <span className="text-xs font-bold bg-gray-100 px-3 py-1 rounded-full text-bg-dark/50">
                                    {mod.timeline}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-bg-dark mb-3">{mod.title}</h3>
                            <p className="text-bg-dark/60 text-base mb-8 line-clamp-2">{mod.shortDesc}</p>

                            <div className="space-y-3 mb-8 flex-grow">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-bg-dark/30 mb-2">Includes</p>
                                {mod.deliverables.slice(0, 3).map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-bg-dark/80 font-medium">
                                        <div className="min-w-[4px] h-[4px] bg-primary rounded-full flex-shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto border-t border-gray-100 pt-6 flex items-center justify-between">
                                <span className="text-xs font-bold text-bg-dark/40">Best for: {mod.whoFor.split(',')[0]}</span>
                                <button className="py-2 px-4 border border-gray-200 rounded-full text-xs font-bold text-bg-dark hover:bg-bg-dark hover:text-white transition-all flex items-center gap-2">
                                    View Details <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Prev arrow */}
                <button
                    onClick={prev}
                    aria-label="Previous module"
                    className={`absolute left-4 top-1/2 -translate-y-6 z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-bg-dark hover:text-primary hover:border-primary/40 transition-all duration-200
                    ${!canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
                    <ChevronLeft size={20} />
                </button>

                {/* Next arrow */}
                <button
                    onClick={next}
                    aria-label="Next module"
                    className={`absolute right-4 top-1/2 -translate-y-6 z-20 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-bg-dark hover:text-primary hover:border-primary/40 transition-all duration-200
                    ${!canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-1.5 mt-6">
                {modules.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollTo(idx)}
                        aria-label={`Go to module ${idx + 1}`}
                        className={`rounded-full transition-all duration-300 ${
                            activeIndex === idx ? 'w-5 h-2 bg-primary' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                        }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default ModuleGrid;
