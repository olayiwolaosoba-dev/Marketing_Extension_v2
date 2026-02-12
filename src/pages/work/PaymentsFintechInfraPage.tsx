import React, { useEffect } from 'react';
import PaymentsHero from '../../components/work/payments/PaymentsHero';
import IndustryPOV from '../../components/work/payments/IndustryPOV';
import ChallengesSection from '../../components/work/payments/ChallengesSection';
import SolutionsAccordion from '../../components/work/payments/SolutionsAccordion';
import ProofSection from '../../components/work/payments/ProofSection';
import DeliverablesMatrix from '../../components/work/payments/DeliverablesMatrix';
import MarketingOSDiagram from '../../components/work/payments/MarketingOSDiagram';
import PaymentsFAQ from '../../components/work/payments/PaymentsFAQ';
import ConsultingTestimonials from '../../components/consulting/ConsultingTestimonials';
import AuditCTA from '../../components/cta/AuditCTA';

const PaymentsFintechInfraPage: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <PaymentsHero />
            <IndustryPOV />
            <ChallengesSection />
            <SolutionsAccordion />
            <ProofSection />
            <DeliverablesMatrix />
            <MarketingOSDiagram />
            <PaymentsFAQ />

            {/* Final CTA Section reusing existing CTA component with custom text override if supported, otherwise default is close enough */}
            <section className="py-24 bg-bg-light">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-text-dark mb-8">Build trust that converts.</h2>
                    <AuditCTA />
                </div>
            </section>

        </div>
    );
};

export default PaymentsFintechInfraPage;
