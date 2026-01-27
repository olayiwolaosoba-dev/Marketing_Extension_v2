import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, GitBranch, ShieldCheck, ArrowRight, Activity, Terminal, Lock } from 'lucide-react';
import { aiCapabilities } from '../../data/martech';

const icons = {
    enablement: Bot,
    automation: GitBranch,
    governance: ShieldCheck
};

const AiInfrastructure: React.FC = () => {
    const [activeId, setActiveId] = useState(aiCapabilities[0].id);

    // Get active capability data
    const activeCap = aiCapabilities.find(c => c.id === activeId) || aiCapabilities[0];

    return (
        <section id="ai-infra" className="bg-bg-dark py-24 relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 mb-6 bg-white/5 backdrop-blur-sm">
                        <span className="text-white/60 font-bold text-[10px] uppercase tracking-[0.2em]">Artificial Intelligence</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        AI as infrastructure, <br /> not a gimmick.
                    </h2>
                    <p className="text-xl text-white/60 font-light">
                        We don't sell "magic". We build the data pipelines and context windows required for AI to actually work reliably in a business context.
                    </p>
                </div>

                {/* Main Content: Triad Cards + Console */}
                <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">

                    {/* Left Column: Interactive Cards (Triad) */}
                    <div className="lg:col-span-7 grid gap-4">
                        {aiCapabilities.map((cap) => {
                            const Icon = icons[cap.id as keyof typeof icons] || Bot;
                            const isActive = activeId === cap.id;

                            return (
                                <motion.div
                                    key={cap.id}
                                    onClick={() => setActiveId(cap.id)}
                                    initial={false}
                                    animate={{
                                        backgroundColor: isActive ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                                        borderColor: isActive ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                                        scale: isActive ? 1.02 : 1
                                    }}
                                    className="rounded-2xl p-6 border cursor-pointer group relative overflow-hidden transition-all duration-300"
                                >
                                    {/* Active Glow Accent */}
                                    {isActive && (
                                        <div className={`absolute top-0 left-0 w-1 h-full bg-${cap.color}-500/50`} />
                                    )}

                                    <div className="flex items-start gap-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${isActive ? `bg-${cap.color}-500/20 text-${cap.color}-400` : 'bg-white/5 text-white/30'}`}>
                                            <Icon size={24} />
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-2">
                                                <h3 className={`text-xl font-bold transition-colors ${isActive ? 'text-white' : 'text-white/60'}`}>{cap.title}</h3>
                                                {isActive && <motion.div layoutId="active-arrow" className="text-primary"><ArrowRight size={18} /></motion.div>}
                                            </div>

                                            <p className="text-white/60 text-sm mb-4 leading-relaxed">{cap.promise}</p>

                                            {/* Micro-bullets (Always visible on active, or hover) */}
                                            <div className={`space-y-2 overflow-hidden transition-all duration-300 ${isActive ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100'}`}>
                                                {cap.bullets.map((bullet, i) => (
                                                    <div key={i} className="flex items-center gap-2 text-sm text-white/50">
                                                        <div className={`w-1 h-1 rounded-full bg-${cap.color}-500`} />
                                                        {bullet}
                                                    </div>
                                                ))}

                                                {/* Chips */}
                                                <div className="flex flex-wrap gap-2 pt-3">
                                                    {cap.chips.map((chip, i) => (
                                                        <span key={i} className="px-2 py-1 rounded-md bg-white/5 text-[10px] font-mono text-white/40 border border-white/5">
                                                            {chip}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right Column: AI Console Panel */}
                    <div className="lg:col-span-5 h-full relative min-h-[400px]">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeId}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden flex flex-col"
                            >
                                {/* Console Header */}
                                <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/5">
                                    <div className="flex items-center gap-2 text-xs font-mono text-white/40">
                                        <Terminal size={14} />
                                        <span>AI_CONSOLE_V1.2</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-xs font-mono text-green-500">SYSTEM_ONLINE</span>
                                    </div>
                                </div>

                                {/* Dynamic Content based on Selection */}
                                <div className="flex-1 space-y-8">

                                    {/* Visualization Area */}
                                    <div className="space-y-4">
                                        <h4 className="text-sm font-bold text-white/80 uppercase tracking-wide flex items-center gap-2">
                                            <Activity size={14} className={`text-${activeCap.color}-400`} />
                                            Live Metrics
                                        </h4>

                                        {/* Render Logic based on Type */}
                                        {activeCap.id === 'enablement' && (
                                            <div className="grid grid-cols-2 gap-3">
                                                {activeCap.consoleData.metrics?.map((m: any, i: number) => (
                                                    <div key={i} className="bg-white/5 p-3 rounded-lg border border-white/5">
                                                        <div className="text-white/40 text-xs mb-1">{m.label}</div>
                                                        <div className="text-xl font-mono font-bold text-white">{m.value}%</div>
                                                        <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                                                            <div className="h-full bg-blue-500" style={{ width: `${m.value}%` }} />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {activeCap.id === 'automation' && (
                                            <div className="space-y-2">
                                                {activeCap.consoleData.automations?.map((agent: string, i: number) => (
                                                    <div key={i} className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/5">
                                                        <span className="text-sm text-white/80">{agent}</span>
                                                        <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-[10px] rounded border border-green-500/20">ACTIVE</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {activeCap.id === 'governance' && (
                                            <div className="bg-white/5 rounded-lg border border-white/5 p-4 font-mono text-xs text-green-400/80 space-y-2">
                                                {activeCap.consoleData.checks?.map((check: string, i: number) => (
                                                    <div key={i} className="flex gap-2">
                                                        <span>{'>'}</span>
                                                        <span>{check}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Expanded Examples / Details */}
                                    <div className="space-y-2">
                                        <div className="text-xs font-bold text-white/40 uppercase mb-2">Deployed Modules</div>
                                        {activeCap.examples.map((ex, i) => (
                                            <div key={i} className="group flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-default">
                                                <div className={`mt-1 w-1.5 h-1.5 rounded-full bg-${activeCap.color}-500 shrink-0`} />
                                                <div>
                                                    <div className="text-sm font-bold text-white mb-0.5 group-hover:text-primary transition-colors">{ex.label}</div>
                                                    <div className="text-xs text-white/40">{ex.desc}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                                {/* Console Footer */}
                                <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-white/30 flex justify-between">
                                    <span>{activeCap.consoleData.status}</span>
                                    <span>ID: {activeCap.id.toUpperCase()}</span>
                                </div>

                                {/* Background Texture/Grid */}
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

                {/* Bottom CTA Row (Shared) */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 border-t border-white/5 pt-12">
                    <div className="flex items-center gap-4">
                        <button className="bg-primary hover:bg-white hover:text-bg-dark text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-primary/20 flex items-center gap-2 group">
                            Take AI Readiness Test
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-6 py-3 rounded-full text-white/60 font-bold hover:text-white transition-colors">
                            Book an AI Audit
                        </button>
                    </div>
                    <div className="hidden md:block w-px h-8 bg-white/10" />
                    <div className="flex items-center gap-2 text-white/40 text-sm font-medium">
                        <Lock size={14} className="text-green-500" />
                        <span>Designed for enterprise workflows. Built with controls.</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AiInfrastructure;
