import React, { useState } from 'react';
import { useStore } from '../../lib/store';
import { Link } from 'react-router-dom';
import { Search, Filter, Plus } from 'lucide-react';

const RequestsList: React.FC = () => {
    const { requests } = useStore();
    const [search, setSearch] = useState('');

    const filteredRequests = requests.filter(r => r.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-display font-bold text-text-dark mb-1">Requests</h1>
                    <p className="text-text-muted">Centralized queue of all marketing deliverables.</p>
                </div>
                <Link to="/app/requests/new" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                    <Plus size={20} /> New Request
                </Link>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-6 flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search requests..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-text-muted hover:text-text-dark hover:bg-gray-50 font-medium">
                    <Filter size={18} /> Filters
                </button>
            </div>

            {/* Table */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase">Request Name</th>
                            <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase">Status</th>
                            <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase">Priority</th>
                            <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase">Due Date</th>
                            <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase">Assignee</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {filteredRequests.map(req => (
                            <tr key={req.id} className="hover:bg-gray-50 transition-colors cursor-pointer">
                                <td className="px-6 py-4">
                                    <Link to={`/app/requests/${req.id}`} className="block">
                                        <div className="font-bold text-text-dark hover:text-primary">{req.title}</div>
                                        <div className="text-xs text-text-muted">{req.type}</div>
                                    </Link>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${req.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                            req.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                                                'bg-gray-100 text-gray-600'
                                        }`}>
                                        {req.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`text-xs font-bold ${req.priority === 'High' ? 'text-red-500' :
                                            req.priority === 'Medium' ? 'text-orange-500' :
                                                'text-gray-500'
                                        }`}>
                                        {req.priority}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-text-dark">{req.dueDate}</td>
                                <td className="px-6 py-4 text-sm text-text-dark">{req.assignee}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredRequests.length === 0 && <div className="p-12 text-center text-text-muted">No requests found.</div>}
            </div>
        </div>
    );
};

export default RequestsList;
