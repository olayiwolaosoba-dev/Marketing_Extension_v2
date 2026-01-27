import React from 'react';
import { useStore } from '../../../lib/store';
import { Link } from 'react-router-dom';
import { Bell, Check } from 'lucide-react';

const NotificationsPage: React.FC = () => {
    const { notifications, markNotificationRead } = useStore();

    return (
        <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-display font-bold text-text-dark">Notifications</h1>
                <button
                    onClick={() => notifications.forEach(n => markNotificationRead(n.id))}
                    className="text-sm font-bold text-primary hover:underline"
                >
                    Mark all as read
                </button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden divide-y divide-gray-100">
                {notifications.length === 0 ? (
                    <div className="p-12 text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                            <Bell size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-text-dark">All caught up!</h3>
                        <p className="text-text-muted">You have no new notifications.</p>
                    </div>
                ) : (
                    notifications.map(n => (
                        <div key={n.id} className={`p-6 flex gap-4 ${!n.isRead ? 'bg-blue-50/30' : ''}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${!n.isRead ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-400'}`}>
                                <Bell size={18} />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-bold text-primary uppercase tracking-wide">{n.type}</span>
                                    <span className="text-xs text-text-muted">{new Date(n.timestamp).toLocaleDateString()}</span>
                                </div>
                                <h3 className="font-bold text-text-dark mb-1">{n.title}</h3>
                                <p className="text-text-muted text-sm mb-3">{n.readout}</p>
                                <div className="flex gap-4">
                                    <Link to={n.link} className="text-sm font-bold text-primary hover:underline">
                                        View Details
                                    </Link>
                                    {!n.isRead && (
                                        <button
                                            onClick={() => markNotificationRead(n.id)}
                                            className="text-sm font-medium text-text-muted hover:text-text-dark flex items-center gap-1"
                                        >
                                            <Check size={14} /> Mark as read
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default NotificationsPage;
