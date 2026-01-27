
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Clock,
    MoreHorizontal,
    Play,
    CheckCircle,
    Calendar as CalendarIcon,
    Target,
    BarChart2,
    BookOpen
} from 'lucide-react';

const MyLearning: React.FC = () => {
    const [activeTab, setActiveTab] = useState('in-progress');

    // Mock Data
    const inProgressCourses = [
        {
            id: 1,
            title: "Enterprise Product Management Fundamentals",
            platform: "Microsoft AI Product Manager",
            progress: 72,
            timeLeft: "10 minutes",
            totalTime: "14h",
            lastAccessed: "2 days ago",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 2,
            title: "Product Management: An Introduction",
            platform: "IBM AI Product Manager",
            progress: 10,
            timeLeft: "7 minutes",
            totalTime: "10h",
            lastAccessed: "5 days ago",
            image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const savedCourses = [
        {
            id: 1,
            title: "Generative AI: Introduction and Applications",
            platform: "Google Cloud",
            university: "Google",
            type: "Course",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 2,
            title: "Generative AI: Prompt Engineering Basics",
            platform: "Google Cloud",
            university: "Google",
            type: "Course",
            image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 3,
            title: "Generative AI: Foundation Models and Platforms",
            platform: "Google Cloud",
            university: "Google",
            type: "Course",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const completedCourses = [
        {
            id: 1,
            title: "Foundations of Business Intelligence",
            platform: "Google Business Intelligence",
            completedDate: "Jan 27, 2026",
            grade: "98%",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 2,
            title: "The Path to Insights: Data Models and Pipelines",
            platform: "Google Business Intelligence",
            completedDate: "Feb 15, 2026",
            grade: "95%",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 3,
            title: "Decisions, Decisions: Dashboards and Reports",
            platform: "Google Business Intelligence",
            completedDate: "Mar 10, 2026",
            grade: "100%",
            image: "https://images.unsplash.com/photo-1543286386-713df548e9cc?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const weekDays = [
        { day: 'Mo', date: 19, status: 'missed' },
        { day: 'Tu', date: 20, status: 'missed' },
        { day: 'We', date: 21, status: 'missed' },
        { day: 'Th', date: 22, status: 'completed' },
        { day: 'Fr', date: 23, status: 'current' }, // Today
        { day: 'Sa', date: 24, status: 'upcoming' },
        { day: 'Su', date: 25, status: 'upcoming' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-display font-bold text-text-dark mb-2">
                        Good afternoon, Olayiwola
                    </h1>
                    <p className="text-text-muted">
                        Your career goal is to grow in your role as a Chief Marketing Officer. <button className="text-primary font-bold hover:underline">Edit goal</button>
                    </p>
                </div>
                <div className="flex gap-2">
                    {['In Progress', 'Saved', 'Completed'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeTab === tab.toLowerCase().replace(' ', '-')
                                    ? 'bg-text-dark text-white'
                                    : 'bg-white border border-gray-200 text-text-muted hover:border-primary hover:text-primary'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8 items-start">

                {/* Left Sidebar Widgets */}
                <div className="space-y-6">
                    {/* Today's Goals */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-lg text-text-dark">Today's goals</h3>
                            <button className="text-xs font-bold text-text-muted hover:text-primary">Edit</button>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3 opacity-50">
                                <div className="mt-1"><CheckCircle size={16} /></div>
                                <div>
                                    <p className="text-sm font-medium line-through">Complete any 3 learning items</p>
                                    <p className="text-xs text-text-muted">0/3</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 text-gray-300"><Target size={16} /></div>
                                <div>
                                    <p className="text-sm font-medium text-text-dark">Watch 3 videos</p>
                                    <p className="text-xs text-text-muted">0/3</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 text-gray-300"><Clock size={16} /></div>
                                <div>
                                    <p className="text-sm font-medium text-text-dark">Practice with Coach</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Learning Plan / Calendar */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-lg text-text-dark">Learning plan</h3>
                            <div className="flex gap-2">
                                <button className="p-1 hover:bg-gray-50 rounded"><CalendarIcon size={16} className="text-text-muted" /></button>
                            </div>
                        </div>

                        <div className="grid grid-cols-7 gap-1 text-center mb-6">
                            {weekDays.map((d) => (
                                <div key={d.day} className="flex flex-col items-center gap-2">
                                    <span className="text-xs text-text-muted font-bold">{d.day}</span>
                                    <div className={`
                                        w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all
                                        ${d.status === 'completed' ? 'bg-primary text-white' : ''}
                                        ${d.status === 'current' ? 'border-2 border-primary text-primary' : ''}
                                        ${d.status === 'missed' ? 'bg-gray-50 text-gray-300' : ''}
                                        ${d.status === 'upcoming' ? 'text-text-dark' : ''}
                                    `}>
                                        {d.date}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 border-t border-gray-100">
                            <div className="flex items-center justify-between text-xs text-text-muted">
                                <span>1+ daily goals completed</span>
                                <div className="w-24 h-1 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="w-1/3 h-full bg-primary" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-bg-gray flex items-center justify-center text-text-dark font-bold text-xl">
                                12
                            </div>
                            <div>
                                <p className="text-sm font-bold text-text-dark">Last 4 weeks</p>
                                <p className="text-xs text-text-muted">Daily goals completed</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="space-y-6">

                    {/* IN PROGRESS TAB */}
                    {activeTab === 'in-progress' && (
                        <>
                            {/* Active Course Highlight */}
                            <div className="bg-white rounded-2xl p-1 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" className="w-4 h-4" alt="MS" />
                                            </div>
                                            <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Microsoft AI Product Manager</span>
                                        </div>
                                        <button className="text-text-muted hover:text-text-dark"><MoreHorizontal size={20} /></button>
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="flex-1">
                                            <h2 className="text-xl font-bold text-text-dark mb-2">Enterprise Product Management Fundamentals</h2>
                                            <p className="text-sm text-text-muted mb-4">Course 1 of 5 • 72% complete • Estimated completion: Feb 11, 2026</p>

                                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-6">
                                                <div className="w-[72%] h-full bg-primary rounded-full" />
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-primary-dark transition-colors">
                                                    Resume
                                                </button>
                                                <span className="text-xs font-bold text-text-muted flex items-center gap-1">
                                                    <BookOpen size={14} /> Reading (10 minutes)
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Other Items List */}
                            <div className="space-y-4">
                                {/* Item 2 */}
                                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group">
                                    <div className="flex-1">
                                        <h4 className="font-bold text-text-dark mb-1 group-hover:text-primary transition-colors">Market Research and Competitive Analysis</h4>
                                        <p className="text-xs text-text-muted">Course 2 of 5 • Not started</p>
                                    </div>
                                    <button className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity"><MoreHorizontal size={20} /></button>
                                </div>
                                {/* Item 3 */}
                                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group">
                                    <div className="flex-1">
                                        <h4 className="font-bold text-text-dark mb-1 group-hover:text-primary transition-colors">Product Strategy and Roadmapping</h4>
                                        <p className="text-xs text-text-muted">Course 3 of 5 • Not started</p>
                                    </div>
                                    <button className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity"><MoreHorizontal size={20} /></button>
                                </div>

                                {/* AI Rec */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-6 h-6 bg-black text-white rounded flex items-center justify-center font-bold text-xs">IBM</div>
                                        <span className="font-bold text-text-dark">IBM RAG and Agentic AI</span>
                                    </div>

                                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 items-center">
                                        <div className="flex-1">
                                            <h4 className="font-bold text-lg text-text-dark mb-1">Develop Generative AI Applications: Get Started</h4>
                                            <p className="text-sm text-text-muted mb-4">Course 1 of 8 • Not started • Estimated completion: Jan 28, 2026</p>
                                            <div className="flex items-center gap-2 text-xs font-bold text-text-muted">
                                                <Play size={14} /> Video (1 minute)
                                            </div>
                                        </div>
                                        <button className="border border-gray-200 text-primary px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-primary hover:text-white transition-all whitespace-nowrap">
                                            Get started
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* SAVED TAB */}
                    {activeTab === 'saved' && (
                        <div className="space-y-4">
                            {savedCourses.map((course) => (
                                <div key={course.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex gap-6 group">
                                    <div className="w-32 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                        <img src={course.image} className="w-full h-full object-cover" alt={course.title} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">{course.platform} • {course.type}</p>
                                                <h4 className="font-bold text-lg text-text-dark mb-2 group-hover:text-primary transition-colors">{course.title}</h4>
                                            </div>
                                            <button className="text-primary hover:text-primary-dark font-bold text-sm border border-gray-200 px-4 py-1.5 rounded-lg hover:bg-primary hover:text-white transition-all">
                                                Enroll
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {savedCourses.length === 0 && (
                                <div className="text-center py-12 text-text-muted">
                                    <p>No saved courses yet.</p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* COMPLETED TAB */}
                    {activeTab === 'completed' && (
                        <div className="space-y-4">
                            {completedCourses.map((course) => (
                                <div key={course.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                                            <CheckCircle size={32} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">{course.platform}</p>
                                            <h4 className="font-bold text-lg text-text-dark mb-1">{course.title}</h4>
                                            <p className="text-sm text-text-muted">Completed on {course.completedDate} • Grade: <span className="font-bold text-green-600">{course.grade}</span></p>
                                        </div>
                                    </div>
                                    <button className="text-primary font-bold hover:underline text-sm">
                                        View Certificate
                                    </button>
                                </div>
                            ))}
                            {completedCourses.length === 0 && (
                                <div className="text-center py-12 text-text-muted">
                                    <p>No completed courses yet.</p>
                                </div>
                            )}
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default MyLearning;
