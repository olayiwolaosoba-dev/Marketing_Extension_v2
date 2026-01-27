import React from 'react';
import { useStore } from '../../../lib/store';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

const ActivityPage: React.FC = () => {
    const { activity } = useStore();

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-display font-bold text-text-dark mb-2">Activity Log</h1>
            <p className="text-text-muted mb-8">Audit trail of all actions in your workspace.</p>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="divide-y divide-gray-100">
                    {activity.map((item) => (
                        <div key={item.id} className="p-4 flex items-start gap-4 hover:bg-gray-50 transition-colors">
                            <div className="min-w-[40px] pt-1">
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                                    <Clock size={16} />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-text-dark">
                                    <span className="font-bold">{item.user}</span> {item.action} <Link to={item.link} className="font-bold text-primary hover:underline">{item.target}</Link>
                                </p>
                                <span className="text-xs text-text-muted">{item.timestamp}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ActivityPage;
