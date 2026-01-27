import React from 'react';
import { Play, Clock, Award, Flame, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AcademyDashboard = () => {
    return (
        <div className="space-y-8">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-display font-bold text-text-dark">Welcome back, Ada! 👋</h1>
                    <p className="text-text-muted mt-1">You're making great progress on your Digital Marketing track.</p>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                    <Flame className="text-orange-500 fill-orange-500" size={20} />
                    <span className="font-bold text-text-dark">3 Day Streak</span>
                </div>
            </header>

            {/* Hero: Continue Learning */}
            <section className="bg-text-dark rounded-3xl p-6 md:p-8 text-white relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity" />

                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="space-y-4 max-w-lg">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            In Progress
                        </div>
                        <h2 className="text-2xl md:text-3xl font-display font-bold leading-tight">
                            Module 2: Understanding the African Consumer
                        </h2>
                        <p className="text-white/70 text-sm md:text-base">
                            Dive into behavioral psychology and trust factors in emerging markets.
                        </p>
                        <div className="flex items-center gap-4 text-sm font-medium text-white/50">
                            <span className="flex items-center gap-1"><Clock size={16} /> 15 mins left</span>
                            <span>•</span>
                            <span>Digital Marketing Associate Track</span>
                        </div>
                    </div>

                    <button className="flex-shrink-0 w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                        <Play size={24} fill="currentColor" className="ml-1" />
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/10">
                    <div className="h-full bg-primary w-[45%]" />
                </div>
            </section>

            {/* Grid: My Courses & Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Active Courses */}
                <section className="md:col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="font-display font-bold text-xl text-text-dark">My Courses</h3>
                        <button className="text-sm font-bold text-primary hover:underline">View All</button>
                    </div>

                    <div className="grid gap-4">
                        {[1, 2].map((i) => (
                            <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 flex gap-4 hover:border-primary/30 transition-colors cursor-pointer group">
                                <div className="w-24 h-24 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0">
                                    <img src={`https://images.unsplash.com/photo-${i === 1 ? '1552664730-d307ca884978' : '1542435503-956c469947f6'}?auto=format&fit=crop&q=80&w=200`} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                                </div>
                                <div className="flex-1 flex flex-col justify-center">
                                    <h4 className="font-bold text-text-dark mb-1">SEO Fundamentals for Startups</h4>
                                    <p className="text-xs text-text-muted mb-3">Learn keyword research and on-page optimization.</p>
                                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 w-[75%]" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-center pr-2">
                                    <ChevronRight className="text-gray-300 group-hover:text-primary transition-colors" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Marketing IQ & Certs */}
                <section className="space-y-6">
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center">
                        <h3 className="font-display font-bold text-lg text-text-dark mb-4">Marketing IQ</h3>
                        <div className="relative w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-100" />
                                <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="351.86" strokeDashoffset="100" className="text-primary" />
                            </svg>
                            <div className="absolute text-center">
                                <span className="block text-3xl font-display font-bold text-text-dark">145</span>
                                <span className="text-[10px] uppercase font-bold text-text-muted">Proficient</span>
                            </div>
                        </div>
                        <button className="text-sm font-bold text-primary hover:underline">View Analysis</button>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary-dark p-6 rounded-3xl text-white shadow-lg shadow-primary/20 relative overflow-hidden">
                        <Award className="absolute top-4 right-4 opacity-20" size={48} />
                        <h3 className="font-display font-bold text-lg mb-1">Certificates</h3>
                        <p className="text-white/80 text-sm mb-4">You have 1 certification ready to claim.</p>
                        <button className="w-full py-2 bg-white text-primary font-bold rounded-xl text-sm hover:bg-opacity-90 transition-colors">
                            View Wallet
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AcademyDashboard;
