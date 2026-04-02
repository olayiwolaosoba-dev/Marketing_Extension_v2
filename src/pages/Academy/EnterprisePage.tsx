import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Users, Building2, Zap, Shield, BarChart3, Award, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// ── Pricing data ────────────────────────────────────────────────────────────

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: '₦0',
    period: 'forever',
    tagline: 'Get started with the basics',
    cta: 'Sign Up Free',
    ctaTo: '/academy/sign-up',
    highlight: false,
    color: 'border-gray-200',
    features: [
      { text: '3 free courses', included: true },
      { text: 'Community access', included: true },
      { text: 'Progress tracking', included: true },
      { text: 'Mobile-friendly player', included: true },
      { text: 'Certificates', included: false },
      { text: 'Quizzes & assessments', included: false },
      { text: 'Downloadable resources', included: false },
      { text: 'Priority support', included: false },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '₦15,000',
    period: 'per month',
    tagline: 'Everything you need to level up',
    cta: 'Start Pro',
    ctaTo: '/academy/sign-up?plan=pro',
    highlight: true,
    color: 'border-primary',
    features: [
      { text: 'All 6 courses + new releases', included: true },
      { text: 'Community access', included: true },
      { text: 'Progress tracking', included: true },
      { text: 'Mobile-friendly player', included: true },
      { text: 'Verified certificates', included: true },
      { text: 'Quizzes & assessments', included: true },
      { text: 'Downloadable resources', included: true },
      { text: 'Priority email support', included: true },
    ],
  },
  {
    id: 'team',
    name: 'Team',
    price: '₦12,000',
    period: 'per seat / month',
    tagline: 'Scale learning across your marketing team',
    cta: 'Start Team Trial',
    ctaTo: '/academy/sign-up?plan=team',
    highlight: false,
    color: 'border-gray-200',
    min: 5,
    features: [
      { text: 'Everything in Pro', included: true },
      { text: '5–50 seats', included: true },
      { text: 'Admin dashboard', included: true },
      { text: 'Team progress reports', included: true },
      { text: 'Bulk enrollment', included: true },
      { text: 'Custom learning paths', included: true },
      { text: 'Team leaderboard', included: true },
      { text: 'Dedicated Slack support', included: true },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    tagline: 'For 50+ person organizations',
    cta: 'Contact Sales',
    ctaTo: '#contact-sales',
    highlight: false,
    color: 'border-gray-200',
    features: [
      { text: 'Everything in Team', included: true },
      { text: '50+ seats', included: true },
      { text: 'SSO / SAML integration', included: true },
      { text: 'Branded certificates', included: true },
      { text: 'Custom course creation', included: true },
      { text: 'Dedicated success manager', included: true },
      { text: 'SLA & uptime guarantee', included: true },
      { text: 'Quarterly strategy reviews', included: true },
    ],
  },
];

// ── Feature comparison table ─────────────────────────────────────────────────

const comparison = [
  { category: 'Content', rows: [
    { feature: 'Courses available', free: '3', pro: 'All 6+', team: 'All 6+', enterprise: 'All + Custom' },
    { feature: 'New course releases', free: false, pro: true, team: true, enterprise: true },
    { feature: 'Downloadable resources', free: false, pro: true, team: true, enterprise: true },
    { feature: 'Offline access', free: false, pro: false, team: false, enterprise: true },
  ]},
  { category: 'Learning', rows: [
    { feature: 'Progress tracking', free: true, pro: true, team: true, enterprise: true },
    { feature: 'Quizzes & assessments', free: false, pro: true, team: true, enterprise: true },
    { feature: 'Certificates', free: false, pro: 'Standard', team: 'Standard', enterprise: 'Branded' },
    { feature: 'LinkedIn sharing', free: false, pro: true, team: true, enterprise: true },
    { feature: 'Gamification & XP', free: false, pro: true, team: true, enterprise: true },
  ]},
  { category: 'Team', rows: [
    { feature: 'Seats', free: '1', pro: '1', team: '5–50', enterprise: '50+' },
    { feature: 'Admin dashboard', free: false, pro: false, team: true, enterprise: true },
    { feature: 'Bulk enrollment', free: false, pro: false, team: true, enterprise: true },
    { feature: 'Custom learning paths', free: false, pro: false, team: true, enterprise: true },
    { feature: 'Team leaderboard', free: false, pro: false, team: true, enterprise: true },
    { feature: 'Progress reports (CSV)', free: false, pro: false, team: true, enterprise: true },
    { feature: 'SSO / SAML', free: false, pro: false, team: false, enterprise: true },
  ]},
  { category: 'Support', rows: [
    { feature: 'Community forum', free: true, pro: true, team: true, enterprise: true },
    { feature: 'Email support', free: false, pro: true, team: true, enterprise: true },
    { feature: 'Slack channel', free: false, pro: false, team: true, enterprise: true },
    { feature: 'Dedicated CSM', free: false, pro: false, team: false, enterprise: true },
    { feature: 'SLA guarantee', free: false, pro: false, team: false, enterprise: true },
  ]},
];

const planKeys = ['free', 'pro', 'team', 'enterprise'];

const CellValue: React.FC<{ val: string | boolean }> = ({ val }) => {
  if (val === true) return <Check size={16} className="text-green-500 mx-auto" />;
  if (val === false) return <X size={16} className="text-gray-300 mx-auto" />;
  return <span className="text-xs font-bold text-text-dark">{val}</span>;
};

// ── Logos / Social Proof ──────────────────────────────────────────────────────

const logos = ['HubSpot', 'Flutterwave', 'PiggyVest', 'Kuda', 'Mono', 'Andela'];

const testimonials = [
  { quote: "MExt Academy transformed how our marketing team approaches growth. The GTM Automation course alone saved us 15+ hours per week.", name: 'Amaka O.', role: 'Head of Growth, Kuda', stars: 5 },
  { quote: "We enrolled our entire content team. The B2B Content Engine course gave us a repeatable framework that's already driving results.", name: 'Chidi N.', role: 'VP Marketing, Mono', stars: 5 },
  { quote: "The enterprise plan gave us branded certificates and an admin dashboard. Our team now has a 94% course completion rate.", name: 'Temi A.', role: 'L&D Manager, Andela', stars: 5 },
];

// ── EnterprisePage ────────────────────────────────────────────────────────────

const EnterprisePage: React.FC = () => {
  const [billingAnnual, setBillingAnnual] = useState(false);
  const [seats, setSeats] = useState(10);

  const getPrice = (plan: typeof plans[0]) => {
    if (plan.id === 'enterprise') return plan.price;
    const base = parseInt(plan.price.replace(/[^\d]/g, '')) || 0;
    if (base === 0) return plan.price;
    const monthly = billingAnnual ? Math.round(base * 0.8) : base;
    return `₦${monthly.toLocaleString()}`;
  };

  const teamTotal = billingAnnual
    ? Math.round(12000 * 0.8 * seats)
    : 12000 * seats;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#05060A] to-gray-900 text-white pt-24 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-widest mb-6">
            <Zap size={12} className="text-primary" /> MExt Academy for Teams
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-5">
            Level up your entire<br />
            <span className="text-primary">marketing team</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            World-class marketing education built specifically for African Fintech & B2B SaaS teams. From individual contributors to VP-level leaders.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#pricing" className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-orange-600 transition-colors">
              View Pricing
            </a>
            <a href="#contact-sales" className="px-8 py-4 border border-white/20 text-white rounded-full font-bold hover:bg-white/5 transition-colors">
              Talk to Sales
            </a>
          </div>
        </div>
      </section>

      {/* Logo strip */}
      <section className="py-10 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs text-text-muted uppercase tracking-widest mb-6 font-bold">Trusted by marketing teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos.map((l) => (
              <span key={l} className="text-sm font-bold text-gray-300">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Enterprise */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-display font-bold text-text-dark mb-3">Why teams choose MExt Academy</h2>
          <p className="text-text-muted max-w-xl mx-auto">Purpose-built for African marketing professionals with context-aware curriculum, not generic global content.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Building2, title: 'African-market context', desc: 'Curriculum built around Fintech, B2B SaaS, and emerging market dynamics — not Silicon Valley playbooks recycled for Lagos.' },
            { icon: BarChart3, title: 'Measurable impact', desc: 'Admin dashboards, completion tracking, and quiz scores give L&D leads proof of ROI for every seat.' },
            { icon: Shield, title: 'Verified credentials', desc: 'Branded certificates your team can share on LinkedIn, verified by MExt Academy with unique QR codes.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 rounded-3xl p-7"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-text-dark mb-2">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-text-dark mb-3">Simple, transparent pricing</h2>
            <p className="text-text-muted mb-6">No hidden fees. Cancel anytime.</p>
            {/* Toggle */}
            <div className="inline-flex items-center gap-3 bg-white rounded-full p-1 border border-gray-200">
              <button
                onClick={() => setBillingAnnual(false)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${!billingAnnual ? 'bg-text-dark text-white shadow' : 'text-text-muted hover:text-text-dark'}`}
              >Monthly</button>
              <button
                onClick={() => setBillingAnnual(true)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${billingAnnual ? 'bg-text-dark text-white shadow' : 'text-text-muted hover:text-text-dark'}`}
              >
                Annual
                <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-bold">-20%</span>
              </button>
            </div>
          </div>

          {/* Plan cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative bg-white rounded-3xl p-6 border-2 ${plan.highlight ? 'border-primary shadow-xl shadow-primary/10' : plan.color}`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">{plan.name}</p>
                <div className="mb-1">
                  <span className="text-3xl font-display font-bold text-text-dark">{getPrice(plan)}</span>
                  {plan.id !== 'enterprise' && <span className="text-xs text-text-muted ml-1">/{plan.period}</span>}
                </div>
                {plan.id === 'enterprise' && <p className="text-xs text-text-muted mb-1">contact us</p>}
                {plan.min && <p className="text-xs text-text-muted mb-3">minimum {plan.min} seats</p>}
                <p className="text-xs text-text-muted mb-5 leading-relaxed">{plan.tagline}</p>
                <Link
                  to={plan.ctaTo.startsWith('#') ? '#contact-sales' : plan.ctaTo}
                  className={`block w-full text-center py-2.5 rounded-xl font-bold text-sm transition-colors mb-6 ${plan.highlight ? 'bg-primary text-white hover:bg-orange-600' : 'bg-gray-50 text-text-dark hover:bg-gray-100 border border-gray-200'}`}
                >
                  {plan.cta}
                </Link>
                <ul className="space-y-2.5">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2.5">
                      {f.included
                        ? <Check size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                        : <X size={15} className="text-gray-300 flex-shrink-0 mt-0.5" />}
                      <span className={`text-xs ${f.included ? 'text-text-dark' : 'text-text-muted'}`}>{f.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Team seat calculator */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 max-w-xl mx-auto text-center">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
              <Users size={22} className="text-primary" />
            </div>
            <h3 className="font-display font-bold text-xl text-text-dark mb-2">Team Seat Calculator</h3>
            <p className="text-text-muted text-sm mb-6">How many people on your team?</p>
            <div className="flex items-center gap-4 justify-center mb-4">
              <button onClick={() => setSeats((s) => Math.max(5, s - 5))} className="w-10 h-10 rounded-full border-2 border-gray-200 font-bold text-lg hover:border-primary transition-colors">−</button>
              <span className="text-4xl font-display font-bold text-text-dark w-20 text-center">{seats}</span>
              <button onClick={() => setSeats((s) => Math.min(50, s + 5))} className="w-10 h-10 rounded-full border-2 border-gray-200 font-bold text-lg hover:border-primary transition-colors">+</button>
            </div>
            <p className="text-text-muted text-xs mb-5">
              {seats} seats × {billingAnnual ? '₦9,600' : '₦12,000'}/seat/month {billingAnnual ? '(annual billing)' : ''}
            </p>
            <div className="text-3xl font-display font-bold text-primary mb-5">
              ₦{teamTotal.toLocaleString()}<span className="text-base text-text-muted font-normal">/month</span>
            </div>
            {seats >= 50 && (
              <p className="text-sm text-text-muted mb-4">Need 50+ seats? <a href="#contact-sales" className="text-primary font-bold hover:underline">Talk to enterprise sales</a></p>
            )}
            <Link to={`/academy/sign-up?plan=team&seats=${seats}`} className="block w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-orange-600 transition-colors">
              Start {seats}-Seat Team Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="py-20 px-4 max-w-6xl mx-auto overflow-x-auto">
        <h2 className="text-3xl font-display font-bold text-text-dark text-center mb-12">Full feature comparison</h2>
        <table className="w-full min-w-[700px]">
          <thead>
            <tr>
              <th className="text-left pb-4 text-sm font-bold text-text-muted w-2/5">Feature</th>
              {plans.map((p) => (
                <th key={p.id} className={`pb-4 text-sm font-bold text-center ${p.highlight ? 'text-primary' : 'text-text-dark'}`}>{p.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.map((cat) => (
              <React.Fragment key={cat.category}>
                <tr>
                  <td colSpan={5} className="pt-6 pb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-text-muted">{cat.category}</span>
                  </td>
                </tr>
                {cat.rows.map((row) => (
                  <tr key={row.feature} className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="py-3 text-sm text-text-dark">{row.feature}</td>
                    {planKeys.map((pk) => (
                      <td key={pk} className="py-3 text-center">
                        <CellValue val={row[pk as keyof typeof row] as string | boolean} />
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-text-dark text-center mb-12">What teams say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex mb-4">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star key={si} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-text-dark leading-relaxed mb-4 italic">"{t.quote}"</p>
                <div>
                  <p className="text-sm font-bold text-text-dark">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Sales / Enterprise CTA */}
      <section id="contact-sales" className="py-24 px-4 bg-gradient-to-br from-[#05060A] to-gray-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
            <Building2 size={28} className="text-primary" />
          </div>
          <h2 className="text-3xl font-display font-bold mb-4">Talk to our enterprise team</h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Custom pricing, SSO, branded certificates, dedicated support, and quarterly strategy reviews for 50+ person organizations.
          </p>
          <form
            className="space-y-4 text-left"
            onSubmit={(e) => { e.preventDefault(); alert('Thanks! Our team will reach out within 24 hours.'); }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full name" required className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-primary transition-colors" />
              <input type="email" placeholder="Work email" required className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Company name" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-primary transition-colors" />
              <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white/80 text-sm focus:outline-none focus:border-primary transition-colors">
                <option value="" className="bg-gray-900">Team size</option>
                <option value="10-25" className="bg-gray-900">10–25 people</option>
                <option value="25-50" className="bg-gray-900">25–50 people</option>
                <option value="50-100" className="bg-gray-900">50–100 people</option>
                <option value="100+" className="bg-gray-900">100+ people</option>
              </select>
            </div>
            <textarea rows={3} placeholder="What are your learning goals for the team?" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
            <button type="submit" className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
              Request Enterprise Demo <ChevronRight size={18} />
            </button>
          </form>
          <p className="text-white/30 text-xs mt-4 text-center">We typically respond within 24 business hours.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 max-w-2xl mx-auto">
        <h2 className="text-2xl font-display font-bold text-text-dark text-center mb-10">Frequently asked questions</h2>
        <div className="space-y-6">
          {[
            { q: 'Can I switch plans?', a: 'Yes, you can upgrade or downgrade at any time. Changes take effect at the next billing cycle.' },
            { q: 'Is there a free trial for Team plans?', a: 'Yes — Team plans come with a 14-day free trial. No credit card required.' },
            { q: 'How are seats counted?', a: 'Each active user counts as one seat. You can add or remove seats at any time.' },
            { q: 'Do certificates expire?', a: 'No. Once earned, certificates are permanently yours and linked to your profile for verification.' },
            { q: 'What payment methods do you accept?', a: 'We accept bank transfers, cards (Paystack), and can issue invoices for enterprise accounts.' },
          ].map((faq, i) => (
            <div key={i} className="border-b border-gray-100 pb-5">
              <p className="font-bold text-text-dark mb-2">{faq.q}</p>
              <p className="text-text-muted text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EnterprisePage;
