
import React, { useState } from 'react';
import { Guide } from '../../data/guides';
import { Lock, ArrowRight, CheckCircle, Download, FileText } from 'lucide-react';

interface AccessGateProps {
    guide: Guide;
}

const AccessGate: React.FC<AccessGateProps> = ({ guide }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock API
        setTimeout(() => setIsSubmitted(true), 800);
    };

    if (!guide.gated) {
        if (!guide.downloadUrl) return null;
        return (
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                        <FileText size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-gray-900">Want to keep this?</h3>
                        <p className="text-gray-500 text-sm">Download the PDF version for offline reading.</p>
                    </div>
                </div>
                <a
                    href={guide.downloadUrl}
                    className="inline-flex items-center gap-2 bg-text-dark text-white px-6 py-3 rounded-full font-bold hover:bg-black transition-colors"
                >
                    <Download size={18} /> Download PDF
                </a>
            </div>
        );
    }

    if (isSubmitted) {
        return (
            <div className="bg-green-50 rounded-2xl p-12 text-center border border-green-100">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">You're in!</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Your guide is ready. We've also sent a copy to your inbox.
                </p>
                <a
                    href={guide.downloadUrl || '#'}
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30"
                >
                    <Download size={20} /> Download Guide
                </a>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 relative">
            <div className="bg-bg-dark p-8 md:p-10 text-white">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-xl text-primary">
                        <Lock size={24} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold font-display mb-2">Unlock the full guide</h3>
                        <p className="text-white/70">
                            Join 20,000+ marketers. Get instant access to the PDF + our weekly growth newsletter.
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-8 md:p-10 bg-white">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">First Name</label>
                            <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Last Name</label>
                            <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Work Email</label>
                        <input required type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary" />
                    </div>

                    <button className="w-full bg-primary text-white font-bold py-4 rounded-full hover:bg-primary-dark transition-colors mt-2 flex items-center justify-center gap-2">
                        Get the Guide <ArrowRight size={18} />
                    </button>

                    <p className="text-center text-xs text-gray-400 mt-4">
                        No spam. Unsubscribe anytime.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default AccessGate;
