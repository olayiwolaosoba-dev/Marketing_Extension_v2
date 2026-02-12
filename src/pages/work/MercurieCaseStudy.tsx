import React from 'react';
import CaseStudyHero from '../../components/work/CaseStudyHero';
import StickySnapshotBar from '../../components/work/StickySnapshotBar';
import ChapterNav from '../../components/work/ChapterNav';
import ChapterSection from '../../components/work/ChapterSection';
import DeliverablesGallery from '../../components/work/DeliverablesGallery';
import ToolingSection from '../../components/work/ToolingSection';
import ResultsSection from '../../components/work/ResultsSection';
import CTASection from '../../components/work/CTASection';
import NextCaseStudies from '../../components/work/NextCaseStudies';

const MercurieCaseStudy: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <CaseStudyHero
                client="Mercurie"
                headline="Mercurie — Turning a PR Brief into a Strategic Launch Moment"
                tags={['Consulting', 'PR', 'Content']}
                heroMedia="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=2000"
                stats={[
                    { value: '2025', label: 'Year' },
                    { value: 'Launch', label: 'Campaign' }
                ]}
            />

            <StickySnapshotBar
                data={[
                    { label: 'Services', value: 'Strategic Narrative, PR, Content' },
                    { label: 'Industry', value: 'Fintech / SaaS' },
                    { label: 'Outcome', value: 'Market Launch' }
                ]}
            />

            <div className="container mx-auto px-6 max-w-7xl relative">
                <div className="lg:flex gap-12 pt-24">
                    <div className="hidden lg:block w-[200px] flex-shrink-0">
                        <ChapterNav />
                    </div>
                    <div className="flex-1 max-w-4xl">
                        <ChapterSection
                            id="situation"
                            title="The Situation"
                            intro="Mercurie is a SaaS platform helping African businesses pay for global digital services and subscriptions in local currency. Founded by a former Google executive, they needed to launch with impact."
                        >
                            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
                                <p>
                                    Consolidating multiple tools (workspace, cloud, ads, SaaS apps) in one place, Mercurie solves a critical pain point for African operators: cross-border payments for essential software.
                                </p>
                                <p>
                                    <strong>The Ask:</strong> "Help us manage a PR announcement campaign for our product launch."
                                </p>
                            </div>
                        </ChapterSection>

                        <ChapterSection
                            id="approach"
                            title="Our Approach"
                            intro="We didn't just write a press release. We designed a strategic narrative that positioned Mercurie as a serious infrastructure player from Day 1."
                        >
                            <div className="grid md:grid-cols-2 gap-8 my-10">
                                <div className="bg-gray-50 p-8 rounded-2xl">
                                    <h4 className="font-bold text-text-dark mb-4">Strategic Audit</h4>
                                    <p className="text-sm text-text-muted">Rapid audit of existing assets and narrative to find the strongest hook.</p>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-2xl">
                                    <h4 className="font-bold text-text-dark mb-4">Narrative Design</h4>
                                    <p className="text-sm text-text-muted">Framing the problem not just as "payments" but as "business continuity" for African SMEs.</p>
                                </div>
                            </div>
                        </ChapterSection>

                        <div id="work"></div>
                        <DeliverablesGallery items={[
                            { type: 'image', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', label: 'Launch PR Assets' },
                            { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', label: 'Narrative Deck' },
                            { type: 'image', src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800', label: 'Media Kit' }
                        ]} />

                        <ResultsSection
                            metrics={[
                                { value: 'Launch', label: 'Successful Market Entry' },
                                { value: 'Narrative', label: 'Default Explainer' }
                            ]}
                            quote={{
                                text: "Marketing Extension designed and executed a focused PR campaign that launched Mercurie in Nigeria and positioned it as a serious SaaS payments player.",
                                author: "Leadership",
                                role: "Mercurie"
                            }}
                        />
                    </div>
                </div>
            </div>
            <NextCaseStudies />
            <CTASection text="Launching a new product?" />
        </div>
    );
};

export default MercurieCaseStudy;
