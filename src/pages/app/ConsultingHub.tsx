import React, { useState } from 'react';
import { useStore } from '../../lib/store';
import { Link } from 'react-router-dom';
import { Map, FileText, Calendar, ChevronRight, Plus } from 'lucide-react';

const ConsultingHub: React.FC = () => {
    const [activeTab, setActiveTab] = useState('roadmap');
    const { projects, requests } = useStore();

    const consultingProjects = projects.filter(p => p.type === 'Consulting');
    const strategyDocs = requests.filter(r => r.type === 'Consulting' && r.status === 'Completed');

    const tabs = [
        { id: 'roadmap', label: 'Roadmap', icon: Map },
        { id: 'docs', label: 'Strategy Docs', icon: FileText },
        { id: 'rituals', label: 'Rituals', icon: Calendar },
    ];

    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-8 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-display font-bold text-text-dark mb-1">Consulting Hub</h1>
                    <p className="text-text-muted">Strategic alignment and growth planning.</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                    <Plus size={20} /> New Initiative
                </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-8 space-x-6">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 pb-4 text-sm font-bold border-b-2 transition-colors ${activeTab === tab.id
                                ? 'border-primary text-primary'
                                : 'border-transparent text-text-muted hover:text-text-dark hover:border-gray-300'
                            }`}
                    >
                        <tab.icon size={18} />
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            {activeTab === 'roadmap' && (
                <div className="space-y-6">
                    {consultingProjects.map((project) => (
                        <div key={project.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden group">
                            <div className="absolute left-0 top-0 bottom-0 w-2 bg-green-500" />
                            <div className="pl-4">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-text-dark mb-1">{project.title}</h3>
                                        <p className="text-text-muted text-sm">{project.status} • Owners: {project.owner}</p>
                                    </div>
                                    <Link to={`/app/projects/${project.id}`} className="p-2 bg-gray-50 rounded-lg hover:bg-primary text-text-muted hover:text-white transition-colors">
                                        <ChevronRight size={20} />
                                    </Link>
                                </div>

                                {/* Roadmap Visualization (Mock) */}
                                <div className="relative h-12 bg-gray-100 rounded-lg mt-6 mb-2 overflow-hidden flex items-center px-4">
                                    <div className="absolute top-0 bottom-0 left-0 bg-green-100 w-[45%]" />
                                    <div className="relative z-10 flex justify-between w-full text-xs font-bold text-text-muted uppercase">
                                        <span>Discovery</span>
                                        <span>Strategy</span>
                                        <span>Execution</span>
                                        <span>Review</span>
                                    </div>
                                    <div className="absolute top-1/2 -translate-y-1/2 h-2 w-2 bg-green-500 rounded-full ring-4 ring-white" style={{ left: `${project.progress}%` }} />
                                </div>
                            </div>
                        </div>
                    ))}
                    {consultingProjects.length === 0 && <div className="p-12 text-center text-text-muted italic">No active initiatives.</div>}
                </div>
            )}

            {activeTab === 'docs' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {strategyDocs.length > 0 ? strategyDocs.map((doc) => (
                        <Link key={doc.id} to={`/app/requests/${doc.id}`} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-primary transition-colors group">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <FileText size={24} />
                            </div>
                            <h3 className="font-bold text-lg text-text-dark mb-2">{doc.title}</h3>
                            <p className="text-sm text-text-muted">Last updated {doc.dueDate}</p>
                        </Link>
                    )) : (
                        <div className="col-span-full p-12 text-center text-text-muted bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                            No strategy documents finalized yet. Checks 'Requests' for drafts.
                        </div>
                    )}
                </div>
            )}

            {activeTab === 'rituals' && (
                <div className="grid grid-cols-1 gap-4">
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-16 text-center">
                                <span className="block text-2xl font-bold text-text-dark">Mon</span>
                                <span className="text-xs font-bold text-text-muted uppercase">Weekly</span>
                            </div>
                            <div className="h-10 w-px bg-gray-100" />
                            <div>
                                <h3 className="font-bold text-lg text-text-dark">Growth Sync</h3>
                                <p className="text-sm text-text-muted">10:00 AM - 11:00 AM • Google Meet</p>
                            </div>
                        </div>
                        <button className="px-4 py-2 border border-gray-200 rounded-lg font-bold text-sm hover:bg-gray-50">View Notes</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ConsultingHub;
