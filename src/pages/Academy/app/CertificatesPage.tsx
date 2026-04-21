import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Shield, Lock, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { academyData } from '../../../lib/academyData';
import { useAcademyProgress } from '../../../stores/academyProgress';
import { CertificateCard, CertificateView, EmptyCertificates } from '../../../components/Academy/CertificateGenerator';
import type { Certificate } from '../../../stores/academyProgress';

const CertificatesPage: React.FC = () => {
  const { certificates, enrolledCourses } = useAcademyProgress();
  const [viewing, setViewing] = useState<Certificate | null>(null);

  // ── Build "in progress" vs "available" certifications ──
  // A certification is "in progress" when the student has enrolled in at least one
  // course AND hasn't earned the cert yet. "Available" = nothing started yet.
  const enrolledSlugs = new Set(enrolledCourses);
  const earnedCertCourses = new Set(certificates.map((c) => c.courseSlug));
  const hasAnyEnrollment = enrolledSlugs.size > 0;

  const inProgressCerts = hasAnyEnrollment
    ? academyData.certifications.map((cert) => {
        // Count how many of the required courses the student has started / completed
        const total = cert.requirements.length;
        const enrolledCount = Math.min(enrolledCourses.length, total);
        const completedCount = Math.min(earnedCertCourses.size, total);
        const progress = total ? Math.round((completedCount / total) * 100) : 0;
        return {
          ...cert,
          requirementsMet: completedCount,
          enrolledCount,
          totalRequirements: total,
          progress,
        };
      })
    : [];

  const availableCerts = hasAnyEnrollment ? [] : academyData.certifications;

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
        {inProgressCerts.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
              <Shield size={18} className="text-blue-500" /> Certification Tracks In Progress
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {inProgressCerts.slice(0, 2).map((cert, i) => (
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
                    {cert.requirements.map((req, ri) => {
                      const isMet = ri < cert.requirementsMet;
                      const isInProgress = ri >= cert.requirementsMet && ri < cert.enrolledCount;
                      return (
                        <div key={ri} className="flex items-center gap-2 text-sm">
                          {isMet ? (
                            <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-green-500" />
                            </div>
                          ) : isInProgress ? (
                            <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            </div>
                          ) : (
                            <Lock size={14} className="text-gray-300 flex-shrink-0" />
                          )}
                          <span className={isMet ? 'text-text-muted line-through' : isInProgress ? 'text-blue-700 font-medium' : 'text-text-dark'}>{req}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-text-muted">{cert.requirementsMet}/{cert.totalRequirements} requirements</span>
                    <span className="font-bold text-text-dark">{cert.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full">
                    <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${cert.progress}%` }} />
                  </div>
                </motion.div>
              ))}
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
