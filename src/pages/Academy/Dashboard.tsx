import React from 'react';
import { Play, Clock, Award, ChevronRight, ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAcademyAuth } from '../../lib/academyAuth';
import { useAcademyProgress } from '../../stores/academyProgress';
import { academyData } from '../../lib/academyData';
import { getCourseBySlug } from '../../lib/academyCourseData';
import { StreakCounter, XpProgressBar, BadgeGrid, LearningStats } from '../../components/Academy/GamificationWidgets';

const AcademyDashboard = () => {
  const { student } = useAcademyAuth();
  const navigate = useNavigate();
  const firstName = student?.name?.split(' ')[0] || 'Student';
  const {
    enrolledCourses, lessonProgress, lastActiveCourse, lastActiveLesson,
  } = useAcademyProgress();

  // Build enrolled course cards with real progress
  const enrolledWithProgress = enrolledCourses
    .map((slug) => {
      const catalogCourse = academyData.courses.find((c) => c.slug === slug);
      const courseData = getCourseBySlug(slug);
      if (!catalogCourse || !courseData) return null;
      const allLessons = courseData.modules.flatMap((m) => m.lessons);
      const done = allLessons.filter((l) => lessonProgress[l.id]?.completed).length;
      const pct = allLessons.length ? Math.round((done / allLessons.length) * 100) : 0;

      // Find last active lesson title
      let currentLessonTitle = allLessons[0]?.title ?? '';
      if (lastActiveCourse === slug && lastActiveLesson) {
        const found = allLessons.find((l) => l.id === lastActiveLesson);
        if (found) currentLessonTitle = found.title;
      }

      return {
        slug,
        title: catalogCourse.title,
        image: catalogCourse.image,
        level: catalogCourse.level,
        durationHours: catalogCourse.durationHours,
        pct,
        done,
        total: allLessons.length,
        currentLessonTitle,
      };
    })
    .filter(Boolean) as NonNullable<ReturnType<typeof enrolledWithProgress[number]>>[];

  // Sort: last active course first
  const sorted = [...enrolledWithProgress].sort((a, b) =>
    a.slug === lastActiveCourse ? -1 : b.slug === lastActiveCourse ? 1 : 0
  );

  const hero = sorted[0];
  const rest = sorted.slice(1, 4);

  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-text-dark">
            Welcome back, {firstName}!
          </h1>
          <p className="text-text-muted mt-1">
            {enrolledCourses.length === 0
              ? "Start a course to begin your learning journey."
              : `You're enrolled in ${enrolledCourses.length} course${enrolledCourses.length > 1 ? 's' : ''}.`}
          </p>
        </div>
        <StreakCounter showLongest />
      </header>

      {/* Hero: Continue Learning */}
      {hero ? (
        <Link to={`/academy/app/courses/${hero.slug}`} className="block">
          <section className="bg-text-dark rounded-3xl p-6 md:p-8 text-white relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-4 max-w-lg">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  {hero.pct === 0 ? 'Start Learning' : 'Continue Learning'}
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold leading-tight">
                  {hero.title}
                </h2>
                <p className="text-white/70 text-sm md:text-base truncate">{hero.currentLessonTitle}</p>
                <div className="flex items-center gap-4 text-sm font-medium text-white/50">
                  <span className="flex items-center gap-1"><Clock size={16} /> {hero.durationHours}h course</span>
                  <span>•</span>
                  <span>{hero.pct}% complete</span>
                </div>
              </div>
              <button className="flex-shrink-0 w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                <Play size={24} fill="currentColor" className="ml-1" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/10">
              <div className="h-full bg-primary transition-all" style={{ width: `${hero.pct}%` }} />
            </div>
          </section>
        </Link>
      ) : (
        // No enrolled courses CTA
        <section className="bg-gradient-to-br from-text-dark to-gray-800 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-[80px]" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-display font-bold mb-2">Ready to start learning?</h2>
              <p className="text-white/70 text-sm max-w-sm">Browse our courses and enroll in your first course to begin building world-class marketing skills.</p>
            </div>
            <Link to="/academy/courses" className="flex-shrink-0 flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-orange-600 transition-colors">
              Browse Courses <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      )}

      {/* Grid: My Courses & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Active Courses */}
        <section className="md:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-xl text-text-dark">My Courses</h3>
            <Link to="/academy/app/learning" className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
              View All <ChevronRight size={14} />
            </Link>
          </div>

          {rest.length === 0 && !hero && (
            <div className="bg-white rounded-2xl border border-dashed border-gray-200 p-8 text-center">
              <BookOpen size={32} className="text-gray-300 mx-auto mb-3" />
              <p className="text-text-muted text-sm">No courses enrolled yet.</p>
              <Link to="/academy/courses" className="inline-block mt-3 text-sm font-bold text-primary hover:underline">
                Browse Courses
              </Link>
            </div>
          )}

          <div className="grid gap-4">
            {rest.map((course, i) => (
              <Link key={course.slug} to={`/academy/app/courses/${course.slug}`} className="block">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white p-4 rounded-2xl border border-gray-100 flex gap-4 hover:border-primary/30 transition-colors cursor-pointer group"
                >
                  <div className="w-24 h-24 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center min-w-0">
                    <h4 className="font-bold text-text-dark mb-1 truncate">{course.title}</h4>
                    <p className="text-xs text-text-muted mb-3 truncate">{course.currentLessonTitle}</p>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${course.pct}%` }} />
                    </div>
                    <p className="text-[10px] text-text-muted mt-1">{course.done}/{course.total} lessons · {course.pct}%</p>
                  </div>
                  <div className="flex items-center justify-center pr-2">
                    <ChevronRight className="text-gray-300 group-hover:text-primary transition-colors" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        {/* Right sidebar: XP + Certs */}
        <section className="space-y-6">
          <XpProgressBar />

          <div className="bg-white rounded-3xl border border-gray-100 p-6">
            <h3 className="font-bold text-text-dark mb-4">Learning Stats</h3>
            <LearningStats />
          </div>

          <div
            className="bg-gradient-to-br from-primary to-primary-dark p-6 rounded-3xl text-white shadow-lg shadow-primary/20 relative overflow-hidden cursor-pointer"
            onClick={() => navigate('/academy/app/certificates')}
          >
            <Award className="absolute top-4 right-4 opacity-20" size={48} />
            <h3 className="font-display font-bold text-lg mb-1">Certificates</h3>
            <p className="text-white/80 text-sm mb-4">
              Complete courses to earn verified credentials.
            </p>
            <Link to="/academy/app/certificates" className="block w-full py-2 bg-white text-primary font-bold rounded-xl text-sm text-center hover:bg-opacity-90 transition-colors">
              View Certificates
            </Link>
          </div>
        </section>
      </div>

      {/* Badges */}
      <section className="bg-white rounded-3xl border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-bold text-xl text-text-dark">My Badges</h3>
        </div>
        <BadgeGrid max={8} />
      </section>
    </div>
  );
};

export default AcademyDashboard;
