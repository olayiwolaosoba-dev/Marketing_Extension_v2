import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const nodes = [
    { id: 'sources', label: 'Sources', x: 10, y: 50 },
    { id: 'cdp', label: 'Identity / CDP', x: 30, y: 50 },
    { id: 'warehouse', label: 'Warehouse', x: 50, y: 50, main: true },
    { id: 'activation', label: 'Activation', x: 70, y: 50 },
    { id: 'channels', label: 'Channels', x: 90, y: 50 },

    // Bottom Flow (Intelligence)
    { id: 'analytics', label: 'Analytics', x: 50, y: 80 },
    { id: 'decisions', label: 'Decisions', x: 70, y: 80 },
];

const ArchitectureDiagram: React.FC = () => {
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    return (
        <section id="architecture" className="bg-black py-24 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl font-display font-bold text-white mb-4">
                            Your growth system—<br /><span className="text-primary">mapped end to end.</span>
                        </h2>
                        <p className="text-white/60">
                            No black boxes. We architect transparent data flows that you own.
                        </p>
                    </div>
                    <button className="text-white border border-white/20 px-6 py-3 rounded-full font-bold text-sm hover:bg-white hover:text-black transition-all">
                        View Example Build
                    </button>
                </div>

                <div className="relative aspect-[2/1] w-full bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
                    {/* Simplified Interactive Visualization using DIVs for robustness */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full max-w-4xl grid grid-cols-5 gap-4 relative z-10 px-8">

                            {/* Connection Lines (Background) */}
                            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -z-10 -translate-y-1/2" />

                            {nodes.filter(n => n.y === 50).map((node, i) => (
                                <div key={node.id} className="flex flex-col items-center group relative">
                                    <div
                                        className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 z-10 bg-black ${node.main
                                                ? 'border-primary shadow-[0_0_30px_rgba(255,107,61,0.4)]'
                                                : 'border-white/20 hover:border-white'
                                            }`}
                                    >
                                        <div className={`w-3 h-3 rounded-full ${node.main ? 'bg-primary' : 'bg-white/40'}`} />
                                    </div>
                                    <span className="text-white/60 text-xs font-bold uppercase tracking-widest mt-4 group-hover:text-white transition-colors">
                                        {node.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Intelligence Layer */}
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-md flex justify-around">
                        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent absolute -top-16 left-1/2" />

                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-xl border border-white/20 bg-black flex items-center justify-center mb-2 hover:border-primary transition-colors">
                                <div className="w-2 h-2 rounded-full bg-blue-400" />
                            </div>
                            <span className="text-white/40 text-[10px] font-bold uppercase">Analytics</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-xl border border-white/20 bg-black flex items-center justify-center mb-2 hover:border-primary transition-colors">
                                <div className="w-2 h-2 rounded-full bg-green-400" />
                            </div>
                            <span className="text-white/40 text-[10px] font-bold uppercase">Decisions</span>
                        </div>
                    </div>

                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
                </div>

            </div>
        </section>
    );
};

export default ArchitectureDiagram;
