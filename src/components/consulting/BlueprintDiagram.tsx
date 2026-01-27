import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const nodes = [
    { id: 'core', label: 'Growth Engine', x: 50, y: 50, r: 25, color: '#FF6B3D' },
    { id: 'pos', label: 'Positioning', x: 50, y: 20, r: 15, details: 'Narrative & Messaging', color: '#fff' },
    { id: 'gtm', label: 'GTM Strategy', x: 80, y: 50, r: 15, details: 'Channels & Campaigns', color: '#fff' },
    { id: 'ops', label: 'Operating Model', x: 50, y: 80, r: 15, details: 'Team & Rituals', color: '#fff' },
    { id: 'tech', label: 'MarTech', x: 20, y: 50, r: 15, details: 'Data & Analytics', color: '#fff' },
];

const connections = [
    { from: 'core', to: 'pos' },
    { from: 'core', to: 'gtm' },
    { from: 'core', to: 'ops' },
    { from: 'core', to: 'tech' },
    // Outer connections
    { from: 'pos', to: 'gtm' },
    { from: 'gtm', to: 'ops' },
    { from: 'ops', to: 'tech' },
    { from: 'tech', to: 'pos' },
];

const BlueprintDiagram: React.FC = () => {
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    return (
        <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />

            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible relative z-10">
                {/* Connections */}
                {connections.map((conn, i) => {
                    const from = nodes.find(n => n.id === conn.from)!;
                    const to = nodes.find(n => n.id === conn.to)!;
                    return (
                        <motion.line
                            key={i}
                            x1={from.x}
                            y1={from.y}
                            x2={to.x}
                            y2={to.y}
                            stroke="rgba(255,255,255,0.2)"
                            strokeWidth="0.5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        />
                    );
                })}

                {/* Nodes */}
                {nodes.map((node) => (
                    <g
                        key={node.id}
                        onMouseEnter={() => setHoveredNode(node.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                        className="cursor-pointer group"
                    >
                        {/* Pulse Effect for Core */}
                        {node.id === 'core' && (
                            <motion.circle
                                cx={node.x}
                                cy={node.y}
                                r={node.r}
                                fill="none"
                                stroke={node.color}
                                strokeWidth="0.5"
                                initial={{ scale: 1, opacity: 0.5 }}
                                animate={{ scale: 1.2, opacity: 0 }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            />
                        )}

                        {/* Main Circle */}
                        <motion.circle
                            cx={node.x}
                            cy={node.y}
                            r={node.id === 'core' ? 12 : 6}
                            fill={node.id === 'core' ? node.color : '#1a1a1a'} // Dark fill for outer nodes
                            stroke={node.color}
                            strokeWidth="1" // Thicker stroke
                            whileHover={{ scale: 1.2, fill: node.color }} // Fill on hover
                            transition={{ type: "spring", stiffness: 300 }}
                        />

                        {/* Label */}
                        <text
                            x={node.x}
                            y={node.y + (node.id === 'core' ? 20 : 12)}
                            textAnchor="middle"
                            fill="white"
                            fontSize={node.id === 'core' ? "5" : "3.5"}
                            fontWeight="bold"
                            className="pointer-events-none uppercase tracking-widest"
                            style={{ fontCheck: 'display' }}
                        >
                            {node.label}
                        </text>
                    </g>
                ))}
            </svg>

            {/* Hover Details Card (Overlay) */}
            <AnimatePresence>
                {hoveredNode && nodes.find(n => n.id === hoveredNode)?.details && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-xl text-center z-20 min-w-[200px]"
                    >
                        <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">
                            {nodes.find(n => n.id === hoveredNode)?.label}
                        </p>
                        <p className="text-white text-sm font-medium">
                            {nodes.find(n => n.id === hoveredNode)?.details}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default BlueprintDiagram;
