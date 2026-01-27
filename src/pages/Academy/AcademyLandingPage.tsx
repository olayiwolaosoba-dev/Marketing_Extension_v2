import React, { useEffect } from 'react';
import { ArrowRight, BookOpen, Award, Users, Play, CheckCircle, Search, Shield, Zap, Calendar, Star, ArrowUpRight, Lock, PlayCircle, BarChart, ExternalLink, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { academyData } from '../../lib/academyData';

const AcademyLandingPage: React.FC = () => {
    useEffect(() => {
        document.title = "MExt University – Marketing Extension Academy";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', "Africa’s marketing academy built like a modern product—practical, social, and career-linked.");
        }
    }, []);

    return (
        <div className="bg-white overflow-hidden text-text-dark font-sans">
            {/* HER0 SECTION */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        {/* Copy */}
                        <div className="flex-1 max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 font-bold text-xs uppercase tracking-wider mb-8"
                            >
                                MEXT UNIVERSITY
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-5xl lg:text-7xl font-display font-bold text-text-dark leading-[1.05] mb-8"
                            >
                                Africa’s marketing academy built like a <span className="text-primary italic">modern product.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-xl text-text-muted leading-relaxed mb-10 max-w-xl"
                            >
                                Practical learning, real assessment, career-linked credentials, and a serious community for marketers across Africa.
                            </motion.p>

                            <motion.ul
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="space-y-4 mb-12"
                            >
                                {[
                                    "Experiential lessons: quizzes, mini-projects, simulations.",
                                    "Credentials that mean something: assessment + verification.",
                                    "Community built into the curriculum—not a forum tab."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-lg">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircle className="text-primary" size={14} />
                                        </div>
                                        <span className="text-text-dark font-medium opacity-90">{item}</span>
                                    </li>
                                ))}
                            </motion.ul>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="flex flex-col sm:flex-row items-center gap-4 mb-10"
                            >
                                <Link to="/academy/tracks" className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1 flex items-center justify-center gap-2">
                                    Explore Tracks <ArrowRight size={20} />
                                </Link>
                                <Link to="/academy/courses" className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-text-dark rounded-full font-bold text-lg hover:bg-gray-50 hover:border-text-dark transition-all flex items-center justify-center gap-2">
                                    Browse Courses
                                </Link>
                                <Link to="/academy/community" className="text-primary font-bold hover:underline px-4 hidden sm:block">
                                    Join the community
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="flex items-center gap-2 text-sm text-text-muted">
                                <span>Already a member?</span>
                                <Link to="/academy/sign-in" className="text-text-dark font-bold hover:text-primary transition-colors">Student Sign In</Link>
                            </motion.div>
                        </div>

                        {/* Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex-1 w-full relative"
                        >
                            <div className="relative z-10 aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl border border-white/20 bg-gray-900 group">
                                {/* Video Mock Player */}
                                <div className="absolute inset-0 bg-cover bg-center opacity-40 hover:scale-105 transition-transform duration-[2s]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200')" }} />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-xl group-hover:scale-110 transition-transform cursor-pointer">
                                        <Play className="text-white ml-1" size={32} fill="currentColor" />
                                    </div>
                                </div>

                                {/* Floating UI Cards */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-8 left-8 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl max-w-xs"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                            <Shield size={20} />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-white/60 uppercase tracking-wider">Status</div>
                                            <div className="font-bold text-white text-sm">Credential Verified</div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-12 right-12 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl max-w-xs"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="text-xs font-bold text-white/80">Track Progress</div>
                                        <div className="text-xs font-bold text-primary">35%</div>
                                    </div>
                                    <div className="w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[35%]" />
                                    </div>
                                </motion.div>

                                {/* Community Avatars */}
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute bottom-12 left-12 flex items-center -space-x-4"
                                >
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className={`w-12 h-12 rounded-full border-2 border-gray-900 bg-gray-600 overflow-hidden shadow-lg z-${i}`}>
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Learner" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <div className="w-12 h-12 rounded-full border-2 border-gray-900 bg-primary flex items-center justify-center text-white font-bold text-xs shadow-lg z-10">
                                        +2k
                                    </div>
                                </motion.div>
                            </div>
                            {/* Ambient Glow */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/20 blur-[120px] rounded-full opacity-60" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PATHWAY TILES (Liquid Glass) */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Choose a track", desc: "Structured paths for role mastery.", link: "/academy/tracks", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" },
                            { title: "Learn by doing", desc: "Real projects, not just theory.", link: "/academy/courses", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" },
                            { title: "Earn credentials", desc: "Verified proof of your skills.", link: "/academy/certifications", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" }
                        ].map((card, i) => (
                            <Link key={i} to={card.link} className="group relative h-96 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                                <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <h3 className="text-3xl font-display font-bold text-white mb-2">{card.title}</h3>
                                    <p className="text-white/80 mb-6 font-medium">{card.desc}</p>
                                    <div className="inline-flex items-center gap-2 text-primary font-bold bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 self-start group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-colors">
                                        Explore <ArrowRight size={16} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* TRACKS GRID */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <h2 className="text-4xl font-display font-bold text-text-dark mb-4">Start with a track that fits your goal.</h2>
                            <div className="flex flex-wrap gap-2">
                                {["All levels", "Beginner", "Intermediate", "Advanced", "Career Starter"].map(f => (
                                    <button key={f} className="px-4 py-2 rounded-full border border-gray-200 text-sm font-bold text-text-muted hover:bg-text-dark hover:text-white hover:border-text-dark transition-colors">
                                        {f}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {academyData.tracks.map((track, i) => (
                            <div key={i} className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col hover:border-primary/30">
                                <div className="h-48 overflow-hidden relative">
                                    <img src={track.heroImage} alt={track.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-4 left-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur ${track.level === 'Beginner' ? 'text-green-600' : 'text-blue-600'}`}>
                                            {track.level}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="text-xs font-bold text-text-muted mb-2 uppercase tracking-wider">{track.durationWeeks} Weeks • {track.outcomes.length} Outcomes</div>
                                    <h3 className="text-2xl font-display font-bold text-text-dark mb-3 group-hover:text-primary transition-colors">{track.title}</h3>
                                    <p className="text-text-muted mb-8 text-sm line-clamp-2">{track.summary}</p>

                                    <div className="mt-auto pt-6 border-t border-gray-100">
                                        <div className="flex items-center gap-2 text-xs font-bold text-text-dark mb-4">
                                            <PenTool size={14} className="text-primary" /> Build: {track.capstoneProject}
                                        </div>
                                        <Link to={`/academy/tracks/${track.slug}`} className="block w-full py-3 border border-gray-200 rounded-xl font-bold text-text-dark text-center hover:bg-text-dark hover:text-white transition-colors">
                                            View Track
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURED & POPULAR COURSES */}
            <section className="py-24 bg-gray-50 border-y border-gray-200">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="mb-12">
                        <h2 className="text-3xl font-display font-bold text-text-dark">Featured & Popular Courses</h2>
                    </div>

                    {/* Featured Strip */}
                    <div className="bg-white rounded-[32px] p-2 border border-blue-100 shadow-lg mb-16 max-w-5xl mx-auto">
                        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-[24px] p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                            <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/30 blur-[100px] rounded-full" />

                            <div className="flex-1 relative z-10">
                                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 block">Course of the Month</span>
                                <h3 className="text-4xl font-display font-bold mb-4">MExt 101: GTM Automation</h3>
                                <p className="text-white/70 text-lg mb-8 max-w-sm">
                                    Master the art of automated Go-To-Market workflows using HubSpot and Zapier. Save 20h/week.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link to="/academy/app" className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-colors inline-flex items-center gap-2">
                                        Start Learning <ArrowRight size={20} />
                                    </Link>
                                    <button className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-colors flex items-center gap-2">
                                        <PlayCircle size={20} /> Watch Preview
                                    </button>
                                </div>
                            </div>

                            <div className="w-full md:w-80 aspect-video bg-gray-800 rounded-xl border border-white/20 shadow-2xl overflow-hidden relative group cursor-pointer">
                                <img src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=500" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Course Preview" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                                    <Play size={48} className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" fill="currentColor" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Popular Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {academyData.courses.slice(1, 5).map((course, i) => (
                            <Link key={i} to={`/academy/courses/${course.slug}`} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                                <div className="h-40 overflow-hidden">
                                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-5">
                                    <h4 className="font-bold text-lg text-text-dark mb-1 group-hover:text-primary transition-colors leading-tight line-clamp-2">{course.title}</h4>
                                    <div className="flex items-center gap-2 text-xs text-text-muted mt-2 mb-3">
                                        <Star size={12} className="text-orange-500 fill-orange-500" />
                                        <span className="font-bold text-text-dark">{course.rating}</span> ({course.reviewsCount} reviews)
                                    </div>
                                    <div className="flex items-center gap-3 text-xs font-bold text-text-muted uppercase tracking-wider">
                                        <span>{course.level}</span>
                                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                                        <span>{course.durationHours}h</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* COMMUNITY (Progressive) */}
            <section className="py-24 bg-gray-900 border-y border-gray-800 relative overflow-hidden">
                {/* Noise texture optional */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("/noise.png")' }}></div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-white">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-display font-bold mb-2">A serious community built into the learning.</h2>
                            <p className="text-white/60 text-lg">Weekly prompts, office hours, portfolio reviews, and peer feedback.</p>
                        </div>
                        <div className="flex gap-4">
                            <Link to="/academy/community" className="px-6 py-3 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-colors">Explore Community</Link>
                            <Link to="/academy/sign-up" className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-colors">Join Now (Free)</Link>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {academyData.spaces.slice(0, 3).map((space, i) => (
                            <Link key={i} to={`/academy/community/spaces/${space.slug}`} className="group relative h-64 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-colors">
                                <img src={space.image} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt={space.title} />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <h4 className="text-2xl font-bold mb-2">{space.title}</h4>
                                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <p className="text-sm text-white/80 mb-2">{space.summary}</p>
                                        <div className="text-xs text-primary font-bold uppercase tracking-wider">Weekly Prompt: {space.weeklyPromptExample}</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Community Marquee */}
                    <div className="relative overflow-hidden w-full h-20 opacity-50 hover:opacity-100 transition-opacity">
                        <div className="flex gap-4 animate-scroll whitespace-nowrap">
                            {[...Array(20)].map((_, i) => (
                                <div key={i} className="w-16 h-16 rounded-2xl bg-gray-800 overflow-hidden flex-shrink-0 grayscale hover:grayscale-0 transition-all">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 20}`} className="w-full h-full object-cover" alt="Member" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* COHORTS & EVENTS */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Cohort Tile */}
                        <div className="group relative rounded-[40px] overflow-hidden bg-gray-900 text-white min-h-[500px] flex flex-col">
                            <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" alt="Cohort" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
                            <div className="relative z-10 p-10 flex flex-col h-full items-start justify-end">
                                <div className="bg-orange-600/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">Live Learning</div>
                                <h3 className="text-4xl font-display font-bold mb-4">Cohorts</h3>
                                <p className="text-white/80 text-lg mb-8 max-w-md">Join a 6-week intensive sprint with peers. Live capstone projects, mentor feedback, and real accountability.</p>

                                {/* Upcoming Cohort */}
                                <div className="w-full bg-white/10 backdrop-blur border border-white/20 p-6 rounded-2xl mb-8">
                                    <div className="text-xs font-bold text-white/60 uppercase tracking-widest mb-1">Next Sprint</div>
                                    <div className="font-bold text-xl mb-1">{academyData.cohorts[0].title}</div>
                                    <div className="text-sm text-white/80">Starts {academyData.cohorts[0].startDate} • {academyData.cohorts[0].seats} seats left</div>
                                </div>

                                <Link to="/academy/cohorts" className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-colors">
                                    Apply for Cohort
                                </Link>
                            </div>
                        </div>

                        {/* Events Tile */}
                        <div className="flex flex-col h-full">
                            <div className="mb-8">
                                <h3 className="text-3xl font-display font-bold text-text-dark">Upcoming Events</h3>
                                <p className="text-text-muted mt-2">Live office hours, masterclasses, and local mixers.</p>
                            </div>

                            <div className="space-y-4 flex-1">
                                {academyData.events.map((event, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex items-center gap-6">
                                        <div className="flex-shrink-0 w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex flex-col items-center justify-center font-bold">
                                            <span className="text-xs uppercase">MAR</span>
                                            <span className="text-xl">10</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1 flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full ${event.format === 'Live Q&A' ? 'bg-red-500 animate-pulse' : 'bg-gray-400'}`} />
                                                {event.format}
                                            </div>
                                            <h4 className="font-bold text-text-dark text-lg">{event.title}</h4>
                                            <p className="text-sm text-text-muted">{event.host}</p>
                                        </div>
                                        <button className="p-3 rounded-full hover:bg-gray-100 text-text-dark">
                                            <ArrowUpRight size={20} />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8">
                                <Link to="/academy/events" className="block w-full py-4 bg-gray-50 border border-gray-200 text-text-dark font-bold text-center rounded-2xl hover:bg-gray-100 transition-colors">
                                    View Full Calendar
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CREDENTIALS */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="bg-text-dark rounded-[48px] p-8 md:p-20 relative overflow-hidden text-white">
                        {/* Abstract BG */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-primary/30 to-transparent blur-[120px] rounded-full" />

                        <div className="grid md:grid-cols-2 gap-20 items-center relative z-10">
                            <div>
                                <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8">Credentials employers can trust.</h2>
                                <p className="text-xl text-white/70 mb-10 leading-relaxed">
                                    Our certifications require passing rigorous proctored assessments and submitting practical portfolios. Every credential is cryptographically verifiable via a unique ID.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link to="/academy/certifications" className="px-8 py-4 bg-white text-text-dark rounded-full font-bold hover:bg-gray-100 transition-colors">
                                        Explore Certifications
                                    </Link>
                                    <Link to="/academy/verify" className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
                                        <Shield size={18} /> Verify a Credential
                                    </Link>
                                </div>
                            </div>
                            <div className="relative">
                                {/* Certificate Card */}
                                <div className="bg-white text-text-dark p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-100 rotate-3 hover:rotate-0 transition-transform duration-500 max-w-md mx-auto">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl">M</div>
                                        <div className="text-right">
                                            <Shield size={32} className="text-green-500 ml-auto mb-1" />
                                            <div className="text-[10px] uppercase font-bold text-green-600 tracking-wider">Verified & Valid</div>
                                        </div>
                                    </div>
                                    <div className="space-y-4 text-center py-6">
                                        <p className="text-sm text-text-muted uppercase tracking-widest">This certifies that</p>
                                        <h3 className="font-display font-bold text-3xl text-text-dark">Alex Johnson</h3>
                                        <p className="text-sm text-text-muted">Has successfully completed the requirements for</p>
                                        <h4 className="font-bold text-xl text-primary">Certified Growth Architect</h4>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-xs text-text-muted font-mono bg-gray-50 -mx-10 -mb-10 p-6 rounded-b-2xl">
                                        <div className="flex items-center gap-2">
                                            <Lock size={12} /> ID: 8A9F-22B1-XCV9
                                        </div>
                                        <div className="w-12 h-12 bg-white p-1 rounded"><img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Verify" alt="QR" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI SECTION */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <div className="max-w-3xl mx-auto mb-16">
                        <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-4">Powered by Cortex</div>
                        <h2 className="text-3xl font-display font-bold text-text-dark mb-4">AI that helps you learn faster (not just decorative).</h2>
                        <p className="text-text-muted">We use AI to personalize your study plan, grade your practice work instantly, and search deeply across video content.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
                        {academyData.aiFeatures.map((feat, i) => (
                            <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 text-center shadow-sm hover:shadow-lg transition-all group">
                                <div className="w-12 h-12 mx-auto mb-4 bg-gray-50 rounded-2xl flex items-center justify-center text-text-muted group-hover:bg-primary group-hover:text-white transition-colors">
                                    <feat.icon size={24} />
                                </div>
                                <h4 className="font-bold text-sm text-text-dark mb-1">{feat.title}</h4>
                                <p className="text-xs text-text-muted">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <Link to="/academy/ai" className="text-primary font-bold hover:underline flex items-center justify-center gap-2">
                            See how AI works <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-24 overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 className="text-3xl font-display font-bold text-text-dark mb-12 text-center">What learners and teams say.</h2>
                    <div className="flex flex-nowrap gap-6 overflow-x-auto pb-12 snap-x">
                        {academyData.testimonials.map((t, i) => (
                            <div key={i} className="min-w-[350px] md:min-w-[400px] snap-center bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative flex-shrink-0">
                                <div className="flex items-center gap-4 mb-6">
                                    <img src={t.avatar} className="w-12 h-12 bg-gray-200 rounded-full object-cover" alt={t.name} />
                                    <div>
                                        <div className="font-bold text-text-dark">{t.name}</div>
                                        <div className="text-xs text-text-muted font-bold">{t.role} • {t.location}</div>
                                    </div>
                                </div>
                                <p className="text-text-dark text-lg leading-relaxed">"{t.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PARTNERS */}
            <section className="py-20 border-t border-gray-100 bg-gray-50/50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-md">
                            <h3 className="text-2xl font-display font-bold text-text-dark mb-2">Built for partners who care about workforce outcomes.</h3>
                            <p className="text-text-muted mb-4 text-sm">We help companies verify skills and upskill teams with measurable data.</p>
                            <Link to="/academy/partners" className="text-primary font-bold hover:underline inline-flex items-center gap-1">Partner with us <ArrowRight size={16} /></Link>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 grayscale opacity-40">
                            {/* Generic Placeholders */}
                            {["TechPoint", "Ventures", "Cabal", "FutureAfrica", "Ingressive"].map((p, i) => (
                                <span key={i} className="text-xl font-display font-black text-gray-400">{p.toUpperCase()}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* PRICING CTA */}
            <section className="py-24 bg-text-dark text-white text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-4xl font-display font-bold mb-6">Start free. Upgrade when you’re ready.</h2>
                    <p className="text-xl text-white/60 mb-10">
                        Join 2,000+ marketers building their careers on MExt University.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/academy/sign-up" className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                            Start Free Account
                        </Link>
                        <Link to="/academy/pricing" className="px-8 py-4 bg-white/10 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-colors">
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-display font-bold text-text-dark mb-12 text-center">Frequently asked questions</h2>
                    <div className="space-y-4">
                        {academyData.faqs.map((faq, i) => (
                            <details key={i} className="group border border-gray-200 rounded-2xl bg-white overflow-hidden">
                                <summary className="flex items-center justify-between p-6 font-bold text-text-dark cursor-pointer hover:bg-gray-50 transition-colors list-none">
                                    {faq.q}
                                    <span className="text-primary group-open:rotate-180 transition-transform">
                                        <ArrowRight className="rotate-90" size={20} />
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-text-muted leading-relaxed">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AcademyLandingPage;
