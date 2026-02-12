import React from 'react';
import { Linkedin, Twitter, Instagram, Globe, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onNavigate?: (page: 'home' | 'marketing-consulting') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative bg-gray-50 pt-32 pb-12 overflow-hidden">
      {/* Liquid / Glass Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-200/20 blur-[120px] rounded-full mix-blend-multiply opacity-70 animate-blob" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/20 blur-[120px] rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Glass Container */}
        <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-12 shadow-2xl shadow-gray-200/50">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

            {/* Brand Column (Left - wider) */}
            <div className="lg:col-span-4 space-y-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-orange-500/30">
                  M
                </div>
                <span className="text-xl font-bold tracking-tight text-gray-900">Marketing Extension</span>
              </div>

              <p className="text-lg leading-relaxed text-gray-600 max-w-sm">
                Embedded growth partners for ambitious teams. We move from ideas to execution, and from execution to outcomes.
              </p>

              <div className="flex gap-4">
                {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:bg-black hover:border-black transition-all duration-300 group"
                  >
                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

              {/* Column 2 */}
              <div className="space-y-6">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400">Services</h4>
                <ul className="space-y-4">
                  {[
                    'Growth Strategy',
                    'Demand Generation',
                    'Marketing Ops',
                    'Brand Positioning',
                    'Capital Narratives'
                  ].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2 group">
                        {item}
                        <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-500" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3 */}
              <div className="space-y-6">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400">Academy</h4>
                <ul className="space-y-4">
                  {[
                    { name: 'All Courses', path: '/academy/courses' },
                    { name: 'Live Cohorts', path: '/academy/cohorts' },
                    { name: 'Certifications', path: '' },
                    { name: 'Community', path: '' },
                  ].map((item, idx) => (
                    <li key={idx}>
                      {item.path ? (
                        <Link to={item.path} className="text-gray-600 hover:text-orange-600 transition-colors block">
                          {item.name}
                        </Link>
                      ) : (
                        <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors block">
                          {item.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-full border border-orange-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                  Enrolling Now
                </div>
              </div>

              {/* Column 4 - Locations */}
              <div className="space-y-6">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400">Locations</h4>
                <div className="space-y-4">
                  <p className="text-gray-900 font-medium">Africa · United Kingdom</p>
                  <div className="flex flex-wrap gap-2">
                    {['Nigeria', 'Ghana', 'Kenya', 'Rwanda', 'Senegal', 'UK'].map((loc) => (
                      <span key={loc} className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-500">
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-6">
              <span className="font-medium text-gray-900">© 2026 Marketing Extension</span>
              <span className="hidden md:inline text-gray-300">|</span>
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
            </div>

            <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <span>Designing systems that scale</span>
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
