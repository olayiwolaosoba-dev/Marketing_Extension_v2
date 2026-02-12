import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NextCaseStudies: React.FC = () => {
    // This could also take an "excludeId" prop to filter out current
    const cases = [
        {
            title: "Zone: Regulated Blockchain",
            path: "/work/zone-regulated-blockchain-payments",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Smartcomply: Full-Funnel Growth",
            path: "/work/smartcomply-full-funnel-growth-engine",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex justify-between items-end mb-12">
                    <h3 className="text-2xl font-display font-bold text-bg-dark">Next Case Studies</h3>
                    <Link to="/case-studies" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
                        View all work <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {cases.map((c, i) => (
                        <Link key={i} to={c.path} className="group cursor-pointer">
                            <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-6 relative">
                                <img src={c.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                            </div>
                            <h4 className="text-2xl font-bold text-bg-dark group-hover:text-primary transition-colors flex items-center gap-2">
                                {c.title} <ArrowRight size={20} className="text-bg-dark group-hover:text-primary opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                            </h4>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NextCaseStudies;
