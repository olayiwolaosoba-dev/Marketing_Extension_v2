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

const ZoneCaseStudy: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <CaseStudyHero
                client="Zone"
                headline="Building Africa’s First Regulated Blockchain Network for Payments"
                tags={['Nigeria', 'Payments / Fintech Infra']}
                heroMedia="https://images.unsplash.com/photo-1639322537228-ad7117a394ec?auto=format&fit=crop&q=80&w=2000" // Blockchain/tech visual
                stats={[
                    { value: '12+', label: 'Banks Onboarded' },
                    { value: '$8.5m+', label: 'Series A Raised' },
                    { value: '2', label: 'Businesses Spun Out' }
                ]}
            />

            {/* Sticky Bar */}
            <StickySnapshotBar
                data={[
                    { label: 'Services', value: 'Brand Architecture, PR, Marketing OS' },
                    { label: 'Timeline', value: '2022 — Present' },
                    { label: 'Industry', value: 'Fintech Infrastructure' }
                ]}
            />

            <div className="container mx-auto px-6 max-w-7xl relative">
                <div className="lg:flex gap-12 pt-24">
                    {/* Left Rail */}
                    <div className="hidden lg:block w-[200px] flex-shrink-0">
                        <ChapterNav />
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 max-w-4xl">

                        {/* Situation */}
                        <ChapterSection
                            id="situation"
                            title="The Situation"
                            intro="Zone (formerly Appzone) had built a powerful decentralized payment infrastructure, but the market was skeptical. In a region where 'crypto' often signaled risk, they needed to communicate safety, regulatory compliance, and institutional readiness."
                        >
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-bg-light p-8 rounded-2xl">
                                    <h4 className="font-bold text-lg mb-2">The Challenge</h4>
                                    <p className="text-text-muted">Complex blockchain infrastructure is hard to explain to bank executives and regulators. The complexity was a barrier to adoption.</p>
                                </div>
                                <div className="bg-bg-light p-8 rounded-2xl">
                                    <h4 className="font-bold text-lg mb-2">The Goal</h4>
                                    <p className="text-text-muted">Build a brand narrative that screams 'institutional trust' and 'inevitable future', separating the tech from the crypto noise.</p>
                                </div>
                            </div>
                        </ChapterSection>

                        {/* Approach */}
                        <ChapterSection
                            id="approach"
                            title="Our Approach"
                            intro="We didn't just write copy; we architected a new category. We moved the conversation from 'blockchain' to 'regulated decentralized payments', positioning Zone as the Visa of the web3 era."
                        >
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">1</div>
                                    <div>
                                        <h5 className="font-bold text-lg">Category Design</h5>
                                        <p className="text-text-muted">Defined 'Regulated Blockchain Network' as a standard, distancing from unregulated DeFi.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">2</div>
                                    <div>
                                        <h5 className="font-bold text-lg">Executive Comms System</h5>
                                        <p className="text-text-muted">Orchestrated LinkedIn and keynote narratives for leadership to own the 'Future of Payments' share of voice.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">3</div>
                                    <div>
                                        <h5 className="font-bold text-lg">PR Operating Rhythm</h5>
                                        <p className="text-text-muted">Engineered a steady drumbeat of partnership announcements to build momentum.</p>
                                    </div>
                                </li>
                            </ul>
                        </ChapterSection>

                        {/* The Work */}
                        <div id="work"></div>
                        <DeliverablesGallery
                            items={[
                                {
                                    title: "Narrative Architecture",
                                    type: "Strategy",
                                    desc: "The core messaging framework that defined the new category.",
                                    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800",
                                    colSpan: 2,
                                    rowSpan: 2
                                },
                                {
                                    title: "Executive Keynote Deck",
                                    type: "Comms",
                                    desc: "Storyline for the CEO's keynote at the Africa Tech Summit.",
                                    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    title: "Press Framework",
                                    type: "PR",
                                    desc: "The template for announcing new bank partnerships.",
                                    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800"
                                },
                                {
                                    title: "Marketing OS Dashboard",
                                    type: "Operations",
                                    desc: "The central nervous system for tracking all marketing activities.",
                                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                                }
                            ]}
                        />

                        {/* Tooling */}
                        <ToolingSection tools={['Notion for Planning', 'HubSpot CRM', 'Looker Studio', 'LinkedIn Sales Nav']} />

                        {/* Results */}
                        <ResultsSection
                            metrics={[
                                { value: '12+', label: 'Banks Onboarded' },
                                { value: '2', label: 'Spin-offs' },
                                { value: '$8.5M', label: 'Capital Raised' }
                            ]}
                            quote={{
                                text: "Marketing Extension didn't just run ads; they helped us articulate a vision that the biggest banks in Africa bought into.",
                                author: "Executive Leadership",
                                role: "Zone"
                            }}
                        />

                    </div>
                </div>
            </div>

            <NextCaseStudies />
            <CTASection text="Need to make complex infrastructure instantly credible?" />
        </div>
    );
};

export default ZoneCaseStudy;
