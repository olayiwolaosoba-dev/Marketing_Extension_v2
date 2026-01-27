
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Video, MapPin, MonitorPlay, ArrowUpRight } from 'lucide-react';
import { Event } from '../../data/events';
import { format } from 'date-fns';

interface EventCardProps {
    event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
    const isPast = event.status === 'Past';
    const dateStr = format(new Date(event.startDateTime), 'MMM d, yyyy');

    const TypeIcon = {
        'Webinar': Video,
        'In-person': MapPin,
        'Summit': Calendar,
        'Workshop': MonitorPlay
    }[event.type] || Calendar;

    return (
        <Link
            to={`/resources/events/${event.slug}`}
            className="group block h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
            {/* Image Container */}
            <div className="relative aspect-[16/9] overflow-hidden">
                <img
                    src={event.heroMedia}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                    {isPast ? (
                        <span className="px-3 py-1 bg-gray-900/80 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-wider">
                            Past
                        </span>
                    ) : (
                        <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider animate-pulse">
                            Upcoming
                        </span>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col h-[calc(100%-aspect-[16/9])]">
                <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest mb-3">
                    <TypeIcon size={14} />
                    <span>{event.type}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500">{dateStr}</span>
                </div>

                <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {event.title}
                </h3>

                <p className="text-gray-500 text-sm line-clamp-2 mb-6 flex-grow">
                    {event.shortDescription}
                </p>

                {/* Footer CTA */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors flex items-center gap-1">
                        {isPast ? (event.replayUrl ? 'Watch Replay' : 'View Recap') : 'Register Now'}
                        <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default EventCard;
