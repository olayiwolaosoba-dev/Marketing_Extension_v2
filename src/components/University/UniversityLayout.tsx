import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    BookOpen,
    FileText,
    Award,
    Users,
    Search,
    Bell,
    ChevronRight,
    Menu,
    X
} from 'lucide-react';

interface UniversityLayoutProps {
    children: React.ReactNode;
    onNavigate?: (page: string) => void;
}

const UniversityLayout: React.FC<UniversityLayoutProps> = ({ children, onNavigate }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const navItems = [
        { icon: LayoutDashboard, label: 'My Learning', id: 'university-learning' }, // Changed ID and Label
        { icon: Search, label: 'Explore', id: 'university-overview' }, // Renamed Overview to Explore
        { icon: BookOpen, label: 'Courses', id: 'university-courses' },
        { icon: FileText, label: 'Docs', id: 'university-docs' },
        { icon: Award, label: 'Certifications', id: 'university-certifications' },
        { icon: Users, label: 'Cohorts', id: 'university-cohorts' },
    ];

    return (
        <div className="flex h-screen bg-bg-light font-display overflow-hidden">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
                <div className="h-full flex flex-col">
                    {/* Logo Area */}
                    <div className="p-6 border-b border-gray-100 flex items-center gap-3">
                        <img
                            src="/src/assets/logo-icon.png"
                            alt="MExt University"
                            className="w-8 h-8 object-contain"
                        />
                        <span className="font-bold text-xl tracking-tight text-text-dark">MExt <span className="text-text-muted font-normal">University</span></span>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    if (item.id === 'university-learning') {
                                        navigate('/university/my-learning');
                                    } else if (item.id === 'university-overview') {
                                        navigate('/university');
                                    } else {
                                        onNavigate?.(item.id);
                                    }
                                    setSidebarOpen(false);
                                }}
                                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-text-muted hover:text-text-dark hover:bg-gray-50 transition-colors group"
                            >
                                <item.icon size={18} className="group-hover:text-primary transition-colors" />
                                {item.label}
                            </button>
                        ))}

                        <div className="pt-8 px-3">
                            <p className="text-[10px] uppercase tracking-widest font-bold text-text-muted mb-4">Popular Courses</p>
                            <div className="space-y-3">
                                {['GTM Automation 101', 'Limitless Research', 'AI-Powered Outbound'].map((course, i) => (
                                    <button key={i} className="flex items-center gap-2 text-xs font-medium text-text-muted hover:text-primary transition-colors w-full group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-primary transition-colors" />
                                        {course}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </nav>

                    {/* User Profile Snippet */}
                    <div className="p-4 border-t border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-orange-400" />
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-text-dark truncate">Student Account</p>
                                <p className="text-xs text-text-muted truncate">Free Plan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Top Header */}
                <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 lg:px-8">
                    <div className="flex items-center gap-4 lg:hidden">
                        <button onClick={() => setSidebarOpen(true)} className="p-2 -ml-2 text-text-muted">
                            <Menu size={20} />
                        </button>
                        <span className="font-bold text-lg text-text-dark">University</span>
                    </div>

                    {/* Search Bar - Hidden on small mobile, visible on tablet+ */}
                    <div className="hidden sm:flex items-center max-w-lg w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                        <Search size={16} className="text-text-muted mr-3" />
                        <input
                            type="text"
                            placeholder="Search or ask (⌘K)"
                            className="bg-transparent border-none outline-none text-sm w-full placeholder:text-text-muted/70"
                        />
                        <div className="flex items-center gap-1">
                            <span className="text-[10px] border border-gray-200 rounded px-1.5 py-0.5 text-text-muted font-bold">⌘</span>
                            <span className="text-[10px] border border-gray-200 rounded px-1.5 py-0.5 text-text-muted font-bold">K</span>
                        </div>
                    </div>

                    {/* Profile & Auth */}
                    <div className="flex items-center gap-4 relative group">
                        {/* Dropdown Trigger */}
                        <button className="flex items-center gap-2 hover:bg-gray-50 p-1.5 rounded-lg transition-colors">
                            <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
                                <img
                                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="hidden md:block text-left">
                                <p className="text-xs font-bold text-text-dark">Olayiwola</p>
                                <p className="text-[10px] text-text-muted">Student</p>
                            </div>
                        </button>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden hidden group-hover:block animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                            <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                                <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">Your Subscription</p>
                                <p className="font-bold text-text-dark">MExt Plus Monthly</p>
                            </div>
                            <div className="py-2">
                                <button onClick={() => navigate('/university/profile')} className="w-full text-left px-4 py-2 text-sm font-medium text-text-dark hover:bg-gray-50 hover:text-primary transition-colors">Profile</button>
                                <button onClick={() => navigate('/university/my-learning')} className="w-full text-left px-4 py-2 text-sm font-medium text-text-dark hover:bg-gray-50 hover:text-primary transition-colors">My Learning</button>
                                <button className="w-full text-left px-4 py-2 text-sm font-medium text-text-dark hover:bg-gray-50 hover:text-primary transition-colors">Settings</button>
                                <button className="w-full text-left px-4 py-2 text-sm font-medium text-text-dark hover:bg-gray-50 hover:text-primary transition-colors">Updates</button>
                            </div>
                            <div className="border-t border-gray-100 py-2">
                                <button className="w-full text-left px-4 py-2 text-sm font-medium text-text-muted hover:bg-gray-50 hover:text-text-dark transition-colors">Help Center</button>
                                <button className="w-full text-left px-4 py-2 text-sm font-bold text-red-500 hover:bg-red-50 transition-colors">Log Out</button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Scrollable Content */}
                <main className="flex-1 overflow-y-auto p-6 lg:p-8 bg-gray-50/50">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default UniversityLayout;
