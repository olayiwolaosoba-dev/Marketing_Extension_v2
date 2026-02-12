import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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

// Academy (PWA)
import AcademyLayout from './layouts/AcademyLayout';
import AcademyDashboard from './pages/Academy/Dashboard';

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



// Academy Marketing Pages
import AcademyLandingPage from './pages/Academy/AcademyLandingPage';
import {
  AcademyTracks, AcademyCourses, AcademyCertifications, AcademyVerify,
  AcademyCommunity, AcademyCohorts, AcademyEvents,
  AcademyTrackDetail, AcademyCourseDetail
} from './pages/Academy/AcademySubpages';
import { AcademyAi, AcademyPartners, AcademyStories, AcademyWaitlist } from './pages/Academy/AcademyStubs';
import { StudentSignIn, StudentSignUp, StudentForgotPassword } from './pages/Academy/StudentAuth';

// Auth Pages
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import RequestAccess from './pages/Auth/RequestAccess';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AboutPage from './pages/AboutPage';
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
import ContentStudioPage from './pages/services/ContentStudio';
import MartechAIPage from './pages/services/MartechAI';
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


const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => setIsLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
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

        {isLoaded && (
          <Routes>
            {/* --- Public Marketing Site Routes --- */}
            <Route path="/" element={
              <PublicLayout>
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
            <Route path="/services/marketing-consulting" element={<PublicLayout><MarketingConsultingPage /></PublicLayout>} />
            <Route path="/services/martech" element={<PublicLayout><MartechStudioPage /></PublicLayout>} />
            <Route path="/services/martech/ai-audit" element={<PublicLayout><AiAuditPage /></PublicLayout>} />
            <Route path="/services/martech/product-engineering" element={<PublicLayout><ProductEngineeringPage /></PublicLayout>} />
            <Route path="/services/martech/automation-revops" element={<PublicLayout><AutomationRevOpsPage /></PublicLayout>} />
            <Route path="/services/martech/managed-stack" element={<PublicLayout><ManagedStackPage /></PublicLayout>} />
            <Route path="/services/martech/training-enablement" element={<PublicLayout><TrainingEnablementPage /></PublicLayout>} />
            <Route path="/services/content-studio" element={<PublicLayout><ContentStudioPage /></PublicLayout>} />
            <Route path="/services/martech-ai" element={<PublicLayout><MartechAIPage /></PublicLayout>} />
            <Route path="/services/martech/training-enablement" element={<PublicLayout><TrainingEnablementPage /></PublicLayout>} />
            <Route path="/services/content-studio" element={<PublicLayout><ContentStudioPage /></PublicLayout>} />
            <Route path="/services/martech-ai" element={<PublicLayout><MartechAIPage /></PublicLayout>} />
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

            {/* --- Academy (PWA) App Routes --- */}
            <Route path="/academy/app/*" element={
              <AcademyLayout>
                <Routes>
                  <Route index element={<AcademyDashboard />} />
                  <Route path="login" element={<Navigate to="/academy/sign-in" replace />} />
                </Routes>
              </AcademyLayout>
            } />

            {/* --- Academy Marketing Site Routes --- */}
            <Route path="/academy" element={<PublicLayout><AcademyLandingPage /></PublicLayout>} />

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

            {/* Student Auth */}
            <Route path="/academy/sign-in" element={<StudentSignIn />} />
            <Route path="/academy/sign-up" element={<StudentSignUp />} />
            <Route path="/academy/forgot-password" element={<StudentForgotPassword />} />

            {/* University Routes */}
            <Route path="/university" element={
              <UniversityLayout>
                <UniversityHome />
              </UniversityLayout>
            } />
            <Route path="/university/my-learning" element={
              <UniversityLayout>
                <MyLearning />
              </UniversityLayout>
            } />
            <Route path="/university/profile" element={
              <UniversityLayout>
                <StudentProfile />
              </UniversityLayout>
            } />

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

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
