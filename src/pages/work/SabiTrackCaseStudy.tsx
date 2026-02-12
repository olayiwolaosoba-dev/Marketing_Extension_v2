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

const SabiTrackCaseStudy: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <CaseStudyHero
                client="SabiTrack"
                headline="SabiTrack — Building the Marketing & Business Operating System for a New Venture"
                tags={['Consulting', 'Content', 'MarTech']}
                heroMedia="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000"
                stats={[
                    { value: '6 Months', label: 'To Investor Ready' },
                    { value: 'GTM', label: 'Roadmap Built' }
                ]}
            />

            <StickySnapshotBar
                data={[
                    { label: 'Role', value: 'Audit, Deck, GTM, Hiring' },
                    { label: 'Industry', value: 'B2B / SaaS' },
                    { label: 'Outcome', value: 'Investor & Launch Ready' }
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
                            intro="SabiTrack was an early-stage startup with a brand guideline but no pitch deck, business plan, company profile, or marketing rhythm."
                        >
                            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
                                <p>
                                    Founders needed to go from "Idea" to "Investor Ready" quickly. They lacked the internal marketing leadership to structure the business foundation.
                                </p>
                                <p>
                                    <strong>The Ask:</strong> Build the operating system for the business to be ready for funding and market entry.
                                </p>
                            </div>
                        </ChapterSection>

                        <ChapterSection
                            id="approach"
                            title="Our Approach"
                            intro="We acted as the interim founding marketing team, building the core assets and systems required for a Series-ready startup."
                        >
                            <div className="grid md:grid-cols-2 gap-8 my-10">
                                <div className="bg-gray-50 p-8 rounded-2xl">
                                    <h4 className="font-bold text-text-dark mb-4">Core Assets</h4>
                                    <p className="text-sm text-text-muted">Investor-ready pitch deck, comprehensive business plan, and company profile.</p>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-2xl">
                                    <h4 className="font-bold text-text-dark mb-4">Org Design</h4>
                                    <p className="text-sm text-text-muted">Designed the Head of Marketing role and hired the permanent leader.</p>
                                </div>
                            </div>
                        </ChapterSection>

                        <div id="work"></div>
                        <DeliverablesGallery items={[
                            { type: 'image', src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800', label: 'Pitch Deck' },
                            { type: 'image', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', label: 'GTM Roadmap' },
                            { type: 'image', src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', label: 'Messaging Guide' }
                        ]} />

                        <ResultsSection
                            metrics={[
                                { value: '100%', label: 'Investor Ready' },
                                { value: 'Hired', label: 'Marketing Head' }
                            ]}
                            quote={{
                                text: "Marketing Extension took SabiTrack to investor-ready, launch-ready, and growth-ready in under six months.",
                                author: "Founder",
                                role: "SabiTrack"
                            }}
                        />
                    </div>
                </div>
            </div>
            <NextCaseStudies />
            <CTASection text="Ready to get funded?" />
        </div>
    );
};

export default SabiTrackCaseStudy;
