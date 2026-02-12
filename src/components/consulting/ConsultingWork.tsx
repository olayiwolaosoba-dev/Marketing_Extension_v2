import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';

const ConsultingWork: React.FC = () => {
    // Force reload
    const selectedIds = ['1', '3', '6']; // Zone, Smartcomply, SabiTrack
    const studies = caseStudies
        .filter(study => selectedIds.includes(study.id))
        .map(study => ({
            id: study.id,
            client: study.client,
            category: study.vertical === 'saas' ? 'SaaS' :
                study.vertical === 'regtech' ? 'RegTech' :
                    study.vertical.charAt(0).toUpperCase() + study.vertical.slice(1),
            title: study.title.includes('—') ? study.title.split('—')[1].trim() : study.title,
            result: study.outcome,
            image: study.image,
            link: study.path || '/case-studies'
        }));

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">Selected Work</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-text-dark leading-tight">
                            Strategies that changed<br /> the <span className="text-primary font-serif italic font-normal">trajectory.</span>
                        </h2>
                    </div>
                    <Link to="/case-studies" className="hidden md:flex items-center gap-2 text-text-dark font-bold hover:text-primary transition-colors border-b border-text-dark/20 hover:border-primary pb-1">
                        View all case studies
                        <ArrowUpRight size={18} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {studies.map((study, idx) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <Link to={study.link}>
                                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                                    {/* Result Badge */}
                                    <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                                        <span className="text-white text-xs font-bold uppercase tracking-wider">{study.category}</span>
                                    </div>

                                    {/* Result Stat (Visible on Hover) */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="bg-primary/90 backdrop-blur-md px-6 py-4 rounded-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                                            <span className="text-white font-bold text-lg">{study.result}</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-primary text-xs font-bold uppercase tracking-widest mb-3">{study.client}</div>
                                    <h3 className="text-2xl font-display font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">
                                        {study.title}
                                    </h3>
                                    <div className="w-12 h-0.5 bg-gray-200 mt-6 group-hover:w-full group-hover:bg-primary transition-all duration-500" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 md:hidden text-center">
                    <Link to="/case-studies" className="inline-flex items-center gap-2 text-primary font-bold">
                        View all case studies
                        <ArrowUpRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ConsultingWork;
