import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Share2, ExternalLink, Award, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Certificate } from '../../stores/academyProgress';

// ── CertificateView — full printable certificate ───────────────────────────

interface CertificateViewProps {
  certificate: Certificate;
  onClose?: () => void;
}

export const CertificateView: React.FC<CertificateViewProps> = ({ certificate, onClose }) => {
  const certRef = useRef<HTMLDivElement>(null);

  const earnedDate = new Date(certificate.earnedAt).toLocaleDateString('en-NG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow || !certRef.current) return;
    const html = certRef.current.outerHTML;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Certificate — ${certificate.courseTitle}</title>
          <meta charset="utf-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Albert+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { background: white; font-family: 'Albert Sans', sans-serif; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            @page { size: A4 landscape; margin: 0; }
            .cert-container { width: 297mm; height: 210mm; }
          </style>
        </head>
        <body>${html}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => { printWindow.print(); printWindow.close(); }, 500);
  };

  const handleLinkedIn = () => {
    const text = encodeURIComponent(
      `I just earned the "${certificate.courseTitle}" certificate from MExt Academy! Verification ID: ${certificate.id}`
    );
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin + '/academy/verify?id=' + certificate.id)}&summary=${text}`, '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Printable certificate */}
      <div
        ref={certRef}
        className="cert-container w-full aspect-[297/210] bg-white border border-gray-200 rounded-2xl overflow-hidden relative shadow-2xl"
        style={{ fontFamily: "'Albert Sans', sans-serif" }}
      >
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-2/5 h-full bg-gradient-to-r from-[#05060A] to-[#1a1c24]" />
          <div className="absolute top-1/2 left-[38%] -translate-y-1/2 w-32 h-32 bg-[#FF6B3D]/30 rounded-full blur-[60px]" />
        </div>

        {/* Left panel */}
        <div className="absolute left-0 top-0 w-2/5 h-full flex flex-col items-center justify-center p-8 z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#FF6B3D]/20 mb-4">
              <Award size={28} className="text-[#FF6B3D]" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-2">MExt Academy</p>
            <p className="text-white/20 text-[10px] leading-relaxed max-w-[160px] mx-auto">
              Empowering African marketing professionals
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 w-full text-center">
            <p className="text-[9px] text-white/30 uppercase tracking-widest mb-1">Certificate ID</p>
            <p className="text-xs font-mono text-white/50">{certificate.id}</p>
          </div>
        </div>

        {/* Right panel */}
        <div className="absolute right-0 top-0 w-3/5 h-full flex flex-col justify-center px-10 z-10">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#FF6B3D] mb-2">Certificate of Completion</p>
            <p className="text-gray-400 text-sm mb-4">This certifies that</p>
            <h2
              className="text-4xl font-bold text-[#05060A] mb-1 leading-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              {certificate.studentName}
            </h2>
            <p className="text-gray-400 text-sm mb-6">has successfully completed</p>
            <h3
              className="text-2xl font-bold text-[#05060A] leading-snug mb-6"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              {certificate.courseTitle}
            </h3>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <div className="w-32 border-b border-gray-400 mb-2" />
              <p className="text-xs font-bold text-gray-600">Olasubomi Oshoba</p>
              <p className="text-[10px] text-gray-400">CEO, Marketing Extension</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400 mb-1">Issued on</p>
              <p className="text-sm font-bold text-[#05060A]">{earnedDate}</p>
              {certificate.finalScore > 0 && (
                <p className="text-xs text-gray-400 mt-1">Score: {certificate.finalScore}%</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handlePrint}
          className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-text-dark text-white rounded-xl font-bold text-sm hover:bg-black transition-colors"
        >
          <Download size={16} /> Download / Print
        </button>
        <button
          onClick={handleLinkedIn}
          className="flex items-center gap-2 px-5 py-3 border-2 border-[#0077B5] text-[#0077B5] rounded-xl font-bold text-sm hover:bg-[#0077B5]/5 transition-colors"
        >
          <Share2 size={16} /> Share on LinkedIn
        </button>
        <Link
          to={`/academy/verify?id=${certificate.id}`}
          target="_blank"
          className="flex items-center gap-2 px-4 py-3 border border-gray-200 text-text-muted rounded-xl font-bold text-sm hover:border-gray-300 transition-colors"
        >
          <ExternalLink size={16} /> Verify
        </Link>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="w-full py-2.5 text-sm font-bold text-text-muted hover:text-text-dark transition-colors"
        >
          Close
        </button>
      )}
    </div>
  );
};

// ── CertificateCard — compact card for list views ─────────────────────────

interface CertificateCardProps {
  certificate: Certificate;
  onView: (cert: Certificate) => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, onView }) => {
  const earnedDate = new Date(certificate.earnedAt).toLocaleDateString('en-NG', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const handleLinkedIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `I just earned the "${certificate.courseTitle}" certificate from MExt Academy! Verification ID: ${certificate.id}`
    );
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin + '/academy/verify?id=' + certificate.id)}&summary=${text}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
      onClick={() => onView(certificate)}
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-[#05060A] to-gray-800 p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B3D]/20 rounded-full blur-[60px]" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Shield size={16} className="text-[#FF6B3D]" />
            <span className="text-xs font-bold text-white/50 uppercase tracking-wider">Verified Credential</span>
          </div>
          <h3 className="text-lg font-display font-bold text-white mb-1 leading-snug">{certificate.courseTitle}</h3>
          <p className="text-white/40 text-xs">Earned {earnedDate}</p>
          {certificate.finalScore > 0 && (
            <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FF6B3D]/20 rounded-full">
              <CheckCircle size={12} className="text-[#FF6B3D]" />
              <span className="text-xs font-bold text-[#FF6B3D]">{certificate.finalScore}% Score</span>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckCircle size={14} className="text-green-500" />
          <span className="text-xs font-bold text-text-muted font-mono truncate max-w-[140px]">{certificate.id}</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={handleLinkedIn}
            className="p-2 rounded-lg hover:bg-gray-50 text-text-muted hover:text-[#0077B5] transition-colors"
            title="Share on LinkedIn"
          >
            <Share2 size={14} />
          </button>
          <Link
            to={`/academy/verify?id=${certificate.id}`}
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-lg hover:bg-gray-50 text-text-muted hover:text-primary transition-colors"
            title="Verify certificate"
          >
            <ExternalLink size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// ── EmptyCertificates — placeholder when no certs earned ──────────────────

export const EmptyCertificates: React.FC = () => (
  <div className="text-center py-16">
    <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gray-50 border border-gray-100 mb-5">
      <Award size={36} className="text-gray-300" />
    </div>
    <h3 className="text-lg font-bold text-text-dark mb-2">No certificates yet</h3>
    <p className="text-text-muted text-sm max-w-xs mx-auto mb-6">
      Complete courses and pass the final assessments to earn your certificates.
    </p>
    <Link
      to="/academy/app/learning"
      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary-dark transition-colors"
    >
      Browse Courses
    </Link>
  </div>
);

export default CertificateView;
