import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CareersManifesto: React.FC = () => {
    return (
        <section className="bg-bg-dark py-24 md:py-32 relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

            <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-8">
                        Join Marketing Extension
                    </p>
                    <h2 className="text-4xl md:text-6xl font-display font-medium leading-[1.1] text-white mb-8">
                        Ready to do your most meaningful work yet? Build with a team that’s <span className="text-primary italic font-serif">all signal.</span>
                    </h2>
                    <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-2xl mx-auto">
                        You’ll ship real outcomes, not vibes—alongside operators who care about craft, clarity, and momentum.
                    </p>

                    <a href="#open-roles" className="bg-white text-bg-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2 mb-16">
                        Explore all jobs <ArrowRight size={20} />
                    </a>

                    {/* Proof Strip */}
                    <div className="border-t border-white/10 pt-10">
                        <div className="flex flex-wrap justify-center gap-4 text-white/30 font-bold text-sm uppercase tracking-widest">
                            <span className="px-4 py-2 border border-white/10 rounded-full">Startups</span>
                            <span className="px-4 py-2 border border-white/10 rounded-full">Scaleups</span>
                            <span className="px-4 py-2 border border-white/10 rounded-full">NGOs</span>
                            <span className="px-4 py-2 border border-white/10 rounded-full">Corporates</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CareersManifesto;
