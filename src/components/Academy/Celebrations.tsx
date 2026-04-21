import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Zap, Trophy } from 'lucide-react';
import type { Badge } from '../../stores/academyProgress';

// ── Confetti particle ──────────────────────────────────────────────────────

const CONFETTI_COLORS = ['#FF6B3D', '#fbbf24', '#a78bfa', '#34d399', '#f472b6', '#60a5fa', '#fff'];

interface ConfettiProps {
  active: boolean;
  count?: number;
}

export const ConfettiCelebration: React.FC<ConfettiProps> = ({ active, count = 36 }) => {
  if (!active) return null;
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2.5 h-2.5 rounded-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-2%',
            backgroundColor: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
            rotate: Math.random() * 360,
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, (Math.random() - 0.5) * 200],
            rotate: [0, (Math.random() > 0.5 ? 1 : -1) * 720],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 2.5 + Math.random() * 1.5,
            delay: i * 0.06,
            ease: 'easeIn',
          }}
        />
      ))}
    </div>
  );
};

// ── Badge Earned Toast ─────────────────────────────────────────────────────

interface BadgeToastProps {
  badge: Badge | null;
  onDismiss: () => void;
}

export const BadgeEarnedToast: React.FC<BadgeToastProps> = ({ badge, onDismiss }) => {
  useEffect(() => {
    if (!badge) return;
    const t = setTimeout(onDismiss, 5000);
    return () => clearTimeout(t);
  }, [badge, onDismiss]);

  return (
    <AnimatePresence>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 80, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 flex items-center gap-4"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#FF6B3D]/10 flex items-center justify-center text-2xl">
            {badge.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-[#FF6B3D] uppercase tracking-wider mb-0.5">Badge Earned!</p>
            <p className="text-sm font-bold text-text-dark truncate">{badge.title}</p>
            <p className="text-xs text-text-muted truncate">{badge.description}</p>
          </div>
          <button onClick={onDismiss} className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-600 transition-colors">
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ── Level Up Modal ─────────────────────────────────────────────────────────

interface LevelUpProps {
  show: boolean;
  newLevel: string;
  onClose: () => void;
}

export const LevelUpAnimation: React.FC<LevelUpProps> = ({ show, newLevel, onClose }) => {
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(onClose, 6000);
    return () => clearTimeout(t);
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <>
          <ConfettiCelebration active={show} count={48} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white rounded-3xl p-10 text-center max-w-sm w-full shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B3D]/5 to-orange-50 pointer-events-none" />
              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: [0, -10, 10, -10, 10, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-[#FF6B3D]/10 mb-5"
                >
                  <Zap size={36} className="text-[#FF6B3D]" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B3D] mb-2">Level Up!</p>
                  <h2 className="text-3xl font-display font-bold text-text-dark mb-2">{newLevel}</h2>
                  <p className="text-text-muted text-sm mb-6">You've reached a new level. Keep up the amazing work!</p>
                </motion.div>
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-[#FF6B3D] text-white rounded-full font-bold hover:bg-orange-600 transition-colors"
                >
                  Awesome!
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// ── Course Complete Modal ──────────────────────────────────────────────────

interface CourseCompleteProps {
  show: boolean;
  courseTitle: string;
  onClose: () => void;
  onGoToCertificate?: () => void;
}

export const CourseCompleteModal: React.FC<CourseCompleteProps> = ({
  show,
  courseTitle,
  onClose,
  onGoToCertificate,
}) => {
  useEffect(() => {
    if (!show) return;
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <>
          <ConfettiCelebration active={show} count={60} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              className="bg-gradient-to-br from-[#05060A] to-gray-900 rounded-3xl p-10 text-center max-w-md w-full shadow-2xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF6B3D]/20 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-[#FF6B3D]/20 mb-5"
                >
                  <Trophy size={36} className="text-[#FF6B3D]" />
                </motion.div>
                <div className="flex justify-center gap-1 mb-4">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <Star size={18} className="text-yellow-400 fill-yellow-400" />
                    </motion.div>
                  ))}
                </div>
                <h2 className="text-2xl font-display font-bold mb-2">Course Complete!</h2>
                <p className="text-white/70 text-sm mb-6">
                  Congratulations! You've completed{' '}
                  <span className="text-white font-bold">{courseTitle}</span>.
                  Your certificate has been added to your profile.
                </p>
                <div className="flex flex-col gap-3">
                  {onGoToCertificate && (
                    <button
                      onClick={onGoToCertificate}
                      className="w-full py-3 bg-[#FF6B3D] text-white rounded-xl font-bold hover:bg-orange-600 transition-colors"
                    >
                      View My Certificate
                    </button>
                  )}
                  <button
                    onClick={onClose}
                    className="w-full py-2.5 border border-white/20 text-white/70 rounded-xl font-bold text-sm hover:bg-white/5 transition-colors"
                  >
                    Keep Learning
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// ── XP Earned Toast ────────────────────────────────────────────────────────

interface XpToastProps {
  amount: number | null;
  onDismiss: () => void;
}

export const XpEarnedToast: React.FC<XpToastProps> = ({ amount, onDismiss }) => {
  useEffect(() => {
    if (!amount) return;
    const t = setTimeout(onDismiss, 2500);
    return () => clearTimeout(t);
  }, [amount, onDismiss]);

  return (
    <AnimatePresence>
      {amount !== null && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: -20, x: '-50%' }}
          className="fixed top-20 left-1/2 z-50 flex items-center gap-2 px-4 py-2 bg-[#FF6B3D] text-white rounded-full shadow-lg font-bold text-sm"
        >
          <Zap size={14} fill="currentColor" />
          +{amount} XP
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ── useCelebration hook ────────────────────────────────────────────────────
// Manages XP toast + badge toast state together

interface CelebrationState {
  xpAmount: number | null;
  badge: Badge | null;
  levelUp: string | null;
}

export const useCelebration = () => {
  const [state, setState] = useState<CelebrationState>({
    xpAmount: null,
    badge: null,
    levelUp: null,
  });

  const triggerXp = (amount: number) =>
    setState((s) => ({ ...s, xpAmount: amount }));

  const triggerBadge = (badge: Badge) =>
    setState((s) => ({ ...s, badge }));

  const triggerLevelUp = (level: string) =>
    setState((s) => ({ ...s, levelUp: level }));

  const dismissXp = () => setState((s) => ({ ...s, xpAmount: null }));
  const dismissBadge = () => setState((s) => ({ ...s, badge: null }));
  const dismissLevelUp = () => setState((s) => ({ ...s, levelUp: null }));

  return {
    ...state,
    triggerXp,
    triggerBadge,
    triggerLevelUp,
    dismissXp,
    dismissBadge,
    dismissLevelUp,
  };
};
