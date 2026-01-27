import React from 'react';
import { motion } from 'framer-motion';

const MartechAIPage: React.FC = () => {
    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto text-center"
            >
                <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Service</span>
                <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">MarTech + AI</h1>
                <p className="text-xl text-text-muted mb-12 leading-relaxed max-w-2xl mx-auto">
                    Design and implement the stack that makes marketing run smoothly.
                </p>
            </motion.div>
        </div>
    );
};

export default MartechAIPage;
