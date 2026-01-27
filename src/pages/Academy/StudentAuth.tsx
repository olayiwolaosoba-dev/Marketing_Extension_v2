import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const StudentSignIn: React.FC = () => (
    <div className="min-h-screen flex items-center justify-center bg-bg-light px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <Link to="/academy" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-dark mb-6">
                <ArrowLeft size={16} /> Back to Academy
            </Link>
            <div className="text-center mb-8">
                <h1 className="font-display font-bold text-3xl text-text-dark mb-2">Student Sign In</h1>
                <p className="text-text-muted">Access your courses, community, and certificates.</p>
            </div>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-bold text-text-dark mb-1">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary" placeholder="you@example.com" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-text-dark mb-1">Password</label>
                    <input type="password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary" placeholder="••••••••" />
                </div>
                <button className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors">Sign In</button>
            </form>
            <div className="mt-6 text-center text-sm">
                <p className="text-text-muted">Don't have an account? <Link to="/academy/sign-up" className="text-primary font-bold hover:underline">Sign up</Link></p>
                <p className="mt-2 text-text-muted">Looking for client portal? <Link to="/auth/login" className="text-text-dark font-bold hover:underline">Client Sign In</Link></p>
            </div>
        </div>
    </div>
);

export const StudentSignUp: React.FC = () => (
    <div className="min-h-screen flex items-center justify-center bg-bg-light px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <Link to="/academy" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-dark mb-6">
                <ArrowLeft size={16} /> Back to Academy
            </Link>
            <div className="text-center mb-8">
                <h1 className="font-display font-bold text-3xl text-text-dark mb-2">Create Student Account</h1>
                <p className="text-text-muted">Join the next generation of African marketers.</p>
            </div>
            <button className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors">Create Account</button>
            <div className="mt-6 text-center text-sm">
                <p className="text-text-muted">Already have an account? <Link to="/academy/sign-in" className="text-primary font-bold hover:underline">Sign in</Link></p>
            </div>
        </div>
    </div>
);

export const StudentForgotPassword: React.FC = () => (
    <div className="min-h-screen flex items-center justify-center bg-bg-light px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <Link to="/academy/sign-in" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-dark mb-6">
                <ArrowLeft size={16} /> Back to Sign In
            </Link>
            <div className="text-center mb-8">
                <h1 className="font-display font-bold text-3xl text-text-dark mb-2">Reset Password</h1>
                <p className="text-text-muted">Enter your email to receive recovery instructions.</p>
            </div>
            <button className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors">Send Reset Link</button>
        </div>
    </div>
);
