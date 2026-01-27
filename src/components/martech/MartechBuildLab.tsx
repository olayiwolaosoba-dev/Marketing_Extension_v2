import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X,
    ArrowRight,
    Layout,
    Terminal,
    Users,
    LineChart,
    Zap,
    MessageSquare,
    Database,
    GitBranch,
    Box
} from 'lucide-react';

interface BuildModule {
    id: string;
    title: string;
    desc: string;
    icon: any;
    tags: string[];
    stack: string;
    timeline: string;
    outputs: string[];
}

const buildModules: BuildModule[] = [
    {
        id: 'lifecycle',
        title: "Lifecycle Automation Engine",
        desc: "Multi-channel orchestration for onboarding & retention.",
        icon: Zap,
        tags: ["Automation", "CRM"],
        stack: "HubSpot / Segment / Customer.io",
        timeline: "4-6 Weeks",
        outputs: ["Workflow Logic Map", "Live Automations", "Event Schema"]
    },
    {
        id: 'command',
        title: "Marketing Command Center",
        desc: "Unified view of pipeline velocity and attribution.",
        icon: LineChart,
        tags: ["Data", "Dashboard"],
        stack: "Snowflake / Tableau / PowerBI",
        timeline: "3-4 Weeks",
        outputs: ["Executive Dashboard", "Data Pipeline", "Documentation"]
    },
    {
        id: 'headless',
        title: "Headless Marketing Site",
        desc: "High-performance Next.js sites that marketers can edit.",
        icon: Layout,
        tags: ["Web", "CMS"],
        stack: "Next.js / Sanity / Vercel",
        timeline: "6-8 Weeks",
        outputs: ["Production Site", "CMS Setup", "Component Library"]
    },
    {
        id: 'experiment',
        title: "Experimentation Toolkit",
        desc: "A/B testing infrastructure and feature flagging.",
        icon: GitBranch,
        tags: ["Growth", "Eng"],
        stack: "LaunchDarkly / PostHog",
        timeline: "2-3 Weeks",
        outputs: ["Experiment Dashboard", "Tracking Setup", "Team Playbook"]
    },
    {
        id: 'enrichment',
        title: "Lead Capture Pipeline",
        desc: "Real-time enrichment and routing before sales touch.",
        icon: Database,
        tags: ["Data", "Ops"],
        stack: "Clay / Clearbit / Zapier",
        timeline: "2 Weeks",
        outputs: ["Enrichment API", "Routing Logic", "CRM Integration"]
    },
    {
        id: 'kb',
        title: "AI Knowledge Base",
        desc: "Internal RAG system for sales and support teams.",
        icon: MessageSquare,
        tags: ["AI", "Internal"],
        stack: "OpenAI / Pinecone / LangChain",
        timeline: "4 Weeks",
        outputs: ["Embedding Pipeline", "Chat Interface", "Admin Panel"]
    },
    {
        id: 'agent',
        title: "Agentic Triage",
        desc: "Autonomous agents that qualify and route inbound leads.",
        icon: Users,
        tags: ["AI", "Agent"],
        stack: "AutoGPT / Custom Python",
        timeline: "4-6 Weeks",
        outputs: ["Agent Swarm", "Safety Layer", "Monitoring Dashboard"]
    },
    {
        id: 'attribution',
        title: "Attribution Reality Check",
        desc: "Unbiased truth about what's actually driving revenue.",
        icon: Terminal,
        tags: ["Data", "Analytics"],
        stack: "dbt / BigQuery",
        timeline: "3 Weeks",
        outputs: ["Attribution Model", "Looker Studio", "SQL Repo"]
    },
    {
        id: 'tools',
        title: "Internal Tools",
        desc: "Custom admin panels to replace spreadsheets.",
        icon: Box,
        tags: ["Eng", "Internal"],
        stack: "Retool / Supabase",
        timeline: "2-4 Weeks",
        outputs: ["Admin Portal", "CRUD API", "Access Control"]
    }
];

const MartechBuildLab: React.FC = () => {
    const [selectedModule, setSelectedModule] = useState<BuildModule | null>(null);

    return (
        <section id="builds" className="bg-bg-dark py-24 relative">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        We don’t just advise. <span className="text-primary">We ship.</span>
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl font-light">
                        Production-grade code, dashboards, automations, and internal tools deployed directly into your cloud environment.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {buildModules.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            onClick={() => setSelectedModule(item)}
                            className="group bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 rounded-xl p-6 cursor-pointer transition-all hover:-translate-y-1 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                                <ArrowRight size={20} className="-rotate-45" />
                            </div>

                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-white/5 rounded-lg text-white group-hover:bg-primary group-hover:text-white transition-colors">
                                    <item.icon size={24} />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-white/50 text-sm mb-4 min-h-[40px]">{item.desc}</p>

                            <div className="flex flex-wrap gap-2">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white/80 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedModule && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedModule(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-bg-dark border border-white/10 rounded-2xl w-full max-w-2xl relative z-10 overflow-hidden shadow-2xl"
                        >
                            <div className="p-8">
                                <div className="flex items-start justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                            <selectedModule.icon size={32} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">{selectedModule.title}</h3>
                                            <p className="text-white/60">{selectedModule.desc}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedModule(null)}
                                        className="p-2 hover:bg-white/10 rounded-full text-white/40 hover:text-white transition-colors"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-3">Typical Stack</h4>
                                        <div className="text-white font-mono text-sm bg-white/5 p-3 rounded-lg border border-white/5">
                                            {selectedModule.stack}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-3">Timeline</h4>
                                        <div className="flex items-center gap-2 text-white font-bold">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                            {selectedModule.timeline}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-3">Deliverables</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        {selectedModule.outputs.map((output, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-white/80 bg-white/5 px-3 py-2 rounded-lg">
                                                <Box size={14} className="text-primary" />
                                                {output}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/5 p-6 border-t border-white/10 flex justify-end">
                                <button onClick={() => setSelectedModule(null)} className="px-6 py-2 bg-white text-bg-dark font-bold rounded-lg hover:bg-neutral-200 transition-colors">
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default MartechBuildLab;
