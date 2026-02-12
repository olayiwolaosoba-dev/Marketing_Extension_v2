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

const SmartcomplyCaseStudy: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <CaseStudyHero
                client="Smartcomply"
                headline="From Social-Only Marketing to a Full-Funnel Growth Engine"
                tags={['RegTech', 'Cybersecurity']}
                heroMedia="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" // Cyber/Tech visual
                stats={[
                    { value: '3x', label: 'Pipeline Growth' },
                    { value: '4', label: 'Products Unified' },
                    { value: '1', label: 'Unified Story' }
                ]}
            />

            <StickySnapshotBar
                data={[
                    { label: 'Services', value: 'Fractional CMO, Product GTM, Marketing OS' },
                    { label: 'Timeline', value: '2025 — Present' },
                    { label: 'Focus', value: 'B2B Funnel Building' }
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
                            intro="Smartcomply had a strong product but a fragmented market presence. Marketing was active—posting on social media, attending events—but it wasn't translating into measurable B2B pipeline."
                        >
                            <p className="text-text-muted leading-relaxed">
                                They had multiple products (Adhere, Secure, Intel, Academy) that felt like separate companies. Customers were confused, and sales teams were struggling to cross-sell.
                            </p>
                        </ChapterSection>

                        <ChapterSection
                            id="approach"
                            title="Our Approach"
                            intro="We installed a 'Full-Funnel' discipline. We moved them from 'activity-based' marketing to 'outcome-based' growth."
                        >
                            <div className="space-y-8">
                                <div className="border-l-4 border-primary pl-6">
                                    <h4 className="font-bold text-xl mb-2">Narrative Unification</h4>
                                    <p className="text-text-muted">Wove all 4 sub-products into a single, coherent platform story: "The Operating System for Compliance".</p>
                                </div>
                                <div className="border-l-4 border-primary pl-6">
                                    <h4 className="font-bold text-xl mb-2">Funnel Design</h4>
                                    <p className="text-text-muted">Built distinct pathways for different ICPs (Fintechs vs. Traditional Enterprise), with tailored lead magnets and scoring.</p>
                                </div>
                                <div className="border-l-4 border-primary pl-6">
                                    <h4 className="font-bold text-xl mb-2">High-Stakes Campaigns</h4>
                                    <p className="text-text-muted">Turned product features into major launch moments, including a Partner Program and a Brand Refresh.</p>
                                </div>
                            </div>
                        </ChapterSection>

                        <div id="work"></div>
                        <DeliverablesGallery
                            items={[
                                {
                                    title: "Messaging Matrix",
                                    type: "Strategy",
                                    desc: "Unified messaging architecture for the 4-product suite.",
                                    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
                                    colSpan: 2,
                                    rowSpan: 2
                                },
                                {
                                    title: "Lead Scoring Model",
                                    type: "MarTech",
                                    desc: "Logic for grading intent signals from different channels.",
                                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    title: "Campaign Creative",
                                    type: "Design",
                                    desc: "Asset kit for the 'Secure' product launch.",
                                    image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    title: "Dashboard V1",
                                    type: "Reporting",
                                    desc: "Pipeline contribution dashboard.",
                                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                                }
                            ]}
                        />

                        <ToolingSection tools={['HubSpot Marketing Hub', 'Apollo.io', 'Google Ads', 'GA4']} />

                        <ResultsSection
                            metrics={[
                                { value: '3x', label: 'Pipeline Increase' },
                                { value: '4', label: 'Products Unified' },
                                { value: '1', label: 'Global Rebrand' }
                            ]}
                            quote={{
                                text: "Finally, we have visibility. We know exactly which dollar leads to which deal. The guessing game is over.",
                                author: "COO",
                                role: "Smartcomply"
                            }}
                        />

                    </div>
                </div>
            </div>

            <NextCaseStudies />
            <CTASection text="Marketing busy but not producing pipeline?" />
        </div>
    );
};

export default SmartcomplyCaseStudy;
