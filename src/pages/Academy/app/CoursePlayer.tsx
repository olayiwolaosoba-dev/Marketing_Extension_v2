import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play, CheckCircle, ChevronLeft, ChevronRight, BookOpen, FileText,
  Menu, X, Clock, ArrowLeft, Star, Award, Bookmark
} from 'lucide-react';
import { getCourseBySlug } from '../../../lib/academyCourseData';
import type { Lesson, QuizQuestion } from '../../../lib/academyCourseData';
import { academyData } from '../../../lib/academyData';
import { useAcademyProgress } from '../../../stores/academyProgress';

const TABS = ['Overview', 'Notes', 'Resources'] as const;
type Tab = (typeof TABS)[number];
const CONFETTI = ['#fff', '#fbbf24', '#a78bfa', '#34d399', '#f472b6'];

// ── Quiz ────────────────────────────────────────────────────────────────────
const QuizView: React.FC<{ questions: QuizQuestion[]; lessonId: string; onPass: () => void }> = ({ questions, lessonId, onPass }) => {
  const { saveQuizResult, getQuizResult } = useAcademyProgress();
  const prev = getQuizResult(lessonId);
  const [answers, setAnswers] = useState<Record<string, number | number[]>>({});
  const [submitted, setSubmitted] = useState(!!prev?.passed);
  const [score, setScore] = useState(prev?.score ?? 0);

  const toggle = (qId: string, idx: number, multi: boolean) => {
    setAnswers((a) => {
      if (!multi) return { ...a, [qId]: idx };
      const cur = (a[qId] as number[]) || [];
      return { ...a, [qId]: cur.includes(idx) ? cur.filter((i) => i !== idx) : [...cur, idx] };
    });
  };

  const submit = () => {
    let correct = 0;
    questions.forEach((q) => {
      const ans = answers[q.id];
      if (Array.isArray(q.correctAnswer)) {
        if (Array.isArray(ans) && ans.length === q.correctAnswer.length && q.correctAnswer.every((v) => ans.includes(v))) correct++;
      } else if (ans === q.correctAnswer) correct++;
    });
    const pct = Math.round((correct / questions.length) * 100);
    setScore(pct); setSubmitted(true);
    const passed = pct >= 70;
    saveQuizResult(lessonId, { score: pct, totalQuestions: questions.length, passed, attempts: (prev?.attempts ?? 0) + 1, lastAttemptAt: new Date().toISOString(), answers });
    if (passed) onPass();
  };

  if (submitted) {
    const passed = score >= 70;
    return (
      <div className="text-center py-10">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${passed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
          <span className="text-2xl font-bold">{score}%</span>
        </div>
        <h3 className="text-xl font-display font-bold mb-2">{passed ? 'Quiz Passed!' : 'Not quite...'}</h3>
        <p className="text-text-muted text-sm mb-6">{passed ? 'Great job! Move on to the next lesson.' : 'You need 70% to pass. Review and try again.'}</p>
        {!passed && <button onClick={() => { setAnswers({}); setSubmitted(false); }} className="px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary-dark transition-colors">Retry Quiz</button>}
      </div>
    );
  }
  return (
    <div className="space-y-6">
      {questions.map((q, qi) => {
        const multi = q.type === 'multi-select';
        return (
          <div key={q.id} className="p-5 rounded-2xl border border-gray-100 bg-white">
            <p className="font-bold text-text-dark mb-3 text-sm">{qi + 1}. {q.question}</p>
            <div className="space-y-2">
              {q.options.map((opt, oi) => {
                const sel = multi ? ((answers[q.id] as number[]) || []).includes(oi) : answers[q.id] === oi;
                return (
                  <button key={oi} onClick={() => toggle(q.id, oi, multi)} className={`w-full text-left px-4 py-2.5 rounded-xl text-sm border transition-colors ${sel ? 'border-primary bg-primary/5 text-primary font-bold' : 'border-gray-200 text-text-dark hover:border-gray-300'}`}>
                    <span className="mr-2">{multi ? (sel ? '\u2611' : '\u2610') : (sel ? '\u25C9' : '\u25CB')}</span>{opt}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
      <button onClick={submit} disabled={Object.keys(answers).length < questions.length} className="px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed">Submit Quiz</button>
    </div>
  );
};

// ── CoursePlayer ─────────────────────────────────────────────────────────────
const CoursePlayer: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourseBySlug(slug || '');
  const catalog = academyData.courses.find((c) => c.slug === slug);
  const { markLessonComplete, isLessonComplete, saveNote, getNote, setLastActive, addXp, recordActivity, toggleBookmark, isBookmarked } = useAcademyProgress();

  const [activeLessonId, setActiveLessonId] = useState('');
  const [tab, setTab] = useState<Tab>('Overview');
  const [drawer, setDrawer] = useState(false);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [notes, setNotes] = useState('');

  const lessons = useMemo(() => course?.modules.flatMap((m) => m.lessons) ?? [], [course]);
  const idx = lessons.findIndex((l) => l.id === activeLessonId);
  const cur = lessons[idx] ?? lessons[0];

  useEffect(() => {
    if (lessons.length && !activeLessonId) {
      setActiveLessonId(lessons[0].id);
      setExpanded(new Set(course?.modules.map((m) => m.id) ?? []));
    }
  }, [lessons, activeLessonId, course]);

  useEffect(() => {
    if (cur && slug) { setNotes(getNote(cur.id)); setLastActive(slug, cur.id); recordActivity(); }
  }, [cur?.id]);

  const done = lessons.filter((l) => isLessonComplete(l.id)).length;
  const pct = lessons.length ? Math.round((done / lessons.length) * 100) : 0;
  const allDone = done === lessons.length && lessons.length > 0;

  const goTo = useCallback((id: string) => { setActiveLessonId(id); setDrawer(false); }, []);
  const next = () => { if (idx < lessons.length - 1) goTo(lessons[idx + 1].id); };
  const prev = () => { if (idx > 0) goTo(lessons[idx - 1].id); };

  const handleComplete = useCallback(() => {
    if (!cur || isLessonComplete(cur.id)) return;
    markLessonComplete(cur.id);
    addXp(cur.type === 'quiz' ? 25 : 10);
    if (course) {
      const mod = course.modules.find((m) => m.lessons.some((l) => l.id === cur.id));
      if (mod && mod.lessons.every((l) => l.id === cur.id || isLessonComplete(l.id))) addXp(50);
    }
  }, [cur, course]);

  const toggleMod = (id: string) => setExpanded((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const modPct = (id: string) => { const m = course?.modules.find((x) => x.id === id); if (!m) return 0; return Math.round((m.lessons.filter((l) => isLessonComplete(l.id)).length / m.lessons.length) * 100); };
  const ico = (t: Lesson['type']) => t === 'video' ? <Play size={14} /> : t === 'reading' ? <BookOpen size={14} /> : <FileText size={14} />;

  if (!course) return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <BookOpen size={48} className="text-gray-300 mb-4" />
      <h2 className="text-2xl font-display font-bold text-text-dark mb-2">Course not found</h2>
      <p className="text-text-muted mb-6">The course you are looking for does not exist.</p>
      <Link to="/academy/app/learning" className="px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-colors">Back to My Learning</Link>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row -mx-4 md:-mx-8 -mt-4 md:-mt-8 min-h-[calc(100vh-4rem)]">
      <button onClick={() => setDrawer(true)} className="lg:hidden fixed bottom-6 right-6 z-30 w-12 h-12 bg-gray-900 text-white rounded-full shadow-xl flex items-center justify-center"><Menu size={20} /></button>

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-40 w-80 bg-gray-900 text-white flex flex-col transform transition-transform duration-300 ${drawer ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} lg:min-h-[calc(100vh-4rem)]`}>
        <div className="p-5 border-b border-white/10 flex-shrink-0">
          <div className="flex items-center justify-between mb-3">
            <Link to="/academy/app/learning" className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors"><ArrowLeft size={16} /> Back</Link>
            <button onClick={() => setDrawer(false)} className="lg:hidden p-1 text-gray-400"><X size={18} /></button>
          </div>
          <h2 className="font-display font-bold text-lg leading-tight mb-3">{course.title}</h2>
          <div className="flex justify-between text-xs mb-2"><span className="text-gray-400">{done}/{lessons.length} lessons</span><span className="font-bold">{pct}%</span></div>
          <div className="w-full h-1.5 bg-white/10 rounded-full"><div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${pct}%` }} /></div>
        </div>
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {course.modules.map((mod, mi) => (
            <div key={mod.id}>
              <button onClick={() => toggleMod(mod.id)} className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors">
                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 truncate">Module {mi + 1}{modPct(mod.id) === 100 ? ' \u2713' : ''}</span>
                <span className="text-[10px] text-gray-500">{modPct(mod.id)}%</span>
              </button>
              <AnimatePresence initial={false}>
                {expanded.has(mod.id) && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    {mod.lessons.map((l) => {
                      const active = l.id === cur?.id, ld = isLessonComplete(l.id);
                      return (
                        <button key={l.id} onClick={() => goTo(l.id)} className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-sm transition-colors ${active ? 'bg-primary/20 text-primary font-bold' : ld ? 'text-gray-500 hover:bg-white/5' : 'text-gray-300 hover:bg-white/5'}`}>
                          <span className="flex-shrink-0">{ld ? <CheckCircle size={14} className="text-green-400" /> : ico(l.type)}</span>
                          <span className="flex-1 truncate text-[13px]">{l.title}</span>
                          <span className="text-[10px] text-gray-500">{l.duration}m</span>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>
      </aside>
      {drawer && <div className="fixed inset-0 bg-black/40 z-30 lg:hidden" onClick={() => setDrawer(false)} />}

      {/* Main */}
      <div className="flex-1 min-w-0 overflow-y-auto bg-white">
        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 md:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <button onClick={prev} disabled={idx <= 0} className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:text-text-dark disabled:opacity-30 disabled:cursor-not-allowed"><ChevronLeft size={16} /></button>
            <div className="min-w-0">
              <p className="text-[10px] text-text-muted uppercase tracking-wider">Module {(course.modules.findIndex((m) => m.lessons.some((l) => l.id === cur?.id)) ?? 0) + 1}</p>
              <h3 className="text-sm font-bold text-text-dark truncate">{cur?.title}</h3>
            </div>
            <button onClick={next} disabled={idx >= lessons.length - 1} className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:text-text-dark disabled:opacity-30 disabled:cursor-not-allowed"><ChevronRight size={16} /></button>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => cur && toggleBookmark(cur.id)} className={`p-2 rounded-lg transition-colors ${cur && isBookmarked(cur.id) ? 'text-primary' : 'text-gray-400 hover:text-gray-600'}`}>
              <Bookmark size={16} fill={cur && isBookmarked(cur.id) ? 'currentColor' : 'none'} />
            </button>
            {cur && !isLessonComplete(cur.id) && cur.type !== 'quiz' && (
              <button onClick={handleComplete} className="px-4 py-1.5 bg-primary text-white rounded-lg text-xs font-bold hover:bg-primary-dark transition-colors flex items-center gap-1.5"><CheckCircle size={14} /> Complete</button>
            )}
            {cur && isLessonComplete(cur.id) && (
              <span className="px-3 py-1.5 bg-green-50 text-green-600 rounded-lg text-xs font-bold flex items-center gap-1.5"><CheckCircle size={14} /> Done</span>
            )}
          </div>
        </div>

        <div className="p-4 md:p-6">
          {cur?.type === 'video' && (
            <div className="bg-black rounded-2xl overflow-hidden mb-6"><div className="aspect-video">
              <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${cur.youtubeId || 'dQw4w9WgXcQ'}?rel=0`} title={cur.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
            </div></div>
          )}
          {cur?.type === 'reading' && (
            <div className="prose prose-sm max-w-none mb-6">
              {(cur.content || 'No content available for this lesson.').split('\n\n').map((p, i) => <p key={i} className="text-text-dark leading-relaxed mb-4">{p}</p>)}
            </div>
          )}
          {cur?.type === 'quiz' && cur.questions && <QuizView questions={cur.questions} lessonId={cur.id} onPass={handleComplete} />}

          {cur && isLessonComplete(cur.id) && idx < lessons.length - 1 && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100 mb-6">
              <div><p className="text-xs text-text-muted mb-0.5">Up next</p><p className="text-sm font-bold text-text-dark">{lessons[idx + 1].title}</p></div>
              <button onClick={next} className="px-5 py-2 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary-dark transition-colors flex items-center gap-1.5">Next Lesson <ChevronRight size={16} /></button>
            </motion.div>
          )}

          <AnimatePresence>
            {allDone && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="bg-gradient-to-br from-primary to-orange-600 rounded-3xl p-8 text-white text-center mb-6 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <motion.div key={i} className="absolute w-2 h-2 rounded-full" style={{ left: `${(i * 4.2) % 100}%`, top: '-4%', backgroundColor: CONFETTI[i % 5] }}
                      animate={{ y: ['0vh', '110vh'], rotate: [0, 360], opacity: [1, 0] }}
                      transition={{ duration: 2.5, delay: i * 0.12, repeat: Infinity, repeatDelay: 4 }} />
                  ))}
                </div>
                <div className="relative z-10">
                  <Award size={48} className="mx-auto mb-4" />
                  <h3 className="text-2xl font-display font-bold mb-2">Course Complete!</h3>
                  <p className="text-white/80 mb-6 max-w-md mx-auto">Congratulations! You have completed all lessons in {course.title}.</p>
                  <div className="flex items-center justify-center gap-3 flex-wrap">
                    <Link to={`/academy/app/courses/${slug}/assessment`} className="px-6 py-3 bg-white text-primary rounded-full font-bold text-sm hover:bg-white/90 transition-colors">Take Final Assessment</Link>
                    <Link to="/academy/app/certificates" className="px-6 py-3 border border-white/30 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-colors">View Certificates</Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tabs */}
          <div className="border-b border-gray-100 mb-6"><div className="flex gap-6">
            {TABS.map((t) => <button key={t} onClick={() => setTab(t)} className={`pb-3 text-sm font-bold border-b-2 transition-colors ${tab === t ? 'border-primary text-primary' : 'border-transparent text-text-muted hover:text-text-dark'}`}>{t}</button>)}
          </div></div>

          {tab === 'Overview' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div>
                <h3 className="text-xl font-display font-bold text-text-dark mb-3">{course.title}</h3>
                {catalog && (
                  <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted mb-4">
                    <span className="flex items-center gap-1"><Star size={14} className="text-orange-500 fill-orange-500" /> {catalog.rating}</span>
                    <span>{catalog.reviewsCount} reviews</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {catalog.durationHours}h</span>
                    <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-bold">{catalog.level}</span>
                  </div>
                )}
                <p className="text-text-muted leading-relaxed">{catalog?.summary ?? ''}</p>
              </div>
              {catalog?.outcomes && (
                <div>
                  <h4 className="font-bold text-text-dark mb-3">What you will learn</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {catalog.outcomes.map((o) => <div key={o} className="flex items-start gap-2 text-sm"><CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" /><span className="text-text-dark">{o}</span></div>)}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {tab === 'Notes' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <p className="text-sm text-text-muted">Notes are saved per lesson. Switch lessons to see different notes.</p>
              <textarea value={notes} onChange={(e) => { setNotes(e.target.value); if (cur) saveNote(cur.id, e.target.value); }} rows={10} placeholder="Start typing your notes here..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary transition-colors text-sm resize-none" />
            </motion.div>
          )}

          {tab === 'Resources' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
              {[{ name: `${course.title} - Workbook.pdf`, size: '2.4 MB', tp: 'PDF' }, { name: 'Cheat Sheet - Key Frameworks.pdf', size: '840 KB', tp: 'PDF' }, { name: 'Template - Campaign Planner.xlsx', size: '1.1 MB', tp: 'Spreadsheet' }].map((r) => (
                <div key={r.name} className="rounded-xl p-4 border border-gray-100 flex items-center justify-between hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><FileText size={18} className="text-primary" /></div>
                    <div><p className="text-sm font-bold text-text-dark">{r.name}</p><p className="text-xs text-text-muted">{r.tp} - {r.size}</p></div>
                  </div>
                  <button className="px-4 py-2 text-sm font-bold text-primary hover:bg-primary/5 rounded-lg transition-colors">Download</button>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursePlayer;
