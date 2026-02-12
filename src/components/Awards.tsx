
import React from 'react';
import { motion } from 'framer-motion';

const Awards: React.FC = () => {
  const items = [
    { title: 'Embedded Growth Partner', desc: 'Trusted to operate inside fintech, infra, and SaaS companies as an extension of leadership—not an external vendor.', linkText: 'View case studies →' },
    { title: 'Investor-Ready GTM Narratives', desc: 'Supported seed to Series B raises with positioning, messaging, and proof frameworks that stand up in diligence rooms.', linkText: 'View fundraising work →' },
    { title: 'Multi-Market GTM Execution', desc: 'Designed and executed go-to-market programs across Nigeria, East Africa, and pan-African contexts.', linkText: 'View regional work →' },
    { title: 'Marketing Operating Systems', desc: 'Built marketing OS foundations—processes, metrics, talent models, and reporting—inside scaling teams.', linkText: 'View marketing OS →' },
    { title: 'Narrative-Led Brand & UX Work', desc: 'Recognized by founders and operators for clarity, restraint, and conversion-focused design.', linkText: 'View selected work →' },
    { title: '10+ High-Impact Engagements', desc: 'Across fintech, payments infrastructure, regtech, SaaS, and growth-stage platforms.', linkText: 'Explore all →' }
  ];

  return (
    <section className="bg-white py-32 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-6">Recognition</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Wins that keep <span className="text-primary">raising the bar</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bg-gray border border-bg-gray">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ backgroundColor: '#F9FAFB' }}
              className="bg-white p-12 flex flex-col justify-between group"
            >
              <div>
                <div className="h-10 w-24 bg-bg-gray rounded-md mb-8 group-hover:bg-primary/10 transition-colors" />
                <h4 className="text-xl font-display font-bold text-text-dark mb-4">{item.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
              <button className="mt-10 text-xs font-bold uppercase tracking-widest text-text-muted group-hover:text-primary transition-colors text-left">
                {item.linkText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
