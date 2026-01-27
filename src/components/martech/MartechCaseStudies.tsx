import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, X, Layout, Activity, MessageSquare, Database, LineChart, Server } from 'lucide-react';

/* --- Data --- */
const categories = ["All", "Web", "Dashboard", "Automation", "AI", "Data", "Managed Stack"];

const projects = [
    {
        id: 1,
        title: "Fintech Growth Stack Rebuild",
        client: "PayFlow",
        category: "Managed Stack",
        tags: ["HubSpot", "Segment", "Next.js"],
        outcome: "Replaced 4 legacy tools, saving $12k/mo.",
        image: "bg-emerald-900/20",
        type: "image"
    },
    {
        id: 2,
        title: "E-commerce Lifecycle Engine",
        client: "ShopScale",
        category: "Automation",
        tags: ["Klaviyo", "Shopify Plus", "Zapier"],
        outcome: "+40% repeat purchase rate via behavioral flows.",
        image: "bg-blue-900/20",
        type: "video"
    },
    {
        id: 3,
        title: "Global Attribution Dashboard",
        client: "CloudCorp",
        category: "Dashboard",
        tags: ["Snowflake", "Looker", "Fivetran"],
        outcome: "Unified ad spend view across 15 regions.",
        image: "bg-purple-900/20",
        type: "image"
    },
    {
        id: 4,
        title: "Headless CMS Migration",
        client: "TechNews",
        category: "Web",
        tags: ["Sanity", "Next.js", "Vercel"],
        outcome: "Page load speed improved by 300%.",
        image: "bg-orange-900/20",
        type: "image"
    },
    {
        id: 5,
        title: "AI Sales Copilot",
        client: "SalesForceOne",
        category: "AI",
        tags: ["OpenAI", "Pinecone", "Retool"],
        outcome: "Reduced support ticket volume by 60%.",
        image: "bg-pink-900/20",
        type: "video"
    },
    {
        id: 6,
        title: "Data Warehouse Unification",
        client: "LogiStream",
        category: "Data",
        tags: ["BigQuery", "dbt", "Hightouch"],
        outcome: "Single source of truth for 10M+ rows.",
        image: "bg-indigo-900/20",
        type: "image"
    },
    {
        id: 7,
        title: "Lead Scoring Algorithm",
        client: "MarketPro",
        category: "AI",
        tags: ["Python", "HubSpot API", "AWS"],
        outcome: "Identified high-intent leads with 90% accuracy.",
        image: "bg-cyan-900/20",
        type: "image"
    },
    {
        id: 8,
        title: "Event-Based Email Triggers",
        client: "EventX",
        category: "Automation",
        tags: ["Segment", "Customer.io"],
        outcome: "Real-time engagement within 5 seconds of signup.",
        image: "bg-teal-900/20",
        type: "image"
    }
];

const MartechCaseStudies: React.FC = () => {
    const [filter, setFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter || p.tags.includes(filter));

    return (
        <section className="bg-bg-dark py-24 relative">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                            Selected builds and <br /> transformations.
                        </h2>
                        <p className="text-white/60">Real production systems. Real revenue impact.</p>
                    </div>
                </div>

                {/* Filter Chips */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${filter === cat
                                    ? 'bg-white text-bg-dark border-white'
                                    : 'bg-white/5 text-white/60 border-white/10 hover:border-white/30 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedProject(project)}
                                className="group cursor-pointer relative aspect-[4/5] bg-bg-dark border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-colors"
                            >
                                {/* Background Image Placeholder */}
                                <div className={`absolute inset-0 ${project.image} transition-transform duration-700 group-hover:scale-105`} />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/50 to-transparent opacity-90" />

                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    <div className="mb-auto flex justify-between items-start">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 border border-white/10 px-2 py-1 rounded-md backdrop-blur-md">
                                            {project.category}
                                        </span>
                                        {project.type === 'video' && (
                                            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                                                <Play size={12} fill="currentColor" />
                                            </div>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/60 text-sm line-clamp-2 mb-4">
                                        {project.outcome}
                                    </p>

                                    <div className="flex items-center gap-2 text-white/40 text-xs opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                        View Case Study <ArrowRight size={12} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Simple Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            className="bg-bg-dark border border-white/10 rounded-2xl w-full max-w-lg relative z-10 overflow-hidden shadow-2xl"
                        >
                            <div className={`h-32 ${selectedProject.image} relative`}>
                                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-white hover:text-black transition-colors">
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="p-8">
                                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">{selectedProject.client}</span>
                                <h3 className="text-3xl font-display font-bold text-white mb-4">{selectedProject.title}</h3>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm font-bold text-white/40 uppercase mb-2">Outcome</h4>
                                        <p className="text-white text-lg">{selectedProject.outcome}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-bold text-white/40 uppercase mb-2">Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tags.map((tag: string) => (
                                                <span key={tag} className="px-3 py-1 bg-white/5 rounded-lg text-white/70 text-sm border border-white/5">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <button className="w-full bg-white text-bg-dark font-bold py-3 rounded-xl hover:bg-primary hover:text-white transition-colors">
                                        Read Full Story
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default MartechCaseStudies;
