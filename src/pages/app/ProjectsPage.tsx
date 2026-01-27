import React, { useState } from 'react';
import { useStore } from '../../lib/store';
import { Link } from 'react-router-dom';
import { Search, Filter, Plus, Calendar, User } from 'lucide-react';

const ProjectsPage: React.FC = () => {
    const { projects } = useStore();
    const [search, setSearch] = useState('');

    const filteredProjects = projects.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-display font-bold text-text-dark mb-1">Projects</h1>
                    <p className="text-text-muted">Manage your collaborative workstreams.</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                    <Plus size={20} /> Create Project
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-6 flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search projects by name..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-text-muted hover:text-text-dark hover:bg-gray-50 font-medium">
                        <Filter size={18} /> Status
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-text-muted hover:text-text-dark hover:bg-gray-50 font-medium">
                        <User size={18} /> Owner
                    </button>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <Link key={project.id} to={`/app/projects/${project.id}`} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <span className="px-3 py-1 bg-gray-100 text-text-muted text-xs font-bold uppercase rounded-full tracking-wider">
                                {project.type}
                            </span>
                            <span className={`text-xs font-bold px-2 py-1 rounded-md ${project.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                    project.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                                        'bg-gray-100 text-gray-600'
                                }`}>
                                {project.status}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-sm text-text-muted line-clamp-2 mb-6 h-10">{project.description}</p>

                        <div className="w-full bg-gray-100 rounded-full h-2 mb-6 overflow-hidden">
                            <div className="bg-primary h-full rounded-full" style={{ width: `${project.progress}%` }} />
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                            <div className="flex items-center gap-2 text-xs text-text-muted font-bold">
                                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-text-dark">
                                    {project.owner.charAt(0)}
                                </div>
                                {project.owner}
                            </div>
                            <div className="text-xs text-text-muted flex items-center gap-1">
                                <Calendar size={14} /> Due soon
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
