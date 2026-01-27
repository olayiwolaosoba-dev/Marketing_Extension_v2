import React from 'react';
import { Mail, MessageCircle, FileText } from 'lucide-react';

const SupportPage: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-display font-bold text-text-dark mb-2">Support Center</h1>
            <p className="text-text-muted mb-8">Need help? We're here for you.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <a href="mailto:support@marketingextensions.com" className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-primary transition-all group">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Mail size={24} />
                    </div>
                    <h3 className="font-bold text-lg text-text-dark mb-2">Email Support</h3>
                    <p className="text-sm text-text-muted">Get a response within 24 hours.</p>
                </a>

                <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-primary transition-all group cursor-pointer">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <MessageCircle size={24} />
                    </div>
                    <h3 className="font-bold text-lg text-text-dark mb-2">Live Chat</h3>
                    <p className="text-sm text-text-muted">Available Mon-Fri, 9am - 6pm EST.</p>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;
