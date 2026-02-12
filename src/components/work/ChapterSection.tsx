import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ChapterProps {
    id: string;
    title: string;
    intro: string;
    children?: ReactNode;
    isDark?: boolean;
}

const ChapterSection: React.FC<ChapterProps> = ({ id, title, intro, children, isDark = false }) => {
    return (
        <section
            id={id}
            className={`py-24 ${isDark ? 'bg-bg-dark text-white' : 'bg-transparent text-bg-dark'} scroll-mt-24`}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={isDark ? "" : ""}
            >
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className={`text-3xl font-display font-medium mb-6 ${isDark ? 'text-white' : 'text-bg-dark'}`}>
                            {title}
                        </h2>
                    </div>
                    <div className="md:col-span-8">
                        <p className={`text-xl font-light mb-12 leading-relaxed ${isDark ? 'text-white/80' : 'text-text-muted'}`}>
                            {intro}
                        </p>
                        <div className="space-y-8">
                            {children}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ChapterSection;
