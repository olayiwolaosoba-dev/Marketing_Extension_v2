import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Bell, BookOpen, Shield, LogOut, Camera, Save, ChevronRight } from 'lucide-react';
import { useAcademyAuth } from '../../../lib/academyAuth';

const SettingsPage: React.FC = () => {
    const { student, logout } = useAcademyAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/academy/sign-in', { replace: true });
    };

    const [notifications, setNotifications] = useState({
        courseReminders: true,
        communityDigest: true,
        jobAlerts: false,
        productUpdates: true,
    });

    const [dailyGoal, setDailyGoal] = useState('30');

    return (
        <div className="space-y-8 max-w-3xl">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-display font-bold text-text-dark">Settings</h1>
                <p className="text-text-muted mt-1">Manage your profile, preferences, and account.</p>
            </div>

            {/* Profile Section */}
            <motion.section
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-6 border border-gray-100"
            >
                <h2 className="font-bold text-text-dark mb-6 flex items-center gap-2">
                    <User size={18} className="text-primary" /> Profile
                </h2>
                <div className="flex items-start gap-6 mb-6">
                    <div className="relative group">
                        <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
                            <img
                                src={student?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <button className="absolute bottom-0 right-0 w-7 h-7 bg-primary rounded-full flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                            <Camera size={14} />
                        </button>
                    </div>
                    <div className="flex-1 space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-1.5">Full Name</label>
                                <input
                                    type="text"
                                    defaultValue={student?.name || ''}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary transition-colors text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-1.5">Email</label>
                                <input
                                    type="email"
                                    defaultValue={student?.email || ''}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary transition-colors text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-1.5">Bio</label>
                            <textarea
                                rows={3}
                                defaultValue="Digital marketing associate passionate about growth strategy and content for African tech companies."
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-1.5">Location</label>
                                <input
                                    type="text"
                                    defaultValue="Lagos, Nigeria"
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary transition-colors text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-1.5">LinkedIn URL</label>
                                <input
                                    type="url"
                                    placeholder="https://linkedin.com/in/..."
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary transition-colors text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="px-5 py-2.5 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary-dark transition-colors flex items-center gap-2">
                        <Save size={14} /> Save Changes
                    </button>
                </div>
            </motion.section>

            {/* Notification Preferences */}
            <motion.section
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100"
            >
                <h2 className="font-bold text-text-dark mb-6 flex items-center gap-2">
                    <Bell size={18} className="text-primary" /> Notifications
                </h2>
                <div className="space-y-4">
                    {[
                        { key: 'courseReminders', label: 'Course reminders', desc: 'Daily nudges to keep your streak alive' },
                        { key: 'communityDigest', label: 'Community digest', desc: 'Weekly summary of top discussions' },
                        { key: 'jobAlerts', label: 'Job alerts', desc: 'New jobs matching your skills' },
                        { key: 'productUpdates', label: 'Product updates', desc: 'New courses, features, and announcements' },
                    ].map((item) => (
                        <div key={item.key} className="flex items-center justify-between py-2">
                            <div>
                                <p className="font-medium text-text-dark text-sm">{item.label}</p>
                                <p className="text-xs text-text-muted">{item.desc}</p>
                            </div>
                            <button
                                onClick={() => setNotifications((prev) => ({ ...prev, [item.key]: !prev[item.key as keyof typeof prev] }))}
                                className={`w-11 h-6 rounded-full transition-colors relative ${notifications[item.key as keyof typeof notifications] ? 'bg-primary' : 'bg-gray-200'
                                    }`}
                            >
                                <div className={`w-5 h-5 rounded-full bg-white shadow-sm absolute top-0.5 transition-transform ${notifications[item.key as keyof typeof notifications] ? 'translate-x-5' : 'translate-x-0.5'
                                    }`} />
                            </button>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* Learning Preferences */}
            <motion.section
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 border border-gray-100"
            >
                <h2 className="font-bold text-text-dark mb-6 flex items-center gap-2">
                    <BookOpen size={18} className="text-primary" /> Learning Preferences
                </h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-text-dark mb-2">Daily learning goal</label>
                        <div className="flex gap-2">
                            {['15', '30', '60'].map((mins) => (
                                <button
                                    key={mins}
                                    onClick={() => setDailyGoal(mins)}
                                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${dailyGoal === mins
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-50 text-text-muted border border-gray-200 hover:bg-gray-100'
                                        }`}
                                >
                                    {mins} min/day
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-text-dark mb-2">Preferred learning time</label>
                        <select className="w-full max-w-xs px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary transition-colors text-sm text-text-muted">
                            <option value="morning">Morning (6am - 12pm)</option>
                            <option value="afternoon">Afternoon (12pm - 5pm)</option>
                            <option value="evening" selected>Evening (5pm - 10pm)</option>
                            <option value="night">Night (10pm - 6am)</option>
                        </select>
                    </div>
                </div>
            </motion.section>

            {/* Account */}
            <motion.section
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-6 border border-gray-100"
            >
                <h2 className="font-bold text-text-dark mb-6 flex items-center gap-2">
                    <Shield size={18} className="text-primary" /> Account
                </h2>
                <div className="space-y-2">
                    {[
                        { label: 'Change password', action: 'Update' },
                        { label: 'Download my data', action: 'Export' },
                    ].map((item) => (
                        <div key={item.label} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                            <span className="text-sm text-text-dark font-medium">{item.label}</span>
                            <button className="flex items-center gap-1 text-sm text-primary font-bold hover:underline">
                                {item.action} <ChevronRight size={14} />
                            </button>
                        </div>
                    ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                    <button className="px-5 py-2.5 border border-red-200 text-red-500 rounded-xl font-bold text-sm hover:bg-red-50 transition-colors">
                        Delete Account
                    </button>
                    <button
                        onClick={handleLogout}
                        className="px-5 py-2.5 bg-gray-100 text-text-dark rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors flex items-center gap-2"
                    >
                        <LogOut size={14} /> Sign Out
                    </button>
                </div>
            </motion.section>
        </div>
    );
};

export default SettingsPage;
