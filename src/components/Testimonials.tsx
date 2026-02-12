
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Play } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div>
            <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-6">Client Feedback</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-text-dark">
              Trusted by leaders building in regulated market
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="px-5 py-4 bg-bg-gray rounded-xl flex items-center gap-3">
              <span className="text-sm font-bold font-display text-text-dark">Payments & Fintech</span>
              <div className="flex text-primary">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
            </div>
            <div className="px-5 py-4 bg-bg-gray rounded-xl flex items-center gap-3">
              <span className="text-sm font-bold font-display text-text-dark">RegTech & Security</span>
              <div className="flex text-primary">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Payments / Infra */}
          <div className="bg-bg-gray p-10 rounded-[32px] flex flex-col group cursor-pointer overflow-hidden relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100" alt="CEO" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-text-dark">CEO</p>
                <p className="text-xs text-text-muted">Regulated Payments Infrastructure</p>
              </div>
            </div>
            <p className="text-lg font-display font-medium text-text-dark leading-relaxed mb-8 italic">
              "They didn’t just deliver assets, they built our marketing operating system. Strategy, execution, and measurement finally moved as one."
            </p>
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors pointer-events-none" />
          </div>

          {/* Card 2: Crypto / Consumer */}
          <div className="bg-bg-gray p-8 rounded-[32px] flex flex-col group cursor-pointer relative overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100" alt="Marketing Lead" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-text-dark">Marketing Lead</p>
                <p className="text-xs text-text-muted">Crypto Exchange</p>
              </div>
            </div>
            <p className="text-lg font-display font-medium text-text-dark leading-relaxed mb-6 italic">
              "They helped us build a campaign platform that felt culturally real and still performed. We gained adoption without compromising trust or credibility."
            </p>
            <div className="mt-auto pt-6 border-t border-gray-200/60">
              <button className="text-sm font-bold text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                See how the campaign was built <Play size={14} fill="currentColor" />
              </button>
            </div>
          </div>

          {/* Card 3: RegTech / Cybersecurity */}
          <div className="bg-bg-gray p-10 rounded-[32px] flex flex-col group cursor-pointer overflow-hidden relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100" alt="Founder" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-text-dark">Founder</p>
                <p className="text-xs text-text-muted">RegTech & Cybersecurity Group</p>
              </div>
            </div>
            <p className="text-lg font-display font-medium text-text-dark leading-relaxed mb-8 italic">
              "Marketing Extension brought structure to chaos, message clarity, GTM focus, and an execution cadence we could sustain. It changed how the business thinks about marketing."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
