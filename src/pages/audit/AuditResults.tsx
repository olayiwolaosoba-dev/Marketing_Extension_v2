import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Download, Calendar, ArrowRight, Share2, Check, Info, X } from 'lucide-react';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { AuditResult } from '../../data/audit';
import Header from '../../components/Header';
import { AuditPDF } from '../../components/audit/AuditPDF';

// Tooltip helper
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
    'Strategy & Positioning': "Clarity on ICP, positioning, and GTM strategy.",
    'Demand & Pipeline': "Lead gen predictability, outbound motion, and funnel conversion.",
    'Content & Brand System': "Brand consistency, content velocity, and creative quality.",
    'Measurement & Experimentation': "Attribution, KPIs, and data maturity.",
    'Stack, Automation & AI Readiness': "Tech stack integration, CRM health, and AI adoption."
};

const AuditResults: React.FC = () => {
    const navigate = useNavigate();
    const [result, setResult] = useState<AuditResult | null>(null);
    const [emailModalOpen, setEmailModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('lastAuditResult');
        if (saved) {
            setResult(JSON.parse(saved));
        } else {
            navigate('/audit');
        }
    }, [navigate]);

    if (!result) return <div className="min-h-screen bg-bg-light flex items-center justify-center">Loading...</div>;

    const handleDownload = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsGenerating(true);

        try {
            // Generate PDF Blob
            const blob = await pdf(<AuditPDF result={result} />).toBlob();
            saveAs(blob, `Marketing_Extension_Audit_${new Date().toISOString().split('T')[0]}.pdf`);

            setIsSubmitted(true);
        } catch (error) {
            console.error("PDF Generation failed", error);
            alert("Failed to generate PDF. Please try again.");
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="min-h-screen bg-bg-light pb-20">
            <Header currentPage="audit-results" />

            <div className="container mx-auto px-6 max-w-5xl pt-32">
                <div className="flex justify-between items-start">
                    {/* Back/Retake */}
                    <Link to="/audit" onClick={() => localStorage.removeItem('lastAuditResult')} className="text-text-muted hover:text-primary text-sm font-bold flex items-center gap-1 mb-6">
                        <ArrowRight className="rotate-180" size={16} /> Retake Audit
                    </Link>
                </div>

                <div className="text-center mb-16">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Assessment Complete</span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                        Your Marketing Score: <span className="text-primary">{result.totalScore}/100</span>
                    </h1>
                    <div className="inline-block bg-white border border-gray-200 px-6 py-2 rounded-full text-text-dark font-bold text-lg shadow-sm">
                        Maturity Level: {result.maturityLabel}
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left: Subscores & Priorities */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Subscores */}
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                            <h3 className="text-2xl font-display font-bold mb-8">Performance Breakdown</h3>
                            <div className="space-y-6">
                                {Object.entries(result.subScores).map(([cat, score]) => (
                                    <div key={cat}>
                                        <div className="flex justify-between mb-2 items-center">
                                            <div className="flex items-center">
                                                <span className="font-bold text-text-dark">{cat}</span>
                                                <Tooltip text={PILLAR_TOOLTIPS[cat] || ""} />
                                            </div>
                                            <span className="font-bold text-primary">{score}/20</span>
                                        </div>
                                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                            <motion.div
                                                className={`h-full rounded-full ${score < 10 ? 'bg-red-400' : score < 15 ? 'bg-yellow-400' : 'bg-green-500'}`}
                                                initial={{ width: 0 }}
                                                animate={{ width: `${(score / 20) * 100}%` }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Priorities */}
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
                    </div>

                    {/* Right: Recommendations & CTA */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-primary/5 border border-primary/20 p-8 rounded-3xl">
                            <h4 className="font-bold text-lg mb-4 text-text-dark">Recommended Focus</h4>
                            <div className="space-y-4 mb-8">
                                {result.recommendedServices.map(s => (
                                    <Link key={s.name} to={s.link} className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between group cursor-pointer hover:shadow-md transition-all">
                                        <span className="font-bold text-text-dark">{s.name}</span>
                                        <ArrowRight size={16} className="text-primary" />
                                    </Link>
                                ))}
                            </div>
                            <p className="text-sm text-text-muted mb-8 leading-relaxed">
                                Based on your score, these are the high-leverage areas where we could help you unlock the most growth immediately.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <button
                                onClick={() => setEmailModalOpen(true)}
                                className="w-full bg-text-dark text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors"
                            >
                                <Download size={20} />
                                Download Full Report
                            </button>
                            <Link
                                to="/strategy-call"
                                className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                            >
                                <Calendar size={20} />
                                Book Free Audit Call
                            </Link>
                        </div>

                        <p className="text-xs text-text-muted text-center mt-4">
                            Indicative score based on your responses.
                        </p>
                    </div>
                </div>
            </div>

            {/* Email Gating Modal */}
            <AnimatePresence>
                {emailModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setEmailModalOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white rounded-3xl p-8 md:p-12 w-full max-w-lg relative z-10 shadow-2xl"
                        >
                            <button
                                onClick={() => setEmailModalOpen(false)}
                                className="absolute top-6 right-6 text-gray-400 hover:text-text-dark"
                            >
                                <X size={24} />
                            </button>

                            {!isSubmitted ? (
                                <>
                                    <h3 className="text-2xl font-display font-bold mb-2">Unlock your full report</h3>
                                    <p className="text-text-muted mb-8">
                                        Get a detailed PDF breakdown of your score, benchmarks against industry peers, and a step-by-step roadmap.
                                    </p>
                                    <form onSubmit={handleDownload} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-bold text-text-dark mb-2">Work Email</label>
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                                placeholder="brian@airbnb.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-text-dark mb-2">Company Name (Optional)</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                                placeholder="Airbnb"
                                            />
                                        </div>
                                        <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-colors flex justify-center items-center">
                                            {isGenerating ? "Generating Report..." : "Send me the PDF"}
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Check size={32} />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold mb-2">Report Sent!</h3>
                                    <p className="text-text-muted mb-6">
                                        We've also initiated a download for you.
                                    </p>
                                    <button
                                        onClick={() => window.location.reload()}
                                        className="text-primary font-bold hover:underline"
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AuditResults;
