import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Shield, Lock, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { academyData } from '../../../lib/academyData';
import { getCourseBySlug } from '../../../lib/academyCourseData';
import { useAcademyProgress } from '../../../stores/academyProgress';
import { CertificateCard, CertificateView, EmptyCertificates } from '../../../components/Academy/CertificateGenerator';
import type { Certificate } from '../../../stores/academyProgress';

const CertificatesPage: React.FC = () => {
  const { certificates, enrolledCourses, lessonProgress } = useAcademyProgress();
  const [viewing, setViewing] = useState<Certificate | null>(null);

  // Build "in progress" cert tracks from enrolled courses
  const enrolledSlugs = new Set(enrolledCourses);
  const earnedCourseSlugs = new Set(certificates.map((c) => c.courseSlug));

  const inProgressCerts = academyData.certifications
    .map((cert) => {
      const req = cert.requirements;
      const met = req.filter((_, ri) => {
        // Basic heuristic: check if any enrolled course for this cert track is in progress
        return ri < Math.floor(enrolledSlugs.size / 2);
      }).length;
      if (met === 0) return null;
      const pct = Math.round((met / req.length) * 100);
      return { ...cert, requirementsMet: met, totalRequirements: req.length, progress: pct };
    })
    .filter(Boolean)
    .filter((c) => c !== null) as (typeof academyData.certifications[0] & { requirementsMet: number; totalRequirements: number; progress: number })[];

  const availableCerts = academyData.certifications.filter(
    (c) => !inProgressCerts.some((ip) => ip.slug === c.slug)
  );

  // Compute real course progress for "in progress" display
  const getCourseProgress = (slug: string): number => {
    const courseData = getCourseBySlug(slug);
    if (!courseData) return 0;
    const all = courseData.modules.flatMap((m) => m.lessons);
    const done = all.filter((l) => lessonProgress[l.id]?.completed).length;
    return all.length ? Math.round((done / all.length) * 100) : 0;
  };

  return (
    <>
      {/* Certificate lightbox */}
      <AnimatePresence>
        {viewing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-start justify-center p-4 pt-10 overflow-y-auto"
            onClick={() => setViewing(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-6 w-full max-w-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setViewing(null)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10">
                <X size={18} className="text-gray-500" />
              </button>
              <h2 className="font-display font-bold text-xl text-text-dark mb-5">Your Certificate</h2>
              <CertificateView certificate={viewing} onClose={() => setViewing(null)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-display font-bold text-text-dark">Certificates & Credentials</h1>
          <p className="text-text-muted mt-1">Earn, verify, and share your professional credentials.</p>
        </div>

        {/* Earned Certificates */}
        <section>
          <h2 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
            <Award size={18} className="text-primary" /> Earned ({certificates.length})
          </h2>
          {certificates.length === 0 ? (
            <EmptyCertificates />
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <CertificateCard certificate={cert} onView={setViewing} />
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* In Progress Certs */}
        {enrolledCourses.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
              <Shield size={18} className="text-blue-500" /> Certification Tracks In Progress
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {academyData.certifications.slice(0, 2).map((cert, i) => {
                // Show real progress for any enrolled course in this cert's track
                const relevantProgress = enrolledCourses
                  .map((s) => getCourseProgress(s))
                  .filter((p) => p > 0);
                const avgProgress = relevantProgress.length
                  ? Math.round(relevantProgress.reduce((a, b) => a + b, 0) / relevantProgress.length)
                  : 0;

                return (
                  <motion.div
                    key={cert.slug}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{cert.level}</span>
                        <h3 className="text-lg font-bold text-text-dark mt-1">{cert.title}</h3>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Shield size={20} className="text-blue-500" />
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skillsCovered.map((s) => (
                        <span key={s} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded">{s}</span>
                      ))}
                    </div>
                    <div className="space-y-2 mb-4">
                      {cert.requirements.map((req, ri) => (
                        <div key={ri} className="flex items-center gap-2 text-sm">
                          {ri < enrolledCourses.length ? (
                            <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-green-500" />
                            </div>
                          ) : (
                            <Lock size={14} className="text-gray-300 flex-shrink-0" />
                          )}
                          <span className={ri < enrolledCourses.length ? 'text-text-muted' : 'text-text-dark'}>{req}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-text-muted">{Math.min(enrolledCourses.length, cert.requirements.length)}/{cert.requirements.length} requirements</span>
                      <span className="font-bold text-text-dark">{avgProgress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full">
                      <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${avgProgress}%` }} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        )}

        {/* Available Certifications */}
        <section>
          <h2 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
            <Award size={18} className="text-gray-400" /> Available Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {availableCerts.map((cert, i) => (
              <motion.div
                key={cert.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 transition-all"
              >
                <span className="text-xs font-bold text-text-muted uppercase tracking-wider">{cert.level}</span>
                <h3 className="text-lg font-bold text-text-dark mt-1 mb-3">{cert.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skillsCovered.map((s) => (
                    <span key={s} className="px-2 py-1 bg-gray-50 text-text-muted text-xs font-bold rounded">{s}</span>
                  ))}
                </div>
                <div className="space-y-2 mb-6">
                  {cert.requirements.map((req, ri) => (
                    <div key={ri} className="flex items-center gap-2 text-sm text-text-muted">
                      <Lock size={14} className="text-gray-300 flex-shrink-0" />
                      {req}
                    </div>
                  ))}
                </div>
                <Link
                  to="/academy/tracks"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-text-dark text-white rounded-xl font-bold text-sm hover:bg-black transition-colors"
                >
                  Start Path <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default CertificatesPage;
