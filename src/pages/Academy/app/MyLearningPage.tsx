import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Clock, CheckCircle, Target, BookOpen, ChevronRight, Bookmark, MoreHorizontal, Flame } from 'lucide-react';
import { academyData } from '../../../lib/academyData';

const tabs = ['In Progress', 'Saved', 'Completed'] as const;
type Tab = typeof tabs[number];

const inProgressCourses = [
    {
        id: '1',
        title: 'MExt 101: GTM Automation',
        slug: 'mext-101-gtm-automation',
        progress: 72,
        timeLeft: '3h 20m left',
        lastAccessed: '2 hours ago',
        image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=400',
        currentLesson: 'Module 3: Zapier Integrations',
    },
    {
        id: '2',
        title: 'Research for Marketers',
        slug: 'research-for-marketers',
        progress: 35,
        timeLeft: '5h 10m left',
        lastAccessed: 'Yesterday',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400',
        currentLesson: 'Module 2: Quantitative Basics',
    },
    {
        id: '3',
        title: 'Landing Pages that Convert',
        slug: 'landing-pages',
        progress: 15,
        timeLeft: '5h left',
        lastAccessed: '3 days ago',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=400',
        currentLesson: 'Module 1: Hero Sections',
    },
];

const savedCourses = [
    { id: '4', title: 'B2B Content Engine', slug: 'b2b-content-engine', level: 'Advanced', hours: 15, image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400' },
    { id: '5', title: 'Metrics & Dashboards', slug: 'metrics-for-leaders', level: 'Advanced', hours: 10, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400' },
];

const completedCourses = [
    { id: '6', title: 'Social Media Strategy', slug: 'social-strategy', completedDate: 'Feb 28, 2026', grade: 'A', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400' },
];

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const weekStatus = ['completed', 'completed', 'completed', 'current', 'upcoming', 'upcoming', 'upcoming'] as const;

const MyLearningPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('In Progress');

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-display font-bold text-text-dark">My Learning</h1>
                    <p className="text-text-muted mt-1">Track your progress and keep the momentum going.</p>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                    <Flame className="text-orange-500 fill-orange-500" size={20} />
                    <span className="font-bold text-text-dark">3 Day Streak</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
                {/* Left Sidebar Widgets */}
                <div className="space-y-6">
                    {/* Today's Goals */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-text-dark flex items-center gap-2"><Target size={16} className="text-primary" /> Today's Goals</h3>
                            <span className="text-xs font-bold text-text-muted">1/3</span>
                        </div>
                        <div className="space-y-3">
                            {[
                                { text: 'Complete Module 3 lesson', done: true },
                                { text: 'Take practice quiz', done: false },
                                { text: 'Read community discussion', done: false },
                            ].map((goal, i) => (
                                <div key={i} className={`flex items-center gap-3 text-sm ${goal.done ? 'opacity-50' : ''}`}>
                                    <CheckCircle size={16} className={goal.done ? 'text-green-500' : 'text-gray-300'} />
                                    <span className={`${goal.done ? 'line-through text-text-muted' : 'text-text-dark font-medium'}`}>{goal.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Weekly Calendar */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-100">
                        <h3 className="font-bold text-text-dark mb-4">This Week</h3>
                        <div className="grid grid-cols-7 gap-1">
                            {weekDays.map((day, i) => (
                                <div key={day} className="text-center">
                                    <p className="text-[10px] text-text-muted mb-2">{day}</p>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto text-xs font-bold ${weekStatus[i] === 'completed'
                                        ? 'bg-primary text-white'
                                        : weekStatus[i] === 'current'
                                            ? 'border-2 border-primary text-primary'
                                            : 'bg-gray-50 text-gray-400'
                                        }`}>
                                        {10 + i}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="flex justify-between text-xs mb-1.5">
                                <span className="text-text-muted">Weekly Goal</span>
                                <span className="font-bold text-text-dark">3/5 lessons</span>
                            </div>
                            <div className="w-full h-1.5 bg-gray-100 rounded-full">
                                <div className="h-full bg-primary rounded-full w-[60%] transition-all" />
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-100">
                        <h3 className="font-bold text-text-dark mb-4">Stats</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { value: '12', label: 'Lessons Done' },
                                { value: '4.2h', label: 'This Week' },
                                { value: '1', label: 'Certificates' },
                                { value: '86%', label: 'Avg. Score' },
                            ].map((s) => (
                                <div key={s.label} className="text-center p-3 bg-gray-50 rounded-xl">
                                    <p className="text-xl font-bold text-text-dark">{s.value}</p>
                                    <p className="text-[10px] text-text-muted font-medium uppercase tracking-wider">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-6">
                    {/* Tabs */}
                    <div className="flex gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-colors ${activeTab === tab
                                    ? 'bg-text-dark text-white shadow-lg'
                                    : 'bg-white text-text-muted border border-gray-200 hover:bg-gray-50'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* In Progress Tab */}
                    {activeTab === 'In Progress' && (
                        <div className="space-y-4">
                            {/* Continue Learning Hero */}
                            {inProgressCourses[0] && (
                                <Link to={`/academy/app/courses/${inProgressCourses[0].slug}`} className="block">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-text-dark rounded-3xl p-6 md:p-8 text-white relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all"
                                    >
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity" />
                                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                            <div className="space-y-3 max-w-lg">
                                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider">
                                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                                    Continue Learning
                                                </div>
                                                <h2 className="text-2xl md:text-3xl font-display font-bold">{inProgressCourses[0].title}</h2>
                                                <p className="text-white/60 text-sm">{inProgressCourses[0].currentLesson}</p>
                                                <div className="flex items-center gap-4 text-sm text-white/40">
                                                    <span className="flex items-center gap-1"><Clock size={14} /> {inProgressCourses[0].timeLeft}</span>
                                                    <span>{inProgressCourses[0].progress}% complete</span>
                                                </div>
                                            </div>
                                            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform flex-shrink-0">
                                                <Play size={24} fill="currentColor" className="ml-1" />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/10">
                                            <div className="h-full bg-primary" style={{ width: `${inProgressCourses[0].progress}%` }} />
                                        </div>
                                    </motion.div>
                                </Link>
                            )}

                            {/* Other In-Progress Courses */}
                            {inProgressCourses.slice(1).map((course, i) => (
                                <Link key={course.id} to={`/academy/app/courses/${course.slug}`} className="block">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: (i + 1) * 0.1 }}
                                        className="bg-white p-4 rounded-2xl border border-gray-100 flex gap-4 hover:border-primary/30 transition-colors group"
                                    >
                                        <div className="w-24 h-24 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0">
                                            <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-center min-w-0">
                                            <h4 className="font-bold text-text-dark mb-1 truncate">{course.title}</h4>
                                            <p className="text-xs text-text-muted mb-1">{course.currentLesson}</p>
                                            <div className="flex items-center gap-3 text-xs text-text-muted mb-2">
                                                <span className="flex items-center gap-1"><Clock size={12} /> {course.timeLeft}</span>
                                                <span>· {course.lastAccessed}</span>
                                            </div>
                                            <div className="w-full h-1.5 bg-gray-100 rounded-full">
                                                <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${course.progress}%` }} />
                                            </div>
                                        </div>
                                        <div className="flex items-center pr-2">
                                            <ChevronRight className="text-gray-300 group-hover:text-primary transition-colors" size={20} />
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Saved Tab */}
                    {activeTab === 'Saved' && (
                        <div className="space-y-4">
                            {savedCourses.length === 0 ? (
                                <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                                    <Bookmark size={32} className="text-gray-300 mx-auto mb-3" />
                                    <p className="text-text-muted">No saved courses yet. Browse the catalog to save courses for later.</p>
                                    <Link to="/academy/courses" className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary-dark transition-colors">
                                        Browse Courses
                                    </Link>
                                </div>
                            ) : (
                                savedCourses.map((course, i) => (
                                    <motion.div
                                        key={course.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-white p-4 rounded-2xl border border-gray-100 flex gap-4 hover:border-primary/30 transition-colors group"
                                    >
                                        <div className="w-32 h-20 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0">
                                            <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-center">
                                            <h4 className="font-bold text-text-dark mb-1">{course.title}</h4>
                                            <div className="flex gap-2 mb-3">
                                                <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-bold text-text-muted">{course.level}</span>
                                                <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-bold text-text-muted">{course.hours}h</span>
                                            </div>
                                            <Link to={`/academy/app/courses/${course.slug}`} className="text-primary font-bold text-sm hover:underline">
                                                Start Course
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>
                    )}

                    {/* Completed Tab */}
                    {activeTab === 'Completed' && (
                        <div className="space-y-4">
                            {completedCourses.length === 0 ? (
                                <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                                    <CheckCircle size={32} className="text-gray-300 mx-auto mb-3" />
                                    <p className="text-text-muted">No completed courses yet. Keep learning!</p>
                                </div>
                            ) : (
                                completedCourses.map((course, i) => (
                                    <motion.div
                                        key={course.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-white p-4 rounded-2xl border border-gray-100 flex gap-4"
                                    >
                                        <div className="w-16 h-16 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle size={28} className="text-green-500" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-center">
                                            <h4 className="font-bold text-text-dark mb-1">{course.title}</h4>
                                            <p className="text-xs text-text-muted">Completed {course.completedDate} · Grade: <span className="font-bold text-green-600">{course.grade}</span></p>
                                        </div>
                                        <div className="flex items-center">
                                            <Link to="/academy/app/certificates" className="text-primary font-bold text-sm hover:underline whitespace-nowrap">
                                                View Certificate
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyLearningPage;
