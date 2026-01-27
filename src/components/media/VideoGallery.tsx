import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Quote } from 'lucide-react';
import { videoStories, clientQuotes } from '../../data/videos';

const VideoGallery: React.FC = () => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const activeVideo = videoStories.find(v => v.id === selectedVideo);

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">

                <div className="flex flex-col md:flex-row gap-16">

                    {/* Left: Quotes Section */}
                    <div className="w-full md:w-1/3">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">Client Stories</span>
                        <h2 className="text-4xl font-display font-bold text-text-dark mb-8">
                            What happens when the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">cameras turn off.</span>
                        </h2>

                        <div className="relative p-8 bg-white rounded-2xl border border-gray-100 shadow-lg">
                            <Quote size={40} className="text-primary/20 absolute top-6 left-6" />
                            <div className="relative z-10 pt-4">
                                <p className="text-lg text-text-dark font-medium leading-relaxed italic mb-6">
                                    "{clientQuotes[0]}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                                    <div>
                                        <p className="text-sm font-bold text-text-dark">Sarah Jenkins</p>
                                        <p className="text-xs text-text-muted">CMO, TechFlow</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex gap-2">
                            {/* Placeholder for quote navigation dots if needed */}
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <div className="w-2 h-2 rounded-full bg-gray-300" />
                            <div className="w-2 h-2 rounded-full bg-gray-300" />
                        </div>
                    </div>

                    {/* Right: Video Grid */}
                    <div className="w-full md:w-2/3">
                        <div className="grid md:grid-cols-2 gap-6">
                            {videoStories.map((video) => (
                                <motion.div
                                    key={video.id}
                                    whileHover={{ y: -5 }}
                                    className="group relative rounded-2xl overflow-hidden aspect-video bg-black cursor-pointer shadow-lg"
                                    onClick={() => setSelectedVideo(video.id)}
                                >
                                    <img
                                        src={video.thumbnail}
                                        alt={video.context}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                                    />

                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                                            <Play size={20} className="text-white fill-white ml-1" />
                                        </div>
                                    </div>

                                    {/* Content Overlay */}
                                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                                        <div className="flex items-center gap-3 mb-2">
                                            <img src={video.clientLogo} alt="logo" className="w-6 h-6 rounded-full bg-white object-contain" />
                                            <span className="text-white font-bold text-sm tracking-wide">{video.client}</span>
                                        </div>
                                        <p className="text-white text-sm font-medium line-clamp-2">{video.context}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Video Modal */}
                <AnimatePresence>
                    {selectedVideo && activeVideo && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                            onClick={() => setSelectedVideo(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden relative shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedVideo(null)}
                                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors border border-white/10"
                                >
                                    <X size={20} />
                                </button>

                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`${activeVideo.videoUrl}?autoplay=1`}
                                    title={activeVideo.context}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default VideoGallery;
