import React, { ReactNode, useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Home, BookOpen, Users, Award, Briefcase, Settings, Menu, X, WifiOff, LogOut, BarChart3 } from 'lucide-react';
import { useAcademyAuth } from '../lib/academyAuth';

// This layout is for the Authenticated Learner Experience
interface AcademyLayoutProps {
    children: ReactNode;
}

const FALLBACK_AVATAR = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200';

const AcademyLayout: React.FC<AcademyLayoutProps> = ({ children }) => {
    const { student, logout } = useAcademyAuth();
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isOffline, setIsOffline] = useState(!navigator.onLine);

    const handleLogout = () => {
        logout();
        navigate('/academy/sign-in', { replace: true });
    };

    useEffect(() => {
        const handleOnline = () => setIsOffline(false);
        const handleOffline = () => setIsOffline(true);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    const menuItems = [
        { icon: Home, label: 'Dashboard', path: '/academy/app' },
        { icon: BookOpen, label: 'My Learning', path: '/academy/app/learning' },
        { icon: Award, label: 'Certificates', path: '/academy/app/certificates' },
        { icon: Users, label: 'Community', path: '/academy/app/community' },
        { icon: Briefcase, label: 'Jobs', path: '/academy/app/jobs' },
        { icon: BarChart3, label: 'Team', path: '/academy/app/team' },
    ];

    return (
        <div className="min-h-screen bg-bg-light flex flex-col md:flex-row">
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-gray-100 sticky top-0 z-20">
                <Link to="/academy/app" className="font-display font-bold text-lg text-text-dark">
                    MEA <span className="text-primary">Academy</span>
                </Link>
                <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 text-text-dark">
                    {sidebarOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Sidebar Navigation */}
            <aside
                className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-white border-r border-gray-100 flex flex-col z-30 transition-transform duration-300 transform 
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
            >
                <div className="p-6 border-b border-gray-50 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">M</div>
                    <span className="font-display font-bold text-xl text-text-dark">Academy</span>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={() => setSidebarOpen(false)}
                            end={item.path === '/academy/app'} // Only exact match for dashboard
                            className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors
                ${isActive ? 'bg-primary/10 text-primary' : 'text-text-muted hover:bg-gray-50 hover:text-text-dark'}
              `}
                        >
                            <item.icon size={20} />
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-50">
                    <Link to="/academy/app/settings" className="flex items-center gap-3 px-4 py-3 text-text-muted hover:text-text-dark rounded-xl transition-colors">
                        <Settings size={20} />
                        Settings
                    </Link>
                    <div className="mt-4 flex items-center gap-3 px-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                            <img src={student?.avatar || FALLBACK_AVATAR} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-text-dark truncate">{student?.name || 'Student'}</p>
                            <p className="text-xs text-text-muted truncate">{student?.role || 'Academy Member'}</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            title="Sign out"
                            className="flex-shrink-0 p-1.5 text-text-muted hover:text-red-500 transition-colors rounded-lg hover:bg-red-50"
                        >
                            <LogOut size={16} />
                        </button>
                    </div>
                </div>
            </aside>

            {/* Mobile Sidebar Backdrop */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-20 md:hidden backdrop-blur-sm"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Main Content Area */}
            <main className="flex-1 min-w-0 overflow-y-auto h-screen relative">
                {isOffline && (
                    <div className="bg-amber-100 text-amber-800 px-4 py-2 text-sm font-bold flex items-center justify-center gap-2 sticky top-0 z-10 shadow-sm">
                        <WifiOff size={16} />
                        You are offline. Showing downloaded content only.
                    </div>
                )}
                <div className="p-4 md:p-8 max-w-6xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default AcademyLayout;
