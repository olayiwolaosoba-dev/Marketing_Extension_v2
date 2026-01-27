
import React, { useState, useMemo } from 'react';
import { Search, Mail, ArrowRight } from 'lucide-react';
import { guides, GuideCategory } from '../../data/guides';
import GuideCard from '../../components/guides/GuideCard';
import { Link } from 'react-router-dom';

const GuidesIndexPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<GuideCategory | 'All'>('All');

    const featuredGuides = guides.filter(g => g.featured).slice(0, 2);

    // Determine which guides to show in the grid (exclude featured ones unless filtering? Common pattern is to just show everything or exclude. Let's exclude featured for now if they are top)
    // Actually, widespread pattern: if filtering, show everything. If 'All', maybe show featured at top then rest below.
    // Simpler: Show all in grid if filtering. If no filter, featured section + grid of others.

    const gridGuides = useMemo(() => {
        let filtered = guides;

        if (selectedCategory !== 'All') {
            filtered = filtered.filter(g => g.category === selectedCategory);
        }

        if (searchQuery) {
            filtered = filtered.filter(g =>
                g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                g.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // If 'All' and no search, exclude featured to avoid duplication since they are in Hero
        if (selectedCategory === 'All' && !searchQuery) {
            filtered = filtered.filter(g => !g.featured);
        }

        return filtered;
    }, [searchQuery, selectedCategory]);

    return (
        <div className="min-h-screen bg-white">
            {/* HERO */}
            <section className="bg-gray-50 pt-32 pb-20 px-6 border-b border-gray-200">
                <div className="container mx-auto max-w-7xl">
                    <div className="max-w-3xl mb-12">
                        <div className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Learning Center</div>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">Guides & Playbooks</h1>
                        <p className="text-xl text-gray-600">Practical frameworks for founders and marketing teams. Built from real work, not theory.</p>
                    </div>

                    {/* Featured Row */}
                    {selectedCategory === 'All' && !searchQuery && (
                        <div className="grid md:grid-cols-2 gap-8 mt-16">
                            {featuredGuides.map(guide => (
                                <Link
                                    key={guide.slug}
                                    to={`/resources/guides/${guide.slug}`}
                                    className="group relative rounded-3xl overflow-hidden aspect-[16/9] shadow-lg hover:shadow-2xl transition-all"
                                >
                                    <img
                                        src={guide.coverImage}
                                        alt={guide.title}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                    <div className="absolute bottom-0 left-0 p-8 md:p-10">
                                        <div className="mb-4">
                                            <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-wider border border-white/20">
                                                Featured {guide.category}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-display leading-tight">{guide.title}</h2>
                                        <div className="flex items-center gap-2 text-white/80 text-sm font-bold group-hover:text-primary transition-colors mt-4">
                                            Read Playbook <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CONTROL BAR */}
            <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-6">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                            {(['All', 'Strategy', 'Growth', 'Brand', 'Content', 'AI', 'Operations'] as const).map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${selectedCategory === cat
                                            ? 'bg-text-dark text-white'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-64 shrink-0">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search guides..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* GRID */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    {gridGuides.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {gridGuides.map(guide => (
                                <GuideCard key={guide.slug} guide={guide} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 text-gray-500">
                            No guides found matching your filters.
                        </div>
                    )}
                </div>
            </section>

            {/* NEWSLETTER */}
            <section className="py-24 bg-bg-dark text-white">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30">
                        <Mail size={24} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-display font-bold mb-4">Get new guides when we publish.</h2>
                    <p className="text-white/60 mb-8">Join 20,000+ founders receiving our weekly deep dives.</p>
                    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-white/10 border border-white/10 rounded-lg px-4 py-3 placeholder-white/30 text-white focus:outline-none focus:border-primary"
                        />
                        <button className="bg-white text-bg-dark font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default GuidesIndexPage;
