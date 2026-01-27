import React, { useState } from 'react';
import { useStore } from '../../lib/store';
import { Link } from 'react-router-dom';
import { Link as LinkIcon, Ticket, Lock, Eye, AlertTriangle } from 'lucide-react';

const MarTechLab: React.FC = () => {
    const { requests } = useStore();
    const [activeTab, setActiveTab] = useState('tickets');
    const ticketRequests = requests.filter(r => r.type === 'MarTech');

    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-display font-bold text-text-dark mb-1">MarTech Lab</h1>
                <p className="text-text-muted">Marketing operations, automation, and tooling support.</p>
            </div>

            <div className="flex border-b border-gray-200 mb-8 space-x-6">
                <button
                    onClick={() => setActiveTab('tickets')}
                    className={`flex items-center gap-2 pb-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'tickets'
                            ? 'border-primary text-primary'
                            : 'border-transparent text-text-muted hover:text-text-dark'
                        }`}
                >
                    <Ticket size={18} /> Support Tickets
                </button>
                <button
                    onClick={() => setActiveTab('vault')}
                    className={`flex items-center gap-2 pb-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'vault'
                            ? 'border-primary text-primary'
                            : 'border-transparent text-text-muted hover:text-text-dark'
                        }`}
                >
                    <Lock size={18} /> Credential Vault
                </button>
            </div>

            {activeTab === 'tickets' && (
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase">Ticket</th>
                                <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase">System</th>
                                <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase">Status</th>
                                <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase">Assignee</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {ticketRequests.map(req => (
                                <tr key={req.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        <Link to={`/app/requests/${req.id}`} className="font-bold text-text-dark hover:text-primary">
                                            {req.title}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-text-muted">HubSpot</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded text-xs font-bold ${req.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                            }`}>
                                            {req.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-text-dark mb-1">{req.assignee}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {ticketRequests.length === 0 && <div className="p-8 text-center text-text-muted">No tickets found.</div>}
                </div>
            )}

            {activeTab === 'vault' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                                <LinkIcon size={20} />
                            </div>
                            <span className="bg-gray-100 text-text-muted text-[10px] font-bold px-2 py-1 rounded uppercase">CRM</span>
                        </div>
                        <h3 className="font-bold text-lg text-text-dark mb-1">HubSpot (Prod)</h3>
                        <p className="text-text-muted text-xs mb-6">Last updated 2 days ago</p>

                        <div className="bg-gray-50 p-3 rounded-lg flex justify-between items-center border border-gray-100">
                            <span className="font-mono text-text-dark text-sm">•••••••••••••</span>
                            <button className="text-text-muted hover:text-primary"><Eye size={16} /></button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MarTechLab;
