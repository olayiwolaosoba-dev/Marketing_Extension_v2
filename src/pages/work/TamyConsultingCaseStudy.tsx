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

const TamyConsultingCaseStudy: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <CaseStudyHero
                client="Tamy Consulting"
                headline="Tamy Consulting — From Invisible Marketing to a Focused Digital Engine"
                tags={['Consulting', 'Content']}
                heroMedia="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
                stats={[
                    { value: 'Digital', label: 'Presence' },
                    { value: 'Sales', label: 'Specialist' }
                ]}
            />

            <StickySnapshotBar
                data={[
                    { label: 'Services', value: 'Digital Presence, Thought Leadership' },
                    { label: 'Industry', value: 'Sales Consulting' },
                    { label: 'Outcome', value: 'Visible Growth' }
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
                            intro="Tamy Consulting is a Lagos-based sales & distribution consulting firm working with businesses that need strong field execution. They wanted to move from referrals to a visible digital brand."
                        >
                            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
                                <p>
                                    <strong>Ambition:</strong> Be seen as the go-to sales & distribution specialist in Nigeria and West Africa — including online, not just via word of mouth.
                                </p>
                                <p>
                                    <strong>The Ask:</strong> "Help us fix our digital and social media presence and advise on marketing."
                                </p>
                            </div>
                        </ChapterSection>

                        <ChapterSection
                            id="approach"
                            title="Our Approach"
                            intro="We built a focused digital engine that positioned them as thought leaders in sales operations, not just another consultancy."
                        >
                            <div className="grid md:grid-cols-2 gap-8 my-10">
                                <div className="bg-gray-50 p-8 rounded-2xl">
                                    <h4 className="font-bold text-text-dark mb-4">Positioning</h4>
                                    <p className="text-sm text-text-muted">Defined clear value proposition around "Execution" and "Route-to-Market".</p>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-2xl">
                                    <h4 className="font-bold text-text-dark mb-4">Content System</h4>
                                    <p className="text-sm text-text-muted">Established a repeatable social content system on a lean budget.</p>
                                </div>
                            </div>
                        </ChapterSection>

                        <div id="work"></div>
                        <DeliverablesGallery items={[
                            { type: 'image', src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800', label: 'Agreed Scope' },
                            { type: 'image', src: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800', label: 'Digital Assets' },
                            { type: 'image', src: 'https://images.unsplash.com/photo-1551434678-e076c2236033?auto=format&fit=crop&q=80&w=800', label: 'Field Execution' }
                        ]} />

                        <ResultsSection
                            metrics={[
                                { value: 'System', label: 'Repeatable Content' },
                                { value: 'Brand', label: 'Digital Presence' }
                            ]}
                            quote={{
                                text: "Turning referrals into a visible growth engine.",
                                author: "Outcome",
                                role: "Tamy Consulting"
                            }}
                        />
                    </div>
                </div>
            </div>
            <NextCaseStudies />
            <CTASection text="Ready to build your engine?" />
        </div>
    );
};

export default TamyConsultingCaseStudy;
