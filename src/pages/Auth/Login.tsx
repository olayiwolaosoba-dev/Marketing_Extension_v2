import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';

const Login: React.FC = () => {

    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, we would validate credentials here.
        // For MVP, we'll set a mock token and redirect.
        localStorage.setItem('me_auth_token', 'demo-token');
        navigate('/app/dashboard');
    };

    return (
        <div className="min-h-screen bg-bg-light flex flex-col items-center justify-center p-6 relative">
            {/* Close / Back to Home Button */}
            <Link
                to="/"
                className="absolute top-6 right-6 p-2 rounded-full bg-white text-text-muted hover:text-text-dark hover:bg-gray-100 transition-all shadow-sm group"
                aria-label="Back to Homepage"
            >
                <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            </Link>

            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 md:p-12">
                <div className="text-center mb-8">
                    <Link to="/" className="inline-block mb-4">
                        <span className="font-display font-bold text-2xl text-text-dark">Extension OS</span>
                    </Link>
                    <h1 className="text-3xl font-display font-bold text-text-dark mb-2">Welcome Back</h1>
                    <p className="text-text-muted">Enter your details to access the Command Center.</p>
                </div>

                <form className="space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-sm font-bold text-text-dark mb-2">Email Address</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            placeholder="you@example.com"
                            defaultValue="demo@marketingextensions.com"
                        />
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-bold text-text-dark">Password</label>
                            <Link to="/auth/forgot-password" className="text-xs text-primary font-bold hover:underline">Forgot?</Link>
                        </div>
                        <input
                            type="password"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            placeholder="••••••••"
                            defaultValue="password"
                        />
                    </div>

                    <button type="submit" className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Sign In <ArrowRight size={20} />
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-text-muted">
                        Don't have an account?{' '}
                        <Link to="/auth/request-access" className="text-primary font-bold hover:underline">Request Access</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
