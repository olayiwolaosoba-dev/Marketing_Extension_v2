import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Calendar, ArrowUpRight, Clock, Flame } from 'lucide-react';
import { academyData } from '../../../lib/academyData';

const discussions = [
    { id: '1', author: 'Grace Eze', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100', space: 'Growth & Performance', title: "What's the best attribution model for a multi-touch B2B funnel?", replies: 14, time: '3h ago' },
    { id: '2', author: 'Kwame Mensah', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100', space: 'Career Starters', title: 'I just landed my first marketing role — tips for the first 90 days?', replies: 23, time: '5h ago' },
    { id: '3', author: 'Zainab Ahmed', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100', space: 'Brand & Story', title: 'Critique my rebranding case study (feedback welcome)', replies: 8, time: '8h ago' },
    { id: '4', author: 'Tunde Oladipo', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100', space: 'Marketing Ops', title: 'How do you handle lead scoring with limited data?', replies: 11, time: '1d ago' },
    { id: '5', author: 'Sarah Njoroge', avatar: 'https://images.unsplash.com/photo-1534751516042-4286290838d8?auto=format&fit=crop&q=80&w=100', space: 'Nigeria Jobs & Gigs', title: 'Paystack is hiring a Content Lead — anyone have more info?', replies: 6, time: '1d ago' },
];

const CommunityPage: React.FC = () => {
    const [activeView, setActiveView] = useState<'spaces' | 'discussions' | 'events'>('spaces');

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-display font-bold text-text-dark">Community</h1>
                    <p className="text-text-muted mt-1">Connect, learn, and grow with marketers across Africa.</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                    <Users size={16} className="text-primary" />
                    <span className="font-bold text-text-dark">2,147</span> members online
                </div>
            </div>

            {/* View Tabs */}
            <div className="flex gap-2">
                {(['spaces', 'discussions', 'events'] as const).map((view) => (
                    <button
                        key={view}
                        onClick={() => setActiveView(view)}
                        className={`px-5 py-2.5 rounded-full text-sm font-bold capitalize transition-colors ${activeView === view
                            ? 'bg-text-dark text-white shadow-lg'
                            : 'bg-white text-text-muted border border-gray-200 hover:bg-gray-50'
                            }`}
                    >
                        {view}
                    </button>
                ))}
            </div>

            {/* Spaces View */}
            {activeView === 'spaces' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {academyData.spaces.map((space, i) => (
                        <motion.div
                            key={space.slug}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all group cursor-pointer"
                        >
                            <div className="h-32 overflow-hidden relative">
                                <img src={space.image} alt={space.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <h3 className="absolute bottom-3 left-4 text-white font-bold text-lg">{space.title}</h3>
                            </div>
                            <div className="p-5">
                                <p className="text-text-muted text-sm mb-4 leading-relaxed">{space.summary}</p>
                                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                                    <p className="text-xs text-text-muted mb-1 font-bold uppercase tracking-wider">Weekly Prompt</p>
                                    <p className="text-sm text-text-dark italic">"{space.weeklyPromptExample}"</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1 text-xs text-text-muted">
                                        <Users size={12} />
                                        <span>{Math.floor(Math.random() * 300 + 100)} members</span>
                                    </div>
                                    <button className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full hover:bg-primary hover:text-white transition-colors">
                                        Join Space
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Discussions View */}
            {activeView === 'discussions' && (
                <div className="space-y-3">
                    {discussions.map((d, i) => (
                        <motion.div
                            key={d.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-primary/30 transition-all cursor-pointer group"
                        >
                            <div className="flex gap-4">
                                <img src={d.avatar} alt={d.author} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-bold text-text-dark text-sm">{d.author}</span>
                                        <span className="px-2 py-0.5 bg-gray-100 rounded text-[10px] font-bold text-text-muted">{d.space}</span>
                                    </div>
                                    <h4 className="text-text-dark font-medium group-hover:text-primary transition-colors mb-2">{d.title}</h4>
                                    <div className="flex items-center gap-4 text-xs text-text-muted">
                                        <span className="flex items-center gap-1"><MessageSquare size={12} /> {d.replies} replies</span>
                                        <span className="flex items-center gap-1"><Clock size={12} /> {d.time}</span>
                                    </div>
                                </div>
                                <ArrowUpRight size={16} className="text-gray-300 group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Events View */}
            {activeView === 'events' && (
                <div className="space-y-4">
                    {academyData.events.map((event, i) => {
                        const dateParts = event.dateTime.split(',')[0].split(' ');
                        const month = dateParts[0].slice(0, 3);
                        const day = dateParts[1];

                        return (
                            <motion.div
                                key={event.slug}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl p-5 border border-gray-100 flex gap-5 hover:border-primary/30 transition-all"
                            >
                                {/* Date Badge */}
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex flex-col items-center justify-center flex-shrink-0">
                                    <span className="text-[10px] font-bold text-primary uppercase">{month}</span>
                                    <span className="text-xl font-bold text-text-dark leading-none">{day}</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${event.format === 'Live Q&A' ? 'bg-red-50 text-red-600'
                                            : event.format === 'Webinar' ? 'bg-blue-50 text-blue-600'
                                                : 'bg-green-50 text-green-600'
                                            }`}>
                                            {event.format}
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-text-dark mb-1">{event.title}</h4>
                                    <p className="text-sm text-text-muted mb-2">{event.summary}</p>
                                    <div className="flex items-center gap-4 text-xs text-text-muted">
                                        <span>Hosted by <span className="font-bold text-text-dark">{event.host}</span></span>
                                        <span>{event.dateTime}</span>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <button className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary-dark transition-colors whitespace-nowrap">
                                        RSVP
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default CommunityPage;
