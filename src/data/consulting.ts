import { LucideIcon, Compass, Anchor, BarChart3, Users, Zap, FileText, Target, Layers, LayoutTemplate, MessageSquare, TrendingUp, Settings, Palette, PenTool, Crosshair, Calendar } from 'lucide-react';

/* --- TYPES --- */
export interface OutcomeCard {
    title: string;
    description: string;
    icon: LucideIcon;
    metric?: string;
    metricLabel?: string;
}

export interface ConsultingModule {
    id: string;
    title: string;
    shortDesc: string;
    deliverables: string[];
    timeline: string;
    whoFor: string;
    icon: LucideIcon;
}

export interface ProcessStep {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    inputs: string[];
    activities: string[];
    outputs: string[];
    duration: string;
}

/* --- DATA --- */

export const problems = [
    {
        title: "Sales Complexity",
        desc: "Founders are stuck doing 'hero selling' because the value proposition is too complex for a sales team to replicate."
    },
    {
        title: "Category Skepticism",
        desc: "Buyers don't believe the promise yet, and you lack the social proof or authority to convince them efficiently."
    },
    {
        title: "Scattered Execution",
        desc: "Random acts of marketing (blogs, ads, events) that don't compound into a repeatable engine."
    },
    {
        title: "Data Fog",
        desc: "Arguments about attribution instead of clarity on what is actually driving revenue."
    }
];

export const outcomes: OutcomeCard[] = [
    {
        title: "Category Clarity",
        description: "A narrative that sales teams love and competitors can't copy.",
        icon: Compass,
        metric: "2x",
        metricLabel: "Win rate"
    },
    {
        title: "Launch Velocity",
        description: "Go to market in weeks, not months, with a unified squad.",
        icon: Zap,
        metric: "-40%",
        metricLabel: "Time to launch"
    },
    {
        title: "Pipeline Visibility",
        description: "Dashboards that show exactly where future revenue is coming from.",
        icon: BarChart3,
        metric: "100%",
        metricLabel: "Data trust"
    },
    {
        title: "Team Cadence",
        description: "A marketing org that operates with engineering-like discipline.",
        icon: Users
    }
];

export const modules: ConsultingModule[] = [
    {
        id: 'narrative',
        title: "Category Narrative & Positioning",
        shortDesc: "Stop competing on features. Win on narrative.",
        deliverables: ["Strategic Narrative Deck", "Messaging Source Code", "Sales & Investor Pitch"],
        timeline: "4-6 Weeks",
        whoFor: "Post-Seed Founders, Series A CMOs",
        icon: Anchor
    },
    {
        id: 'gtm',
        title: "GTM Strategy & Channel Plan",
        shortDesc: "The exact roadmap for your next $10M in ARR.",
        deliverables: ["Channel Audit & Selection", "Campaign Calendar", "Budget & Hiring Plan"],
        timeline: "4 Weeks",
        whoFor: "Heads of Growth, VPs of Marketing",
        icon: Target
    },
    {
        id: 'operating-model',
        title: "Marketing Operating Model",
        shortDesc: "The 'source code' for how your team works.",
        deliverables: ["Team Org Chart Analysis", "Rituals & Meeting Cadence", "Hiring Scorecards"],
        timeline: "2-3 Weeks",
        whoFor: "Scaling Teams (5-20 marketers)",
        icon: Layers
    },
    {
        id: 'executive-comms',
        title: "Executive Strategic Comms",
        shortDesc: "Turn your leadership team into industry magnets.",
        deliverables: ["Founder Content Pillars", "LinkedIn Playbook", "Keynote/PR Development"],
        timeline: "Ongoing / Retainer",
        whoFor: "Founders, CEOs",
        icon: FileText
    },
    {
        id: 'cro',
        title: "Conversion Rate Optimization",
        shortDesc: "Turn more traffic into pipeline without spending more.",
        deliverables: ["Funnel Audit", "Landing Page Redesign", "A/B Testing Framework"],
        timeline: "4 Weeks",
        whoFor: "Growth Leads, Demand Gen",
        icon: TrendingUp
    },
    {
        id: 'sales-enablement',
        title: "Sales Enablement & Assets",
        shortDesc: "Arm your sales team with content that actually closes.",
        deliverables: ["Case Study Library", "Competitor Battlecards", "One-Pagers"],
        timeline: "3-5 Weeks",
        whoFor: "Sales Leaders, PMMs",
        icon: MessageSquare
    },
    {
        id: 'martech',
        title: "MarTech Stack Audit",
        shortDesc: "Clean up the mess of tools and disconnects.",
        deliverables: ["Stack Diagram", "Integration Roadmap", "Cost Rationalization"],
        timeline: "2 Weeks",
        whoFor: "Marketing Ops, CTOs",
        icon: Settings
    },
    {
        id: 'brand-identity',
        title: "Brand Identity Design",
        shortDesc: "Visual systems that build trust at scale.",
        deliverables: ["Visual Identity System", "Brand Guidelines", "Asset Library"],
        timeline: "4-8 Weeks",
        whoFor: "Seed to Series B",
        icon: Palette
    },
    {
        id: 'content-engine',
        title: "Content Engine Build",
        shortDesc: "Scalable production for blog, social, and video.",
        deliverables: ["Content Strategy", "Production Workflow", "Editorial Calendar"],
        timeline: "4 Weeks",
        whoFor: "Content Leads, Heads of Marketing",
        icon: PenTool
    },
    {
        id: 'abm-pilot',
        title: "ABM Pilot Program",
        shortDesc: "Targeting your top 50 highly-qualified accounts.",
        deliverables: ["Account List Building", "Personalized Outreach", "Direct Mail Plays"],
        timeline: "6 Weeks",
        whoFor: "B2B SaaS Growth Teams",
        icon: Crosshair
    },
    {
        id: 'event-strategy',
        title: "Event Strategy & Playbook",
        shortDesc: "Turning conferences from expense lines to pipeline.",
        deliverables: ["Event Tiering Strategy", "Booth/Field Activation", "Follow-up Sequences"],
        timeline: "3 Weeks",
        whoFor: "Field Marketing, Demand Gen",
        icon: Calendar
    }
];

export const processSteps: ProcessStep[] = [
    {
        id: 'diagnose',
        title: "Diagnose",
        subtitle: "The Audit",
        description: "We tear down your current stack, data, and messaging to find the hidden friction costing you money.",
        inputs: ["Access to CRM/Analytics", "Team Interviews", "Content Audit"],
        activities: ["Data Deep Dive", "Competitor Recon", "Friction Mapping"],
        outputs: ["90-Day Engine Roadmap", "Quick Win List", "Gap Analysis"],
        duration: "1-2 Weeks"
    },
    {
        id: 'design',
        title: "Design",
        subtitle: "The Blueprint",
        description: "We architect the 'Marketing OS' specific to your business model and stage.",
        inputs: ["Engine Roadmap", "Business Goals"],
        activities: ["Positioning Sprint", "Channel Modeling", "Tech Stack Selection"],
        outputs: ["Strategic Narrative", "GTM Playbook", "Operating Model"],
        duration: "2-4 Weeks"
    },
    {
        id: 'build',
        title: "Build",
        subtitle: "The Build-Out",
        description: "We deploy the systems, content assets, and tech needing to execute the strategy.",
        inputs: ["Approved Strategy"],
        activities: ["Content Production", "Web Dev / MarTech Setup", "Campaign Creation"],
        outputs: ["Launch-Ready Campaigns", "Live Automations", "Sales Collateral"],
        duration: "4-8 Weeks"
    },
    {
        id: 'run',
        title: "Run",
        subtitle: "The Handoff or Scale",
        description: "We execute alongside you, training your team until they can take the keys.",
        inputs: ["Live Market Data"],
        activities: ["Weekly Sprints", "Performance Reviews", "Hiring Support"],
        outputs: ["Predictable Pipeline", "Hired Team", "Transfer of Ownership"],
        duration: "Ongoing"
    }
];
