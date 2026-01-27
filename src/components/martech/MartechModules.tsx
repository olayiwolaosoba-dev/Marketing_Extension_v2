import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Layers, Bot, Shield } from 'lucide-react';

const capabilities = [
    {
        icon: Code,
        title: "Product & Web Engineering",
        desc: "Marketing sites that feel like software products.",
        bullets: ["Next.js/headless builds", "Custom tools/calculators", "Performance engineering"],
        link: "#builds"
    },
    {
        icon: Layers,
        title: "Marketing Systems & Automation",
        desc: "The plumbing that makes growth repeatable.",
        bullets: ["CRM/CDP alignment", "Cross-channel orchestration", "Revenue data pipelines"],
        link: "#builds"
    },
    {
        icon: Bot,
        title: "AI Enablement & Agents",
        desc: "AI systems you can trust in production.",
        bullets: ["AI audits", "Agentic workflows", "Team training + playbooks"],
        link: "#ai-infra"
    },
    {
        icon: Shield,
        title: "Managed MarTech",
        desc: "We guard the stack while you ship campaigns.",
        bullets: ["Monitoring + fixes", "Vendor governance", "Monthly optimization"],
        link: "#process"
    }
];

const MartechModules: React.FC = () => {
    return (
        <section id="capabilities" className="bg-bg-dark py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-500/5 blur-[150px] pointer-events-none rounded-full -translate-x-1/2" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Core Capabilities</h2>
                    <p className="text-white/60">Comprehensive engineering for the modern marketing stack.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {capabilities.map((module, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
                        >
                            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <module.icon size={24} />
                            </div>

                            <h3 className="text-lg font-display font-bold text-white mb-2">{module.title}</h3>
                            <p className="text-white/60 text-sm mb-6 min-h-[40px] italic">"{module.desc}"</p>

                            <ul className="space-y-2 mb-8 border-t border-white/5 pt-4">
                                {module.bullets.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-xs text-white/50">
                                        <div className="w-1 h-1 rounded-full bg-primary mt-1.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <a href={module.link} className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all">
                                Learn More <ArrowRight size={14} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MartechModules;
