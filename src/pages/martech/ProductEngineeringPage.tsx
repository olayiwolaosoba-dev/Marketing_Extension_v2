import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Code, Server, Cpu, Layers } from 'lucide-react';
import BuildGallery from '../../components/martech/BuildGallery';

const ProductEngineeringPage: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="bg-bg-dark min-h-screen pt-32">
            <div className="container mx-auto px-6 max-w-4xl text-center mb-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/20">
                    <Code size={12} /> Product Engineering
                </div>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-8">
                    Marketing sites that <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">feel like software.</span>
                </h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                    Stop wrestling with WordPress plugins. We build high-performance Next.js architectures that load instantly and scale endlessly.
                </p>
            </div>

            {/* Tech Stack */}
            <div className="container mx-auto px-6 max-w-7xl mb-24">
                <div className="grid md:grid-cols-4 gap-4">
                    {[
                        { title: "Next.js / React", icon: Cpu },
                        { title: "Headless CMS", icon: Layers },
                        { title: "Vercel / Edge", icon: Server },
                        { title: "TypeScript", icon: Code }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-center gap-4 hover:border-blue-500/50 transition-colors">
                            <item.icon className="text-blue-400" size={24} />
                            <span className="font-bold text-white">{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>

            <BuildGallery />

            <div className="bg-primary py-20 text-center">
                <h2 className="text-white text-3xl font-bold mb-6">Need a custom build?</h2>
                <button className="bg-white text-primary px-8 py-3 rounded-full font-bold">Talk to a Lead Engineer</button>
            </div>

            <Footer />
        </div>
    );
};

export default ProductEngineeringPage;
