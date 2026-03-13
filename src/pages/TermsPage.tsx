import React from 'react';

const TermsPage: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="pt-32 pb-24 bg-bg-light min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="mb-12">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Legal</span>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-text-dark mb-4">Terms of Service</h1>
                    <p className="text-text-muted">Last updated: February 20, {currentYear}</p>
                </div>

                <div className="space-y-8 text-text-dark">
                    <section>
                        <h2 className="text-2xl font-display font-bold text-text-dark mb-4">1. Acceptance of Terms</h2>
                        <p className="text-text-muted leading-relaxed">
                            By accessing or using the Marketing Extension website (marketingextension.com) and associated services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-text-dark mb-4">2. Services</h2>
                        <p className="text-text-muted leading-relaxed">
                            Marketing Extension provides fractional growth marketing services, the Marketing Audit Tool, the Marketing Extension Academy, and the Extension OS client portal. The specific scope, deliverables, and terms of any engagement are governed by a separate Statement of Work or Service Agreement executed between Marketing Extension and the client.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-text-dark mb-4">3. Use of the Website</h2>
                        <p className="text-text-muted leading-relaxed mb-4">You agree not to:</p>
                        <ul className="list-disc list-inside space-y-2 text-text-muted">
                            <li>Use the site for any unlawful purpose</li>
                            <li>Attempt to gain unauthorised access to any part of the platform</li>
                            <li>Scrape, copy, or redistribute our content without written permission</li>
                            <li>Introduce malicious code or interfere with the site's operation</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-text-dark mb-4">4. Intellectual Property</h2>
                        <p className="text-text-muted leading-relaxed">
                            All content, branding, methodologies, frameworks, and tools on this website are the intellectual property of Marketing Extension Ltd. You may not reproduce, distribute, or create derivative works without our written consent. Client deliverables are subject to the IP terms in the applicable service agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-text-dark mb-4">5. Marketing Audit Tool</h2>
                        <p className="text-text-muted leading-relaxed">
                            The Marketing Audit Tool is provided for informational purposes. Results and recommendations are generated algorithmically based on your inputs. They do not constitute professional marketing advice and should not be relied upon as such without professional review.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-text-dark mb-4">6. Limitation of Liability</h2>
                        <p className="text-text-muted leading-relaxed">
                            To the maximum extent permitted by law, Marketing Extension shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of our website or services. Our total liability to you shall not exceed the amounts paid by you to us in the 12 months prior to the claim.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-text-dark mb-4">7. Governing Law</h2>
                        <p className="text-text-muted leading-relaxed">
                            These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-text-dark mb-4">8. Changes to Terms</h2>
                        <p className="text-text-muted leading-relaxed">
                            We may update these terms from time to time. We will notify you of material changes via email or our website. Continued use after changes constitutes acceptance.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-text-dark mb-4">9. Contact</h2>
                        <p className="text-text-muted leading-relaxed">
                            For questions about these terms, contact us at <a href="mailto:legal@marketingextension.com" className="text-primary hover:underline">legal@marketingextension.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
