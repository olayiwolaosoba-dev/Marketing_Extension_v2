import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// --- Types ---

export interface LessonProgress {
  completed: boolean;
  videoTimestamp?: number;
  completedAt?: string;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  passed: boolean;
  attempts: number;
  lastAttemptAt: string;
  answers: Record<string, number | number[]>;
}

export interface Certificate {
  id: string;
  courseSlug: string;
  courseTitle: string;
  studentName: string;
  earnedAt: string;
  finalScore: number;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  earnedAt: string;
}

export interface AcademyProgressState {
  // Enrollment
  enrolledCourses: string[];
  enrollCourse: (slug: string) => void;
  isEnrolled: (slug: string) => boolean;

  // Lesson progress
  lessonProgress: Record<string, LessonProgress>;
  markLessonComplete: (lessonId: string) => void;
  saveVideoTimestamp: (lessonId: string, timestamp: number) => void;
  isLessonComplete: (lessonId: string) => boolean;
  getVideoTimestamp: (lessonId: string) => number;

  // Quiz results
  quizResults: Record<string, QuizResult>;
  saveQuizResult: (quizId: string, result: QuizResult) => void;
  getQuizResult: (quizId: string) => QuizResult | undefined;

  // Certificates
  certificates: Certificate[];
  addCertificate: (cert: Certificate) => void;
  getCertificateByCode: (id: string) => Certificate | undefined;

  // Streaks
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: string | null;
  recordActivity: () => void;

  // XP & Level
  xp: number;
  addXp: (amount: number) => void;
  getLevel: () => { level: string; minXp: number; maxXp: number };

  // Badges
  badges: Badge[];
  addBadge: (badge: Badge) => void;
  hasBadge: (id: string) => boolean;

  // Notes
  notes: Record<string, string>;
  saveNote: (lessonId: string, note: string) => void;
  getNote: (lessonId: string) => string;

  // Bookmarks
  bookmarks: string[];
  toggleBookmark: (lessonId: string) => void;
  isBookmarked: (lessonId: string) => boolean;

  // Last active
  lastActiveCourse: string | null;
  lastActiveLesson: string | null;
  setLastActive: (courseSlug: string, lessonId: string) => void;

  // Reset
  resetProgress: () => void;
}

// --- Level thresholds ---
const LEVELS = [
  { level: 'Beginner', minXp: 0, maxXp: 500 },
  { level: 'Practitioner', minXp: 500, maxXp: 2000 },
  { level: 'Specialist', minXp: 2000, maxXp: 5000 },
  { level: 'Expert', minXp: 5000, maxXp: 10000 },
  { level: 'Master', minXp: 10000, maxXp: Infinity },
];

// --- Streak helper ---
const isSameDay = (d1: string, d2: string) => d1.slice(0, 10) === d2.slice(0, 10);
const isYesterday = (d1: string, d2: string) => {
  const a = new Date(d1);
  const b = new Date(d2);
  a.setDate(a.getDate() + 1);
  return a.toISOString().slice(0, 10) === b.toISOString().slice(0, 10);
};

const initialState = {
  enrolledCourses: [] as string[],
  lessonProgress: {} as Record<string, LessonProgress>,
  quizResults: {} as Record<string, QuizResult>,
  certificates: [] as Certificate[],
  currentStreak: 0,
  longestStreak: 0,
  lastActivityDate: null as string | null,
  xp: 0,
  badges: [] as Badge[],
  notes: {} as Record<string, string>,
  bookmarks: [] as string[],
  lastActiveCourse: null as string | null,
  lastActiveLesson: null as string | null,
};

export const useAcademyProgress = create<AcademyProgressState>()(
  persist(
    (set, get) => ({
      ...initialState,

      // Enrollment
      enrollCourse: (slug) =>
        set((s) => ({
          enrolledCourses: s.enrolledCourses.includes(slug)
            ? s.enrolledCourses
            : [...s.enrolledCourses, slug],
        })),
      isEnrolled: (slug) => get().enrolledCourses.includes(slug),

      // Lesson progress
      markLessonComplete: (lessonId) => {
        set((s) => ({
          lessonProgress: {
            ...s.lessonProgress,
            [lessonId]: {
              ...s.lessonProgress[lessonId],
              completed: true,
              completedAt: new Date().toISOString(),
            },
          },
        }));
        get().recordActivity();
      },
      saveVideoTimestamp: (lessonId, timestamp) =>
        set((s) => ({
          lessonProgress: {
            ...s.lessonProgress,
            [lessonId]: {
              ...s.lessonProgress[lessonId],
              completed: s.lessonProgress[lessonId]?.completed || false,
              videoTimestamp: timestamp,
            },
          },
        })),
      isLessonComplete: (lessonId) => get().lessonProgress[lessonId]?.completed || false,
      getVideoTimestamp: (lessonId) => get().lessonProgress[lessonId]?.videoTimestamp || 0,

      // Quiz results
      saveQuizResult: (quizId, result) =>
        set((s) => ({
          quizResults: { ...s.quizResults, [quizId]: result },
        })),
      getQuizResult: (quizId) => get().quizResults[quizId],

      // Certificates
      addCertificate: (cert) =>
        set((s) => ({
          certificates: [...s.certificates, cert],
        })),
      getCertificateByCode: (id) => get().certificates.find((c) => c.id === id),

      // Streaks
      recordActivity: () =>
        set((s) => {
          const today = new Date().toISOString();
          if (s.lastActivityDate && isSameDay(s.lastActivityDate, today)) {
            return { lastActivityDate: today };
          }
          const newStreak =
            s.lastActivityDate && isYesterday(s.lastActivityDate, today)
              ? s.currentStreak + 1
              : 1;
          return {
            currentStreak: newStreak,
            longestStreak: Math.max(s.longestStreak, newStreak),
            lastActivityDate: today,
          };
        }),

      // XP
      addXp: (amount) =>
        set((s) => ({ xp: s.xp + amount })),
      getLevel: () => {
        const xp = get().xp;
        return LEVELS.find((l) => xp >= l.minXp && xp < l.maxXp) || LEVELS[LEVELS.length - 1];
      },

      // Badges
      addBadge: (badge) =>
        set((s) => ({
          badges: s.badges.find((b) => b.id === badge.id)
            ? s.badges
            : [...s.badges, badge],
        })),
      hasBadge: (id) => get().badges.some((b) => b.id === id),

      // Notes
      saveNote: (lessonId, note) =>
        set((s) => ({
          notes: { ...s.notes, [lessonId]: note },
        })),
      getNote: (lessonId) => get().notes[lessonId] || '',

      // Bookmarks
      toggleBookmark: (lessonId) =>
        set((s) => ({
          bookmarks: s.bookmarks.includes(lessonId)
            ? s.bookmarks.filter((b) => b !== lessonId)
            : [...s.bookmarks, lessonId],
        })),
      isBookmarked: (lessonId) => get().bookmarks.includes(lessonId),

      // Last active
      setLastActive: (courseSlug, lessonId) =>
        set({ lastActiveCourse: courseSlug, lastActiveLesson: lessonId }),

      // Reset
      resetProgress: () => set(initialState),
    }),
    { name: 'academy-progress-store' }
  )
);
