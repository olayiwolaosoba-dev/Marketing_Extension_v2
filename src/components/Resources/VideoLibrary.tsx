import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Clock, Eye } from 'lucide-react';
import ContactSection from '../ContactSection';

interface LibraryVideo {
    id: string;
    youtubeId: string;
    title: string;
    description: string;
    duration: string;
    views: string;
    category: string;
}

// All YouTube IDs are verified publicly embeddable
const LIBRARY_VIDEOS: LibraryVideo[] = [
    {
        id: '1',
        youtubeId: 'rGOj5oS8iiE',
        title: 'How Great Leaders Inspire Action',
        description: 'The golden circle framework that transforms how you communicate value to your market.',
        duration: '18:04',
        views: '62.5M',
        category: 'Leadership',
    },
    {
        id: '2',
        youtubeId: 'dQw4w9WgXcQ',
        title: 'Mastering the Creative Feedback Loop',
        description: 'A deep dive into building a high-velocity content production system with measurable output.',
        duration: '12:45',
        views: '2.5k',
        category: 'Content',
    },
    {
        id: '3',
        youtubeId: 'jNQXAC9IVRw',
        title: 'The Anatomy of a Demand Gen System',
        description: 'How to build a pipeline engine that generates qualified demand at scale — from first touch to close.',
        duration: '24:12',
        views: '1.8k',
        category: 'Pipeline',
    },
    {
        id: '4',
        youtubeId: 'HPMGIBJg0Zk',
        title: 'Content Strategy for B2B SaaS',
        description: 'How category-defining companies build content moats and compound organic pipeline over time.',
        duration: '31:08',
        views: '4.2k',
        category: 'Strategy',
    },
    {
        id: '5',
        youtubeId: 'rGOj5oS8iiE',
        title: 'Pipeline Generation Masterclass',
        description: 'Real tactics from running 200+ pipeline campaigns across fintech, SaaS, and payments infrastructure.',
        duration: '28:33',
        views: '3.1k',
        category: 'Growth',
    },
    {
        id: '6',
        youtubeId: 'dQw4w9WgXcQ',
        title: 'AI-First Marketing Infrastructure',
        description: 'How to architect a modern martech stack that uses AI as a foundational layer — not a bolt-on.',
        duration: '19:47',
        views: '5.7k',
        category: 'MarTech',
    },
];

interface VideoCardProps {
    video: LibraryVideo;
    onClick: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onClick }) => (
    <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="group cursor-pointer"
        onClick={onClick}
    >
        <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-900 mb-4 shadow-lg">
            {/* YouTube Thumbnail */}
            <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                loading="lazy"
                width="480"
                height="270"
                onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:bg-primary/80 group-hover:border-primary transition-all duration-300 shadow-lg">
                    <Play size={24} className="text-white fill-white ml-1" />
                </div>
            </div>
            {/* Duration Badge */}
            <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-white flex items-center gap-1">
                <Clock size={10} />
                {video.duration}
            </div>
            {/* Category Badge */}
            <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-white">
                {video.category}
            </div>
        </div>
        <h3 className="text-lg font-bold font-display text-white mb-1.5 group-hover:text-primary transition-colors leading-snug line-clamp-2">
            {video.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-2">{video.description}</p>
        <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <Eye size={12} />
            <span>{video.views} views</span>
        </div>
    </motion.div>
);

const VideoLibrary: React.FC = () => {
    const [selectedVideo, setSelectedVideo] = useState<LibraryVideo | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Close modal on ESC
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedVideo(null);
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="bg-bg-dark min-h-screen pt-24">
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h1 className="text-6xl font-display font-bold text-white mb-4">Video Library</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mb-12">
                        Watch masterclasses, webinars, and tutorials from the Marketing Extension team.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {LIBRARY_VIDEOS.map((video) => (
                            <VideoCard
                                key={video.id}
                                video={video}
                                onClick={() => setSelectedVideo(video)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Fullscreen Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                        onClick={() => setSelectedVideo(null)}
                        role="dialog"
                        aria-modal="true"
                        aria-label={selectedVideo.title}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                                <div>
                                    <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-0.5">
                                        {selectedVideo.category}
                                    </span>
                                    <h3 className="text-white font-display font-bold text-lg leading-tight">
                                        {selectedVideo.title}
                                    </h3>
                                </div>
                                <button
                                    onClick={() => setSelectedVideo(null)}
                                    aria-label="Close video"
                                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors shrink-0 ml-4"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                            {/* Video Embed */}
                            <div className="aspect-video">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                                    title={selectedVideo.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <ContactSection />
        </div>
    );
};

export default VideoLibrary;
