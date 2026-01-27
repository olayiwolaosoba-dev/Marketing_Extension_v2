import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Signup: React.FC = () => {
    return (
        <div className="min-h-screen bg-bg-light flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 md:p-12">
                <div className="text-center mb-8">
                    <Link to="/" className="inline-block mb-4">
                        <span className="font-display font-bold text-2xl text-text-dark">Marketing Extension</span>
                    </Link>
                    <h1 className="text-3xl font-display font-bold text-text-dark mb-2">Join the Academy</h1>
                    <p className="text-text-muted">Start your journey to becoming a world-class marketer. Free forever.</p>
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-text-dark mb-2">Full Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            placeholder="e.g. Ada Nnaji"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-text-dark mb-2">Email Address</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-text-dark mb-2">Create Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="pt-2">
                        <button className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                            Create Account <ArrowRight size={20} />
                        </button>
                    </div>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-text-muted">
                        Already have an account?{' '}
                        <Link to="/auth/login" className="text-primary font-bold hover:underline">Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
