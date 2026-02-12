import React from 'react';
import { motion } from 'framer-motion';

const Manifesto: React.FC = () => {
    return (
        <section className="bg-bg-dark py-24 md:py-32 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-5xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-white mb-8">
                        Not a vendor. Not a deck-and-disappear consultancy—an <span className="text-primary italic font-serif">embedded marketing office</span> that co-owns outcomes, end-to-end.
                    </h2>
                    <p className="text-white/40 font-bold uppercase tracking-[0.2em] text-sm md:text-base">
                        Strategy. Creative. Technology. Data. Delivered as one team.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Manifesto;
