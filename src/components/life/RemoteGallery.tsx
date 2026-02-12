import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const RemoteGallery: React.FC = () => {
    const galleryItems = [
        { img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600", tag: "Strategy Workshop", loc: "Lagos" },
        { img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600", tag: "Team Retreat", loc: "Cape Town" },
        { img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600", tag: "Deep Work", loc: "Remote" },
        { img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600", tag: "Design Sprint", loc: "Nairobi" },
        { img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600", tag: "Client Review", loc: "London" }
    ];

    return (
        <section className="bg-bg-light pb-32 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl mb-12">
                <p className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4">
                    Remote Life
                </p>
                <h2 className="text-4xl md:text-5xl font-display font-medium text-bg-dark">
                    A level of independence <span className="font-serif italic text-primary">that just works.</span>
                </h2>
            </div>

            {/* Scrolling Gallery */}
            <div className="flex gap-6 overflow-x-auto no-scrollbar px-6 pb-12 snap-x snap-mandatory">
                {galleryItems.map((item, i) => (
                    <div key={i} className="flex-shrink-0 w-[300px] md:w-[400px] aspect-[4/5] rounded-3xl overflow-hidden relative group snap-center cursor-pointer">
                        <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-6 left-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform">
                            <p className="font-bold text-lg">{item.tag}</p>
                            <p className="text-white/60 text-sm flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {item.loc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RemoteGallery;
