
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CaseStudy } from '../types';

const cases: CaseStudy[] = [
  {
    id: '1',
    title: 'Zone — Building Africa’s First Regulated Blockchain Network for Payments',
    industry: 'Payments / Fintech Infra',
    location: 'Nigeria',
    tags: ['Strategy', 'GTM', 'Marketing_OS'],
    techStack: 'Brand architecture, PR & executive branding, marketing OS',
    timeline: '2022 – Present',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200',
    path: '/work/zone-regulated-blockchain-payments',
    results: [
      'Onboarded 12+ leading banks + 500+ microfinance banks onto the network',
      'Spun out & branded two standalone businesses (Zone + Qore)',
      'Supported an $8.5m+ capital raise with an investor-ready narrative'
    ]
  },
  {
    id: '2',
    title: 'VERYPAY — Building a Multi-Country Marketing Bench for Africa’s Mobile Money Rail',
    industry: 'Fintech / Payments',
    location: 'Africa',
    tags: ['Talent_Bench', 'Operating_Model', 'Multi_Country'],
    techStack: 'Operating-model design, multi-country recruitment, oversight cadences',
    timeline: 'Oct 2024 – May 2025',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200',
    path: '/work/verypay-multi-country-marketing-bench',
    results: [
      '4 in-country marketing leaders installed across Uganda, Zimbabwe, SA, and Nigeria',
      'Standardised “what good looks like” for planning, execution, and reporting',
      'Fractional → full-time transitions enabled for high performers'
    ]
  },
  {
    id: '3',
    title: 'Smartcomply — From Social-Only Marketing to a Full-Funnel Growth Engine',
    industry: 'RegTech / Cybersecurity',
    location: 'Africa',
    tags: ['Fractional_CMO', 'Full_Funnel', 'Growth_OS'],
    techStack: 'Fractional CMO leadership, group narrative, product GTM, marketing OS',
    timeline: '2025 – Present',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    path: '/work/smartcomply-full-funnel-growth-engine',
    results: [
      '2–3× increase in qualified pipeline attributed to marketing touchpoints',
      'Unified group story across 4 suites (Adhere, Secure, Intel, Academy)',
      'Orchestrated major milestones as real campaigns (partner program, rebrand)'
    ]
  }
];

const CaseStudies: React.FC = () => {
  return (
    <section className="bg-bg-light py-16 lg:py-20">
      <div className="container mx-auto px-6 max-w-[1280px]">
        {/* Section Header */}
        <div className="mb-16 lg:mb-20">
          <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-4">Success Stories</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
            Discover how we’re driving <span className="text-primary">measurable</span> growth outcomes
          </h2>
        </div>

        <div className="space-y-20 lg:space-y-24">
          {cases.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-12 gap-10 lg:gap-10 items-center"
            >
              {/* Media Column (Left on Desktop) - 6 Columns */}
              <div className={`lg:col-span-6 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <Link to={cs.path || '#'} className="block relative aspect-[3/2] rounded-[22px] overflow-hidden group shadow-lg cursor-pointer">
                  <img src={cs.image} alt={cs.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </Link>
              </div>

              {/* Content Column (Right on Desktop) - 6 Columns */}
              <div className={`lg:col-span-6 flex flex-col justify-center ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>

                {/* BLOCK A: Context */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
                    {cs.tags.map(tag => (
                      <span key={tag} className="text-[13px] font-medium text-text-muted uppercase tracking-wide">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-[32px] lg:text-[40px] leading-[1.1] font-display font-bold text-text-dark mb-4">
                    {cs.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    <div className="bg-bg-gray px-3 py-1.5 rounded-lg text-xs font-bold uppercase flex items-center gap-2 text-text-dark">
                      <Globe size={12} className="text-primary" /> {cs.location}
                    </div>
                    <div className="bg-bg-gray px-3 py-1.5 rounded-lg text-xs font-bold uppercase text-text-dark">
                      {cs.industry}
                    </div>
                  </div>
                </div>

                {/* BLOCK B: Meta Row */}
                <div className="border-t border-gray-200 py-5 grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-[12px] font-bold text-text-muted uppercase tracking-widest mb-3">Channels & Stack</p>
                    <p className="text-[16px] leading-[1.4] font-medium text-text-dark">{cs.techStack}</p>
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-text-muted uppercase tracking-widest mb-3">Timeline</p>
                    <p className="text-[16px] leading-[1.4] font-medium text-text-dark">{cs.timeline}</p>
                  </div>
                </div>

                {/* BLOCK C: Outcomes */}
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-[12px] font-bold text-text-muted uppercase tracking-widest mb-3">Outcome Results</p>
                  <div className="flex flex-col gap-2.5">
                    {cs.results.map((r, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-[17px] leading-[1.4] font-medium text-text-dark">{r}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BLOCK D: CTA */}
                <div className="mt-5">
                  <Link to={cs.path || '#'} className="inline-flex h-[50px] px-8 bg-primary text-white rounded-full font-bold text-sm items-center gap-2 hover:bg-text-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-1px]">
                    Explore full case
                    <ArrowRight size={18} />
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
