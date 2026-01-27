import React from 'react';
import { useStore } from '../../../lib/store';
import { User, Mail, Shield, Building } from 'lucide-react';

const ProfilePage: React.FC = () => {
    const { user } = useStore();

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-display font-bold text-text-dark mb-8">My Profile</h1>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                    <div className="w-24 h-24 rounded-full bg-primary/10 text-primary font-bold text-3xl flex items-center justify-center border-4 border-white shadow-lg">
                        {user.avatar}
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-text-dark mb-1">{user.name}</h2>
                        <p className="text-text-muted">{user.role.replace('_', ' ').toUpperCase()} at {user.organization}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-3 mb-2 text-text-muted">
                            <Mail size={18} />
                            <span className="text-xs font-bold uppercase tracking-wider">Email Address</span>
                        </div>
                        <div className="font-medium text-text-dark">{user.email}</div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-3 mb-2 text-text-muted">
                            <Building size={18} />
                            <span className="text-xs font-bold uppercase tracking-wider">Organization</span>
                        </div>
                        <div className="font-medium text-text-dark">{user.organization}</div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-3 mb-2 text-text-muted">
                            <Shield size={18} />
                            <span className="text-xs font-bold uppercase tracking-wider">Role Permissions</span>
                        </div>
                        <div className="font-medium text-text-dark capitalize">{user.role.replace('_', ' ')}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
