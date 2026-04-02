import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import GoogleAnalytics from './components/GoogleAnalytics';
import { usePageTracking } from './hooks/usePageTracking';

// Layouts
import PublicLayout from './layouts/PublicLayout';
import UniversityLayout from './components/University/UniversityLayout';
import UniversityHome from './components/University/UniversityHome';
import MyLearning from './components/University/MyLearning';
import StudentProfile from './components/University/StudentProfile';

// Components (Public)
import Hero from './components/Hero';
import FeaturedWins from './components/FeaturedWins';
import ProblemsWeSolve from './components/ProblemsWeSolve';
import ServicesByStage from './components/ServicesByStage';
import CaseStudies from './components/CaseStudies';
import IndustriesTabs from './components/IndustriesTabs';
import TeamSection from './components/TeamSection';
import WhyChooseUs from './components/WhyChooseUs';
import TrustMosaic from './components/TrustMosaic';
import Awards from './components/Awards';
import ContactSection from './components/ContactSection';
import MarketingConsulting from './components/MarketingConsulting';
import PositioningMessaging from './components/PositioningMessaging';
import ContentPlus from './ContentPlus';
import MarTechStudio from './MarTechStudio';
import Pricing from './Pricing';
import { LearningCenter, Events, Guides, Reports, VideoLibrary, Playbooks } from './components/Resources';
import TalentPage from './pages/why-us/TalentPage';
import AiExcellencePage from './pages/why-us/AiExcellencePage';
import TechnologyPage from './pages/why-us/TechnologyPage';
import EventsIndexPage from './pages/resources/EventsIndexPage';
import EventDetailPage from './pages/resources/EventDetailPage';
import GuidesIndexPage from './pages/resources/GuidesIndexPage';
import GuideDetailPage from './pages/resources/GuideDetailPage';

// Academy (PWA) — lazy loaded for code splitting
import AcademyLayout from './layouts/AcademyLayout';
const AcademyDashboard = React.lazy(() => import('./pages/Academy/Dashboard'));
const AcademyMyLearning = React.lazy(() => import('./pages/Academy/app/MyLearningPage'));
const AcademyCertificatesPage = React.lazy(() => import('./pages/Academy/app/CertificatesPage'));
const AcademyCommunityApp = React.lazy(() => import('./pages/Academy/app/CommunityPage'));
const AcademyJobsPage = React.lazy(() => import('./pages/Academy/app/JobsPage'));
const AcademySettingsPage = React.lazy(() => import('./pages/Academy/app/SettingsPage'));
const AcademyCoursePlayer = React.lazy(() => import('./pages/Academy/app/CoursePlayer'));
const AcademyTeamDashboard = React.lazy(() => import('./pages/Academy/app/TeamDashboard'));
const EnterprisePage = React.lazy(() => import('./pages/Academy/EnterprisePage'));

// ME-OS Platform
import AppLayout from './layouts/AppLayout';
import Dashboard from './pages/app/Dashboard';
import ProjectsPage from './pages/app/ProjectsPage';
// Feature Modules
import NewRequestPage from './pages/app/NewRequestPage';
import ConsultingHub from './pages/app/ConsultingHub';
import ContentStudio from './pages/app/ContentStudio';
import MarTechLab from './pages/app/MarTechLab';
import AssetLibrary from './pages/app/AssetLibrary';
import Insights from './pages/app/Insights';

import ProjectDetail from './pages/app/ProjectDetail';
import RequestsList from './pages/app/RequestsList';
import RequestDetail from './pages/app/RequestDetail';

// System Pages
import SearchPage from './pages/app/system/SearchPage';
import NotificationsPage from './pages/app/system/NotificationsPage';
import ProfilePage from './pages/app/system/ProfilePage';
import SupportPage from './pages/app/system/SupportPage';
import ActivityPage from './pages/app/system/ActivityPage';



// Academy Marketing Pages — landing page lazy loaded; subpages kept eager (named exports)
const AcademyLandingPage = React.lazy(() => import('./pages/Academy/AcademyLandingPage'));
import {
  AcademyTracks, AcademyCourses, AcademyCertifications, AcademyVerify,
  AcademyCommunity, AcademyCohorts, AcademyEvents,
  AcademyTrackDetail, AcademyCourseDetail
} from './pages/Academy/AcademySubpages';
import { AcademyAi, AcademyPartners, AcademyStories, AcademyWaitlist } from './pages/Academy/AcademyStubs';
import { StudentSignIn, StudentSignUp, StudentForgotPassword } from './pages/Academy/StudentAuth';
import ProtectedRoute from './components/Academy/ProtectedRoute';
import ScrollToTop from './components/Academy/ScrollToTop';

// Auth Pages
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import RequestAccess from './pages/Auth/RequestAccess';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AboutPage from './pages/AboutPage';
import SEO from './components/SEO';
import CareersPage from './pages/CareersPage';
import LifePage from './pages/LifePage';
import AiPage from './pages/AiPage';
import StrategyCall from './pages/StrategyCall';
import CaseStudiesPage from './pages/CaseStudiesPage';
import MarketingConsultingPage from './pages/MarketingConsultingPage';
import MartechStudioPage from './pages/MartechStudioPage';
import AiAuditPage from './pages/martech/AiAuditPage';
import ProductEngineeringPage from './pages/martech/ProductEngineeringPage';
import AutomationRevOpsPage from './pages/martech/AutomationRevOpsPage';
import ManagedStackPage from './pages/martech/ManagedStackPage';

import TrainingEnablementPage from './pages/martech/TrainingEnablementPage';
import AuditWizard from './pages/audit/AuditWizard';
import AuditResults from './pages/audit/AuditResults';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookiePage from './pages/CookiePage';
import NotFoundPage from './pages/NotFoundPage';
import ZoneCaseStudy from './pages/work/ZoneCaseStudy';
import CryptoDigitalAssetsPage from './pages/work/CryptoDigitalAssetsPage';
import RegTechCybersecurityPage from './pages/work/RegTechCybersecurityPage';
import B2BSaaSServicesPage from './pages/work/B2BSaaSServicesPage';
import ProfessionalServicesPage from './pages/work/ProfessionalServicesPage';
import VeryPayCaseStudy from './pages/work/VeryPayCaseStudy';
import SmartcomplyCaseStudy from './pages/work/SmartcomplyCaseStudy';
import MercurieCaseStudy from './pages/work/MercurieCaseStudy';
import QuidaxCaseStudy from './pages/work/QuidaxCaseStudy';
import SabiTrackCaseStudy from './pages/work/SabiTrackCaseStudy';
import TamyConsultingCaseStudy from './pages/work/TamyConsultingCaseStudy';
import PaymentsFintechInfraPage from './pages/work/PaymentsFintechInfraPage';


/**
 * AppContent — rendered inside <Router> so it can safely call useLocation-based hooks.
 */
const AppContent: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Track SPA page views on every route change
  usePageTracking();

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => setIsLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
      <div className="relative selection:bg-primary selection:text-white">
        <AnimatePresence>
          {!isLoaded && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="fixed inset-0 z-[999] bg-bg-dark flex items-center justify-center"
            >
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-16 h-16 bg-primary rounded-full mb-4 mx-auto"
                />
                <p className="text-white font-display text-lg tracking-tight">Installing growth engine...</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <ScrollToTop />
        {isLoaded && (
          <Routes>
            {/* --- Public Marketing Site Routes --- */}
            <Route path="/" element={
              <PublicLayout>
                <SEO
                  title="Plug-In Growth Marketing for Fintech & B2B SaaS Teams | Marketing Extension"
                  description="Marketing Extension embeds into your team as a dedicated growth marketing partner. We drive pipeline, demand generation, and GTM execution for fintech, regtech, and B2B SaaS companies across Africa and the UK."
                  canonical="https://marketingextension.com/"
                  structuredData={[
                    {
                      "@context": "https://schema.org",
                      "@type": "Organization",
                      "name": "Marketing Extension",
                      "url": "https://marketingextension.com",
                      "logo": "https://marketingextension.com/logo.png",
                      "description": "Embedded growth marketing partner for fintech, regtech, and B2B SaaS teams across Africa and the UK.",
                      "foundingDate": "2022",
                      "areaServed": ["Nigeria", "Ghana", "Kenya", "Rwanda", "Senegal", "United Kingdom"],
                      "sameAs": [
                        "https://www.linkedin.com/company/marketing-extension",
                        "https://twitter.com/mktgextension",
                        "https://www.instagram.com/marketingextension"
                      ],
                      "contactPoint": {
                        "@type": "ContactPoint",
                        "email": "hello@marketingext.com",
                        "contactType": "customer service"
                      }
                    },
                    {
                      "@context": "https://schema.org",
                      "@type": "WebSite",
                      "name": "Marketing Extension",
                      "url": "https://marketingextension.com",
                      "potentialAction": {
                        "@type": "SearchAction",
                        "target": {
                          "@type": "EntryPoint",
                          "urlTemplate": "https://marketingextension.com/case-studies?q={search_term_string}"
                        },
                        "query-input": "required name=search_term_string"
                      }
                    },
                    {
                      "@context": "https://schema.org",
                      "@type": "Organization",
                      "name": "Marketing Extension",
                      "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "6",
                        "bestRating": "5",
                        "worstRating": "1"
                      }
                    },
                    {
                      "@context": "https://schema.org",
                      "@type": "Service",
                      "name": "Growth Marketing Consulting",
                      "provider": { "@type": "Organization", "name": "Marketing Extension" },
                      "description": "Strategy, ICP research, positioning, messaging, channel strategy, GTM planning, and weekly decision support.",
                      "areaServed": "Africa, United Kingdom",
                      "serviceType": "Marketing Consulting"
                    },
                    {
                      "@context": "https://schema.org",
                      "@type": "Service",
                      "name": "Content Studio — Content+ by Marketing Extension",
                      "provider": { "@type": "Organization", "name": "Marketing Extension" },
                      "description": "High-volume, brand-on content production: copy, design, video, thought leadership, and social.",
                      "areaServed": "Africa, United Kingdom",
                      "serviceType": "Content Marketing"
                    },
                    {
                      "@context": "https://schema.org",
                      "@type": "Service",
                      "name": "MarTech Studio — AI-Powered Marketing Infrastructure",
                      "provider": { "@type": "Organization", "name": "Marketing Extension" },
                      "description": "Marketing technology stack builds, AI integration, automation, RevOps, and managed stack support.",
                      "areaServed": "Africa, United Kingdom",
                      "serviceType": "Marketing Technology"
                    }
                  ]}
                />
                <Hero />
                <FeaturedWins />
                <ProblemsWeSolve />
                <ServicesByStage />
                <CaseStudies />
                <IndustriesTabs />
                <TeamSection />
                <WhyChooseUs />
                <TrustMosaic />
                <Awards />
                <ContactSection />
              </PublicLayout>
            } />

            {/* About & Careers Routes */}
            <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
            <Route path="/careers" element={<PublicLayout><CareersPage /></PublicLayout>} />
            <Route path="/about/life-at-marketing-extension" element={<PublicLayout><LifePage /></PublicLayout>} />
            <Route path="/about/how-we-use-ai" element={<PublicLayout><AiPage /></PublicLayout>} />

            {/* Audit Routes */}
            <Route path="/audit" element={<AuditWizard />} />
            <Route path="/audit/results" element={<AuditResults />} />

            {/* Strategy Call Landing Page */}
            <Route path="/strategy-call" element={<PublicLayout><StrategyCall /></PublicLayout>} />

            {/* Services Pages */}
            <Route path="/services/martech" element={<PublicLayout><MartechStudioPage /></PublicLayout>} />
            <Route path="/services/martech/ai-audit" element={<PublicLayout><AiAuditPage /></PublicLayout>} />
            <Route path="/services/martech/product-engineering" element={<PublicLayout><ProductEngineeringPage /></PublicLayout>} />
            <Route path="/services/martech/automation-revops" element={<PublicLayout><AutomationRevOpsPage /></PublicLayout>} />
            <Route path="/services/martech/managed-stack" element={<PublicLayout><ManagedStackPage /></PublicLayout>} />
            <Route path="/services/martech/training-enablement" element={<PublicLayout><TrainingEnablementPage /></PublicLayout>} />
            {/* Stub redirects → full pages per PRD B2 */}
            <Route path="/services/content-studio" element={<Navigate to="/contentplus" replace />} />
            <Route path="/services/martech-ai" element={<Navigate to="/martech-studio" replace />} />
            <Route path="/services/marketing-consulting" element={<PublicLayout><MarketingConsultingPage /></PublicLayout>} />
            <Route path="/case-studies" element={<PublicLayout><CaseStudiesPage /></PublicLayout>} />

            {/* Case Studies Detail Pages */}
            <Route path="/work/zone-regulated-blockchain-payments" element={<PublicLayout><ZoneCaseStudy /></PublicLayout>} />
            <Route path="/work/verypay-multi-country-marketing-bench" element={<PublicLayout><VeryPayCaseStudy /></PublicLayout>} />
            <Route path="/work/smartcomply-full-funnel-growth-engine" element={<PublicLayout><SmartcomplyCaseStudy /></PublicLayout>} />
            <Route path="/work/mercurie-launch-pr-narrative" element={<PublicLayout><MercurieCaseStudy /></PublicLayout>} />
            <Route path="/work/quidax-don-jazzy-crypto-education" element={<PublicLayout><QuidaxCaseStudy /></PublicLayout>} />
            <Route path="/work/sabitrack-investor-ready-foundation" element={<PublicLayout><SabiTrackCaseStudy /></PublicLayout>} />
            <Route path="/work/tamy-consulting-growth-engine" element={<PublicLayout><TamyConsultingCaseStudy /></PublicLayout>} />
            <Route path="/work/payments-fintech-infra" element={<PublicLayout><PaymentsFintechInfraPage /></PublicLayout>} />
            <Route path="/work/crypto-digital-assets" element={<PublicLayout><CryptoDigitalAssetsPage /></PublicLayout>} />
            <Route path="/work/regtech-cybersecurity" element={<PublicLayout><RegTechCybersecurityPage /></PublicLayout>} />
            <Route path="/work/b2b-saas-services" element={<PublicLayout><B2BSaaSServicesPage /></PublicLayout>} />
            <Route path="/work/professional-services-consulting" element={<PublicLayout><ProfessionalServicesPage /></PublicLayout>} />

            {/* Services */}
            <Route path="/marketing-consulting" element={<PublicLayout><MarketingConsulting /></PublicLayout>} />
            <Route path="/positioning" element={<PublicLayout><PositioningMessaging /></PublicLayout>} />
            <Route path="/contentplus" element={<PublicLayout><ContentPlus /></PublicLayout>} />
            <Route path="/martech-studio" element={<PublicLayout><MarTechStudio /></PublicLayout>} />
            <Route path="/pricing" element={<PublicLayout><Pricing /></PublicLayout>} />

            {/* Resources */}
            <Route path="/resources/learn" element={<PublicLayout><LearningCenter /></PublicLayout>} />

            <Route path="/resources/reports" element={<PublicLayout><Reports /></PublicLayout>} />
            <Route path="/resources/videos" element={<PublicLayout><VideoLibrary /></PublicLayout>} />
            <Route path="/resources/playbooks" element={<PublicLayout><Playbooks /></PublicLayout>} />

            {/* Why Us */}
            <Route path="/why-us/talent" element={<PublicLayout><TalentPage /></PublicLayout>} />
            <Route path="/why-us/ai-excellence" element={<PublicLayout><AiExcellencePage /></PublicLayout>} />
            <Route path="/why-us/technology" element={<PublicLayout><TechnologyPage /></PublicLayout>} />

            {/* Events */}
            <Route path="/resources/events" element={<PublicLayout><EventsIndexPage /></PublicLayout>} />
            <Route path="/resources/events/:slug" element={<PublicLayout><EventDetailPage /></PublicLayout>} />

            {/* Guides */}
            <Route path="/resources/guides" element={<PublicLayout><GuidesIndexPage /></PublicLayout>} />
            <Route path="/resources/guides/:slug" element={<PublicLayout><GuideDetailPage /></PublicLayout>} />

            {/* --- Academy (PWA) App Routes — protected --- */}
            <Route path="/academy/app/*" element={
              <ProtectedRoute>
                <AcademyLayout>
                  <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh]"><div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" /></div>}>
                    <Routes>
                      <Route index element={<AcademyDashboard />} />
                      <Route path="learning" element={<AcademyMyLearning />} />
                      <Route path="certificates" element={<AcademyCertificatesPage />} />
                      <Route path="community" element={<AcademyCommunityApp />} />
                      <Route path="jobs" element={<AcademyJobsPage />} />
                      <Route path="settings" element={<AcademySettingsPage />} />
                      <Route path="courses/:slug" element={<AcademyCoursePlayer />} />
                      <Route path="team" element={<AcademyTeamDashboard />} />
                      <Route path="login" element={<Navigate to="/academy/sign-in" replace />} />
                      <Route path="*" element={<Navigate to="/academy/app" replace />} />
                    </Routes>
                  </Suspense>
                </AcademyLayout>
              </ProtectedRoute>
            } />

            {/* --- Academy Marketing Site Routes --- */}
            <Route path="/academy" element={<PublicLayout><Suspense fallback={null}><AcademyLandingPage /></Suspense></PublicLayout>} />

            {/* Catalog & Details */}
            <Route path="/academy/tracks" element={<PublicLayout><AcademyTracks /></PublicLayout>} />
            <Route path="/academy/tracks/:slug" element={<PublicLayout><AcademyTrackDetail /></PublicLayout>} />
            <Route path="/academy/courses" element={<PublicLayout><AcademyCourses /></PublicLayout>} />
            <Route path="/academy/courses/:slug" element={<PublicLayout><AcademyCourseDetail /></PublicLayout>} />
            <Route path="/academy/certifications" element={<PublicLayout><AcademyCertifications /></PublicLayout>} />
            <Route path="/academy/cohorts" element={<PublicLayout><AcademyCohorts /></PublicLayout>} />
            <Route path="/academy/community" element={<PublicLayout><AcademyCommunity /></PublicLayout>} />
            <Route path="/academy/events" element={<PublicLayout><AcademyEvents /></PublicLayout>} />

            {/* Utilities */}
            <Route path="/academy/verify" element={<PublicLayout><AcademyVerify /></PublicLayout>} />
            <Route path="/academy/ai" element={<PublicLayout><AcademyAi /></PublicLayout>} />
            <Route path="/academy/partners" element={<PublicLayout><AcademyPartners /></PublicLayout>} />
            <Route path="/academy/stories" element={<PublicLayout><AcademyStories /></PublicLayout>} />
            <Route path="/academy/waitlist" element={<PublicLayout><AcademyWaitlist /></PublicLayout>} />
            <Route path="/academy/enterprise" element={<PublicLayout><Suspense fallback={null}><EnterprisePage /></Suspense></PublicLayout>} />

            {/* Student Auth */}
            <Route path="/academy/sign-in" element={<StudentSignIn />} />
            <Route path="/academy/sign-up" element={<StudentSignUp />} />
            <Route path="/academy/forgot-password" element={<StudentForgotPassword />} />

            {/* University Routes — redirected to Academy per PRD B2 */}
            <Route path="/university" element={<Navigate to="/academy" replace />} />
            <Route path="/university/my-learning" element={<Navigate to="/academy/courses" replace />} />
            <Route path="/university/profile" element={<Navigate to="/academy" replace />} />

            {/* Auth Routes */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<Signup />} />
            <Route path="/auth/request-access" element={<RequestAccess />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />


            {/* --- Platform (ME-OS) Routes --- */}
            <Route path="/app/*" element={
              <AppLayout>
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="projects" element={<ProjectsPage />} />
                  <Route path="projects/:id" element={<ProjectDetail />} />

                  <Route path="requests" element={<RequestsList />} />
                  <Route path="requests/new" element={<NewRequestPage />} />
                  <Route path="requests/:id" element={<RequestDetail />} />
                  <Route path="consulting" element={<ConsultingHub />} />
                  <Route path="content" element={<ContentStudio />} />
                  <Route path="martech" element={<MarTechLab />} />
                  <Route path="assets" element={<AssetLibrary />} />
                  <Route path="insights" element={<Insights />} />

                  {/* System Pages */}
                  <Route path="search" element={<SearchPage />} />
                  <Route path="notifications" element={<NotificationsPage />} />
                  <Route path="profile" element={<ProfilePage />} />
                  <Route path="support" element={<SupportPage />} />
                  <Route path="activity" element={<ActivityPage />} />

                  <Route path="*" element={<Navigate to="dashboard" replace />} />
                </Routes>
              </AppLayout>
            } />

            {/* Legal Pages */}
            <Route path="/privacy" element={<PublicLayout><PrivacyPage /></PublicLayout>} />
            <Route path="/terms" element={<PublicLayout><TermsPage /></PublicLayout>} />
            <Route path="/cookies" element={<PublicLayout><CookiePage /></PublicLayout>} />

            {/* Branded 404 catch-all */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        )}
      </div>
  );
};

/**
 * App — top-level shell. Provides Router context.
 * GoogleAnalytics injects gtag.js (prod-only, no-op in dev).
 * AppContent handles routing + page-view tracking.
 */
const App: React.FC = () => {
  return (
    <Router>
      <GoogleAnalytics />
      <AppContent />
    </Router>
  );
};

export default App;
