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

const VeryPayCaseStudy: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <CaseStudyHero
                client="VERYPAY"
                headline="Building a Multi-Country Marketing Bench for Africa’s Mobile Money Rail"
                tags={['Africa', 'Fintech / Payments']}
                heroMedia="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000" // Team/collaboration visual
                stats={[
                    { value: '4', label: 'Countries Activated' },
                    { value: '100%', label: 'Standardized Ops' },
                    { value: '0', label: 'Quality Drop' }
                ]}
            />

            <StickySnapshotBar
                data={[
                    { label: 'Services', value: 'Operating Model, Recruitment, Oversight' },
                    { label: 'Timeline', value: 'Oct 2024 — May 2025' },
                    { label: 'Scope', value: 'Multi-Country Expansion' }
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
                            intro="VERYPAY needed to launch in multiple African markets simultaneously. Speed was critical, but so was consistency. They couldn't afford a 'wild west' approach where every country manager did their own thing."
                        >
                            <p className="text-text-muted leading-relaxed">
                                The challenge was scaling the team and the execution quality at the same time. They needed a plug-and-play marketing org that could drop into Uganda, Zimbabwe, South Africa, and Nigeria and start performing immediately.
                            </p>
                        </ChapterSection>

                        <ChapterSection
                            id="approach"
                            title="Our Approach"
                            intro="We built a 'Marketing Bench' — a standardized recruitment, onboarding, and operating system. We didn't just hire people; we installed a machine."
                        >
                            <div className="grid md:grid-cols-2 gap-6 my-8">
                                <div className="p-6 bg-bg-gray rounded-xl">
                                    <div className="font-bold text-lg mb-2">The Blueprint</div>
                                    <p className="text-sm text-text-muted">Created the 'Performance Library' — a definitive guide to what good looks like for every role and task.</p>
                                </div>
                                <div className="p-6 bg-bg-gray rounded-xl">
                                    <div className="font-bold text-lg mb-2">The Bench</div>
                                    <p className="text-sm text-text-muted">Recruited local experts in 4 countries using a unified scoring rubric to ensure talent density.</p>
                                </div>
                            </div>
                        </ChapterSection>

                        <div id="work"></div>
                        <DeliverablesGallery
                            items={[
                                {
                                    title: "Operating Model Blueprint",
                                    type: "Strategy",
                                    desc: "The master document defining roles, rituals, and reporting lines.",
                                    image: "https://images.unsplash.com/photo-1512314889357-e15a8c38d6d8?auto=format&fit=crop&q=80&w=800",
                                    colSpan: 2,
                                    rowSpan: 2
                                },
                                {
                                    title: "Hiring Rubrics",
                                    type: "Talent",
                                    desc: "Standardized scorecards for evaluating country marketing leads.",
                                    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    title: "WBR Dashboard",
                                    type: "Operations",
                                    desc: "Weekly Business Review template for cross-country performance tracking.",
                                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
                                    colSpan: 1
                                },
                                {
                                    title: "Onboarding Kit",
                                    type: "Internal Comms",
                                    desc: "Day 1 to Day 90 guide for new hires.",
                                    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800"
                                }
                            ]}
                        />

                        <ToolingSection tools={['Breezy HR', 'ClickUp', 'Slack Connect', 'Google Looker']} />

                        <ResultsSection
                            metrics={[
                                { value: '4', label: 'Markets Launched' },
                                { value: '100%', label: 'Documentation' },
                                { value: '3mo', label: 'Avg Full-Time Transition' }
                            ]}
                            quote={{
                                text: "This wasn't just recruiting; it was organizational design. We now have a predictable engine for entering new markets.",
                                author: "Growth Lead",
                                role: "VERYPAY"
                            }}
                        />

                    </div>
                </div>
            </div>

            <NextCaseStudies />
            <CTASection text="Scaling across countries? You need the operating model." />
        </div>
    );
};

export default VeryPayCaseStudy;
