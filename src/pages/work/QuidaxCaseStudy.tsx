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

const QuidaxCaseStudy: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <CaseStudyHero
                client="Quidax"
                headline="Quidax — Turning a Crypto Exchange into a Pop-Culture Movement"
                tags={['Consulting', 'Content', 'PR', 'Growth']}
                heroMedia="https://images.unsplash.com/photo-1516245834210-c4c14278733f?auto=format&fit=crop&q=80&w=2000"
                stats={[
                    { value: '~100k', label: 'New Customers' },
                    { value: '360°', label: 'Don Jazzy Campaign' }
                ]}
            />

            <StickySnapshotBar
                data={[
                    { label: 'Role', value: 'Strategy, Execution, Media' },
                    { label: 'Industry', value: 'Crypto / Fintech' },
                    { label: 'Outcome', value: 'Mass Adoption' }
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
                            intro="Quidax is an African-founded crypto exchange making it easy to buy, sell and store crypto. Having processed $3.2bn in <3 years, they needed a hero campaign to drive mass adoption."
                        >
                            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
                                <p>
                                    <strong>Market Reality:</strong> Nigeria is one of the most crypto-curious markets globally, but scams and regulation created fear. Crypto was widely discussed but poorly understood.
                                </p>
                                <p>
                                    <strong>The Mandate:</strong> Design & run a flagship 60–90 day hero campaign + operating system to make crypto feel safe, simple, and mainstream.
                                </p>
                            </div>
                        </ChapterSection>

                        <ChapterSection
                            id="approach"
                            title="Our Approach"
                            intro="We orchestrated a 360° Don Jazzy-led campaign that blended education with pop culture, de-risking the category for everyday users."
                        >
                            <div className="grid md:grid-cols-2 gap-8 my-10">
                                <div className="bg-gray-50 p-8 rounded-2xl">
                                    <h4 className="font-bold text-text-dark mb-4">Full Audit</h4>
                                    <p className="text-sm text-text-muted">Reviewing the entire marketing & growth engine before launch.</p>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-2xl">
                                    <h4 className="font-bold text-text-dark mb-4">Culture Squad</h4>
                                    <p className="text-sm text-text-muted">Orchestration of Don Jazzy & influencers to drive trust and reach.</p>
                                </div>
                            </div>
                        </ChapterSection>

                        <div id="work"></div>
                        <DeliverablesGallery items={[
                            { type: 'image', src: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800', label: 'Campaign Visuals' },
                            { type: 'image', src: 'https://images.unsplash.com/photo-1621504450168-b8c6816db70a?auto=format&fit=crop&q=80&w=800', label: 'Social Media' },
                            { type: 'image', src: 'https://images.unsplash.com/photo-1622630998477-20aa696fab05?auto=format&fit=crop&q=80&w=800', label: 'App Interface' }
                        ]} />

                        <ResultsSection
                            metrics={[
                                { value: '~100,000', label: 'New Customers (Cohort)' },
                                { value: '6-Figure', label: 'Signups' }
                            ]}
                            quote={{
                                text: "Making crypto feel safe, simple, and mainstream.",
                                author: "Campaign Goal",
                                role: "Quidax"
                            }}
                        />
                    </div>
                </div>
            </div>
            <NextCaseStudies />
            <CTASection text="Ready to create a movement?" />
        </div>
    );
};

export default QuidaxCaseStudy;
