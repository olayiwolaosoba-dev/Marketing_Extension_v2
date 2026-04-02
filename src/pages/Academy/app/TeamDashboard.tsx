import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users, BarChart3, Trophy, TrendingUp, Download, Search,
  ChevronUp, ChevronDown, CheckCircle, Clock, Award, Plus,
  Mail, Flame, BookOpen
} from 'lucide-react';

// ── Mock team data ───────────────────────────────────────────────────────────

const teamMembers = [
  { id: '1', name: 'Adaeze Nwosu', email: 'adaeze@company.com', role: 'Content Strategist', avatar: 'AN', progress: 84, coursesCompleted: 3, currentCourse: 'B2B Content Engine', streak: 12, xp: 2800, lastActive: '2 hours ago', status: 'active' },
  { id: '2', name: 'Emeka Okafor', email: 'emeka@company.com', role: 'Growth Marketer', avatar: 'EO', progress: 67, coursesCompleted: 2, currentCourse: 'MExt 101: GTM Automation', streak: 7, xp: 1900, lastActive: 'Yesterday', status: 'active' },
  { id: '3', name: 'Fatima Bello', email: 'fatima@company.com', role: 'Performance Marketer', avatar: 'FB', progress: 91, coursesCompleted: 4, currentCourse: 'Metrics & Dashboards', streak: 21, xp: 3600, lastActive: '1 hour ago', status: 'active' },
  { id: '4', name: 'Olumide Adeyemi', email: 'olumide@company.com', role: 'Brand Manager', avatar: 'OA', progress: 42, coursesCompleted: 1, currentCourse: 'Social Media Strategy', streak: 3, xp: 950, lastActive: '3 days ago', status: 'at-risk' },
  { id: '5', name: 'Chisom Igwe', email: 'chisom@company.com', role: 'SEO Specialist', avatar: 'CI', progress: 75, coursesCompleted: 2, currentCourse: 'Research for Marketers', streak: 9, xp: 2100, lastActive: 'Today', status: 'active' },
  { id: '6', name: 'Zainab Lawal', email: 'zainab@company.com', role: 'Product Marketing', avatar: 'ZL', progress: 18, coursesCompleted: 0, currentCourse: 'Landing Pages that Convert', streak: 0, xp: 250, lastActive: '2 weeks ago', status: 'inactive' },
];

const enrolledCourses = [
  { slug: 'mext-101-gtm-automation', title: 'MExt 101: GTM Automation', enrolled: 6, completed: 2, avgProgress: 68 },
  { slug: 'b2b-content-engine', title: 'B2B Content Engine', enrolled: 4, completed: 1, avgProgress: 55 },
  { slug: 'research-for-marketers', title: 'Research for Marketers', enrolled: 5, completed: 3, avgProgress: 79 },
  { slug: 'metrics-dashboards', title: 'Metrics & Dashboards', enrolled: 3, completed: 1, avgProgress: 61 },
];

const statusColors: Record<string, string> = {
  active: 'bg-green-100 text-green-700',
  'at-risk': 'bg-yellow-100 text-yellow-700',
  inactive: 'bg-red-100 text-red-600',
};

type SortKey = 'name' | 'progress' | 'streak' | 'xp' | 'lastActive';

// ── TeamDashboard ─────────────────────────────────────────────────────────────

const TeamDashboard: React.FC = () => {
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('progress');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');
  const [activeTab, setActiveTab] = useState<'members' | 'courses' | 'leaderboard'>('members');

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('desc');
    }
  };

  const filtered = teamMembers
    .filter((m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()) ||
      m.role.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const av = a[sortKey as keyof typeof a];
      const bv = b[sortKey as keyof typeof b];
      if (typeof av === 'number' && typeof bv === 'number') {
        return sortDir === 'asc' ? av - bv : bv - av;
      }
      return sortDir === 'asc'
        ? String(av).localeCompare(String(bv))
        : String(bv).localeCompare(String(av));
    });

  const sortedForLeaderboard = [...teamMembers].sort((a, b) => b.xp - a.xp);

  const teamStats = {
    totalMembers: teamMembers.length,
    activeToday: teamMembers.filter((m) => m.lastActive.includes('hour') || m.lastActive === 'Today').length,
    avgProgress: Math.round(teamMembers.reduce((s, m) => s + m.progress, 0) / teamMembers.length),
    totalCompleted: teamMembers.reduce((s, m) => s + m.coursesCompleted, 0),
    atRisk: teamMembers.filter((m) => m.status === 'at-risk' || m.status === 'inactive').length,
  };

  const SortIcon: React.FC<{ k: SortKey }> = ({ k }) => {
    if (sortKey !== k) return <ChevronUp size={12} className="text-gray-300" />;
    return sortDir === 'asc'
      ? <ChevronUp size={12} className="text-primary" />
      : <ChevronDown size={12} className="text-primary" />;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-text-dark">Team Dashboard</h1>
          <p className="text-text-muted mt-1">Monitor your team's learning progress and engagement.</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => {
              const csv = [
                ['Name', 'Email', 'Role', 'Progress', 'Courses Completed', 'Streak', 'XP', 'Last Active'].join(','),
                ...teamMembers.map((m) => [m.name, m.email, m.role, m.progress + '%', m.coursesCompleted, m.streak + ' days', m.xp, m.lastActive].join(','))
              ].join('\n');
              const blob = new Blob([csv], { type: 'text/csv' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url; a.download = 'team-progress.csv'; a.click();
              URL.revokeObjectURL(url);
            }}
            className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-bold text-text-muted hover:border-gray-300 transition-colors"
          >
            <Download size={16} /> Export CSV
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary-dark transition-colors">
            <Plus size={16} /> Invite Member
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { icon: Users, label: 'Total Seats', value: teamStats.totalMembers, color: 'text-blue-500', bg: 'bg-blue-50' },
          { icon: TrendingUp, label: 'Active Today', value: teamStats.activeToday, color: 'text-green-500', bg: 'bg-green-50' },
          { icon: BarChart3, label: 'Avg Progress', value: `${teamStats.avgProgress}%`, color: 'text-primary', bg: 'bg-primary/10' },
          { icon: Award, label: 'Completions', value: teamStats.totalCompleted, color: 'text-yellow-500', bg: 'bg-yellow-50' },
          { icon: Flame, label: 'At Risk', value: teamStats.atRisk, color: 'text-red-500', bg: 'bg-red-50' },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="bg-white rounded-2xl border border-gray-100 p-4"
          >
            <div className={`w-9 h-9 rounded-xl ${s.bg} flex items-center justify-center mb-3`}>
              <s.icon size={17} className={s.color} />
            </div>
            <p className="text-2xl font-display font-bold text-text-dark">{s.value}</p>
            <p className="text-xs text-text-muted">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {(['members', 'courses', 'leaderboard'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold capitalize transition-colors ${activeTab === tab ? 'bg-text-dark text-white' : 'bg-white border border-gray-200 text-text-muted hover:bg-gray-50'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Members tab */}
      {activeTab === 'members' && (
        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
          {/* Search */}
          <div className="p-5 border-b border-gray-100">
            <div className="relative max-w-sm">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search members..."
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-5 py-3 text-xs font-bold text-text-muted uppercase tracking-wider">Member</th>
                  {([['progress', 'Progress'], ['streak', 'Streak'], ['xp', 'XP'], ['lastActive', 'Last Active']] as [SortKey, string][]).map(([key, label]) => (
                    <th
                      key={key}
                      className="text-center px-4 py-3 text-xs font-bold text-text-muted uppercase tracking-wider cursor-pointer hover:text-text-dark transition-colors"
                      onClick={() => toggleSort(key)}
                    >
                      <span className="inline-flex items-center gap-1">{label} <SortIcon k={key} /></span>
                    </th>
                  ))}
                  <th className="text-center px-4 py-3 text-xs font-bold text-text-muted uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((member, i) => (
                  <motion.tr
                    key={member.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.04 }}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
                          {member.avatar}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-text-dark">{member.name}</p>
                          <p className="text-xs text-text-muted">{member.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2 justify-center">
                        <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${member.progress >= 75 ? 'bg-green-500' : member.progress >= 50 ? 'bg-primary' : 'bg-yellow-400'}`}
                            style={{ width: `${member.progress}%` }}
                          />
                        </div>
                        <span className="text-xs font-bold text-text-dark w-8">{member.progress}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Flame size={13} className={`${member.streak > 0 ? 'text-orange-500 fill-orange-500' : 'text-gray-300'}`} />
                        <span className="text-xs font-bold text-text-dark">{member.streak}d</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="text-xs font-bold text-text-dark">{member.xp.toLocaleString()}</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="text-xs text-text-muted">{member.lastActive}</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold capitalize ${statusColors[member.status]}`}>
                        {member.status === 'at-risk' ? 'At Risk' : member.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <button
                        onClick={() => alert(`Reminder sent to ${member.name}`)}
                        title="Send reminder"
                        className="p-1.5 rounded-lg text-gray-400 hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        <Mail size={14} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Courses tab */}
      {activeTab === 'courses' && (
        <div className="space-y-4">
          {/* Bulk enroll */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 flex items-center justify-between gap-4">
            <div>
              <p className="font-bold text-text-dark mb-0.5">Bulk Enroll Team</p>
              <p className="text-sm text-text-muted">Enroll your entire team or specific members into any course at once.</p>
            </div>
            <button className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary-dark transition-colors">
              <Plus size={16} /> Bulk Enroll
            </button>
          </div>

          {enrolledCourses.map((course, i) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-gray-100 p-6"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="font-bold text-text-dark mb-1">{course.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-text-muted">
                    <span className="flex items-center gap-1"><Users size={13} /> {course.enrolled} enrolled</span>
                    <span className="flex items-center gap-1"><CheckCircle size={13} className="text-green-500" /> {course.completed} completed</span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-2xl font-display font-bold text-text-dark">{course.avgProgress}%</p>
                  <p className="text-xs text-text-muted">avg progress</p>
                </div>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${course.avgProgress >= 75 ? 'bg-green-500' : 'bg-primary'}`}
                  style={{ width: `${course.avgProgress}%` }}
                />
              </div>

              {/* Per-member mini-rows */}
              <div className="mt-4 space-y-2">
                {teamMembers
                  .filter((m) => m.currentCourse === course.title)
                  .map((m) => (
                    <div key={m.id} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary flex-shrink-0">{m.avatar}</div>
                      <span className="text-xs text-text-muted flex-shrink-0 w-28 truncate">{m.name}</span>
                      <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-primary/50 rounded-full" style={{ width: `${m.progress}%` }} />
                      </div>
                      <span className="text-[10px] font-bold text-text-muted w-8 text-right">{m.progress}%</span>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Leaderboard tab */}
      {activeTab === 'leaderboard' && (
        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center gap-3">
            <Trophy size={18} className="text-yellow-500" />
            <h3 className="font-bold text-text-dark">Team XP Leaderboard</h3>
          </div>
          <div className="divide-y divide-gray-50">
            {sortedForLeaderboard.map((member, i) => {
              const medals = ['🥇', '🥈', '🥉'];
              return (
                <div key={member.id} className={`flex items-center gap-4 px-5 py-4 ${i === 0 ? 'bg-yellow-50' : ''}`}>
                  <div className="w-8 text-center">
                    {i < 3 ? (
                      <span className="text-xl">{medals[i]}</span>
                    ) : (
                      <span className="text-sm font-bold text-text-muted">#{i + 1}</span>
                    )}
                  </div>
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
                    {member.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-text-dark text-sm truncate">{member.name}</p>
                    <p className="text-xs text-text-muted">{member.role}</p>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="flex items-center gap-1">
                      <Flame size={13} className={member.streak > 0 ? 'text-orange-500 fill-orange-500' : 'text-gray-300'} />
                      <span className="text-xs font-bold text-text-muted">{member.streak}d</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen size={13} className="text-blue-400" />
                      <span className="text-xs font-bold text-text-muted">{member.coursesCompleted}</span>
                    </div>
                    <div className="text-right min-w-[60px]">
                      <p className="text-sm font-bold text-text-dark">{member.xp.toLocaleString()}</p>
                      <p className="text-[10px] text-text-muted">XP</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamDashboard;
