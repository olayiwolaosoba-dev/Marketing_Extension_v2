
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getGuideBySlug } from '../../data/guides';
import GuideHero from '../../components/guides/GuideHero';
import AccessGate from '../../components/guides/AccessGate';
import { Quote } from 'lucide-react';

const GuideDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const guide = getGuideBySlug(slug || '');

    if (!guide) {
        return <Navigate to="/resources/guides" replace />;
    }

    return (
        <div className="min-h-screen bg-white">
            <GuideHero guide={guide} />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-[1fr_350px] gap-12 py-16">
                    {/* Main Content Column */}
                    <div>
                        {/* HOOK */}
                        <div className="prose prose-lg max-w-none mb-16">
                            <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight text-gray-900 mb-6">
                                {guide.hookHeadline}
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-primary pl-6">
                                {guide.hookText}
                            </p>
                        </div>

                        {/* WHAT'S INSIDE */}
                        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
                            <h3 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">What's Inside</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {guide.keyTopics.map((topic, i) => (
                                    <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                        <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                                            {topic.icon && <topic.icon size={20} />}
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-2 leading-tight">{topic.title}</h4>
                                        <p className="text-xs text-gray-500">{topic.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* PREVIEW CONTENT */}
                        <div className="relative mb-16">
                            {guide.sections.map((section, i) => (
                                <div key={i} className="mb-10">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">{section.content}</p>
                                </div>
                            ))}

                            {/* Fade out if gated */}
                            {guide.gated && (
                                <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none" />
                            )}
                        </div>

                        {/* GATE / DOWNLOAD REVEAL */}
                        <div id="content-gate">
                            <AccessGate guide={guide} />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-10">
                        {/* Contributors */}
                        {guide.contributors.length > 0 && (
                            <div>
                                <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-6">Contributors</h4>
                                <div className="space-y-4">
                                    {guide.contributors.map((c, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-gray-100">
                                                <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900">{c.name}</div>
                                                <div className="text-xs text-gray-500">{c.title}, {c.company}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quotes */}
                        {guide.quotes.length > 0 && (
                            <div className="bg-primary/5 p-8 rounded-2xl relative">
                                <Quote className="text-primary/20 absolute top-6 right-6" size={40} />
                                <p className="text-lg font-display font-bold text-primary mb-4 relative z-10">
                                    "{guide.quotes[0].text}"
                                </p>
                                <div className="text-sm">
                                    <span className="font-bold text-gray-900">{guide.quotes[0].author}</span>
                                    <span className="text-gray-500 block">{guide.quotes[0].title}</span>
                                </div>
                            </div>
                        )}

                        {/* Sticky CTA for Sidebar? Optional. */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideDetailPage;
