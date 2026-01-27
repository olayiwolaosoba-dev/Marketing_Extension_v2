
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu as MenuIcon, X, ArrowRight, Play, BookOpen, FileText, Video, Users, Calendar, BarChart2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onNavigate?: (page: any) => void; // Deprecated but kept for transition compatibility if needed
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Services', id: 'services' },
    { label: 'Our Work', id: 'our-work', path: '/case-studies', noMega: true },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Resources', id: 'resources' },
    { label: 'Pricing', id: 'pricing', path: '/pricing', noMega: true },
    { label: 'Insights', id: 'insights', path: '/insights', noMega: true },
  ];

  const closeMenu = () => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  };

  // Visibility logic
  const isHome = location.pathname === '/';
  const isLightMode = scrolled || activeMenu || !isHome;
  const textColor = isLightMode ? 'text-text-dark' : 'text-white';
  const headerBg = (scrolled || activeMenu) ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6';

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${headerBg}`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2 group outline-none">
            <img
              src="/src/assets/logo.png"
              alt="Marketing Extension"
              className={`h-8 w-auto transition-all duration-300 ${!isLightMode ? 'brightness-0 invert' : ''}`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative py-2"
                onMouseEnter={() => !item.noMega && setActiveMenu(item.id)}
              >
                {item.noMega ? (
                  <Link
                    to={item.path || '#'}
                    onClick={closeMenu}
                    className={`flex items-center gap-1 font-semibold text-sm transition-colors duration-300 ${activeMenu === item.id ? 'text-primary' : textColor} hover:text-primary`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className={`flex items-center gap-1 font-semibold text-sm transition-colors duration-300 ${activeMenu === item.id ? 'text-primary' : textColor} hover:text-primary`}
                  >
                    {item.label}
                    <motion.span
                      animate={{ rotate: activeMenu === item.id ? 180 : 0 }}
                      className="ml-0.5 opacity-50"
                    >
                      <ChevronDown size={14} />
                    </motion.span>
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Dynamic Auth Buttons & Audit CTA */}
          <div className="flex items-center gap-4">
            {/* Audit CTA */}
            <Link
              to="/audit"
              className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-primary-dark transition-all duration-300 border border-transparent px-5 py-2.5 rounded-full bg-primary shadow-lg shadow-primary/20"
            >
              <BarChart2 size={16} />
              Free Audit
            </Link>

            {location.pathname.startsWith('/academy') ? (
              <div className="flex items-center gap-6">
                <Link to="/auth/login" className={`text-sm font-bold ${isLightMode ? 'text-text-muted hover:text-text-dark' : 'text-white/80 hover:text-white'} transition-colors`}>
                  Client Sign In
                </Link>
                <Link to="/academy/sign-in" className="px-6 py-2.5 rounded-full font-bold text-sm bg-primary text-white hover:bg-primary-dark shadow-lg transition-all duration-300">
                  Student Sign In
                </Link>
              </div>
            ) : (
              <Link to="/auth/login" className={`px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 ${isLightMode ? 'bg-text-dark text-white hover:bg-primary shadow-lg' : 'bg-white text-text-dark hover:bg-primary hover:text-white shadow-lg'}`}>
                Client Sign In
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 transition-colors duration-300 ${mobileMenuOpen ? 'text-text-dark' : textColor}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>


        {/* Mega Menus Container */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl overflow-hidden"
            >
              <div className="container mx-auto px-6 max-w-7xl py-12">
                {activeMenu === 'services' && <ServicesMega closeMenu={closeMenu} />}
                {activeMenu === 'why-us' && <WhyUsMega closeMenu={closeMenu} />}
                {activeMenu === 'resources' && <ResourcesMega closeMenu={closeMenu} onNavigate={(page) => { /* legacy handler */ }} />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header >

      {/* Page Backdrop */}
      <AnimatePresence>
        {
          activeMenu && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-[90] pointer-events-none"
            />
          )
        }
      </AnimatePresence >

      {/* Mobile Menu */}
      <AnimatePresence>
        {
          mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              className="fixed inset-0 top-[72px] bg-bg-light z-[99] lg:hidden overflow-y-auto px-6 py-10"
            >
              <div className="flex flex-col gap-6">
                {menuItems.map(item => (
                  item.noMega ? (
                    <Link
                      key={item.id}
                      to={item.path || '#'}
                      onClick={closeMenu}
                      className="text-2xl font-display font-bold text-left border-b border-gray-100 pb-4 flex items-center justify-between"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.id}
                      className="text-2xl font-display font-bold text-left border-b border-gray-100 pb-4 flex items-center justify-between"
                    >
                      {item.label} <ChevronDown size={20} className="text-primary" />
                    </button>
                  )
                ))}
                <div className="pt-4 space-y-4">
                  <Link to="/auth/login" onClick={closeMenu} className="block w-full py-3 text-center border border-gray-300 rounded-full font-bold text-text-dark">Sign In</Link>
                </div>
              </div>
            </motion.div>
          )
        }
      </AnimatePresence >
    </>
  );
};

/* --- MEGA MENU COMPONENTS --- */

const ServicesMega = ({ onNavigate, closeMenu }: { onNavigate: (page: string) => void; closeMenu?: () => void }) => {
  const [activeTab, setActiveTab] = useState('marketing-consulting');

  const pillars = [
    {
      id: 'marketing-consulting',
      path: '/services/marketing-consulting',
      label: 'Marketing Consulting',
      items: ['GTM & Launch Strategy', 'Campaign Strategy', 'Audience Research', 'Brand Narrative'],
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'contentplus',
      path: '/contentplus',
      label: 'ContentPlus',
      items: ['Creative Design Services', 'Specialized Production', 'Copywriting', 'AI Services'],
      img: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'martech-studio',
      path: '/services/martech',
      label: 'Martech Studio',
      items: ['Web & Product Experiences', 'Marketing Automation', 'Analytics & Integration', 'AI-First Systems'],
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    },
  ];

  const active = pillars.find(p => p.id === activeTab)!;

  return (
    <div className="grid grid-cols-[250px_1fr_400px] gap-12">
      <div className="border-r border-gray-100 pr-12 flex flex-col gap-2">
        <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-4">Core Pillars</p>
        {pillars.map(p => (
          <Link
            key={p.id}
            to={p.path}
            onMouseEnter={() => setActiveTab(p.id)}
            onClick={closeMenu}
            className={`text-left py-3 px-4 rounded-xl font-display font-bold text-lg transition-all ${activeTab === p.id ? 'bg-bg-gray text-primary translate-x-2' : 'text-text-muted hover:text-text-dark'}`}
          >
            {p.label}
          </Link>
        ))}
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="text-3xl font-display font-bold mb-8 text-text-dark">{active.label}</h3>
        <ul className="grid grid-cols-1 gap-4">
          {active.items.map(item => (
            <li key={item} className="flex items-center gap-3 group">
              <Link to={active.path} onClick={closeMenu} className="flex items-center gap-3 w-full">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                <span className="text-lg font-medium text-text-muted group-hover:text-text-dark transition-colors">{item}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link to={active.path} onClick={closeMenu} className="mt-10 flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all uppercase tracking-widest text-xs">
          Explore {active.label} <ArrowRight size={14} />
        </Link>
      </div>

      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-bg-gray shadow-xl">
        <motion.img
          key={activeTab}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          src={active.img}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const WhyUsMega = ({ onNavigate, closeMenu }: { onNavigate: (page: string) => void; closeMenu?: () => void }) => {
  const cards = [
    { id: 'why-us-talent', path: '/why-us/talent', title: 'Our Talent', desc: 'Senior strategists plugged directly into your roadmap.', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600' },
    { id: 'why-us-ai', path: '/why-us/ai-excellence', title: 'AI Excellence', desc: 'Accelerated creative output through AI-augmented workflows.', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600' },
    { id: 'why-us-tech', path: '/why-us/technology', title: 'Our Technology', desc: 'A unified operating system for total marketing transparency.', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600' },
  ];
  return (
    <div className="grid grid-cols-3 gap-6">
      {cards.map(card => (
        <Link key={card.id} to={card.path} onClick={closeMenu} className="group cursor-pointer rounded-[32px] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all">
          <div className="aspect-[16/9] overflow-hidden"><img src={card.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform" /></div>
          <div className="p-6 bg-white"><h4 className="font-display font-bold text-lg mb-2">{card.title}</h4><p className="text-sm text-text-muted">{card.desc}</p></div>
        </Link>
      ))}
    </div>
  );
};

const ResourcesMega = ({ onNavigate, closeMenu }: { onNavigate: (page: string) => void; closeMenu: () => void }) => {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr] gap-8">
      {/* Column 1: Learning Center */}
      <div className="flex flex-col h-full">
        <Link
          to="/resources/learn"
          onClick={closeMenu}
          className="text-left group"
        >
          <div className="flex items-center gap-2 mb-2">
            <h4 className="text-lg font-display font-bold text-text-dark group-hover:text-primary transition-colors">Learning Center</h4>
            <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
          </div>
          <p className="text-sm text-text-muted mb-6">
            Access our full library of growth playbooks, GTM frameworks, and strategic guides.
          </p>
        </Link>

        <Link
          to="/academy"
          onClick={() => {
            closeMenu();
          }}
          className="text-left group mt-4 pt-4 border-t border-gray-100 block"
        >
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-lg font-display font-bold text-text-dark group-hover:text-primary transition-colors">MExt University</h4>
            <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
          </div>
          <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">NextGen University</span>
          <p className="text-sm text-text-muted">
            The digital learning & certification center for modern marketers.
          </p>
        </Link>
      </div>

      {/* Column 2: Links List */}
      <div className="border-l border-gray-100 pl-8 flex flex-col gap-4">
        {[
          { label: "Events & Summits", sub: "Upcoming events and recordings", icon: Calendar, path: '/resources/events' },
          { label: "Guides", sub: "Insights from marketing leaders", icon: FileText, path: '/resources/guides' },
          { label: "Reports", sub: "Data for smarter decisions", icon: BarChart2, path: '/resources/reports' },
          { label: "Video Library", sub: "Latest videos", icon: Video, path: '/resources/videos' },
          { label: "Playbooks", sub: "Quick ways to step up your game", icon: BookOpen, path: '/resources/playbooks' },
        ].map((item, i) => (
          <Link
            key={i}
            to={item.path}
            onClick={closeMenu}
            className="flex items-start gap-4 p-3 rounded-xl hover:bg-bg-gray transition-colors group text-left"
          >
            <item.icon size={20} className="text-text-muted group-hover:text-primary mt-1 transition-colors" />
            <div>
              <div className="font-bold text-text-dark text-sm">{item.label}</div>
              <div className="text-xs text-text-muted">{item.sub}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Column 3: Featured Story */}
      <div className="pl-8 border-l border-gray-100">
        <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4">Featured Story</p>
        <div className="group cursor-pointer">
          <div className="rounded-xl overflow-hidden mb-4 relative aspect-video">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          </div>
          <h5 className="font-display font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
            How a Fortune 500 doubled their AI adoption
          </h5>
          <div className="flex items-center gap-2 text-sm font-bold text-text-muted group-hover:text-primary transition-colors">
            Read Story <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
