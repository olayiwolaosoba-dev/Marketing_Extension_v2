import React, { useState } from 'react';
import { ArrowRight, Search, MapPin, Clock } from 'lucide-react';

const OpenRoles: React.FC = () => {
    const roles = [
        { title: "Senior Growth Strategist", team: "Consulting", loc: "Lagos / Remote", type: "Full-time" },
        { title: "Performance Marketing Lead", team: "Growth", loc: "Remote", type: "Contract" },
        { title: "Creative Director", team: "Content+", loc: "Lagos / London", type: "Full-time" },
        { title: "MarTech Solutions Architect", team: "Technology", loc: "Remote", type: "Full-time" },
        { title: "Content Operations Manager", team: "Content+", loc: "Lagos", type: "Full-time" },
        { title: "SEO Specialist", team: "Growth", loc: "Remote", type: "Contract" }
    ];

    const [filter, setFilter] = useState('');

    return (
        <section className="bg-bg-light py-24 md:py-32" id="open-roles">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-bg-dark mb-6">Open roles</h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">
                        Find your place in the engine.
                    </p>
                </div>

                {/* Filters */}
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-12 flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search roles..."
                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-bg-gray border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-colors"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
                        {['All', 'Consulting', 'Content+', 'Growth', 'Technology'].map(cat => (
                            <button key={cat} className="px-6 py-3 rounded-xl font-bold text-sm bg-bg-gray hover:bg-bg-dark hover:text-white transition-colors whitespace-nowrap">
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Roles List */}
                <div className="space-y-4">
                    {roles.map((role, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all group cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h3 className="text-xl font-bold text-bg-dark group-hover:text-primary transition-colors mb-2">{role.title}</h3>
                                <div className="flex flex-wrap gap-4 text-sm text-text-muted">
                                    <span className="px-3 py-1 bg-bg-gray rounded-full font-medium">{role.team}</span>
                                    <span className="flex items-center gap-1"><MapPin size={14} /> {role.loc}</span>
                                    <span className="flex items-center gap-1"><Clock size={14} /> {role.type}</span>
                                </div>
                            </div>
                            <button className="px-6 py-3 rounded-full border border-gray-200 font-bold text-sm group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                                View role
                            </button>
                        </div>
                    ))}
                </div>

                {/* Talent Bench */}
                <div className="mt-16 bg-bg-dark text-white rounded-3xl p-10 md:p-16 text-center">
                    <h3 className="text-2xl font-bold mb-4 font-display">No perfect fit?</h3>
                    <p className="text-white/60 mb-8 max-w-lg mx-auto">
                        We're always looking for elite talent to join our bench. Join 100+ consultants in the network.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input type="email" placeholder="Your email address" className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/10 focus:border-primary focus:outline-none text-white placeholder:text-white/40" />
                        <button className="px-8 py-4 rounded-full bg-primary font-bold hover:bg-primary-dark transition-colors">
                            Join Bench
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OpenRoles;
