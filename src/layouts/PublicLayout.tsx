import React, { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

interface PublicLayoutProps {
    children: ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
    const location = useLocation();
    const currentPage = location.pathname === '/' ? 'home' : location.pathname.substring(1);

    // No-op for now as we transition to full router links in Header
    const handleNavigate = () => { };

    return (
        <div className="relative selection:bg-primary selection:text-white">
            <Header currentPage={currentPage} onNavigate={handleNavigate} />
            <main className="overflow-x-hidden min-h-screen">
                {children}
            </main>
            <Footer onNavigate={handleNavigate} />
        </div>
    );
};

export default PublicLayout;
