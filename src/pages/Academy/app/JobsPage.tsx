import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Clock, Bookmark, ExternalLink, Briefcase, ChevronRight } from 'lucide-react';
import { academyData } from '../../../lib/academyData';

const filterOptions = ['All', 'Full-time', 'Contract', 'Internship', 'Remote'] as const;
type Filter = typeof filterOptions[number];

const applications = [
    { id: 'a1', title: 'Growth Marketing Manager', company: 'Flutterwave', status: 'Interview', appliedDate: 'Mar 10, 2026' },
    { id: 'a2', title: 'Content Strategist', company: 'Paystack', status: 'Applied', appliedDate: 'Mar 12, 2026' },
];

const statusColors: Record<string, string> = {
    Applied: 'bg-blue-50 text-blue-700',
    Interview: 'bg-green-50 text-green-700',
    Offered: 'bg-primary/10 text-primary',
    Rejected: 'bg-gray-100 text-gray-500',
};

const JobsPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<Filter>('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredJobs = academyData.jobs.filter((job) => {
        const matchesFilter = activeFilter === 'All'
            || job.type === activeFilter
            || (activeFilter === 'Remote' && job.location.toLowerCase().includes('remote'));
        const matchesSearch = searchQuery === ''
            || job.title.toLowerCase().includes(searchQuery.toLowerCase())
            || job.company.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-display font-bold text-text-dark">Job Board</h1>
                <p className="text-text-muted mt-1">Curated opportunities from top companies hiring MExt-certified talent.</p>
            </div>

            {/* Search + Filters */}
            <div className="space-y-4">
                <div className="relative">
                    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search jobs by title or company..."
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-primary transition-colors text-sm"
                    />
                </div>
                <div className="flex flex-wrap gap-2">
                    {filterOptions.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeFilter === filter
                                ? 'bg-text-dark text-white shadow-lg ring-2 ring-text-dark/20'
                                : 'bg-white text-text-muted border border-gray-200 hover:bg-gray-50'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-3">
                {filteredJobs.length === 0 ? (
                    <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                        <Briefcase size={32} className="text-gray-300 mx-auto mb-3" />
                        <p className="text-text-muted">No jobs match your filters. Try adjusting your search.</p>
                    </div>
                ) : (
                    filteredJobs.map((job, i) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group"
                        >
                            <div className="flex gap-4">
                                {/* Company Logo */}
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-lg"
                                    style={{ backgroundColor: job.logoColor }}
                                >
                                    {job.logo}
                                </div>

                                {/* Job Details */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h3 className="font-bold text-text-dark text-lg group-hover:text-primary transition-colors">{job.title}</h3>
                                            <p className="text-text-muted text-sm">{job.company}</p>
                                        </div>
                                        <button className="p-2 rounded-lg hover:bg-gray-50 text-gray-300 hover:text-primary transition-colors flex-shrink-0">
                                            <Bookmark size={18} />
                                        </button>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-3 mb-3 text-sm text-text-muted">
                                        <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                                        <span className="flex items-center gap-1"><Briefcase size={14} /> {job.type}</span>
                                        <span className="flex items-center gap-1"><Clock size={14} /> {job.posted}</span>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {job.tags.map((tag) => (
                                            <span key={tag} className="px-2 py-1 bg-gray-50 rounded text-xs font-bold text-text-muted">{tag}</span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-bold text-text-dark">{job.salary}</span>
                                        <div className="flex gap-2">
                                            <button className="px-4 py-2 border border-gray-200 text-text-dark rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors">
                                                Save
                                            </button>
                                            <button className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary-dark transition-colors flex items-center gap-1">
                                                Apply <ExternalLink size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))
                )}
            </div>

            {/* My Applications */}
            <section>
                <h2 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                    <Briefcase size={18} className="text-primary" /> My Applications
                </h2>
                {applications.length === 0 ? (
                    <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">
                        <p className="text-text-muted text-sm">You haven't applied to any jobs yet.</p>
                    </div>
                ) : (
                    <div className="space-y-2">
                        {applications.map((app) => (
                            <div key={app.id} className="bg-white rounded-xl p-4 border border-gray-100 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                                        <Briefcase size={14} className="text-text-muted" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-text-dark text-sm">{app.title}</p>
                                        <p className="text-xs text-text-muted">{app.company} · Applied {app.appliedDate}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${statusColors[app.status] || 'bg-gray-100 text-gray-500'}`}>
                                        {app.status}
                                    </span>
                                    <ChevronRight size={16} className="text-gray-300" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default JobsPage;
