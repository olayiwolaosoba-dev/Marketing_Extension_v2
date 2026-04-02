import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Star, Zap, Trophy, Clock, BookOpen, Award } from 'lucide-react';
import { useAcademyProgress } from '../../stores/academyProgress';

// ── XP Progress Bar ────────────────────────────────────────────────────────

export const XpProgressBar: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const { xp, getLevel } = useAcademyProgress();
  const lvl = getLevel();
  const range = lvl.maxXp === Infinity ? lvl.minXp + 5000 : lvl.maxXp;
  const pct = Math.min(100, Math.round(((xp - lvl.minXp) / (range - lvl.minXp)) * 100));

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <Zap size={14} className="text-[#FF6B3D] flex-shrink-0" />
        <div className="flex-1">
          <div className="flex justify-between text-[10px] mb-0.5">
            <span className="font-bold text-text-dark">{lvl.level}</span>
            <span className="text-text-muted">{xp} XP</span>
          </div>
          <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#FF6B3D] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#FF6B3D]/10 flex items-center justify-center">
            <Zap size={16} className="text-[#FF6B3D]" />
          </div>
          <div>
            <p className="text-xs text-text-muted">Level</p>
            <p className="text-sm font-bold text-text-dark">{lvl.level}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xl font-display font-bold text-text-dark">{xp}</p>
          <p className="text-[10px] text-text-muted uppercase tracking-wider">XP Total</p>
        </div>
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#FF6B3D] to-orange-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
      {lvl.maxXp !== Infinity && (
        <div className="flex justify-between text-[10px] text-text-muted mt-1.5">
          <span>{xp - lvl.minXp} / {lvl.maxXp - lvl.minXp} to next level</span>
          <span>{pct}%</span>
        </div>
      )}
    </div>
  );
};

// ── Streak Counter ─────────────────────────────────────────────────────────

export const StreakCounter: React.FC<{ showLongest?: boolean }> = ({ showLongest }) => {
  const { currentStreak, longestStreak } = useAcademyProgress();

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1.5 bg-orange-50 border border-orange-100 px-3 py-1.5 rounded-full">
        <Flame size={16} className="text-orange-500 fill-orange-500" />
        <span className="font-bold text-orange-700 text-sm">{currentStreak} day streak</span>
      </div>
      {showLongest && longestStreak > 0 && (
        <span className="text-xs text-text-muted">Best: {longestStreak}</span>
      )}
    </div>
  );
};

// ── Badge Grid ─────────────────────────────────────────────────────────────

const BADGE_COLORS: Record<string, string> = {
  first_lesson: 'bg-blue-50 border-blue-100 text-blue-600',
  quiz_ace: 'bg-yellow-50 border-yellow-100 text-yellow-600',
  module_master: 'bg-purple-50 border-purple-100 text-purple-600',
  course_champion: 'bg-[#FF6B3D]/10 border-[#FF6B3D]/20 text-[#FF6B3D]',
  streak_master: 'bg-orange-50 border-orange-100 text-orange-600',
  night_owl: 'bg-indigo-50 border-indigo-100 text-indigo-600',
  speed_learner: 'bg-green-50 border-green-100 text-green-600',
};

export const BadgeGrid: React.FC<{ max?: number }> = ({ max }) => {
  const { badges } = useAcademyProgress();
  const shown = max ? badges.slice(0, max) : badges;

  if (badges.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 mb-3">
          <Star size={20} className="text-gray-300" />
        </div>
        <p className="text-sm text-text-muted">Complete lessons to earn badges</p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      {shown.map((badge, i) => {
        const colorCls = BADGE_COLORS[badge.id] ?? 'bg-gray-50 border-gray-100 text-gray-600';
        return (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            title={badge.description}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-bold ${colorCls}`}
          >
            <span className="text-base">{badge.icon}</span>
            <span>{badge.title}</span>
          </motion.div>
        );
      })}
      {max && badges.length > max && (
        <div className="flex items-center justify-center px-3 py-2 rounded-xl border border-gray-100 bg-gray-50 text-xs font-bold text-text-muted">
          +{badges.length - max} more
        </div>
      )}
    </div>
  );
};

// ── Learning Stats Card ────────────────────────────────────────────────────

export const LearningStats: React.FC = () => {
  const { lessonProgress, quizResults, certificates, currentStreak } = useAcademyProgress();

  const completedLessons = Object.values(lessonProgress).filter((l) => l.completed).length;
  const quizzesPassed = Object.values(quizResults).filter((q) => q.passed).length;
  const certsEarned = certificates.length;

  const stats = [
    { icon: BookOpen, label: 'Lessons Done', value: completedLessons, color: 'text-blue-500', bg: 'bg-blue-50' },
    { icon: Trophy, label: 'Quizzes Passed', value: quizzesPassed, color: 'text-yellow-500', bg: 'bg-yellow-50' },
    { icon: Award, label: 'Certificates', value: certsEarned, color: 'text-[#FF6B3D]', bg: 'bg-[#FF6B3D]/10' },
    { icon: Flame, label: 'Day Streak', value: currentStreak, color: 'text-orange-500', bg: 'bg-orange-50' },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="bg-white rounded-2xl border border-gray-100 p-4"
        >
          <div className={`w-8 h-8 rounded-xl ${s.bg} flex items-center justify-center mb-2`}>
            <s.icon size={16} className={s.color} />
          </div>
          <p className="text-2xl font-display font-bold text-text-dark">{s.value}</p>
          <p className="text-xs text-text-muted">{s.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

// ── Level Badge (inline chip) ──────────────────────────────────────────────

export const XpLevelBadge: React.FC = () => {
  const { xp, getLevel } = useAcademyProgress();
  const lvl = getLevel();
  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#FF6B3D]/10 rounded-full">
      <Zap size={12} className="text-[#FF6B3D]" />
      <span className="text-xs font-bold text-[#FF6B3D]">{lvl.level}</span>
      <span className="text-[10px] text-[#FF6B3D]/70">· {xp} XP</span>
    </div>
  );
};

// ── Weekly Activity Heatmap (simple) ──────────────────────────────────────

export const WeeklyActivity: React.FC = () => {
  const { lessonProgress } = useAcademyProgress();
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Count completions per day of week for last 2 weeks
  const counts: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  Object.values(lessonProgress).forEach((lp) => {
    if (lp.completedAt) {
      const d = new Date(lp.completedAt).getDay();
      // Convert Sun=0 to Mon=0 index
      const idx = (d + 6) % 7;
      counts[idx] = (counts[idx] ?? 0) + 1;
    }
  });

  const max = Math.max(1, ...Object.values(counts));

  return (
    <div>
      <div className="flex gap-1.5 mb-1">
        {days.map((day, i) => {
          const count = counts[i] ?? 0;
          const intensity = Math.round((count / max) * 4);
          const bgCls = [
            'bg-gray-100',
            'bg-[#FF6B3D]/20',
            'bg-[#FF6B3D]/40',
            'bg-[#FF6B3D]/70',
            'bg-[#FF6B3D]',
          ][intensity];
          return (
            <div key={day} className="flex-1 text-center">
              <div
                className={`h-8 rounded-lg ${bgCls} transition-colors`}
                title={`${count} lessons`}
              />
            </div>
          );
        })}
      </div>
      <div className="flex gap-1.5">
        {days.map((day) => (
          <div key={day} className="flex-1 text-center">
            <span className="text-[10px] text-text-muted">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ── Clock / time display ───────────────────────────────────────────────────

export const StudyTimeEstimate: React.FC = () => {
  const { lessonProgress } = useAcademyProgress();
  const completedCount = Object.values(lessonProgress).filter((l) => l.completed).length;
  const minutesEstimate = completedCount * 12;
  const hours = Math.floor(minutesEstimate / 60);
  const mins = minutesEstimate % 60;

  return (
    <div className="flex items-center gap-2 text-sm text-text-muted">
      <Clock size={14} />
      <span>
        {hours > 0 ? `${hours}h ` : ''}{mins}m learned
      </span>
    </div>
  );
};
