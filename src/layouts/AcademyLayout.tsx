import React, { ReactNode } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Home, BookOpen, Users, Award, Briefcase, Settings, Menu, X, WifiOff } from 'lucide-react';
import { useState, useEffect } from 'react';

// This layout is for the Authenticated Learner Experience
interface AcademyLayoutProps {
    children: ReactNode;
}

const AcademyLayout: React.FC<AcademyLayoutProps> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isOffline, setIsOffline] = useState(!navigator.onLine);

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
        { icon: Home, label: 'Dashboard', path: '/academy' },
        { icon: BookOpen, label: 'My Learning', path: '/academy/learning' },
        { icon: Award, label: 'Certificates', path: '/academy/certificates' },
        { icon: Users, label: 'Community', path: '/academy/community' },
        { icon: Briefcase, label: 'Jobs', path: '/academy/jobs' },
    ];

    return (
        <div className="min-h-screen bg-bg-light flex flex-col md:flex-row">
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-gray-100 sticky top-0 z-20">
                <Link to="/academy" className="font-display font-bold text-lg text-text-dark">
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
                            end={item.path === '/academy'} // Only exact match for dashboard
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
                    <Link to="/academy/settings" className="flex items-center gap-3 px-4 py-3 text-text-muted hover:text-text-dark rounded-xl transition-colors">
                        <Settings size={20} />
                        Settings
                    </Link>
                    <div className="mt-4 flex items-center gap-3 px-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-text-dark truncate">Ada Nnaji</p>
                            <p className="text-xs text-text-muted truncate">Digital Associate</p>
                        </div>
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
