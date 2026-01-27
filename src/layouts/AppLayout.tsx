import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '../lib/store';
import {
    LayoutDashboard,
    FolderKanban,
    Zap,
    BookOpen,
    BarChart2,
    Settings,
    LogOut,
    Plus,
    Search,
    Bell,
    Users,
    User as UserIcon,
    HelpCircle,
    Menu,
    X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, notifications, markNotificationRead } = useStore();
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const unreadCount = notifications.filter(n => !n.isRead).length;

    const navItems = [
        { icon: LayoutDashboard, label: 'Command Center', path: '/app/dashboard' },
        { icon: FolderKanban, label: 'Projects', path: '/app/projects' },
        { icon: Users, label: 'Consulting Hub', path: '/app/consulting' },
        { icon: Zap, label: 'Content+ Studio', path: '/app/content' },
        { icon: Settings, label: 'MarTech Lab', path: '/app/martech' },
        { icon: BookOpen, label: 'Assets', path: '/app/assets' }, // Updated to /assets
        { icon: BarChart2, label: 'Insights', path: '/app/insights' },
    ];

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/app/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    const handleLogout = () => {
        // Clear auth (mock)
        localStorage.removeItem('me_auth_token');
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-bg-light flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 fixed inset-y-0 left-0 z-50 flex flex-col hidden md:flex">
                <div className="p-6 border-b border-gray-100 flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold font-display">
                        M
                    </div>
                    <div>
                        <h1 className="font-display font-bold text-lg text-text-dark leading-none">Extension OS</h1>
                        <p className="text-xs text-text-muted">{user.organization}</p>
                    </div>
                </div>

                <div className="p-4 flex-1 overflow-y-auto">
                    <div className="mb-8">
                        <Link
                            to="/app/requests/new"
                            className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                        >
                            <Plus size={18} /> New Request
                        </Link>
                    </div>

                    <nav className="space-y-1">
                        {navItems.map((item) => {
                            const isActive = location.pathname.startsWith(item.path);
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${isActive
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-text-muted hover:bg-gray-50 hover:text-text-dark'
                                        }`}
                                >
                                    <item.icon size={20} className={isActive ? 'text-primary' : 'text-text-muted'} />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="p-4 border-t border-gray-100">
                    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-text-muted hover:bg-red-50 hover:text-red-500 transition-colors">
                        <LogOut size={20} />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
                {/* Topbar */}
                <header className="h-16 bg-white border-b border-gray-100 sticky top-0 z-40 px-4 md:px-8 flex items-center justify-between">
                    {/* Mobile Menu Button (Placeholder) */}
                    <button className="md:hidden p-2 -ml-2 text-text-dark">
                        <Menu size={24} />
                    </button>

                    <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-4 relative hidden md:block">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search projects, assets, or briefs..."
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </form>

                    <div className="flex items-center gap-4">
                        {/* Notifications */}
                        <div className="relative">
                            <button
                                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                                className="relative p-2 text-text-muted hover:text-primary transition-colors rounded-full hover:bg-gray-50"
                            >
                                <Bell size={20} />
                                {unreadCount > 0 && (
                                    <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
                                )}
                            </button>

                            <AnimatePresence>
                                {isNotificationsOpen && (
                                    <>
                                        <div className="fixed inset-0 z-40" onClick={() => setIsNotificationsOpen(false)} />
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden"
                                        >
                                            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                                                <h3 className="font-bold text-sm text-text-dark">Notifications</h3>
                                                <Link to="/app/notifications" onClick={() => setIsNotificationsOpen(false)} className="text-xs text-primary font-bold hover:underline">View All</Link>
                                            </div>
                                            <div className="max-h-96 overflow-y-auto">
                                                {notifications.length === 0 ? (
                                                    <div className="p-4 text-center text-text-muted text-sm">No notifications</div>
                                                ) : (
                                                    notifications.map(n => (
                                                        <Link
                                                            key={n.id}
                                                            to={n.link}
                                                            onClick={() => {
                                                                markNotificationRead(n.id);
                                                                setIsNotificationsOpen(false);
                                                            }}
                                                            className={`block p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors ${!n.isRead ? 'bg-blue-50/50' : ''}`}
                                                        >
                                                            <div className="flex justify-between items-start mb-1">
                                                                <span className="text-xs font-bold text-primary uppercase">{n.type}</span>
                                                                <span className="text-[10px] text-text-muted">{new Date(n.timestamp).toLocaleDateString()}</span>
                                                            </div>
                                                            <h4 className="text-sm font-bold text-text-dark mb-1">{n.title}</h4>
                                                            <p className="text-xs text-text-muted line-clamp-2">{n.readout}</p>
                                                        </Link>
                                                    ))
                                                )}
                                            </div>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Profile Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center border-2 border-transparent hover:border-primary/20 transition-all"
                            >
                                {user.avatar}
                            </button>

                            <AnimatePresence>
                                {isProfileOpen && (
                                    <>
                                        <div className="fixed inset-0 z-40" onClick={() => setIsProfileOpen(false)} />
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden"
                                        >
                                            <div className="p-4 border-b border-gray-100 bg-gray-50">
                                                <p className="font-bold text-text-dark text-sm">{user.name}</p>
                                                <p className="text-xs text-text-muted">{user.email}</p>
                                            </div>
                                            <div className="p-2">
                                                <Link
                                                    to="/app/profile"
                                                    onClick={() => setIsProfileOpen(false)}
                                                    className="flex items-center gap-2 px-3 py-2 text-sm text-text-dark hover:bg-gray-50 rounded-lg transition-colors"
                                                >
                                                    <UserIcon size={16} /> Profile
                                                </Link>
                                                <Link
                                                    to="/app/support"
                                                    onClick={() => setIsProfileOpen(false)}
                                                    className="flex items-center gap-2 px-3 py-2 text-sm text-text-dark hover:bg-gray-50 rounded-lg transition-colors"
                                                >
                                                    <HelpCircle size={16} /> Support
                                                </Link>
                                                <div className="h-px bg-gray-100 my-1" />
                                                <button
                                                    onClick={handleLogout}
                                                    className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                >
                                                    <LogOut size={16} /> Sign Out
                                                </button>
                                            </div>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-4 md:p-8 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AppLayout;
