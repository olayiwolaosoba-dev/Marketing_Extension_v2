import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const LifeManifesto: React.FC = () => {
    return (
        <section className="bg-bg-dark py-32 text-center">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-display font-medium leading-[1.1] text-white mb-8">
                        We don’t 'service an account.' <br /> We co-own the marketing function—<span className="text-primary italic font-serif">with you.</span>
                    </h2>
                    <p className="text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto">
                        If you care about craft, clarity, and outcomes—you’ll fit in. We are partners, not vendors.
                    </p>

                    <a href="/careers" className="bg-white text-bg-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                        Explore roles <ArrowRight size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default LifeManifesto;
