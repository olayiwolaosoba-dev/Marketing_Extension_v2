import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Play, Pause, CheckCircle, Lock, ChevronLeft, ChevronRight,
    BookOpen, FileText, MessageSquare, List, X, Menu, Clock,
    ArrowLeft, Star, Award
} from 'lucide-react';
import { academyData } from '../../../lib/academyData';

// Generate lessons from course topics with expanded sub-lessons
const generateLessons = (topics: string[]) => {
    const allLessons: { id: number; title: string; duration: string; topic: string }[] = [];
    let id = 0;
    topics.forEach((topic) => {
        // Each topic has 2-3 lessons
        const subLessons = [
            { suffix: 'Introduction', dur: '8 min' },
            { suffix: 'Deep Dive', dur: '15 min' },
            { suffix: 'Practical Exercise', dur: '12 min' },
        ];
        subLessons.forEach((sub) => {
            allLessons.push({
                id: id++,
                title: `${topic}: ${sub.suffix}`,
                duration: sub.dur,
                topic,
            });
        });
    });
    return allLessons;
};

const PLACEHOLDER_VIDEO_ID = 'rGOj5oS8iiE';

const tabItems = ['Overview', 'Notes', 'Resources', 'Discussion'] as const;
type TabItem = typeof tabItems[number];

const CoursePlayer: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const course = academyData.courses.find((c) => c.slug === slug);

    const [activeLesson, setActiveLesson] = useState(0);
    const [completedLessons, setCompletedLessons] = useState<Set<number>>(new Set([0, 1, 2]));
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeTab, setActiveTab] = useState<TabItem>('Overview');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [notes, setNotes] = useState('');

    if (!course) {
        return (
            <div className="flex flex-col items-center justify-center py-24 text-center">
                <BookOpen size={48} className="text-gray-300 mb-4" />
                <h2 className="text-2xl font-display font-bold text-text-dark mb-2">Course not found</h2>
                <p className="text-text-muted mb-6">The course you're looking for doesn't exist.</p>
                <Link to="/academy/app/learning" className="px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-colors">
                    Back to My Learning
                </Link>
            </div>
        );
    }

    const lessons = generateLessons(course.topics);
    const totalLessons = lessons.length;
    const completedCount = completedLessons.size;
    const progressPercent = Math.round((completedCount / totalLessons) * 100);
    const currentLesson = lessons[activeLesson];
    const allDone = completedCount === totalLessons;

    const handleMarkComplete = () => {
        setCompletedLessons((prev) => {
            const next = new Set(prev);
            next.add(activeLesson);
            return next;
        });
    };

    const handleNextLesson = () => {
        if (activeLesson < totalLessons - 1) {
            setActiveLesson(activeLesson + 1);
            setIsPlaying(false);
        }
    };

    const handlePrevLesson = () => {
        if (activeLesson > 0) {
            setActiveLesson(activeLesson - 1);
            setIsPlaying(false);
        }
    };

    // Group lessons by topic for sidebar
    const lessonsByTopic: Record<string, typeof lessons> = {};
    lessons.forEach((l) => {
        if (!lessonsByTopic[l.topic]) lessonsByTopic[l.topic] = [];
        lessonsByTopic[l.topic].push(l);
    });

    return (
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-6 -mx-4 md:-mx-8 -mt-4 md:-mt-8 min-h-[calc(100vh-4rem)]">
            {/* Mobile Sidebar Toggle */}
            <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden fixed bottom-6 right-6 z-30 w-12 h-12 bg-text-dark text-white rounded-full shadow-xl flex items-center justify-center"
            >
                <List size={20} />
            </button>

            {/* Lesson Sidebar */}
            <aside className={`
                fixed lg:static inset-y-0 left-0 z-40 w-80 bg-white border-r border-gray-100 flex flex-col
                transform transition-transform duration-300
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                lg:min-h-[calc(100vh-4rem)]
            `}>
                {/* Sidebar Header */}
                <div className="p-5 border-b border-gray-100 flex-shrink-0">
                    <div className="flex items-center justify-between mb-3">
                        <Link to="/academy/app/learning" className="flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors">
                            <ArrowLeft size={16} /> Back
                        </Link>
                        <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-1 text-text-muted">
                            <X size={18} />
                        </button>
                    </div>
                    <h2 className="font-display font-bold text-text-dark text-lg leading-tight mb-3">{course.title}</h2>
                    <div className="flex justify-between text-xs mb-2">
                        <span className="text-text-muted">{completedCount}/{totalLessons} lessons</span>
                        <span className="font-bold text-text-dark">{progressPercent}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full">
                        <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }} />
                    </div>
                </div>

                {/* Lesson List */}
                <nav className="flex-1 overflow-y-auto p-3">
                    {Object.entries(lessonsByTopic).map(([topic, topicLessons], ti) => (
                        <div key={topic} className="mb-4">
                            <p className="px-3 py-2 text-[10px] font-bold text-text-muted uppercase tracking-widest">
                                Module {ti + 1}: {topic}
                            </p>
                            <div className="space-y-0.5">
                                {topicLessons.map((lesson) => {
                                    const isActive = lesson.id === activeLesson;
                                    const isDone = completedLessons.has(lesson.id);
                                    const isLocked = lesson.id > activeLesson + 2 && !isDone;

                                    return (
                                        <button
                                            key={lesson.id}
                                            onClick={() => {
                                                if (!isLocked) {
                                                    setActiveLesson(lesson.id);
                                                    setIsPlaying(false);
                                                    setSidebarOpen(false);
                                                }
                                            }}
                                            disabled={isLocked}
                                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm transition-colors ${isActive
                                                ? 'bg-primary/10 text-primary font-bold'
                                                : isDone
                                                    ? 'text-text-muted hover:bg-gray-50'
                                                    : isLocked
                                                        ? 'text-gray-300 cursor-not-allowed'
                                                        : 'text-text-dark hover:bg-gray-50'
                                                }`}
                                        >
                                            <div className="flex-shrink-0">
                                                {isDone ? (
                                                    <CheckCircle size={16} className="text-green-500" />
                                                ) : isActive ? (
                                                    <div className="w-4 h-4 rounded-full border-2 border-primary bg-primary/20" />
                                                ) : isLocked ? (
                                                    <Lock size={14} className="text-gray-300" />
                                                ) : (
                                                    <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                                                )}
                                            </div>
                                            <span className="flex-1 truncate">{lesson.title.split(': ')[1]}</span>
                                            <span className="text-[10px] text-text-muted flex-shrink-0">{lesson.duration}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </nav>
            </aside>

            {/* Mobile Sidebar Backdrop */}
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black/20 z-30 lg:hidden backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
            )}

            {/* Main Content */}
            <div className="flex-1 min-w-0 overflow-y-auto">
                {/* Video Player Area */}
                <div className="bg-black relative">
                    <div className="aspect-video max-h-[70vh] relative">
                        {isPlaying ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${PLACEHOLDER_VIDEO_ID}?autoplay=1&rel=0`}
                                title={currentLesson?.title || 'Lesson'}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        ) : (
                            <div className="w-full h-full relative group cursor-pointer" onClick={() => setIsPlaying(true)}>
                                <img
                                    src={`https://img.youtube.com/vi/${PLACEHOLDER_VIDEO_ID}/maxresdefault.jpg`}
                                    alt={currentLesson?.title || 'Lesson'}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${PLACEHOLDER_VIDEO_ID}/hqdefault.jpg`;
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-md flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                                        <Play size={32} fill="currentColor" className="ml-1" />
                                    </div>
                                </div>
                                {/* Lesson Info Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-white/60 text-sm mb-1">Module {Math.floor(activeLesson / 3) + 1}</p>
                                    <h3 className="text-white font-bold text-xl">{currentLesson?.title}</h3>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Below Video Controls */}
                <div className="p-4 md:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handlePrevLesson}
                                disabled={activeLesson === 0}
                                className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold text-text-dark hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1"
                            >
                                <ChevronLeft size={16} /> Previous
                            </button>
                            <button
                                onClick={handleNextLesson}
                                disabled={activeLesson >= totalLessons - 1}
                                className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold text-text-dark hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1"
                            >
                                Next <ChevronRight size={16} />
                            </button>
                        </div>
                        <button
                            onClick={handleMarkComplete}
                            disabled={completedLessons.has(activeLesson)}
                            className={`px-5 py-2 rounded-xl text-sm font-bold transition-colors flex items-center gap-2 ${completedLessons.has(activeLesson)
                                ? 'bg-green-50 text-green-600 cursor-default'
                                : 'bg-primary text-white hover:bg-primary-dark'
                                }`}
                        >
                            <CheckCircle size={16} />
                            {completedLessons.has(activeLesson) ? 'Completed' : 'Mark as Complete'}
                        </button>
                    </div>

                    {/* Completion Celebration */}
                    <AnimatePresence>
                        {allDone && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="bg-gradient-to-br from-primary to-orange-600 rounded-3xl p-8 text-white text-center mb-6 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent)]" />
                                <div className="relative z-10">
                                    <Award size={48} className="mx-auto mb-4" />
                                    <h3 className="text-2xl font-display font-bold mb-2">Course Complete!</h3>
                                    <p className="text-white/80 mb-6 max-w-md mx-auto">Congratulations! You've completed all lessons in {course.title}.</p>
                                    <Link
                                        to="/academy/app/certificates"
                                        className="inline-flex px-6 py-3 bg-white text-primary rounded-full font-bold text-sm hover:bg-white/90 transition-colors"
                                    >
                                        View Certificate
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Tabbed Content */}
                    <div className="border-b border-gray-100 mb-6">
                        <div className="flex gap-6 overflow-x-auto no-scrollbar">
                            {tabItems.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-3 text-sm font-bold whitespace-nowrap border-b-2 transition-colors ${activeTab === tab
                                        ? 'border-primary text-primary'
                                        : 'border-transparent text-text-muted hover:text-text-dark'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    {activeTab === 'Overview' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-6"
                        >
                            <div>
                                <h3 className="text-xl font-display font-bold text-text-dark mb-3">{course.title}</h3>
                                <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                                    <span className="flex items-center gap-1"><Star size={14} className="text-orange-500 fill-orange-500" /> {course.rating}</span>
                                    <span>{course.reviewsCount} reviews</span>
                                    <span className="flex items-center gap-1"><Clock size={14} /> {course.durationHours}h</span>
                                    <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-bold">{course.level}</span>
                                </div>
                                <p className="text-text-muted leading-relaxed">{course.summary}</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-text-dark mb-3">What you'll learn</h4>
                                <div className="grid md:grid-cols-2 gap-2">
                                    {course.outcomes.map((outcome) => (
                                        <div key={outcome} className="flex items-start gap-2 text-sm">
                                            <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-text-dark">{outcome}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'Notes' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-4"
                        >
                            <p className="text-sm text-text-muted">Take notes as you learn. These are saved locally for your reference.</p>
                            <textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                rows={12}
                                placeholder="Start typing your notes here..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                            />
                        </motion.div>
                    )}

                    {activeTab === 'Resources' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-3"
                        >
                            {[
                                { name: `${course.title} — Workbook.pdf`, size: '2.4 MB', type: 'PDF' },
                                { name: 'Cheat Sheet — Key Frameworks.pdf', size: '840 KB', type: 'PDF' },
                                { name: 'Template — Campaign Planner.xlsx', size: '1.1 MB', type: 'Spreadsheet' },
                                { name: 'Further Reading List.md', size: '12 KB', type: 'Document' },
                            ].map((resource) => (
                                <div key={resource.name} className="bg-white rounded-xl p-4 border border-gray-100 flex items-center justify-between hover:border-primary/30 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <FileText size={18} className="text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-text-dark">{resource.name}</p>
                                            <p className="text-xs text-text-muted">{resource.type} · {resource.size}</p>
                                        </div>
                                    </div>
                                    <button className="px-4 py-2 text-sm font-bold text-primary hover:bg-primary/5 rounded-lg transition-colors">
                                        Download
                                    </button>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 'Discussion' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-4"
                        >
                            {/* New Comment */}
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="You" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        placeholder="Ask a question or share a thought..."
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary transition-colors text-sm"
                                    />
                                </div>
                            </div>

                            {/* Existing Comments */}
                            {[
                                { author: 'Kwame Mensah', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100', text: 'This module completely changed how I think about automation. The Zapier walkthrough was incredibly practical.', time: '2 days ago', replies: 3 },
                                { author: 'Grace Eze', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100', text: 'Quick question — does the HubSpot workflow approach also work for smaller CRMs like ActiveCampaign?', time: '4 days ago', replies: 5 },
                                { author: 'Tunde Oladipo', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100', text: 'The exercise in this section is really well designed. Took me about 45 minutes and I learned a lot.', time: '1 week ago', replies: 1 },
                            ].map((comment, i) => (
                                <div key={i} className="flex gap-3 pt-4 border-t border-gray-50">
                                    <img src={comment.avatar} alt={comment.author} className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-bold text-text-dark text-sm">{comment.author}</span>
                                            <span className="text-xs text-text-muted">{comment.time}</span>
                                        </div>
                                        <p className="text-sm text-text-dark leading-relaxed">{comment.text}</p>
                                        <div className="flex items-center gap-4 mt-2">
                                            <button className="text-xs font-bold text-text-muted hover:text-primary transition-colors flex items-center gap-1">
                                                <MessageSquare size={12} /> {comment.replies} replies
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CoursePlayer;
