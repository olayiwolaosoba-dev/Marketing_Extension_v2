import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '../../lib/store';
import { ChevronRight, Layout, CheckSquare, FileText, Users, Settings } from 'lucide-react';

const ProjectDetail: React.FC = () => {
    const { id } = useParams();
    const { projects, requests } = useStore();
    const [activeTab, setActiveTab] = useState('overview');

    const project = projects.find(p => p.id === id);
    const projectRequests = requests.filter(r => r.projectId === id);

    if (!project) return <div>Project not found</div>;

    const tabs = [
        { id: 'overview', label: 'Overview', icon: Layout },
        { id: 'requests', label: 'Requests', icon: CheckSquare },
        { id: 'assets', label: 'Assets', icon: FileText },
        { id: 'members', label: 'Members', icon: Users },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    return (
        <div className="max-w-7xl mx-auto h-[calc(100vh-6rem)] flex flex-col">
            {/* Header */}
            <div className="mb-6">
                <div className="flex items-center gap-2 text-sm text-text-muted mb-2">
                    <Link to="/app/projects" className="hover:text-primary">Projects</Link>
                    <ChevronRight size={14} />
                    <span>{project.title}</span>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-display font-bold text-text-dark">{project.title}</h1>
                        <p className="text-text-muted">{project.type} • {project.status}</p>
                    </div>
                    <button className="px-6 py-2 bg-primary text-white rounded-lg font-bold text-sm shadow-md hover:bg-primary-dark transition-colors">
                        New Request
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6 space-x-6">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 pb-4 text-sm font-bold border-b-2 transition-colors ${activeTab === tab.id
                                ? 'border-primary text-primary'
                                : 'border-transparent text-text-muted hover:text-text-dark hover:border-gray-300'
                            }`}
                    >
                        <tab.icon size={16} />
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto">
                {activeTab === 'overview' && (
                    <div className="grid grid-cols-3 gap-8">
                        <div className="col-span-2 space-y-8">
                            <div className="bg-white p-6 rounded-2xl border border-gray-200">
                                <h3 className="font-bold text-lg mb-4">Project Description</h3>
                                <p className="text-text-muted leading-relaxed">{project.description}</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-gray-200">
                                <h3 className="font-bold text-lg mb-4">Recent Activity</h3>
                                <div className="text-sm text-text-muted italic">No recent activity</div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl border border-gray-200">
                                <h3 className="font-bold text-sm text-text-dark mb-4 uppercase tracking-wider">Details</h3>
                                <div className="space-y-4">
                                    <div>
                                        <span className="block text-xs text-text-muted">Owner</span>
                                        <span className="font-medium text-text-dark">{project.owner}</span>
                                    </div>
                                    <div>
                                        <span className="block text-xs text-text-muted">Start Date</span>
                                        <span className="font-medium text-text-dark">Jan 1, 2026</span>
                                    </div>
                                    <div>
                                        <span className="block text-xs text-text-muted">Progress</span>
                                        <div className="w-full bg-gray-100 rounded-full h-2 mt-1">
                                            <div className="bg-primary h-full rounded-full" style={{ width: `${project.progress}%` }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'requests' && (
                    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b border-gray-100">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase">Request Name</th>
                                    <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase">Due Date</th>
                                    <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase">Assignee</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {projectRequests.map(req => (
                                    <tr key={req.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-text-dark">
                                            <Link to={`/app/requests/${req.id}`} className="hover:text-primary hover:underline">{req.title}</Link>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-bold">{req.status}</span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-text-muted">{req.dueDate}</td>
                                        <td className="px-6 py-4 text-sm text-text-dark">{req.assignee}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {projectRequests.length === 0 && <div className="p-8 text-center text-text-muted">No requests found.</div>}
                    </div>
                )}

                {['assets', 'members', 'settings'].includes(activeTab) && (
                    <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                        <div className="text-text-muted font-bold mb-2">Workspace Module</div>
                        <p className="text-sm text-text-muted">This specific module is part of the full suite.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetail;
