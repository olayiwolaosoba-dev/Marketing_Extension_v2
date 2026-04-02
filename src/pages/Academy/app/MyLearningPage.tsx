import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Clock, CheckCircle, BookOpen, ChevronRight, Bookmark } from 'lucide-react';
import { academyData } from '../../../lib/academyData';
import { getCourseBySlug } from '../../../lib/academyCourseData';
import { useAcademyProgress } from '../../../stores/academyProgress';
import { StreakCounter, WeeklyActivity, StudyTimeEstimate } from '../../../components/Academy/GamificationWidgets';

const tabs = ['In Progress', 'Bookmarked', 'Completed'] as const;
type Tab = typeof tabs[number];

const MyLearningPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('In Progress');
  const { enrolledCourses, lessonProgress, bookmarks, certificates, lastActiveCourse, lastActiveLesson } = useAcademyProgress();

  // Build course cards with real progress
  const courseCards = enrolledCourses.map((slug) => {
    const catalog = academyData.courses.find((c) => c.slug === slug);
    const courseData = getCourseBySlug(slug);
    if (!catalog || !courseData) return null;
    const allLessons = courseData.modules.flatMap((m) => m.lessons);
    const done = allLessons.filter((l) => lessonProgress[l.id]?.completed).length;
    const pct = allLessons.length ? Math.round((done / allLessons.length) * 100) : 0;
    let currentLessonTitle = allLessons[0]?.title ?? '';
    if (lastActiveCourse === slug && lastActiveLesson) {
      const found = allLessons.find((l) => l.id === lastActiveLesson);
      if (found) currentLessonTitle = found.title;
    }
    return { slug, title: catalog.title, image: catalog.image, level: catalog.level, durationHours: catalog.durationHours, pct, done, total: allLessons.length, currentLessonTitle, completed: pct === 100 };
  }).filter(Boolean) as {
    slug: string; title: string; image: string; level: string; durationHours: number;
    pct: number; done: number; total: number; currentLessonTitle: string; completed: boolean;
  }[];

  // Sort: last active first
  const inProgress = courseCards.filter((c) => !c.completed).sort((a, b) => a.slug === lastActiveCourse ? -1 : b.slug === lastActiveCourse ? 1 : 0);
  const completed = courseCards.filter((c) => c.completed);

  // Bookmarked lessons
  const bookmarkedLessons = bookmarks.map((lessonId) => {
    for (const c of academyData.courses) {
      const courseData = getCourseBySlug(c.slug);
      if (!courseData) continue;
      for (const mod of courseData.modules) {
        const lesson = mod.lessons.find((l) => l.id === lessonId);
        if (lesson) return { lessonId, lessonTitle: lesson.title, courseTitle: c.title, courseSlug: c.slug };
      }
    }
    return null;
  }).filter(Boolean) as { lessonId: string; lessonTitle: string; courseTitle: string; courseSlug: string }[];

  const hero = inProgress[0];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-text-dark">My Learning</h1>
          <p className="text-text-muted mt-1">Track your progress and keep the momentum going.</p>
        </div>
        <StreakCounter showLongest />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
        {/* Left Sidebar */}
        <div className="space-y-6">
          {/* Study Time */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <h3 className="font-bold text-text-dark mb-3">Learning Time</h3>
            <StudyTimeEstimate />
          </div>

          {/* Weekly Activity */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <h3 className="font-bold text-text-dark mb-4">Weekly Activity</h3>
            <WeeklyActivity />
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <h3 className="font-bold text-text-dark mb-4">Stats</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: String(Object.values(lessonProgress).filter((l) => l.completed).length), label: 'Lessons Done' },
                { value: String(enrolledCourses.length), label: 'Courses' },
                { value: String(certificates.length), label: 'Certificates' },
                { value: String(bookmarks.length), label: 'Bookmarks' },
              ].map((s) => (
                <div key={s.label} className="text-center p-3 bg-gray-50 rounded-xl">
                  <p className="text-xl font-bold text-text-dark">{s.value}</p>
                  <p className="text-[10px] text-text-muted font-medium uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Tabs */}
          <div className="flex gap-2 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-colors ${activeTab === tab ? 'bg-text-dark text-white shadow-lg' : 'bg-white text-text-muted border border-gray-200 hover:bg-gray-50'}`}
              >
                {tab}
                {tab === 'In Progress' && inProgress.length > 0 && (
                  <span className="ml-1.5 text-xs bg-primary text-white rounded-full px-1.5 py-0.5">{inProgress.length}</span>
                )}
                {tab === 'Bookmarked' && bookmarkedLessons.length > 0 && (
                  <span className="ml-1.5 text-xs bg-gray-200 text-gray-600 rounded-full px-1.5 py-0.5">{bookmarkedLessons.length}</span>
                )}
              </button>
            ))}
          </div>

          {/* In Progress Tab */}
          {activeTab === 'In Progress' && (
            <div className="space-y-4">
              {inProgress.length === 0 ? (
                <div className="bg-white rounded-2xl border border-dashed border-gray-200 p-12 text-center">
                  <BookOpen size={32} className="text-gray-300 mx-auto mb-3" />
                  <p className="text-text-muted mb-4">No courses in progress. Enroll in a course to get started!</p>
                  <Link to="/academy/courses" className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary-dark transition-colors">
                    Browse Courses
                  </Link>
                </div>
              ) : (
                <>
                  {/* Hero course */}
                  {hero && (
                    <Link to={`/academy/app/courses/${hero.slug}`} className="block">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-text-dark rounded-3xl p-6 md:p-8 text-white relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all"
                      >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity" />
                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                          <div className="space-y-3 max-w-lg">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider">
                              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                              {hero.pct === 0 ? 'Start Learning' : 'Continue Learning'}
                            </div>
                            <h2 className="text-2xl md:text-3xl font-display font-bold">{hero.title}</h2>
                            <p className="text-white/60 text-sm truncate">{hero.currentLessonTitle}</p>
                            <div className="flex items-center gap-4 text-sm text-white/40">
                              <span className="flex items-center gap-1"><Clock size={14} /> {hero.durationHours}h</span>
                              <span>{hero.pct}% complete · {hero.done}/{hero.total} lessons</span>
                            </div>
                          </div>
                          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform flex-shrink-0">
                            <Play size={24} fill="currentColor" className="ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/10">
                          <div className="h-full bg-primary" style={{ width: `${hero.pct}%` }} />
                        </div>
                      </motion.div>
                    </Link>
                  )}

                  {/* Other in-progress */}
                  {inProgress.slice(1).map((course, i) => (
                    <Link key={course.slug} to={`/academy/app/courses/${course.slug}`} className="block">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (i + 1) * 0.1 }}
                        className="bg-white p-4 rounded-2xl border border-gray-100 flex gap-4 hover:border-primary/30 transition-colors group"
                      >
                        <div className="w-24 h-24 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0">
                          <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <div className="flex-1 flex flex-col justify-center min-w-0">
                          <h4 className="font-bold text-text-dark mb-1 truncate">{course.title}</h4>
                          <p className="text-xs text-text-muted mb-2 truncate">{course.currentLessonTitle}</p>
                          <div className="w-full h-1.5 bg-gray-100 rounded-full mb-1">
                            <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${course.pct}%` }} />
                          </div>
                          <p className="text-[10px] text-text-muted">{course.done}/{course.total} lessons · {course.pct}%</p>
                        </div>
                        <div className="flex items-center pr-2">
                          <ChevronRight className="text-gray-300 group-hover:text-primary transition-colors" size={20} />
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </>
              )}
            </div>
          )}

          {/* Bookmarked Tab */}
          {activeTab === 'Bookmarked' && (
            <div className="space-y-4">
              {bookmarkedLessons.length === 0 ? (
                <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                  <Bookmark size={32} className="text-gray-300 mx-auto mb-3" />
                  <p className="text-text-muted">No bookmarked lessons yet. Use the bookmark icon in the course player to save lessons.</p>
                </div>
              ) : (
                bookmarkedLessons.map((item, i) => (
                  <Link key={item.lessonId} to={`/academy/app/courses/${item.courseSlug}`} className="block">
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-4 hover:border-primary/30 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Bookmark size={18} className="text-primary fill-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-text-muted mb-0.5">{item.courseTitle}</p>
                        <p className="font-bold text-text-dark truncate">{item.lessonTitle}</p>
                      </div>
                      <ChevronRight className="text-gray-300 group-hover:text-primary transition-colors flex-shrink-0" size={18} />
                    </motion.div>
                  </Link>
                ))
              )}
            </div>
          )}

          {/* Completed Tab */}
          {activeTab === 'Completed' && (
            <div className="space-y-4">
              {completed.length === 0 ? (
                <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                  <CheckCircle size={32} className="text-gray-300 mx-auto mb-3" />
                  <p className="text-text-muted">No completed courses yet. Keep learning!</p>
                </div>
              ) : (
                completed.map((course, i) => {
                  const cert = certificates.find((c) => c.courseSlug === course.slug);
                  return (
                    <motion.div
                      key={course.slug}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white p-4 rounded-2xl border border-gray-100 flex gap-4"
                    >
                      <div className="w-16 h-16 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={28} className="text-green-500" />
                      </div>
                      <div className="flex-1 flex flex-col justify-center min-w-0">
                        <h4 className="font-bold text-text-dark mb-1 truncate">{course.title}</h4>
                        <p className="text-xs text-text-muted">{course.total} lessons completed</p>
                      </div>
                      <div className="flex items-center">
                        {cert ? (
                          <Link to="/academy/app/certificates" className="text-primary font-bold text-sm hover:underline whitespace-nowrap">
                            View Certificate
                          </Link>
                        ) : (
                          <Link to={`/academy/app/courses/${course.slug}/assessment`} className="text-primary font-bold text-sm hover:underline whitespace-nowrap">
                            Get Certificate
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyLearningPage;
