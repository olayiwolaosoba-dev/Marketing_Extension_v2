import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle, Lock, Download, Share2, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { academyData } from '../../../lib/academyData';

const earnedCerts = [
    {
        id: 'cert-001',
        title: 'Certified Digital Marketing Specialist',
        earnedDate: 'February 28, 2026',
        verificationId: 'MEXT-DMS-2026-001',
        level: 'Associate',
        skills: ['SEO', 'SEM', 'Social Media', 'Analytics'],
    },
];

const inProgressCerts = [
    {
        ...academyData.certifications[1],
        requirementsMet: 1,
        totalRequirements: 2,
        progress: 65,
    },
];

const availableCerts = academyData.certifications.filter(
    (c) => !earnedCerts.some((e) => e.title === c.title) && !inProgressCerts.some((ip) => ip.slug === c.slug)
);

const CertificatesPage: React.FC = () => {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-display font-bold text-text-dark">Certificates & Credentials</h1>
                <p className="text-text-muted mt-1">Earn, verify, and share your professional credentials.</p>
            </div>

            {/* Earned Certificates */}
            {earnedCerts.length > 0 && (
                <section>
                    <h2 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                        <Award size={18} className="text-primary" /> Earned
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {earnedCerts.map((cert, i) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
                            >
                                {/* Certificate Visual Header */}
                                <div className="bg-gradient-to-br from-text-dark to-gray-800 p-6 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px]" />
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Shield size={20} className="text-primary" />
                                            <span className="text-xs font-bold text-white/50 uppercase tracking-wider">Verified Credential</span>
                                        </div>
                                        <h3 className="text-xl font-display font-bold text-white mb-2">{cert.title}</h3>
                                        <p className="text-white/40 text-sm">Earned {cert.earnedDate}</p>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {cert.skills.map((s) => (
                                                <span key={s} className="px-2 py-1 bg-white/10 border border-white/10 rounded text-xs font-bold text-white/70">{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* Actions */}
                                <div className="p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle size={16} className="text-green-500" />
                                        <span className="text-xs font-bold text-text-muted">ID: {cert.verificationId}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 rounded-lg hover:bg-gray-50 text-text-muted hover:text-primary transition-colors" title="Download PDF">
                                            <Download size={16} />
                                        </button>
                                        <button className="p-2 rounded-lg hover:bg-gray-50 text-text-muted hover:text-primary transition-colors" title="Share on LinkedIn">
                                            <Share2 size={16} />
                                        </button>
                                        <Link to="/academy/verify" className="p-2 rounded-lg hover:bg-gray-50 text-text-muted hover:text-primary transition-colors" title="Verify">
                                            <ExternalLink size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* In Progress */}
            {inProgressCerts.length > 0 && (
                <section>
                    <h2 className="text-lg font-bold text-text-dark mb-4 flex items-center gap-2">
                        <Shield size={18} className="text-blue-500" /> In Progress
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {inProgressCerts.map((cert, i) => (
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

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {cert.skillsCovered.map((s) => (
                                        <span key={s} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded">{s}</span>
                                    ))}
                                </div>

                                {/* Requirements Checklist */}
                                <div className="space-y-2 mb-4">
                                    {cert.requirements.map((req, ri) => (
                                        <div key={ri} className="flex items-center gap-2 text-sm">
                                            {ri < cert.requirementsMet ? (
                                                <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                                            ) : (
                                                <Lock size={16} className="text-gray-300 flex-shrink-0" />
                                            )}
                                            <span className={ri < cert.requirementsMet ? 'text-text-muted line-through' : 'text-text-dark'}>{req}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Progress Bar */}
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
    );
};

export default CertificatesPage;
