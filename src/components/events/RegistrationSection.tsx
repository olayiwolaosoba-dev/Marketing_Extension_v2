
import React, { useState } from 'react';
import { Event } from '../../data/events';
import { Lock, ArrowRight, CheckCircle } from 'lucide-react';

interface RegistrationSectionProps {
    event: Event;
    elementId?: string;
}

const RegistrationSection: React.FC<RegistrationSectionProps> = ({ event, elementId = "registration" }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const isPast = event.status === 'Past';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock API call
        setTimeout(() => setIsSubmitted(true), 800);
    };

    if (isPast && !event.replayUrl) return null;

    return (
        <section id={elementId} className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="bg-bg-dark rounded-3xl p-8 md:p-16 overflow-hidden relative shadow-2xl">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />

                    <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                        {/* Copy Side */}
                        <div className="text-white">
                            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                                {isPast ? 'Access the Replay' : 'Save your spot'}
                            </h2>
                            <p className="text-white/60 text-lg mb-8 leading-relaxed">
                                {isPast
                                    ? "Missed the live session? Register below to get instant access to the recording and slide deck."
                                    : "Join hundreds of marketing leaders. We limit capacity to ensure meaningful Q&A."
                                }
                            </p>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-primary" size={20} />
                                    <span className="font-medium">Live Q&A with speakers</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-primary" size={20} />
                                    <span className="font-medium">Exclusive templates & resources</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="text-primary" size={20} />
                                    <span className="font-medium">Recording sent after event</span>
                                </li>
                            </ul>

                            <div className="flex items-center gap-2 text-white/30 text-xs">
                                <Lock size={12} />
                                Secure SSL Registration. We never sell your data.
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                            {isSubmitted ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">You're in!</h3>
                                    <p className="text-gray-500">Check your inbox for the calendar invite.</p>
                                </div>
                            ) : event.registrationMode === 'external' && event.externalUrl ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Hosted on {new URL(event.externalUrl).hostname}</h3>
                                    <p className="text-gray-500 mb-8">This event is hosted on an external platform.</p>
                                    <a
                                        href={event.externalUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all flex items-center gap-2"
                                    >
                                        Complete Registration <ArrowRight size={20} />
                                    </a>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">First Name</label>
                                            <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Last Name</label>
                                            <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Work Email</label>
                                        <input required type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Company</label>
                                        <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                                    </div>

                                    <button className="w-full bg-primary text-white font-bold py-4 rounded-full hover:bg-primary-dark transition-colors mt-4 shadow-lg shadow-primary/30">
                                        {isPast ? 'Watch Now' : 'Complete Registration'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegistrationSection;
