import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AiManifesto: React.FC = () => {
    return (
        <section className="bg-bg-dark py-32 text-center relative overflow-hidden">
            {/* Abstract Background Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-display font-medium leading-tight text-white mb-10">
                        By integrating AI into our marketing operating system, we help teams move from busy work to business outcomes—<span className="text-primary">faster strategy, sharper creative, disciplined execution.</span>
                    </h2>

                    <button className="bg-white text-bg-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2 group">
                        See how we work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default AiManifesto;
