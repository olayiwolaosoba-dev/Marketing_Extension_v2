import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, LayoutTemplate, Activity, CalendarClock, Target } from 'lucide-react';

const SmarterWay: React.FC = () => {
    return (
        <section className="bg-bg-dark py-24 md:py-32" id="how-we-work">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight"
                        >
                            A smarter way to build <br />marketing <span className="font-serif italic text-primary">that holds up.</span>
                        </motion.h2>

                        <p className="text-lg text-white/70 mb-10 leading-relaxed">
                            Most organisations run marketing on vibes, not on a system. Budgets grow, pressure rises, and leaders are flooded with pitches—but no one owns marketing end-to-end. We exist to change that.
                        </p>

                        <div className="space-y-8">
                            {[
                                {
                                    title: "Strategic clarity",
                                    desc: "Narrative + GTM choices everyone can repeat.",
                                    icon: Target
                                },
                                {
                                    title: "Execution discipline",
                                    desc: "Cadence, pods, and playbooks that ship.",
                                    icon: Activity
                                },
                                {
                                    title: "Intelligent infrastructure",
                                    desc: "Tools, automation, and dashboards that track what matters.",
                                    icon: LayoutTemplate
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary border border-white/10">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-xl mb-1">{item.title}</h4>
                                        <p className="text-white/60">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Mosaic Collage */}
                    <div className="relative">
                        {/* Background Blob */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-[100px]" />

                        <div className="grid grid-cols-2 gap-4 relative z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="space-y-4 pt-12"
                            >
                                {/* Dashboard Card */}
                                <div className="bg-[#1A1A1A] p-4 rounded-xl border border-white/10 shadow-2xl">
                                    <div className="flex gap-2 mb-3">
                                        <div className="w-2 h-2 rounded-full bg-red-500" />
                                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-2 bg-white/10 rounded w-3/4" />
                                        <div className="h-16 bg-white/5 rounded w-full" />
                                        <div className="flex gap-2">
                                            <div className="h-8 bg-primary/20 rounded w-1/2" />
                                            <div className="h-8 bg-white/5 rounded w-1/2" />
                                        </div>
                                    </div>
                                </div>

                                {/* Creative Frame */}
                                <div className="aspect-[4/5] bg-gray-800 rounded-xl overflow-hidden relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=500"
                                        className="w-full h-full object-cover opacity-60"
                                    />
                                    <div className="absolute bottom-4 left-4">
                                        <span className="bg-white text-black text-xs font-bold px-2 py-1 uppercase">Campaign Live</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-4"
                            >
                                {/* Calendar/Rhythm */}
                                <div className="aspect-square bg-[#1A1A1A] rounded-xl border border-white/10 p-4 flex flex-col justify-between">
                                    <div className="flex justify-between items-center text-white/40 text-xs uppercase font-bold">
                                        <span>Q3 Rhythm</span>
                                        <CalendarClock size={16} />
                                    </div>
                                    <div className="space-y-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="flex items-center gap-2">
                                                <div className="w-1 h-8 bg-primary/20 rounded-full" />
                                                <div className="w-full h-8 bg-white/5 rounded border border-white/5" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* OS Diagram */}
                                <div className="bg-white p-6 rounded-xl shadow-lg">
                                    <div className="text-bg-dark font-display font-bold text-lg mb-2">Marketing OS</div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="bg-bg-gray p-2 rounded text-xs font-medium text-center">Strategy</div>
                                        <div className="bg-bg-gray p-2 rounded text-xs font-medium text-center">Content</div>
                                        <div className="col-span-2 bg-primary text-white p-2 rounded text-xs font-bold text-center">Growth Engine</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SmarterWay;
