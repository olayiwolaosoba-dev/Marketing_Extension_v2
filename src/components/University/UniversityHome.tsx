import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Award, Users, Search } from 'lucide-react';

const UniversityHome: React.FC = () => {
    return (
        <div className="space-y-8">
            {/* Search Hero */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 text-center border border-gray-100 shadow-sm">
                <h1 className="text-3xl md:text-4xl font-display font-bold text-text-dark mb-8">
                    What are you looking to learn today?
                </h1>
                <div className="max-w-2xl mx-auto relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-primary focus:ring-0 transition-all duration-300 text-lg"
                        placeholder="Search for courses, certifications, or guides..."
                    />
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {['Courses', 'Docs', 'Playbooks', 'Cohorts', 'Certifications'].map((tag) => (
                        <button key={tag} className="px-4 py-1.5 rounded-full border border-gray-200 text-sm font-bold text-text-muted hover:border-primary hover:text-primary bg-white transition-all">
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Flagship Course Card */}
                <div className="bg-gradient-to-br from-primary to-orange-600 rounded-3xl p-8 text-white relative overflow-hidden group cursor-pointer shadow-lg hover:shadow-primary/20 transition-all duration-300">
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-8">
                            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">New Course</span>
                            <div className="bg-white p-2 rounded-full text-primary group-hover:scale-110 transition-transform">
                                <ArrowUpRight size={20} />
                            </div>
                        </div>

                        <h2 className="text-3xl font-display font-bold mb-4">
                            MExt 101: GTM Automation
                        </h2>
                        <p className="text-white/80 mb-8 max-w-sm text-lg leading-relaxed">
                            Learn all the fundamentals you need to navigate our operating system seamlessly when getting started.
                        </p>

                        <button className="bg-white text-primary px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                            Start Learning <Play size={16} fill="currentColor" />
                        </button>
                    </div>

                    {/* abstract 3d shape decoration */}
                    <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] group-hover:bg-white/20 transition-all duration-500" />
                    <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-orange-400 rounded-full mix-blend-overlay opacity-50" />
                </div>

                {/* Right Column Stack */}
                <div className="space-y-6">
                    {/* Certification Card */}
                    <div className="bg-bg-dark rounded-3xl p-8 text-white relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all border border-gray-800">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">Certifications</span>
                                <h3 className="text-2xl font-bold">The fastest way to master growth</h3>
                            </div>
                            <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                                <Award size={24} className="text-primary" />
                            </div>
                        </div>
                        <div className="flex -space-x-3 mb-6">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-bg-dark bg-gray-600" />
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-bg-dark bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-400">+2k</div>
                        </div>
                        <button className="w-full bg-white/5 border border-white/10 hover:bg-white/10 py-3 rounded-xl text-sm font-bold transition-colors flex items-center justify-between px-4">
                            Explore Certifications <ArrowUpRight size={16} />
                        </button>
                    </div>

                    {/* Cohorts & Getting Started */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white border border-gray-100 p-6 rounded-3xl hover:border-primary/50 transition-colors cursor-pointer group">
                            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mb-4 text-green-600 group-hover:scale-110 transition-transform">
                                <Search size={20} />
                            </div>
                            <h4 className="font-bold text-lg mb-2 text-text-dark">Find Companies</h4>
                            <p className="text-xs text-text-muted leading-relaxed">Match your criteria within our proprietary dataset.</p>
                        </div>
                        <div className="bg-white border border-gray-100 p-6 rounded-3xl hover:border-primary/50 transition-colors cursor-pointer group">
                            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-4 text-purple-600 group-hover:scale-110 transition-transform">
                                <Users size={20} />
                            </div>
                            <h4 className="font-bold text-lg mb-2 text-text-dark">Cohorts</h4>
                            <p className="text-xs text-text-muted leading-relaxed">Join a community of learners and grow together.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popular Section */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-display font-bold text-text-dark">Popular Topics</h2>
                    <button className="text-sm font-bold text-text-muted hover:text-primary transition-colors">View all</button>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: 'Signals & Triggers', desc: 'Automate actions using real-time signals to react instantly.', color: 'from-orange-400 to-red-500' },
                        { title: 'Settings & Admin', desc: 'Manage workspace controls, permissions, and billing.', color: 'from-blue-400 to-indigo-500' },
                        { title: 'Export & Sync', desc: 'Send data anywhere: spreadsheets, Slack, or CRMs.', color: 'from-green-400 to-teal-500' }
                    ].map((card, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} mb-6 opacity-90 group-hover:opacity-100 transition-opacity`} />
                            <h3 className="font-bold text-xl mb-3 text-text-dark">{card.title}</h3>
                            <p className="text-sm text-text-muted leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UniversityHome;
