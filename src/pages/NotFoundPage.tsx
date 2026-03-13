import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowRight } from 'lucide-react';

const NotFoundPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-bg-dark flex items-center justify-center px-6">
            <div className="text-center max-w-2xl mx-auto">
                {/* Decorative number */}
                <div className="relative mb-8">
                    <span className="text-[200px] font-display font-bold leading-none select-none"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,107,61,0.15) 0%, rgba(255,107,61,0.05) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                        404
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-2xl flex items-center justify-center">
                            <Search size={28} className="text-primary" />
                        </div>
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                    Page Not Found
                </h1>
                <p className="text-text-muted text-lg mb-10 leading-relaxed">
                    The page you're looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark active:scale-[0.98] transition-all"
                    >
                        <Home size={18} />
                        Back to Home
                    </Link>
                    <Link
                        to="/case-studies"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-xl hover:border-primary hover:text-primary transition-all"
                    >
                        View Our Work
                        <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-text-muted">
                    {[
                        { label: 'Services', path: '/contentplus' },
                        { label: 'Case Studies', path: '/case-studies' },
                        { label: 'Audit Tool', path: '/audit' },
                        { label: 'Pricing', path: '/pricing' },
                        { label: 'About', path: '/about' },
                        { label: 'Contact', path: '/#contact' },
                    ].map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            className="hover:text-primary transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
