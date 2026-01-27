import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Filter, ChevronDown, Check } from 'lucide-react';
import { caseStudies, Vertical, ServicePillar, ProjectStage } from '../../data/caseStudies';
import { industries } from '../../data/caseStudies';
import FilterChip from '../common/FilterChip';

const CaseStudyGrid: React.FC = () => {
    // State
    const [filterIndustry, setFilterIndustry] = useState<string>('all');
    const [filterPillar, setFilterPillar] = useState<string>('all');
    const [visibleCount, setVisibleCount] = useState<number>(6);

    // Filter Logic
    const filteredStudies = useMemo(() => {
        return caseStudies.filter(study => {
            const matchIndustry = filterIndustry === 'all' || study.vertical === filterIndustry;
            const matchPillar = filterPillar === 'all' || study.pillar.includes(filterPillar as ServicePillar);
            return matchIndustry && matchPillar;
        });
    }, [filterIndustry, filterPillar]);

    const displayedStudies = filteredStudies.slice(0, visibleCount);

    return (
        <section id="case-studies" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header & Filters */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Archive</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-text-dark max-w-lg">
                            Results you can <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">verify.</span>
                        </h2>
                    </div>

                    <div className="flex flex-wrap gap-4 items-center">
                        <div className="flex items-center gap-2 border-r border-gray-200 pr-4 mr-2">
                            <Filter size={16} className="text-text-muted" />
                            <span className="text-sm font-bold text-text-muted">Filter by:</span>
                        </div>

                        {/* Industry Filter (Simple Dropdown style for simplicity in this MVP, or Chips) */}
                        <div className="flex flex-wrap gap-2">
                            <FilterChip
                                label="All Industries"
                                isActive={filterIndustry === 'all'}
                                onClick={() => setFilterIndustry('all')}
                            />
                            {industries.map(ind => (
                                <FilterChip
                                    key={ind.id}
                                    label={ind.label.split(' ')[0]} // Shorten label
                                    isActive={filterIndustry === ind.id}
                                    onClick={() => setFilterIndustry(ind.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {displayedStudies.map((study) => (
                            <motion.div
                                key={study.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Image Overlay */}
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-bg-dark/40 group-hover:bg-bg-dark/20 transition-colors" />

                                    {/* Logo Tag */}
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg">
                                        <span className="text-xs font-bold text-text-dark uppercase tracking-wide">{study.client}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {study.pillar.map(p => (
                                            <span key={p} className="text-[10px] uppercase font-bold tracking-wider text-text-muted border border-gray-200 px-2 py-0.5 rounded-md">
                                                {p}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-xl font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">
                                        {study.title}
                                    </h3>

                                    <div className="h-px w-full bg-gray-100 my-4" />

                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Outcome</p>
                                            <p className="font-bold text-text-dark">{study.outcome}</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                            <ArrowUpRight size={18} />
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Reveal details overlay (Mobile friendly - visible on click/tap) */}
                                <div className="absolute inset-0 bg-white/95 backdrop-blur-md p-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Deliverables</p>
                                    <ul className="mb-8 space-y-2">
                                        {study.deliverables?.map(d => (
                                            <li key={d} className="flex items-center gap-2 text-sm text-text-dark">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                {d}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="w-full py-3 border border-text-dark text-text-dark font-bold rounded-xl hover:bg-text-dark hover:text-white transition-colors">
                                        Read Full Case Study
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredStudies.length > visibleCount && (
                    <div className="mt-16 text-center">
                        <button
                            onClick={() => setVisibleCount(prev => prev + 6)}
                            className="bg-white border border-gray-200 text-text-dark px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors"
                        >
                            Load More Case Studies
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CaseStudyGrid;
