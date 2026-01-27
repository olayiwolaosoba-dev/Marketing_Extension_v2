import React from 'react';
import { useStore, Request } from '../../lib/store';
import { Link } from 'react-router-dom';
import { Plus, MoreHorizontal } from 'lucide-react';

const ContentStudio: React.FC = () => {
    const { requests } = useStore();
    const contentRequests = requests.filter(r => r.type === 'Content+');

    const columns = [
        { id: 'Triaged', title: 'Triaged' },
        { id: 'In Progress', title: 'In Production' },
        { id: 'In Review', title: 'In Review' },
        { id: 'Approved', title: 'Ready / Done' },
    ];

    return (
        <div className="h-[calc(100vh-6rem)] flex flex-col">
            <div className="mb-6 flex justify-between items-center pr-4">
                <div>
                    <h1 className="text-3xl font-display font-bold text-text-dark mb-1">Content+ Studio</h1>
                    <p className="text-text-muted">Production queue and asset review.</p>
                </div>
                <Link to="/app/requests/new" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                    <Plus size={20} /> Create Content
                </Link>
            </div>

            {/* Kanban Board */}
            <div className="flex-1 overflow-x-auto pb-4">
                <div className="flex gap-6 min-w-max h-full px-1">
                    {columns.map(col => (
                        <div key={col.id} className="w-80 flex flex-col bg-gray-50 rounded-2xl p-4 border border-gray-100 h-full">
                            <div className="flex justify-between items-center mb-4 px-2">
                                <h3 className="font-bold text-text-muted uppercase text-xs tracking-wider">{col.title}</h3>
                                <span className="bg-white px-2 py-0.5 rounded text-xs font-bold text-text-muted border border-gray-200">
                                    {contentRequests.filter(r => r.status === col.id).length}
                                </span>
                            </div>

                            <div className="flex-1 overflow-y-auto space-y-3">
                                {contentRequests
                                    .filter(r => r.status === col.id)
                                    .map(req => (
                                        <Link key={req.id} to={`/app/requests/${req.id}`} className="block bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-primary/50 transition-all cursor-pointer">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${req.priority === 'High' ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-500'
                                                    }`}>
                                                    {req.priority}
                                                </span>
                                                <button className="text-gray-300 hover:text-gray-500"><MoreHorizontal size={16} /></button>
                                            </div>
                                            <h4 className="font-bold text-text-dark text-sm mb-3 line-clamp-2">{req.title}</h4>
                                            <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-50">
                                                <div className="text-xs text-text-muted">{req.dueDate}</div>
                                                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                                                    {req.assignee.charAt(0)}
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContentStudio;
