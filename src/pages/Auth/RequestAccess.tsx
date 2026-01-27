import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, Check } from 'lucide-react';

const RequestAccess: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-bg-light flex flex-col items-center justify-center p-6 relative">
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
                    <h1 className="text-3xl font-display font-bold text-text-dark mb-2">Request Access</h1>
                    <p className="text-text-muted">Extension OS is currently invite-only. Tell us about your organization.</p>
                </div>

                {!submitted ? (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-bold text-text-dark mb-2">Full Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                placeholder="Jane Doe"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-text-dark mb-2">Work Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                placeholder="jane@company.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-text-dark mb-2">Company Website</label>
                            <input
                                type="url"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                placeholder="company.com"
                                required
                            />
                        </div>

                        <button type="submit" className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                            Submit Request <ArrowRight size={20} />
                        </button>
                    </form>
                ) : (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Check size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-text-dark mb-2">Request Received</h3>
                        <p className="text-text-muted mb-8">Thanks for your interest. Our team will review your request and get back to you shortly.</p>
                        <Link to="/" className="inline-block px-8 py-3 rounded-xl bg-gray-100 text-text-dark font-bold hover:bg-gray-200 transition-colors">
                            Back to Home
                        </Link>
                    </div>
                )}

                {!submitted && (
                    <div className="mt-8 text-center">
                        <p className="text-text-muted">
                            Already have an account?{' '}
                            <Link to="/auth/login" className="text-primary font-bold hover:underline">Sign In</Link>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RequestAccess;
