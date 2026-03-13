import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPage: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="pt-32 pb-24 bg-bg-light min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="mb-12">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Legal</span>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-text-dark mb-4">Privacy Policy</h1>
                    <p className="text-text-muted">Last updated: February 20, {currentYear}</p>
                </div>

                <div className="prose prose-lg max-w-none text-text-dark space-y-8">
                    <section>
                        <h2 className="text-2xl font-display font-bold text-text-dark mb-4">1. Who We Are</h2>
                        <p className="text-text-muted leading-relaxed">
                            Marketing Extension Ltd ("Marketing Extension", "we", "us", or "our") is a fractional growth marketing firm
                            serving African B2B technology companies. We are registered in the United Kingdom. Our registered address is
                            available upon request. For privacy-related queries, contact us at{' '}
                            <a href="mailto:privacy@marketingextension.com" className="text-primary hover:underline">privacy@marketingextension.com</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-text-dark mb-4">2. Information We Collect</h2>
                        <p className="text-text-muted leading-relaxed mb-4">We collect the following categories of personal data:</p>
                        <ul className="list-disc list-inside space-y-2 text-text-muted">
                            <li><strong>Contact information:</strong> Name, email address, company name, phone number (when you fill out our contact form)</li>
                            <li><strong>Marketing audit data:</strong> Your answers to the marketing maturity assessment questionnaire</li>
                            <li><strong>Newsletter subscriptions:</strong> Email address and subscription preferences</li>
                            <li><strong>Usage data:</strong> Pages visited, time on site, device type, browser, and approximate geographic location (via analytics)</li>
                            <li><strong>Communication records:</strong> Emails and messages you send us</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-text-dark mb-4">3. How We Use Your Data</h2>
                        <p className="text-text-muted leading-relaxed mb-4">We use your personal data to:</p>
                        <ul className="list-disc list-inside space-y-2 text-text-muted">
                            <li>Respond to your enquiries and provide our services</li>
                            <li>Send you marketing audit results and recommendations</li>
                            <li>Send our newsletter (if you have opted in)</li>
                            <li>Improve our website and service offerings</li>
                            <li>Comply with legal obligations</li>
                            <li>Analyse website traffic and user behaviour (aggregated, anonymised)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-text-dark mb-4">4. Legal Basis for Processing</h2>
                        <p className="text-text-muted leading-relaxed">
                            We process your data on the following legal bases under the UK GDPR: (a) <strong>Consent</strong> — for newsletter subscriptions and marketing communications; (b) <strong>Legitimate interests</strong> — for responding to enquiries and improving our services; (c) <strong>Contract</strong> — for delivering services to clients; (d) <strong>Legal obligation</strong> — for compliance purposes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-text-dark mb-4">5. Data Sharing</h2>
                        <p className="text-text-muted leading-relaxed mb-4">We do not sell your personal data. We may share it with:</p>
                        <ul className="list-disc list-inside space-y-2 text-text-muted">
                            <li><strong>Service providers:</strong> Email delivery, analytics, and cloud infrastructure providers (all under data processing agreements)</li>
                            <li><strong>Professional advisors:</strong> Legal, accounting, or other advisors as required</li>
                            <li><strong>Law enforcement:</strong> When legally required</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-text-dark mb-4">6. Data Retention</h2>
                        <p className="text-text-muted leading-relaxed">
                            We retain contact form submissions and audit results for up to 3 years. Newsletter subscriber data is retained until you unsubscribe. Client data is retained for the duration of the engagement plus 7 years for legal compliance.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-text-dark mb-4">7. Your Rights</h2>
                        <p className="text-text-muted leading-relaxed mb-4">Under UK GDPR, you have the right to:</p>
                        <ul className="list-disc list-inside space-y-2 text-text-muted">
                            <li>Access your personal data</li>
                            <li>Rectify inaccurate data</li>
                            <li>Erase your data ("right to be forgotten")</li>
                            <li>Restrict or object to processing</li>
                            <li>Data portability</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                        <p className="text-text-muted mt-4">
                            To exercise any right, email <a href="mailto:privacy@marketingextension.com" className="text-primary hover:underline">privacy@marketingextension.com</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-text-dark mb-4">8. Cookies</h2>
                        <p className="text-text-muted leading-relaxed">
                            We use cookies and similar technologies. See our <Link to="/cookies" className="text-primary hover:underline">Cookie Policy</Link> for details.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-text-dark mb-4">9. Changes to This Policy</h2>
                        <p className="text-text-muted leading-relaxed">
                            We may update this policy periodically. Material changes will be communicated via email or prominent notice on our website.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;
