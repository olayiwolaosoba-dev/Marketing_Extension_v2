import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { academyData } from '../../lib/academyData';
import { getCourseBySlug } from '../../lib/academyCourseData';
import { useAcademyProgress } from '../../stores/academyProgress';
import { useAcademyAuth } from '../../lib/academyAuth';
import { ArrowLeft, Clock, CheckCircle, BarChart, Users, Star, Lock, PlayCircle, Shield, Calendar, BookOpen, FileText } from 'lucide-react';

// --- SHARED COMPONENTS ---
const AcademyHero = ({ title, subtitle, image, pill }: any) => (
    <div className="bg-text-dark text-white pt-32 pb-20 relative overflow-hidden">
        {image && <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-text-dark" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
            {pill && <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider mb-4">{pill}</div>}
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 max-w-4xl">{title}</h1>
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed">{subtitle}</p>
        </div>
    </div>
);

// --- CATALOG PAGES ---

export const AcademyTracks: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Beginner', 'Intermediate', 'Advanced'];
    const filteredTracks = activeFilter === 'All'
        ? academyData.tracks
        : academyData.tracks.filter(t => t.level === activeFilter);

    return (
        <div>
            <AcademyHero title="Choose your pathway" subtitle="Structured learning paths designed for role mastery. From beginner to CMO." pill="Tracks" />
            <div className="container mx-auto px-6 max-w-7xl py-24">
                <div className="flex gap-3 mb-12 overflow-x-auto pb-2">
                    {filters.map(f => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`px-6 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-300 ${activeFilter === f ? 'bg-text-dark text-white' : 'bg-gray-100 text-text-muted hover:bg-gray-200'}`}
                        >
                            {f === 'All' ? 'All Levels' : f}
                        </button>
                    ))}
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTracks.map((track, i) => (
                        <Link key={i} to={`/academy/tracks/${track.slug}`} className="group flex flex-col bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all">
                            <div className="h-48 overflow-hidden relative">
                                <img src={track.heroImage} alt={track.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-white/90 rounded-full text-xs font-bold uppercase">{track.level}</span></div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">{track.title}</h3>
                                <p className="text-text-muted mb-6 flex-1">{track.summary}</p>
                                <div className="flex items-center gap-4 text-sm font-bold text-text-dark mt-auto">
                                    <span>{track.durationWeeks} Weeks</span>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                    <span>{track.capstoneProject}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                {filteredTracks.length === 0 && (
                    <p className="text-center text-text-muted py-12">No tracks found for this level. Try a different filter.</p>
                )}
            </div>
        </div>
    );
};

export const AcademyCourses: React.FC = () => (
    <div>
        <AcademyHero title="Learn by doing" subtitle="Practical single courses you can complete in a weekend." pill="Course Catalog" />
        <div className="container mx-auto px-6 max-w-7xl py-24">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {academyData.courses.map((course, i) => (
                    <Link key={i} to={`/academy/courses/${course.slug}`} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all">
                        <div className="h-40 overflow-hidden relative">
                            <img src={course.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <div className="p-6">
                            <h4 className="font-bold text-lg text-text-dark mb-1 group-hover:text-primary transition-colors line-clamp-2">{course.title}</h4>
                            <div className="flex items-center gap-2 text-xs text-text-muted mt-2 mb-4">
                                <Star size={12} className="text-orange-500 fill-orange-500" />
                                <span className="font-bold text-text-dark">{course.rating}</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="px-2 py-1 bg-gray-50 rounded text-xs font-bold text-text-muted">{course.level}</span>
                                <span className="px-2 py-1 bg-gray-50 rounded text-xs font-bold text-text-muted">{course.durationHours} Hours</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
);

export const AcademyCertifications: React.FC = () => (
    <div>
        <AcademyHero title="Credentials that matter" subtitle="Rigorous assessment-based certifications verified by cryptography." pill="Certifications" />
        <div className="container mx-auto px-6 max-w-7xl py-24">
            <div className="grid md:grid-cols-3 gap-8">
                {academyData.certifications.map((cert, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-gray-200 hover:border-primary transition-colors cursor-pointer">
                        <Shield size={48} className="text-primary mb-6" />
                        <h3 className="text-2xl font-bold text-text-dark mb-4">{cert.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {cert.skillsCovered.map(s => <span key={s} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded">{s}</span>)}
                        </div>
                        <div className="space-y-3 mb-8">
                            {cert.requirements.map((req, j) => (
                                <div key={j} className="flex items-center gap-2 text-sm text-text-muted">
                                    <Lock size={14} /> {req}
                                </div>
                            ))}
                        </div>
                        <button className="w-full py-3 bg-text-dark text-white rounded-xl font-bold hover:bg-black transition-colors">View Requirements</button>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export const AcademyCohorts: React.FC = () => (
    <div>
        <AcademyHero title="Live Learning Cohorts" subtitle="Intensive 4-6 week sprints with mentors and peers." pill="Cohorts" />
        <div className="container mx-auto px-6 max-w-7xl py-24">
            <div className="space-y-6">
                {academyData.cohorts.map((cohort, i) => (
                    <div key={i} className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-primary font-bold uppercase tracking-wider text-sm">{cohort.startDate}</span>
                                {!cohort.applicationOpen && <span className="bg-gray-100 px-2 py-1 rounded text-xs font-bold">Applications Closed</span>}
                            </div>
                            <h3 className="text-3xl font-display font-bold text-text-dark mb-4">{cohort.title}</h3>
                            <p className="text-text-muted text-lg mb-6">{cohort.whoItsFor}</p>
                            <div className="flex gap-8 text-sm font-bold text-text-dark">
                                <span className="flex items-center gap-2"><Clock size={16} /> {cohort.durationWeeks} Weeks</span>
                                <span className="flex items-center gap-2"><Users size={16} /> {cohort.seats} Seats</span>
                            </div>
                        </div>
                        <div className="w-full md:w-auto">
                            <button disabled={!cohort.applicationOpen} className="w-full md:w-auto px-8 py-4 bg-primary disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-full font-bold hover:bg-primary-dark transition-colors">
                                {cohort.applicationOpen ? 'Apply Now' : 'Join Waitlist'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export const AcademyCommunity: React.FC = () => (
    <div>
        <AcademyHero title="Learning is social" subtitle="Join 2,000+ marketers in dedicated practice spaces." pill="Community" />
        <div className="container mx-auto px-6 max-w-7xl py-24">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {academyData.spaces.map((space, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                        <div className="h-32 overflow-hidden relative">
                            <img src={space.image} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/40" />
                            <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{space.title}</h3>
                        </div>
                        <div className="p-6">
                            <p className="text-text-muted text-sm mb-4">{space.summary}</p>
                            <div className="bg-gray-50 p-3 rounded-lg text-xs">
                                <span className="font-bold text-primary block mb-1">THIS WEEK'S PROMPT</span>
                                "{space.weeklyPromptExample}"
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export const AcademyEvents: React.FC = () => (
    <div>
        <AcademyHero title="Events Calendar" subtitle="Office hours, masterclasses, and local mixers." pill="Live" />
        <div className="container mx-auto px-6 max-w-7xl py-24">
            <div className="grid md:grid-cols-3 gap-8">
                {academyData.events.map((event, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-primary transition-colors">
                        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-4">
                            <Calendar size={14} /> {event.dateTime}
                        </div>
                        <h3 className="text-xl font-bold text-text-dark mb-2">{event.title}</h3>
                        <p className="text-text-muted text-sm mb-6">{event.summary}</p>
                        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                            <span className="text-xs font-bold text-text-dark">{event.format}</span>
                            <button className="text-sm font-bold text-primary hover:underline">RSVP</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// --- DETAIL PAGE Stubs (Dynamic) ---
export const AcademyTrackDetail: React.FC = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const track = academyData.tracks.find(t => t.slug === slug) || academyData.tracks[0];
    return (
        <div>
            <AcademyHero title={track.title} subtitle={track.summary} image={track.heroImage} pill="Track Detail" />
            <div className="container mx-auto px-6 max-w-7xl py-20">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="flex-1 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-6">What you'll learn</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {track.outcomes.map(o => (
                                    <div key={o} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                        <CheckCircle size={20} className="text-primary" />
                                        <span className="font-medium text-text-dark">{o}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold mb-6">Curriculum</h2>
                            <div className="space-y-4">
                                {track.includedCourses.map((c, i) => (
                                    <div key={i} className="flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-xl">
                                        <div className="w-8 h-8 rounded-full bg-text-dark text-white flex items-center justify-center font-bold text-sm">{i + 1}</div>
                                        <div className="flex-1 font-bold text-text-dark">Module {i + 1}: {c.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</div>
                                        <Lock size={16} className="text-gray-400" />
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                    <div className="w-full md:w-96">
                        <div className="bg-white p-8 rounded-3xl border border-gray-200 sticky top-32">
                            <div className="text-3xl font-bold text-text-dark mb-2">{'\u20A6'}15,000<span className="text-lg text-text-muted font-normal">/mo</span></div>
                            <p className="text-text-muted text-sm mb-6">Includes access to all tracks and community.</p>
                            <button onClick={() => navigate('/academy/sign-up')} className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors mb-4 cursor-pointer">Start Free Trial</button>
                            <div className="space-y-3 text-sm text-text-muted">
                                <div className="flex justify-between"><span>Duration</span> <span className="font-bold text-text-dark">{track.durationWeeks} Weeks</span></div>
                                <div className="flex justify-between"><span>Level</span> <span className="font-bold text-text-dark">{track.level}</span></div>
                                <div className="flex justify-between"><span>Capstone</span> <span className="font-bold text-text-dark">Review Included</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const AcademyCourseDetail: React.FC = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const catalogCourse = academyData.courses.find(c => c.slug === slug) || academyData.courses[0];
    const curriculumData = getCourseBySlug(slug || '');
    const { enrollCourse, isEnrolled } = useAcademyProgress();
    const { isAuthenticated } = useAcademyAuth();
    const enrolled = isEnrolled(slug || '');

    const totalLessons = curriculumData?.modules.reduce((sum, m) => sum + m.lessons.length, 0) || 0;
    const totalModules = curriculumData?.modules.length || 0;

    const handleEnroll = () => {
        if (!isAuthenticated) {
            navigate('/academy/sign-up', { state: { from: `/academy/courses/${slug}` } });
            return;
        }
        enrollCourse(slug || '');
        navigate(`/academy/app/courses/${slug}`);
    };

    return (
        <div>
            <AcademyHero title={catalogCourse.title} subtitle={catalogCourse.summary} image={catalogCourse.image} pill="Course" />
            <div className="container mx-auto px-6 max-w-7xl py-20">
                <Link to="/academy/courses" className="inline-flex items-center gap-2 text-text-muted font-bold hover:text-text-dark mb-8"><ArrowLeft size={16} /> Back to Catalog</Link>
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex items-center gap-1"><Star size={16} className="text-orange-500 fill-orange-500" /><span className="font-bold">{catalogCourse.rating}</span><span className="text-text-muted text-sm">({catalogCourse.reviewsCount} reviews)</span></div>
                            <span className="px-2 py-1 bg-gray-100 rounded text-xs font-bold">{catalogCourse.level}</span>
                            <span className="px-2 py-1 bg-gray-100 rounded text-xs font-bold">{catalogCourse.durationHours}h</span>
                        </div>

                        {catalogCourse.outcomes && (
                            <section className="mb-12">
                                <h2 className="text-2xl font-bold mb-6">What you'll learn</h2>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {catalogCourse.outcomes.map((o: string) => (
                                        <div key={o} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                                            <CheckCircle size={18} className="text-primary shrink-0" />
                                            <span className="text-sm font-medium text-text-dark">{o}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        <section>
                            <h2 className="text-2xl font-bold mb-6">Curriculum</h2>
                            <p className="text-text-muted mb-6">{totalModules} modules, {totalLessons} lessons</p>
                            {curriculumData ? (
                                <div className="space-y-4">
                                    {curriculumData.modules.map((mod, i) => (
                                        <div key={mod.id} className="border border-gray-200 rounded-xl overflow-hidden">
                                            <div className="p-5 bg-gray-50 flex items-center gap-4">
                                                <div className="w-8 h-8 rounded-full bg-text-dark text-white flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</div>
                                                <div className="flex-1">
                                                    <h3 className="font-bold text-text-dark">{mod.title}</h3>
                                                    <p className="text-xs text-text-muted mt-1">{mod.lessons.length} lessons</p>
                                                </div>
                                            </div>
                                            <div className="divide-y divide-gray-100">
                                                {mod.lessons.map((lesson) => (
                                                    <div key={lesson.id} className="px-5 py-3 flex items-center gap-3 text-sm">
                                                        {lesson.type === 'video' && <PlayCircle size={16} className="text-primary shrink-0" />}
                                                        {lesson.type === 'reading' && <BookOpen size={16} className="text-blue-500 shrink-0" />}
                                                        {lesson.type === 'quiz' && <FileText size={16} className="text-green-600 shrink-0" />}
                                                        <span className="flex-1 text-text-dark">{lesson.title}</span>
                                                        <span className="text-text-muted text-xs">{lesson.duration} min</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <ul className="space-y-4">
                                    {catalogCourse.topics.map((t: string, i: number) => (
                                        <li key={i} className="p-4 border border-gray-200 rounded-xl flex items-center justify-between">
                                            <span className="font-bold text-text-dark">{t}</span>
                                            <Lock size={16} className="text-gray-400" />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    </div>

                    <div className="w-full md:w-80 shrink-0">
                        <div className="bg-white p-8 rounded-3xl border border-gray-200 sticky top-32">
                            <div className="text-3xl font-bold text-text-dark mb-2">Free</div>
                            <p className="text-text-muted text-sm mb-6">{totalModules} modules, {totalLessons} lessons included.</p>
                            {enrolled ? (
                                <Link to={`/academy/app/courses/${slug}`} className="block w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors text-center mb-4">Continue Learning</Link>
                            ) : (
                                <button onClick={handleEnroll} className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors mb-4 cursor-pointer">
                                    {isAuthenticated ? 'Enroll & Start' : 'Sign Up to Start'}
                                </button>
                            )}
                            <div className="space-y-3 text-sm text-text-muted">
                                <div className="flex justify-between"><span>Duration</span> <span className="font-bold text-text-dark">{catalogCourse.durationHours} hours</span></div>
                                <div className="flex justify-between"><span>Level</span> <span className="font-bold text-text-dark">{catalogCourse.level}</span></div>
                                <div className="flex justify-between"><span>Lessons</span> <span className="font-bold text-text-dark">{totalLessons}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- UTILITY PAGES ---
export const AcademyVerify: React.FC = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-20">
        <div className="container mx-auto px-6 max-w-md text-center">
            <Shield size={64} className="text-text-dark mx-auto mb-6" />
            <h1 className="text-3xl font-display font-bold text-text-dark mb-2">Verify Credential</h1>
            <p className="text-text-muted mb-8">Enter the unique 8-character ID found on the certificate.</p>
            <div className="bg-white p-8 rounded-3xl shadow-xl">
                <input className="w-full px-4 py-4 text-center text-2xl font-mono tracking-[0.5em] border border-gray-200 rounded-xl mb-4 focus:outline-none focus:border-primary uppercase" placeholder="XXXXXXXX" maxLength={8} />
                <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors">Verify Now</button>
            </div>
        </div>
    </div>
);
