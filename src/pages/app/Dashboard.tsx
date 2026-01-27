import React from 'react';
import { ArrowUpRight, Clock, CheckCircle, AlertCircle, PlayCircle, Calendar } from 'lucide-react';
import { useStore } from '../../lib/store';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const { projects, requests, activity } = useStore();

    // KPIs
    const activeRequests = requests.filter(r => ['In Progress', 'In Review'].includes(r.status));
    const completedThisMonth = requests.filter(r => r.status === 'Completed').length; // Mock logic for "this month"

    // Workstreams
    const consultingProjects = projects.filter(p => p.type === 'Consulting' && p.status !== 'Completed');
    const contentProjects = projects.filter(p => p.type === 'Content+' && p.status !== 'Completed');
    const martechProjects = projects.filter(p => p.type === 'MarTech' && p.status !== 'Completed');

    // Approvals (Simulated)
    const approvals = requests.filter(r => r.status === 'In Review');

    // Deadlines (Simulated - sorting by due date)
    const upcomingDeadlines = [...requests]
        .filter(r => r.status !== 'Completed')
        .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
        .slice(0, 3);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-display font-bold text-text-dark mb-2">Command Center</h1>
                <p className="text-text-muted">Welcome back! Here's what's happening across your marketing ecosystem.</p>
            </div>

            {/* One Number & Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-white shadow-xl shadow-primary/20 relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2 opacity-80">
                            <span className="text-sm font-bold uppercase tracking-wider">North Star Metric</span>
                        </div>
                        <div className="text-5xl font-display font-bold mb-4">124%</div>
                        <div className="flex items-center gap-2 text-sm font-medium bg-white/20 w-fit px-3 py-1 rounded-full backdrop-blur-md">
                            <ArrowUpRight size={14} />
                            <span>Pipeline Growth (YoY)</span>
                        </div>
                    </div>
                    {/* Background Pattern */}
                    <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 text-text-muted mb-4">
                        <Clock size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">Active Requests</span>
                    </div>
                    <div className="text-4xl font-display font-bold text-text-dark mb-2">{activeRequests.length}</div>
                    <p className="text-sm text-text-muted">Currently in progress</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 text-text-muted mb-4">
                        <CheckCircle size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">Completed</span>
                    </div>
                    <div className="text-4xl font-display font-bold text-text-dark mb-2">{completedThisMonth}</div>
                    <p className="text-sm text-text-muted">Tasks finished this month</p>
                </div>
            </div>

            {/* Approvals & Deadlines Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {/* Approvals */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                    <h2 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                        <CheckCircle size={20} className="text-primary" /> Approvals Waiting
                    </h2>
                    {approvals.length > 0 ? (
                        <div className="space-y-4">
                            {approvals.map(req => (
                                <div key={req.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <div>
                                        <h3 className="font-bold text-text-dark text-sm">{req.title}</h3>
                                        <p className="text-xs text-text-muted">{req.projectId} • {req.dueDate}</p>
                                    </div>
                                    <Link to={`/app/requests/${req.id}`} className="px-4 py-2 bg-white border border-gray-200 text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-colors">
                                        Review
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-sm text-text-muted text-center py-4">No pending approvals.</p>
                    )}
                </div>

                {/* Deadlines */}
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                    <h2 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                        <Calendar size={20} className="text-orange-500" /> Upcoming Deadlines
                    </h2>
                    <div className="space-y-4">
                        {upcomingDeadlines.map(req => (
                            <div key={req.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="text-center bg-white p-2 rounded-lg border border-gray-100 min-w-[50px]">
                                        <div className="text-[10px] text-red-500 font-bold uppercase">{new Date(req.dueDate).toLocaleString('en-US', { month: 'short' })}</div>
                                        <div className="text-lg font-bold text-text-dark leading-none">{new Date(req.dueDate).getDate()}</div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-text-dark text-sm">{req.title}</h3>
                                        <p className="text-xs text-text-muted">{req.priority} Priority</p>
                                    </div>
                                </div>
                                <Link to={`/app/requests/${req.id}`} className="text-text-muted hover:text-primary">
                                    <ArrowUpRight size={18} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Workstreams */}
            <h2 className="text-lg font-bold text-text-dark mb-4">Active Workstreams</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                    { title: 'Consulting Hub', color: 'bg-green-500', items: consultingProjects, link: '/app/consulting' },
                    { title: 'Content+ Studio', color: 'bg-orange-500', items: contentProjects, link: '/app/content' },
                    { title: 'MarTech Lab', color: 'bg-blue-500', items: martechProjects, link: '/app/martech' },
                ].map((stream) => (
                    <div key={stream.title} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-lg text-text-dark">{stream.title}</h3>
                            <div className="flex items-center gap-2">
                                <span className={`w-2 h-2 rounded-full ${stream.color}`} />
                                <span className="text-xs font-bold text-text-muted">{stream.items.length > 0 ? 'Active' : 'Idle'}</span>
                            </div>
                        </div>
                        <ul className="space-y-3 flex-1">
                            {stream.items.slice(0, 3).map((item) => (
                                <li key={item.id} className="flex items-center gap-3 text-sm text-text-dark">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                                    {item.title}
                                </li>
                            ))}
                            {stream.items.length === 0 && <li className="text-sm text-text-muted italic">No active projects</li>}
                        </ul>
                        <Link to={stream.link} className="w-full mt-6 py-2 border border-gray-200 rounded-lg text-sm font-bold text-text-muted hover:bg-gray-50 transition-colors text-center block">
                            View All
                        </Link>
                    </div>
                ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-3xl border border-gray-100 p-8">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-display font-bold text-text-dark">Recent Activity</h2>
                    <Link to="/app/activity" className="text-primary font-bold text-sm hover:underline">View All History</Link>
                </div>
                <div className="space-y-6">
                    {activity.slice(0, 5).map((act) => (
                        <div key={act.id} className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-text-muted shrink-0">
                                <PlayCircle size={14} />
                            </div>
                            <div>
                                <p className="text-sm text-text-dark">
                                    <span className="font-bold">{act.user}</span> {act.action} <Link to={act.link} className="font-bold text-primary hover:underline">{act.target}</Link>
                                </p>
                                <span className="text-xs text-text-muted">{act.timestamp}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
