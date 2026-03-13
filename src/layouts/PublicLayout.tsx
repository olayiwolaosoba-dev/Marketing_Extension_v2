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
            {/* Skip Navigation – visible only on keyboard focus */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:z-[1000] focus:top-4 focus:left-4 focus:px-6 focus:py-3 focus:bg-primary focus:text-white focus:rounded-full focus:font-bold focus:shadow-lg"
            >
                Skip to main content
            </a>
            <Header currentPage={currentPage} onNavigate={handleNavigate} />
            <main id="main-content" tabIndex={-1} className="overflow-x-hidden min-h-screen">
                {children}
            </main>
            <Footer onNavigate={handleNavigate} />
        </div>
    );
};

export default PublicLayout;
