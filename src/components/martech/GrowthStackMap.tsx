import React from 'react';
import { motion } from 'framer-motion';
import { Database, GitBranch, Share2, Brain, Shield } from 'lucide-react';

const GrowthStackMap: React.FC = () => {
    const nodes = [
        { id: 'data', label: 'Data Layer', icon: Database, x: '10%', y: '50%', color: 'bg-amber-500' },
        { id: 'orch', label: 'Orchestration', icon: GitBranch, x: '30%', y: '50%', color: 'bg-blue-500' },
        { id: 'channels', label: 'Channels', icon: Share2, x: '50%', y: '50%', color: 'bg-green-500' },
        { id: 'intel', label: 'Intelligence', icon: Brain, x: '70%', y: '50%', color: 'bg-purple-500' },
        { id: 'gov', label: 'Governance', icon: Shield, x: '90%', y: '50%', color: 'bg-red-500' },
    ];

    return (
        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] bg-white/5 rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-white/10 -translate-y-1/2" />

            {/* Animated Pulses along the line */}
            <motion.div
                animate={{ x: ['0%', '100%'], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-[10%] w-[20%] h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent -translate-y-1/2"
            />

            {nodes.map((node, i) => (
                <motion.div
                    key={node.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3"
                    style={{ left: node.x, top: node.y }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                >
                    <div className="relative group cursor-pointer">
                        <div className={`absolute inset-0 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity ${node.color}`} />
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-bg-dark border border-white/20 group-hover:border-white transition-colors relative z-10`}>
                            <node.icon size={20} className="text-white/80" />
                        </div>

                        {/* Status Dot */}
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-bg-dark rounded-full flex items-center justify-center border border-white/10">
                            <div className={`w-1.5 h-1.5 rounded-full ${node.color}`} />
                        </div>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">{node.label}</span>
                </motion.div>
            ))}

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        </div>
    );
};

export default GrowthStackMap;
