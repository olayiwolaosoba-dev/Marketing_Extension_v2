
import React from 'react';
import { Event } from '../../data/events';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { format } from 'date-fns';

interface EventHeroProps {
    event: Event;
    onRegisterClick: () => void;
}

const EventHero: React.FC<EventHeroProps> = ({ event, onRegisterClick }) => {
    const isPast = event.status === 'Past';
    const dateStr = format(new Date(event.startDateTime), 'EEEE, MMMM d, yyyy');
    const timeStr = `${format(new Date(event.startDateTime), 'h:mm a')} - ${format(new Date(event.endDateTime), 'h:mm a')} EST`;

    return (
        <section className="relative pt-32 pb-20 bg-bg-dark overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-bg-dark/90 to-bg-dark z-10" />
                <img src={event.heroMedia} className="w-full h-full object-cover opacity-40 blur-sm" alt="Background" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-20">
                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-end">

                    {/* Left Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 mb-6">
                            <span className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-white/80 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                                {event.type}
                            </span>
                            {isPast && (
                                <span className="px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full text-red-200 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                                    Event Ended
                                </span>
                            )}
                        </div>

                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            {event.title}
                        </h1>

                        <p className="text-xl text-white/70 mb-8 max-w-2xl leading-relaxed">
                            {event.shortDescription}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 mb-10 text-white/80">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/5 rounded-lg text-primary"><Calendar size={20} /></div>
                                <div>
                                    <div className="text-xs text-white/40 uppercase">Date</div>
                                    <div className="font-medium">{dateStr}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/5 rounded-lg text-primary"><Clock size={20} /></div>
                                <div>
                                    <div className="text-xs text-white/40 uppercase">Time</div>
                                    <div className="font-medium">{timeStr}</div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={onRegisterClick}
                            disabled={isPast && !event.replayUrl}
                            className={`px-8 py-4 rounded-full font-bold text-lg transition-all ${isPast
                                    ? 'bg-white/10 text-white hover:bg-white/20'
                                    : 'bg-primary text-white hover:bg-white hover:text-bg-dark'
                                }`}
                        >
                            {isPast
                                ? (event.replayUrl ? 'Watch Replay Now' : 'View Recap')
                                : (event.registrationMode === 'external' ? 'Register on Lu.ma' : 'Save Your Seat')
                            }
                        </button>
                    </div>

                    {/* Right Card / Visual */}
                    <div className="hidden lg:block">
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700 origin-bottom-right">
                            <img src={event.heroMedia} className="w-full h-full object-cover" alt="Event preview" />
                            <div className="absolute inset-0 bg-black/20" />

                            {/* Player Button Overlay if Replay logic exists */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                                        <div className="border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EventHero;
