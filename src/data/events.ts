
import { Calendar, Users, Video, MapPin, Zap } from 'lucide-react';

export type EventType = 'Webinar' | 'In-person' | 'Summit' | 'Workshop';
export type EventStatus = 'Upcoming' | 'Past';

export interface Speaker {
    name: string;
    role: string;
    company: string;
    image: string;
    linkedin?: string;
}

export interface LearningPoint {
    title: string;
    description: string;
    icon: any; // Lucide icon
}

export interface AgendaItem {
    time: string;
    topic: string;
    speaker?: string;
}

export interface Event {
    slug: string;
    title: string;
    type: EventType;
    status: EventStatus;
    startDateTime: string; // ISO string
    endDateTime: string;   // ISO string
    shortDescription: string;
    fullDescription?: string;
    heroMedia: string; // Image URL
    featured: boolean;
    speakers: Speaker[];
    whatYoullLearn: LearningPoint[];
    agenda?: AgendaItem[];
    registrationMode: 'internal' | 'external';
    externalUrl?: string;
    replayUrl?: string;
}

export const events: Event[] = [
    {
        slug: 'ai-marketing-summit-2026',
        title: 'The AI Marketing Summit 2026',
        type: 'Summit',
        status: 'Upcoming',
        startDateTime: '2026-04-15T09:00:00',
        endDateTime: '2026-04-15T17:00:00',
        shortDescription: 'The premier gathering for marketing leaders building the autonomous future.',
        fullDescription: 'Join 500+ marketing executives for a full day of deep dives into agentic workflows, automated creative pipelines, and the new operating model for AI-first teams. No fluff, just playbooks.',
        heroMedia: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000',
        featured: true,
        registrationMode: 'internal',
        speakers: [
            { name: 'Sarah Chen', role: 'VP Growth', company: 'TechFlow', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400' },
            { name: 'Marcus Jo', role: 'Head of AI', company: 'CreativeScale', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
            { name: 'Elena Rodriguez', role: 'CMO', company: 'NextGen', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' }
        ],
        whatYoullLearn: [
            { title: 'Agentic Workflows', description: 'How to deploy autonomous agents for lead triage and content ops.', icon: Zap },
            { title: 'Creative at Scale', description: 'Building a generation pipeline that maintains brand integrity.', icon: Video },
            { title: 'Governance Models', description: 'Safety, privacy, and human-in-the-loop frameworks.', icon: Users }
        ],
        agenda: [
            { time: '09:00 AM', topic: 'Keynote: The Autonomous Department', speaker: 'Elena Rodriguez' },
            { time: '11:00 AM', topic: 'Workshop: Building Your First Agent', speaker: 'Marcus Jo' },
            { time: '02:00 PM', topic: 'Panel: The ROI of AI', speaker: 'Sarah Chen' }
        ]
    },
    {
        slug: 'gtm-engineering-workshop',
        title: 'GTM Engineering: From Hype to Revenue',
        type: 'Workshop',
        status: 'Upcoming',
        startDateTime: '2026-02-10T14:00:00',
        endDateTime: '2026-02-10T16:00:00',
        shortDescription: 'A technical workshop on connecting your CRM, data warehouse, and ad platforms.',
        heroMedia: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000',
        featured: false,
        registrationMode: 'external',
        externalUrl: 'https://lu.ma',
        speakers: [
            { name: 'David Kim', role: 'Solutions Architect', company: 'Marketing Ext.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' }
        ],
        whatYoullLearn: [
            { title: 'Data Unification', description: 'Single view of customer truth across the stack.', icon: Server },
            { title: 'Attribution', description: 'Multi-touch models that actually make sense.', icon: BarChart }
        ]
    },
    {
        slug: 'content-ops-webinar',
        title: 'Scaling Content Ops with Hybrid Teams',
        type: 'Webinar',
        status: 'Past',
        startDateTime: '2025-11-20T11:00:00',
        endDateTime: '2025-11-20T12:00:00',
        shortDescription: 'How to blend in-house strategists with external creators for maximum velocity.',
        heroMedia: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000',
        featured: false,
        registrationMode: 'internal',
        replayUrl: 'https://youtube.com',
        speakers: [
            { name: 'Jessica Lee', role: 'Content Director', company: 'Marketing Ext.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' }
        ],
        whatYoullLearn: [
            { title: 'Briefing Systems', description: 'Templates that reduce revision cycles by 50%.', icon: FileText }
        ]
    },
    {
        slug: 'cro-masterclass',
        title: 'CRO Masterclass for B2B SaaS',
        type: 'Webinar',
        status: 'Upcoming',
        startDateTime: '2026-03-05T13:00:00',
        endDateTime: '2026-03-05T14:30:00',
        shortDescription: 'Advanced experimentation strategies for high-traffic pricing and demo pages.',
        heroMedia: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000',
        featured: false,
        registrationMode: 'internal',
        speakers: [
            { name: 'Alex Thorne', role: 'Head of CRO', company: 'OptimizeNow', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' }
        ],
        whatYoullLearn: [
            { title: 'Hypothesis Design', description: 'Writing experiments that yield learnings, win or lose.', icon: Target },
            { title: 'Statistical Significance', description: 'When to call a test and how to avoid false positives.', icon: Calculator }
        ]
    },
    {
        slug: 'annual-planning-roundtable',
        title: '2026 Annual Planning Roundtable',
        type: 'In-person',
        status: 'Past',
        startDateTime: '2025-10-15T18:00:00',
        endDateTime: '2025-10-15T21:00:00',
        shortDescription: 'Exclusive dinner and discussion for Series C+ CMOs in NYC.',
        heroMedia: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000',
        featured: false,
        registrationMode: 'internal',
        replayUrl: '', // No replay for dinner
        speakers: [],
        whatYoullLearn: []
    },
    {
        slug: 'abm-at-scale',
        title: 'ABM at Scale: The Tech Stack',
        type: 'Webinar',
        status: 'Past',
        startDateTime: '2025-08-12T10:00:00',
        endDateTime: '2025-08-12T11:00:00',
        shortDescription: 'Deconstructing the 6sense + HubSpot + gifting workflow.',
        heroMedia: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000',
        featured: false,
        registrationMode: 'internal',
        replayUrl: 'https://youtube.com',
        speakers: [
            { name: 'Tom Wambsgans', role: 'RevOps Lead', company: 'Royco', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' }
        ],
        whatYoullLearn: []
    }
];

export const getEventBySlug = (slug: string): Event | undefined => {
    return events.find(e => e.slug === slug);
};

// Imports for icons used in data (mocking the import here for the file, but in real app would import up top)
import { Server, BarChart, FileText, Target, Calculator } from 'lucide-react';
