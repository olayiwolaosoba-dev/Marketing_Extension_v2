import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
    Download, Calendar, ArrowRight, Share2, Check, Info, X, Copy,
    Loader2, Clock,
} from 'lucide-react';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import {
    AuditResult, SubScoreCategory,
    getDimensionInsight, DIMENSION_ACTIONS,
} from '../../data/audit';
import Header from '../../components/Header';
import { AuditPDF } from '../../components/audit/AuditPDF';

/* ═══════════════════════════════════════════
   Helpers
   ═══════════════════════════════════════════ */

const BENCHMARK = 11; // Industry average per dimension (55%)

const Tooltip = ({ text }: { text: string }) => (
    <div className="group relative ml-2 inline-flex items-center">
        <Info size={14} className="text-gray-400 hover:text-primary cursor-help" />
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none">
            {text}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-900" />
        </div>
    </div>
);

const PILLAR_TOOLTIPS: Record<string, string> = {
    'Strategy & Positioning': 'Clarity on ICP, positioning, and GTM strategy.',
    'Demand & Pipeline': 'Lead gen predictability, outbound motion, and funnel conversion.',
    'Content & Brand System': 'Brand consistency, content velocity, and creative quality.',
    'Measurement & Experimentation': 'Attribution, KPIs, and data maturity.',
    'Stack, Automation & AI Readiness': 'Tech stack integration, CRM health, and AI adoption.',
};

/* ═══════════════════════════════════════════
   Component
   ═══════════════════════════════════════════ */

const AuditResults: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    /* ── Core state ── */
    const [result, setResult] = useState<AuditResult | null>(null);

    /* ── Email gate state (Improvement 1) ── */
    const [emailModalOpen, setEmailModalOpen] = useState(false);
    const [formName, setFormName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formCompany, setFormCompany] = useState('');
    const [formConsent, setFormConsent] = useState(false);
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [formLoading, setFormLoading] = useState(false);
    const [leadCaptured, setLeadCaptured] = useState(false);
    const [capturedEmail, setCapturedEmail] = useState('');

    /* ── Animated score counter (Improvement 10) ── */
    const [displayScore, setDisplayScore] = useState(0);

    /* ── Share toast (Improvement 6) ── */
    const [toastVisible, setToastVisible] = useState(false);

    /* ── Modal focus trap ref ── */
    const modalRef = useRef<HTMLDivElement>(null);

    /* ── Load result from URL param or localStorage ── */
    useEffect(() => {
        // Check URL param first (Improvement 6)
        const encoded = searchParams.get('r');
        if (encoded) {
            try {
                const decoded = JSON.parse(atob(encoded));
                setResult(decoded);
                return;
            } catch {
                // fall through to localStorage
            }
        }

        const saved = localStorage.getItem('lastAuditResult');
        if (saved) {
            setResult(JSON.parse(saved));
        } else {
            navigate('/audit');
        }
    }, [navigate, searchParams]);

    /* ── Encode result into URL (Improvement 6) ── */
    useEffect(() => {
        if (!result) return;
        try {
            const encoded = btoa(JSON.stringify(result));
            const newUrl = `/audit/results?r=${encoded}`;
            window.history.replaceState(null, '', newUrl);
        } catch {
            // silent fail
        }
    }, [result]);

    /* ── Animate score counter (Improvement 10) ── */
    useEffect(() => {
        if (!result) return;
        const target = result.totalScore;
        const duration = 1500;
        const startTime = performance.now();

        const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayScore(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [result]);

    /* ── Check if lead was already captured ── */
    useEffect(() => {
        const captured = localStorage.getItem('auditLeadCaptured');
        if (captured) {
            setLeadCaptured(true);
            setCapturedEmail(localStorage.getItem('auditLeadEmail') || '');
        }
    }, []);

    /* ── Modal ESC close + focus trap ── */
    useEffect(() => {
        if (!emailModalOpen) return;

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setEmailModalOpen(false);
        };

        const handleTab = (e: KeyboardEvent) => {
            if (e.key !== 'Tab' || !modalRef.current) return;
            const focusable = modalRef.current.querySelectorAll<HTMLElement>(
                'input, button, textarea, select, a[href], [tabindex]:not([tabindex="-1"])'
            );
            if (focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };

        document.addEventListener('keydown', handleEsc);
        document.addEventListener('keydown', handleTab);
        // Focus first input
        setTimeout(() => {
            const firstInput = modalRef.current?.querySelector<HTMLElement>('input');
            firstInput?.focus();
        }, 100);

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.removeEventListener('keydown', handleTab);
        };
    }, [emailModalOpen]);

    /* ── Email gate submission (Improvement 1) ── */
    const handleEmailSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        const errors: Record<string, string> = {};
        if (!formName.trim()) errors.name = 'Name is required';
        if (!formEmail.trim()) errors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formEmail)) errors.email = 'Enter a valid email';
        if (!formCompany.trim()) errors.company = 'Company name is required';
        if (!formConsent) errors.consent = 'Please agree to continue';

        if (Object.keys(errors).length) {
            setFormErrors(errors);
            return;
        }
        setFormErrors({});
        setFormLoading(true);

        try {
            // TODO: Replace with real /api/audit-report endpoint
            await new Promise(resolve => setTimeout(resolve, 1200));

            // Persist lead capture
            localStorage.setItem('auditLeadCaptured', 'true');
            localStorage.setItem('auditLeadEmail', formEmail);
            setLeadCaptured(true);
            setCapturedEmail(formEmail);

            // Generate + download PDF
            if (result) {
                const blob = await pdf(<AuditPDF result={result} />).toBlob();
                saveAs(blob, `Marketing-Extension-Growth-Report.pdf`);
            }

            setEmailModalOpen(false);
        } catch {
            setFormErrors({ submit: 'Something went wrong. Please try again.' });
        } finally {
            setFormLoading(false);
        }
    }, [formName, formEmail, formCompany, formConsent, result]);

    /* ── Share handler (Improvement 6) ── */
    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setToastVisible(true);
            setTimeout(() => setToastVisible(false), 3000);
        } catch {
            // fallback
        }
    };

    /* ── Loading guard ── */
    if (!result) return <div className="min-h-screen bg-bg-light flex items-center justify-center">Loading...</div>;

    /* ── Derived values ── */
    const dateStr = new Date().toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
    const industry = result.qualificationData?.industry;
    const weakDimensions = (Object.entries(result.subScores) as [SubScoreCategory, number][])
        .filter(([, score]) => score < 12)
        .sort((a, b) => a[1] - b[1]);

    // Lowest scoring dim + biggest gap for stat pills
    const sortedDims = (Object.entries(result.subScores) as [SubScoreCategory, number][])
        .sort((a, b) => a[1] - b[1]);
    const lowestDim = sortedDims[0];
    const biggestGapVsAvg = lowestDim[1] - BENCHMARK;

    return (
        <div className="min-h-screen bg-bg-light pb-20">
            <Header currentPage="audit-results" />

            {/* ═══════ HEADER SECTION (Improvement 10) ═══════ */}
            <div className="bg-bg-dark pt-32 pb-16">
                <div className="container mx-auto px-6 max-w-5xl text-center">
                    <div className="flex justify-between items-start mb-8">
                        <Link
                            to="/audit"
                            onClick={() => localStorage.removeItem('lastAuditResult')}
                            className="text-white/40 hover:text-white text-sm font-bold flex items-center gap-1"
                        >
                            <ArrowRight className="rotate-180" size={16} /> Retake Audit
                        </Link>
                    </div>

                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">
                        Assessment Complete {industry ? `\u2014 ${industry} ` : ''}\u2014 {dateStr}
                    </p>

                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">
                        Your Growth Maturity Score:{' '}
                        <span className="text-primary">{displayScore}/100</span>
                    </h1>

                    <div className="mb-6">
                        <span className="text-primary text-3xl md:text-4xl font-display font-bold tracking-wider">
                            {result.maturityLabel}
                        </span>
                    </div>
                    <p className="text-white/60 italic text-lg mb-8 max-w-xl mx-auto">
                        {result.maturityDescriptor}
                    </p>

                    {/* Stat pills */}
                    <div className="flex flex-wrap justify-center gap-3">
                        <span className="bg-white/10 border border-white/10 text-white text-sm font-bold px-5 py-2 rounded-full">
                            Top Priority: <span className="text-primary">{result.topPriorities[0]}</span>
                        </span>
                        <span className="bg-white/10 border border-white/10 text-white text-sm font-bold px-5 py-2 rounded-full">
                            Biggest Gap: <span className="text-primary">{lowestDim[1]}/20</span>
                        </span>
                        <span className="bg-white/10 border border-white/10 text-white text-sm font-bold px-5 py-2 rounded-full">
                            vs Avg: <span className="text-primary">{biggestGapVsAvg > 0 ? '+' : ''}{biggestGapVsAvg} pts</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* ═══════ MAIN GRID ═══════ */}
            <div className="container mx-auto px-6 max-w-5xl -mt-0 pt-12">
                <div className="grid lg:grid-cols-12 gap-12">

                    {/* ─── Left Column (8 cols) ─── */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Performance Breakdown (Improvement 3 + 5) */}
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                            <h3 className="text-2xl font-display font-bold mb-8">Performance Breakdown</h3>
                            <div className="space-y-8">
                                {(Object.entries(result.subScores) as [SubScoreCategory, number][]).map(([cat, score]) => (
                                    <div key={cat}>
                                        <div className="flex justify-between mb-2 items-center">
                                            <div className="flex items-center">
                                                <span className="font-bold text-text-dark">{cat}</span>
                                                <Tooltip text={PILLAR_TOOLTIPS[cat] || ''} />
                                            </div>
                                            <span className="font-bold text-primary">{score}/20</span>
                                        </div>

                                        {/* Bar with benchmark tick (Improvement 5) */}
                                        <div className="relative h-3 bg-gray-100 rounded-full overflow-visible">
                                            <motion.div
                                                className={`h-full rounded-full ${score < 10 ? 'bg-red-400' : score < 15 ? 'bg-yellow-400' : 'bg-green-500'}`}
                                                initial={{ width: 0 }}
                                                animate={{ width: `${(score / 20) * 100}%` }}
                                                transition={{ duration: 1, ease: 'easeOut' }}
                                            />

                                            {/* Benchmark tick */}
                                            <div
                                                className="absolute top-1/2 -translate-y-1/2"
                                                style={{ left: `${(BENCHMARK / 20) * 100}%` }}
                                            >
                                                <div className={`w-0.5 h-4 ${score >= BENCHMARK ? 'bg-white' : 'bg-primary'}`} />
                                                <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 whitespace-nowrap">
                                                    Avg
                                                </span>
                                            </div>
                                        </div>

                                        {/* Dimension insight (Improvement 3) */}
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1.3, duration: 0.3 }}
                                            className="text-sm italic text-gray-500 mt-2 leading-relaxed"
                                        >
                                            {getDimensionInsight(cat, score)}
                                        </motion.p>
                                    </div>
                                ))}
                            </div>

                            {/* Legend (Improvement 5) */}
                            <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-400">
                                <span className="inline-block w-6 h-0.5 bg-primary mr-1 align-middle" /> Your score &nbsp;&nbsp;| &nbsp;&nbsp;<span className="font-bold">Avg</span> = industry average for B2B companies at growth stage
                            </div>
                        </div>

                        {/* Top 3 Priorities */}
                        <div className="bg-bg-dark text-white p-8 rounded-3xl shadow-xl">
                            <h3 className="text-2xl font-display font-bold mb-8">Top 3 Priorities</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {result.topPriorities.map((p, i) => (
                                    <div key={i} className="bg-white/10 p-6 rounded-2xl border border-white/10">
                                        <div className="text-primary font-bold text-4xl mb-3">0{i + 1}</div>
                                        <p className="font-bold leading-tight">{p}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Growth Roadmap (Improvement 7) */}
                        {weakDimensions.length > 0 && (
                            <div>
                                <h3 className="text-2xl font-display font-bold mb-6">Your Growth Roadmap</h3>
                                <div className="space-y-4">
                                    {weakDimensions.map(([dim, score]) => {
                                        const action = DIMENSION_ACTIONS[dim];
                                        return (
                                            <div
                                                key={dim}
                                                className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center overflow-hidden"
                                            >
                                                {/* Orange accent bar */}
                                                <div className="w-full md:w-1 h-1 md:h-auto md:self-stretch bg-primary flex-shrink-0" />

                                                <div className="flex-1 p-6 flex flex-col md:flex-row md:items-center gap-4">
                                                    {/* Left: dim name + score */}
                                                    <div className="md:w-48 flex-shrink-0">
                                                        <p className="font-bold text-text-dark">{dim}</p>
                                                        <p className="text-primary font-bold text-sm">{score}/20</p>
                                                    </div>

                                                    {/* Middle: action text */}
                                                    <p className="flex-1 text-sm text-gray-600 leading-relaxed">
                                                        {action.action}
                                                    </p>

                                                    {/* Right: time + CTA */}
                                                    <div className="flex items-center gap-3 flex-shrink-0">
                                                        <span className="flex items-center gap-1 text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                                                            <Clock size={12} /> {action.time}
                                                        </span>
                                                        <Link
                                                            to={action.ctaLink}
                                                            className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors whitespace-nowrap flex items-center gap-1"
                                                        >
                                                            {action.ctaLabel} <ArrowRight size={14} />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ─── Right Column (4 cols) ─── */}
                    <div className="lg:col-span-4 space-y-8">

                        {/* Dynamic Recommendations (Improvement 9) */}
                        <div className="bg-primary/5 border border-primary/20 p-8 rounded-3xl">
                            <h4 className="font-bold text-lg mb-4 text-text-dark">Recommended Focus</h4>
                            <div className="space-y-4 mb-6">
                                {result.recommendedServices.map(s => (
                                    <Link
                                        key={s.name}
                                        to={s.link}
                                        className="bg-white p-4 rounded-xl shadow-sm flex flex-col gap-1 group cursor-pointer hover:shadow-md transition-all"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold text-text-dark">{s.name}</span>
                                            <ArrowRight size={16} className="text-primary" />
                                        </div>
                                        {s.rationale && (
                                            <span className="text-xs text-gray-500">{s.rationale}</span>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-4">
                            {/* Download Full Report (Improvement 1) */}
                            {leadCaptured ? (
                                <div className="w-full bg-green-50 border border-green-200 text-green-700 py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                                    <Check size={20} />
                                    Report sent to {capturedEmail}
                                </div>
                            ) : (
                                <button
                                    onClick={() => setEmailModalOpen(true)}
                                    className="w-full bg-text-dark text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors"
                                >
                                    <Download size={20} />
                                    Download Full Report
                                </button>
                            )}

                            <Link
                                to="/strategy-call"
                                className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                            >
                                <Calendar size={20} />
                                Book Free Audit Call
                            </Link>

                            {/* Share Results (Improvement 6) */}
                            <button
                                onClick={handleShare}
                                className="w-full bg-white border border-gray-200 text-text-dark py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                            >
                                <Share2 size={20} />
                                Share Results
                            </button>
                        </div>

                        {/* Framework footnote (Improvement 4) */}
                        <p className="text-xs text-text-muted text-center mt-4 leading-relaxed">
                            Based on the Marketing Extension Growth Maturity Framework&trade; &mdash; validated across 50+ B2B companies in fintech, RegTech, and B2B SaaS.
                        </p>
                    </div>
                </div>
            </div>

            {/* ═══════ EMAIL GATE MODAL (Improvement 1) ═══════ */}
            <AnimatePresence>
                {emailModalOpen && (
                    <div
                        className="fixed inset-0 flex items-center justify-center px-4"
                        style={{ zIndex: 9999 }}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setEmailModalOpen(false)}
                        />
                        <motion.div
                            ref={modalRef}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="email-gate-heading"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white w-full max-w-[480px] relative z-10 shadow-2xl"
                            style={{ borderRadius: 48, padding: '48px' }}
                        >
                            {/* Close */}
                            <button
                                onClick={() => setEmailModalOpen(false)}
                                aria-label="Close modal"
                                className="absolute top-6 right-6 text-gray-400 hover:text-text-dark transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <p className="text-primary font-bold uppercase tracking-widest text-xs mb-3">
                                Your Full Report Is Ready
                            </p>
                            <h2 id="email-gate-heading" className="text-2xl font-display font-bold mb-2">
                                Get your personalised growth report
                            </h2>
                            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                                We'll send your detailed breakdown, priority action plan, and benchmark comparisons to your inbox.
                            </p>

                            <form onSubmit={handleEmailSubmit} className="space-y-4" noValidate>
                                {/* Full Name */}
                                <div>
                                    <input
                                        type="text"
                                        required
                                        value={formName}
                                        onChange={e => { setFormName(e.target.value); setFormErrors(p => ({ ...p, name: '' })); }}
                                        placeholder="Your full name"
                                        className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-1 ${
                                            formErrors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-primary focus:ring-primary'
                                        }`}
                                    />
                                    {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                                </div>

                                {/* Work Email */}
                                <div>
                                    <input
                                        type="email"
                                        required
                                        value={formEmail}
                                        onChange={e => { setFormEmail(e.target.value); setFormErrors(p => ({ ...p, email: '' })); }}
                                        placeholder="you@company.com"
                                        className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-1 ${
                                            formErrors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-primary focus:ring-primary'
                                        }`}
                                    />
                                    {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                                </div>

                                {/* Company Name */}
                                <div>
                                    <input
                                        type="text"
                                        required
                                        value={formCompany}
                                        onChange={e => { setFormCompany(e.target.value); setFormErrors(p => ({ ...p, company: '' })); }}
                                        placeholder="Company name"
                                        className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-1 ${
                                            formErrors.company ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-primary focus:ring-primary'
                                        }`}
                                    />
                                    {formErrors.company && <p className="text-red-500 text-xs mt-1">{formErrors.company}</p>}
                                </div>

                                {/* Consent */}
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={formConsent}
                                        onChange={e => { setFormConsent(e.target.checked); setFormErrors(p => ({ ...p, consent: '' })); }}
                                        className="mt-1 accent-primary w-4 h-4 flex-shrink-0"
                                    />
                                    <span className={`text-sm leading-relaxed ${formErrors.consent ? 'text-red-500' : 'text-gray-500'}`}>
                                        I agree to receive marketing communications from Marketing Extension
                                    </span>
                                </label>
                                {formErrors.consent && <p className="text-red-500 text-xs">{formErrors.consent}</p>}

                                {formErrors.submit && (
                                    <p className="text-red-500 text-sm text-center">{formErrors.submit}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={formLoading}
                                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-colors flex justify-center items-center gap-2 disabled:opacity-60"
                                >
                                    {formLoading ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" /> Sending...
                                        </>
                                    ) : (
                                        'Send My Report \u2192'
                                    )}
                                </button>

                                <p className="text-xs text-gray-400 text-center leading-relaxed">
                                    No spam. Unsubscribe anytime. We typically respond within 1 business day.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* ═══════ SHARE TOAST (Improvement 6) ═══════ */}
            <AnimatePresence>
                {toastVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed bottom-6 right-6 bg-gray-900 text-white px-6 py-4 rounded-lg shadow-xl border-l-4 border-primary flex items-center gap-3"
                        style={{ zIndex: 10000 }}
                    >
                        <Copy size={18} className="text-primary" />
                        <div>
                            <p className="font-bold text-sm">Link copied!</p>
                            <p className="text-white/60 text-xs">Share your score with your team.</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AuditResults;
