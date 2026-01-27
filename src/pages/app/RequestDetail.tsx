import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '../../lib/store';
import { ChevronRight, FileText, CheckSquare, MessageCircle, Clock } from 'lucide-react';

const RequestDetail: React.FC = () => {
    const { id } = useParams();
    const { requests, activity } = useStore();
    const request = requests.find(r => r.id === id);

    if (!request) return <div>Request not found</div>;

    const relevantActivity = activity.filter(a => a.link.includes(id!));

    return (
        <div className="max-w-7xl mx-auto h-[calc(100vh-6rem)] flex flex-col">
            {/* Header */}
            <div className="mb-6 flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-2 text-sm text-text-muted mb-2">
                        <Link to="/app/requests" className="hover:text-primary">Requests</Link>
                        <ChevronRight size={14} />
                        <span>{request.title}</span>
                    </div>
                    <h1 className="text-3xl font-display font-bold text-text-dark mb-1">{request.title}</h1>
                    <p className="text-text-muted">Priority: <span className="text-orange-500 font-bold">{request.priority}</span> • Due: {request.dueDate}</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold text-text-dark hover:bg-gray-50">Edit Brief</button>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-md hover:bg-primary-dark">Mark as Complete</button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-8 flex-1 overflow-hidden">
                {/* Main Work Area */}
                <div className="col-span-2 overflow-y-auto pr-2">
                    {/* Brief */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-6">
                        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
                            <FileText size={20} className="text-text-muted" /> Brief
                        </h2>
                        <div className="prose max-w-none text-text-dark p-4 bg-gray-50 rounded-xl">
                            {request.brief}
                        </div>
                    </div>

                    {/* Proofing / Files */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-8">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <CheckSquare size={20} className="text-text-muted" /> Deliverables
                            </h2>
                            <button className="text-sm font-bold text-primary">+ Add Version</button>
                        </div>

                        <div className="h-64 bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-200 text-text-muted">
                            <p>No files uploaded yet for review.</p>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="col-span-1 space-y-6 overflow-y-auto">
                    {/* Meta */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-6">
                        <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-4">Meta Data</h3>
                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between">
                                <span className="text-text-muted">Status</span>
                                <span className="font-bold text-blue-600">{request.status}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-text-muted">Assignee</span>
                                <span className="font-bold text-text-dark">{request.assignee}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-text-muted">Requestor</span>
                                <span className="font-bold text-text-dark">{request.requestedBy}</span>
                            </div>
                        </div>
                    </div>

                    {/* Activity */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-6">
                        <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Clock size={14} /> Activity Stream
                        </h3>
                        <div className="space-y-4">
                            {relevantActivity.length > 0 ? relevantActivity.map((act, i) => (
                                <div key={i} className="flex gap-3 text-sm">
                                    <div className="w-1 bg-gray-200 rounded-full" />
                                    <div>
                                        <p className="text-text-dark"><span className="font-bold">{act.user}</span> {act.action}</p>
                                        <span className="text-xs text-text-muted">{act.timestamp}</span>
                                    </div>
                                </div>
                            )) : (
                                <p className="text-sm text-text-muted italic">No recent activity.</p>
                            )}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="flex gap-2">
                                <input type="text" placeholder="Add a comment..." className="w-full text-sm p-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary" />
                                <button className="p-2 text-primary hover:bg-gray-50 rounded-lg"><MessageCircle size={18} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestDetail;
