import { BookOpen, Users, Award, Zap, Calendar, Shield, Layout, Target, PenTool, BarChart2, Video } from 'lucide-react';

export const academyData = {
    tracks: [
        {
            slug: 'digital-marketing-associate',
            title: 'Digital Marketing Associate',
            level: 'Beginner',
            durationWeeks: 8,
            summary: 'The complete foundation for modern generalist marketers.',
            heroImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
            outcomes: ['Master SEO & SEM basics', 'Social media strategy', 'Email marketing automation', 'Analytics interpretation'],
            capstoneProject: 'Full-stack campaign launch',
            includedCourses: ['seo-101', 'social-strategy', 'email-automation'],
        },
        {
            slug: 'growth-performance',
            title: 'Growth & Performance',
            level: 'Intermediate',
            durationWeeks: 10,
            summary: 'Data-driven acquisition and retention strategies.',
            heroImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
            outcomes: ['Advanced paid acquisition', 'Conversion rate optimization (CRO)', 'Retention loops', 'Experimentation frameworks'],
            capstoneProject: 'Growth engine audit & optimization',
            includedCourses: ['paid-social-mastery', 'cro-fundamentals', 'retention-strategies'],
        },
        {
            slug: 'brand-storytelling',
            title: 'Brand & Storytelling',
            level: 'Intermediate',
            durationWeeks: 8,
            summary: 'Crafting narratives that resonate in emerging markets.',
            heroImage: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800',
            outcomes: ['Brand identity design', 'Narrative structure', 'Content strategy', 'Visual storytelling'],
            capstoneProject: 'Brand book & launch campaign',
            includedCourses: ['brand-identity', 'storytelling-masterclass', 'content-strategy'],
        },
        {
            slug: 'product-marketing',
            title: 'Product Marketing Essentials',
            level: 'Intermediate',
            durationWeeks: 6,
            summary: 'Go-to-market execution and positioning.',
            heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
            outcomes: ['Positioning & messaging', 'Launch planning', 'Sales enablement', 'Customer research'],
            capstoneProject: 'New feature GTM plan',
            includedCourses: ['positioning-101', 'launch-execution', 'sales-enablement'],
        },
        {
            slug: 'marketing-ops',
            title: 'Marketing Operations & Systems',
            level: 'Advanced',
            durationWeeks: 12,
            summary: 'Building the engine: automation and data infrastructure.',
            heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
            outcomes: ['CRM architecture', 'Marketing automation', 'Data governance', 'Tech stack management'],
            capstoneProject: 'MarTech stack implementation',
            includedCourses: ['crm-architecture', 'automation-workflows', 'data-analytics'],
        },
        {
            slug: 'marketing-leadership',
            title: 'Marketing Leadership',
            level: 'Advanced',
            durationWeeks: 8,
            summary: 'Strategic planning and team management for potential CMOs.',
            heroImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
            outcomes: ['Team structure design', 'Budgeting & P&L', 'Executive communication', 'Strategic vision'],
            capstoneProject: 'Annual marketing strategy deck',
            includedCourses: ['leadership-101', 'budgeting-masterclass', 'executive-comms'],
        }
    ],
    courses: [
        {
            slug: 'mext-101-gtm-automation',
            title: 'MExt 101: GTM Automation',
            rating: 4.9,
            reviewsCount: 128,
            durationHours: 12,
            level: 'Intermediate',
            summary: 'Master the art of automated Go-To-Market workflows using HubSpot and Zapier.',
            image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800',
            outcomes: ['Automate lead routing', 'Build nurturing workflows', 'Integrate disparate tools'],
            topics: ['Automation Basics', 'HubSpot Workflows', 'Zapier Integrations', 'Data Hygiene']
        },
        {
            slug: 'research-for-marketers',
            title: 'Research for Marketers',
            rating: 4.8,
            reviewsCount: 95,
            durationHours: 8,
            level: 'All Levels',
            summary: 'Practical customer research methods that don\'t require a PhD.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
            outcomes: ['Conduct user interviews', 'Design surveys', 'Analyze feedback', 'Build personas'],
            topics: ['Qualitative Research', 'Quantitative Basics', 'Survey Design', 'Insight Synthesis']
        },
        {
            slug: 'landing-pages',
            title: 'Landing Pages that Convert',
            rating: 4.9,
            reviewsCount: 210,
            durationHours: 6,
            level: 'Beginner',
            summary: 'No fluff. Just the psychology and structure of high-converting pages.',
            image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
            outcomes: ['Wireframing', 'Copywriting for conversion', 'A/B testing basics'],
            topics: ['Hero Sections', 'Social Proof', 'Features vs Benefits', 'CTA Psychology']
        },
        {
            slug: 'b2b-content-engine',
            title: 'B2B Content Engine',
            rating: 4.7,
            reviewsCount: 84,
            durationHours: 15,
            level: 'Advanced',
            summary: 'Build a repeatable content machine that drives leads, not just likes.',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
            outcomes: ['Editorial planning', 'Distribution strategy', 'Content repurposing', 'Measurement'],
            topics: ['Strategy', 'Production', 'Distribution', 'Analytics']
        },
        {
            slug: 'metrics-for-leaders',
            title: 'Metrics & Dashboards',
            rating: 4.9,
            reviewsCount: 150,
            durationHours: 10,
            level: 'Advanced',
            summary: 'What to measure, how to measure it, and how to present it to the board.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
            outcomes: ['KPI selection', 'Dashboard design', 'Data storytelling'],
            topics: ['Financial Metrics', 'Funnel Metrics', 'Reporting Frameworks']
        },
        {
            slug: 'social-strategy',
            title: 'Social Media Strategy',
            rating: 4.6,
            reviewsCount: 300,
            durationHours: 8,
            level: 'Beginner',
            summary: 'Beyond posting: building genuine community and engagement.',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
            outcomes: ['Platform selection', 'Content calendars', 'Crisis management'],
            topics: ['Strategy', 'Content', 'Community', 'Anaytics']
        }
    ],
    certifications: [
        {
            slug: 'digital-marketing-specialist',
            title: 'Certified Digital Marketing Specialist',
            level: 'Associate',
            skillsCovered: ['SEO', 'SEM', 'Social Media', 'Analytics'],
            requirements: ['Complete Digital Marketing Track', 'Pass Final Exam (80%+)'],
            verificationEnabled: true
        },
        {
            slug: 'growth-architect',
            title: 'Certified Growth Architect',
            level: 'Professional',
            skillsCovered: ['Experimentation', 'Data Analysis', 'Funnel Optimization'],
            requirements: ['Complete Growth Track', 'Submit Capstone Project'],
            verificationEnabled: true
        },
        {
            slug: 'martech-administrator',
            title: 'Certified MarTech Administrator',
            level: 'Expert',
            skillsCovered: ['HubSpot Architecture', 'Integration Logic', 'Data Governance'],
            requirements: ['Complete MarTech Track', 'Technical Assessment'],
            verificationEnabled: true
        }
    ],
    cohorts: [
        {
            slug: 'spring-2026-growth',
            title: 'Growth Marketing Sprint',
            startDate: 'March 15, 2026',
            durationWeeks: 6,
            whoItsFor: 'Marketers with 2+ years experience wanting to master growth loops.',
            seats: 25,
            applicationOpen: true
        },
        {
            slug: 'spring-2026-leadership',
            title: 'Marketing Leadership Bootcamp',
            startDate: 'April 1, 2026',
            durationWeeks: 4,
            whoItsFor: 'Senior ICs moving into management roles.',
            seats: 15,
            applicationOpen: true
        },
        {
            slug: 'summer-2026-content',
            title: 'Content Strategy Intensive',
            startDate: 'June 10, 2026',
            durationWeeks: 6,
            whoItsFor: 'Content creators wanting to become strategists.',
            seats: 30,
            applicationOpen: false
        }
    ],
    spaces: [
        {
            slug: 'career-starters',
            title: 'Career Starters',
            summary: 'Resume reviews, interview prep, and first-job survival guides.',
            image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600',
            weeklyPromptExample: 'Share your 30-second elevator pitch.'
        },
        {
            slug: 'growth-performance',
            title: 'Growth & Performance',
            summary: 'Deep dives into ad platforms, CRO, and analytics.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
            weeklyPromptExample: 'What is your biggest CAC channel right now?'
        },
        {
            slug: 'brand-story',
            title: 'Brand & Story',
            summary: 'Creative feedback, narrative framing, and visual design.',
            image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=600',
            weeklyPromptExample: 'Critique this rebranding campaign.'
        },
        {
            slug: 'marketing-ops',
            title: 'Marketing Ops',
            summary: 'HubSpot help, Zapier recipes, and data headaches.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
            weeklyPromptExample: 'How do you handle lead attribution conflicts?'
        },
        {
            slug: 'design-marketers',
            title: 'Design for Marketers',
            summary: 'Figma tips, asset management, and creative direction.',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600',
            weeklyPromptExample: 'Share a landing page that inspired you this week.'
        },
        {
            slug: 'nigeria-jobs',
            title: 'Nigeria Jobs & Gigs',
            summary: 'Verified opportunities from top African companies.',
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600',
            weeklyPromptExample: 'Who is hiring for a Social Media Manager in Lagos?'
        }
    ],
    events: [
        {
            slug: 'office-hours-mar-10',
            title: 'Weekly Office Hours: Growth',
            dateTime: 'March 10, 4:00 PM WAT',
            format: 'Live Q&A',
            host: 'Chioma Adebayo',
            summary: 'Bring your broken funnels. We will fix them live.'
        },
        {
            slug: 'masterclass-ai-content',
            title: 'Masterclass: AI for Content Scaling',
            dateTime: 'March 18, 6:00 PM WAT',
            format: 'Webinar',
            host: 'David Okafor',
            summary: 'How to use Midjourney and Claude without sounding robotic.'
        },
        {
            slug: 'mixer-lagos',
            title: 'Lagos Marketers Mixer',
            dateTime: 'April 5, 5:00 PM WAT',
            format: 'In-Person',
            host: 'MExt Team',
            summary: 'Drinks, networking, and no sales pitches.'
        }
    ],
    aiFeatures: [
        {
            title: 'MExt Tutor',
            desc: 'Context-aware help inside every lesson.',
            icon: Zap
        },
        {
            title: 'Smart Search',
            desc: 'Find answers across video, text, and guides.',
            icon: Shield
        },
        {
            title: 'Study Plans',
            desc: 'Adaptive schedules based on your pace.',
            icon: Layout
        },
        {
            title: 'Portfolio Review',
            desc: 'Instant rubric feedback on your projects.',
            icon: Target
        },
        {
            title: 'Safe Space',
            desc: 'AI moderation to keep communities helpful.',
            icon: Shield
        }
    ],
    testimonials: [
        {
            name: 'Grace Eze',
            role: 'Marketing Lead',
            location: 'Lagos',
            quote: 'The curriculum is unlike anything else available in the region. It is properly difficult and actually prepares you for the job.',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
        },
        {
            name: 'Kwame Mensah',
            role: 'Growth Specialist',
            location: 'Accra',
            quote: 'Finally, a course that teaches how marketing works in Africa, not just Silicon Valley theory.',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
        },
        {
            name: 'Zainab Ahmed',
            role: 'Freelancer',
            location: 'Nairobi',
            quote: 'The community is the real product. I got my last three clients through the Jobs space.',
            avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
        },
        {
            name: 'Tunde Oladipo',
            role: 'Founder',
            location: 'Abuja',
            quote: 'We use MExt University to train all our junior hires. It saves us weeks of onboarding.',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
        },
        {
            name: 'Sarah Njoroge',
            role: 'Content Strategist',
            location: 'Lagos',
            quote: 'The certification actually meant something to my employer. Verified and rigorous.',
            avatar: 'https://images.unsplash.com/photo-1534751516042-4286290838d8?auto=format&fit=crop&q=80&w=200'
        }
    ],
    faqs: [
        { q: 'What is MExt University?', a: 'MExt University is the education arm of Marketing Extension, focused on practical, career-linked training for African marketers.' },
        { q: 'Is it free?', a: 'We offer a free tier with access to select courses and community spaces. Our Pro plan includes full tracks, cohorts, and advanced certifications.' },
        { q: 'How do certifications work?', a: 'Our certifications require passing a proctored exam and submitting a practical capstone project. They are cryptographically verified.' },
        { q: 'How does verification work?', a: 'Each certificate has a unique ID and QR code that employers can check on our public verification page.' },
        { q: 'How do cohorts work?', a: 'Cohorts are 4-6 week intensive sprints with a fixed start date, live mentor sessions, and peer group projects.' },
        { q: 'Do I need experience?', a: 'We have tracks for every level. Our "Digital Marketing Associate" track is perfect for complete beginners.' },
        { q: 'Can I learn on mobile?', a: 'Yes. Our platform is fully responsive and works great on mobile browsers. A native app is coming soon.' },
        { q: 'What is included in community?', a: 'Access to topic-specific spaces (SEO, Brand, etc.), weekly prompts, job boards, and peer feedback.' },
        { q: 'Do you offer scholarships?', a: 'Yes, we have a scholarship fund for underrepresented talent. Applications open quarterly.' },
        { q: 'How do employers verify?', a: 'Employers can visit /academy/verify, enter the certificate ID, and see the full transcript and validity status.' }
    ]
};
