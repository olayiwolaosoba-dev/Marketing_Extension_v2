
import React, { useState, useMemo } from 'react';
import { Search, Filter, Mail, ArrowRight, PlayCircle } from 'lucide-react';
import { events, EventType, EventStatus } from '../../data/events';
import EventCard from '../../components/events/EventCard';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const EventsIndexPage: React.FC = () => {
    // --- STATE ---
    const [searchQuery, setSearchQuery] = useState('');
    const [typeFilter, setTypeFilter] = useState<EventType | 'All'>('All');
    const [statusFilter, setStatusFilter] = useState<EventStatus | 'All'>('All');

    // --- DERIVED DATA ---
    // 1. Featured Event (First upcoming featured event, or just first event)
    const featuredEvent = events.find(e => e.featured && e.status === 'Upcoming') || events[0];

    // 2. Filtered Events (Excluding the featured one if it's in the grid? Let's keep duplicate for now or filter out based on preference)
    // Actually, widespread pattern is to show it in grid too OR allow filter to override.
    // Let's filter everything based on user input.
    const filteredEvents = useMemo(() => {
        return events.filter(e => {
            const matchesSearch = e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                e.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesType = typeFilter === 'All' || e.type === typeFilter;
            const matchesStatus = statusFilter === 'All' || e.status === statusFilter;

            return matchesSearch && matchesType && matchesStatus;
        });
    }, [searchQuery, typeFilter, statusFilter]);

    // --- HANDLERS ---
    const handleFilterChange = (type: EventType | 'All') => {
        setTypeFilter(type);
        // Reset status if switching types? No, keep independent.
    };

    return (
        <div className="min-h-screen bg-white">
            {/* HERO SECTION */}
            <section className="bg-bg-dark pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Learning Center</div>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Events & Sessions</h1>
                        <p className="text-xl text-white/60">Live sessions, workshops, and conversations for modern marketing teams—strategy, growth, AI, and execution.</p>
                    </div>

                    {/* Featured Event Card (Wide) */}
                    {featuredEvent && (
                        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-colors group">
                            <div className="grid md:grid-cols-2">
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 mb-6">
                                        <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider animate-pulse">
                                            Featured
                                        </span>
                                        <span className="text-white/60 text-sm font-bold uppercase tracking-wider">
                                            {featuredEvent.type}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
                                        {featuredEvent.title}
                                    </h2>
                                    <p className="text-white/60 mb-8 text-lg">
                                        {featuredEvent.shortDescription}
                                    </p>
                                    <div className="flex items-center gap-6 text-white/80 mb-8">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-white/40 uppercase">Date</span>
                                            <span className="font-bold">{format(new Date(featuredEvent.startDateTime), 'MMM d, yyyy')}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs text-white/40 uppercase">Time</span>
                                            <span className="font-bold">{format(new Date(featuredEvent.startDateTime), 'h:mm a')} EST</span>
                                        </div>
                                    </div>
                                    <Link
                                        to={`/resources/events/${featuredEvent.slug}`}
                                        className="inline-flex items-center gap-2 bg-white text-bg-dark px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors w-fit"
                                    >
                                        Register Now <ArrowRight size={20} />
                                    </Link>
                                </div>
                                <div className="relative h-64 md:h-auto">
                                    <img
                                        src={featuredEvent.heroMedia}
                                        alt={featuredEvent.title}
                                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-bg-dark/80 md:to-transparent" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* FILTERS & SEARCH */}
            <section className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 py-6">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                        {/* Chips */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                            {(['All', 'Webinar', 'In-person', 'Summit', 'Workshop'] as const).map((type) => (
                                <button
                                    key={type}
                                    onClick={() => handleFilterChange(type)}
                                    className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${typeFilter === type
                                            ? 'bg-bg-dark text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {type}
                                </button>
                            ))}
                            <div className="w-px h-6 bg-gray-200 mx-2" />
                            {(['Upcoming', 'Past'] as const).map((status) => (
                                <button
                                    key={status}
                                    onClick={() => setStatusFilter(statusFilter === status ? 'All' : status)}
                                    className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${statusFilter === status
                                            ? 'bg-blue-600 text-white shadow-lg'
                                            : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300'
                                        }`}
                                >
                                    {status}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative w-full md:w-64 shrink-0">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search events..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* EVENTS GRID */}
            <section className="py-20 bg-gray-50 min-h-[600px]">
                <div className="container mx-auto px-6 max-w-7xl">
                    {filteredEvents.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredEvents.map(event => (
                                <EventCard key={event.slug} event={event} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                                <Filter size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No events found</h3>
                            <p className="text-gray-500">Try adjusting your filters or search terms.</p>
                            <button
                                onClick={() => { setTypeFilter('All'); setStatusFilter('All'); setSearchQuery(''); }}
                                className="mt-6 text-primary font-bold hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* NEWSLETTER CTA */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                        <Mail size={24} />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Want updates on new sessions?</h2>
                    <p className="text-gray-500 mb-8">Get notified when we announce new workshops and summits. No spam.</p>

                    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your work email"
                            className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                        />
                        <button className="bg-bg-dark text-white font-bold px-6 py-3 rounded-lg hover:bg-black transition-colors">
                            Notify Me
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default EventsIndexPage;
