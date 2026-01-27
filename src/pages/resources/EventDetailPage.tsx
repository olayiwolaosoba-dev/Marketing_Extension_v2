
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getEventBySlug } from '../../data/events';
import EventHero from '../../components/events/EventHero';
import SpeakerCard from '../../components/events/SpeakerCard';
import RegistrationSection from '../../components/events/RegistrationSection';
import { Check, Calendar } from 'lucide-react';

const EventDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const event = getEventBySlug(slug || '');

    if (!event) {
        return <Navigate to="/resources/events" replace />;
    }

    const scrollToRegistration = () => {
        document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-bg-dark">
            <EventHero event={event} onRegisterClick={scrollToRegistration} />

            {/* WHAT YOU WILL LEARN */}
            <section className="py-24 bg-bg-dark border-t border-white/5">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 className="text-3xl font-display font-bold text-white mb-16 text-center">What you'll learn</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {event.whatYoullLearn.map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-white/60 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SPEAKERS */}
            {event.speakers.length > 0 && (
                <section className="py-24 bg-black border-y border-white/5">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-display font-bold text-white mb-4">Speakers</h2>
                            <p className="text-white/60">Hear from the leaders building the future.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {event.speakers.map((speaker, i) => (
                                <SpeakerCard key={i} speaker={speaker} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* AGENDA (Optional) */}
            {event.agenda && event.agenda.length > 0 && (
                <section className="py-24 bg-bg-dark">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">Agenda</h2>
                        <div className="space-y-6">
                            {event.agenda.map((item, i) => (
                                <div key={i} className="flex gap-6 p-4 border-b border-white/5 hover:bg-white/5 rounded-lg transition-colors">
                                    <div className="w-24 shrink-0 font-mono text-primary font-bold text-sm pt-1">
                                        {item.time}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg mb-1">{item.topic}</h4>
                                        {item.speaker && (
                                            <p className="text-white/40 text-sm">with {item.speaker}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* REGISTRATION */}
            <RegistrationSection event={event} />

        </div>
    );
};

export default EventDetailPage;
