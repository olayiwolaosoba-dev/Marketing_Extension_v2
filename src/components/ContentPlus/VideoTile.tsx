import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const YOUTUBE_ID = 'dQw4w9WgXcQ'; // placeholder — swap for real video ID

const VideoTile: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-[32px] overflow-hidden aspect-video bg-bg-dark shadow-2xl group cursor-pointer"
                >
                    {isPlaying ? (
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
                            title="See how we work"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            loading="lazy"
                            allowFullScreen
                        />
                    ) : (
                        <>
                            <img
                                src={`https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
                                alt="Creative Team Working"
                                width="1280"
                                height="720"
                                loading="lazy"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                            />
                            <div
                                className="absolute inset-0 flex items-center justify-center"
                                onClick={() => setIsPlaying(true)}
                            >
                                <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                                    <Play size={40} className="text-white fill-white ml-2" />
                                </div>
                            </div>
                            <div className="absolute bottom-10 left-10 text-white pointer-events-none">
                                <h3 className="text-3xl font-display font-bold mb-2">See how we work</h3>
                                <p className="text-white/80 text-lg">Behind the scenes with our global creative team</p>
                            </div>
                        </>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default VideoTile;
