
import { Users, Cpu, Server, Shield, Zap, Target } from 'lucide-react';

// --- SHARED TYPES ---
export interface CaseStudy {
    id: string;
    title: string;
    description: string;
    outcome: string;
    image: string;
    category: string;
    video?: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}

// --- TALENT PAGE DATA ---
export const talentData = {
    hero: {
        pill: "WHY US / OUR TALENT",
        title: "Elite marketing talent. Assembled fast. Managed well.",
        subtitle: "Marketing Extension gives you a high-performing pod—strategists, operators, creators, and specialists—aligned to your goals and run with real cadence.",
    },
    problem: {
        title: "Hiring is slow. Freelancing is risky. Agencies are stretched.",
        cards: [
            { title: "Time-to-team is too long", desc: "Months to find, interview, and onboard." },
            { title: "Quality is inconsistent", desc: "Freelancers vary; agencies bait-and-switch." },
            { title: "No ownership after delivery", desc: "External teams rarely own the outcome." }
        ],
        response: "We fix this by combining talent density + operating discipline + measured delivery."
    },
    model: {
        title: "Pods, not single hires.",
        description: "A cohesive unit led by a single accountable owner.",
        steps: [
            { title: "Composition", desc: "Replaceable roles tailored to your stack." },
            { title: "Dedicated Lead", desc: "One point of contact. One owner." },
            { title: "Cadence", desc: "Weekly planning, daily async updates." }
        ],
        artifacts: ["Pod Charter", "Delivery Roadmap", "KPI Scoreboard", "Experiment Backlog"]
    },
    vetting: {
        title: "We keep the bar high—and we keep measuring it.",
        steps: [
            { title: "Screen", desc: "Top 5% of applicants passed." },
            { title: "Skill Validation", desc: "Live operational tests." },
            { title: "Case Review", desc: "Portfolio deep-dives." },
            { title: "Trial Sprint", desc: "Paid 2-week pilot." },
            { title: "Performance", desc: "Quarterly review cycles." }
        ]
    },
    roles: [
        { title: "Strategist", tags: ["Growth", "GTM", "Positioning"], wins: "Scaled ARR 2x in 6mo" },
        { title: "Growth Engineer", tags: ["Full-stack", "Tracking", "AB Testing"], wins: "Built 50+ experiments" },
        { title: "Content Lead", tags: ["Editorial", "SEO", "Social"], wins: "Doubled organic traffic" },
        { title: "Brand Designer", tags: ["UI/UX", "Motion", "Systems"], wins: "Rebranded Series B unicorn" },
        { title: "CRM Specialist", tags: ["HubSpot", "Lifecycle", "Email"], wins: "40% lift in retention" },
        { title: "Ops Manager", tags: ["Process", "Tools", "Reporting"], wins: "Automated 20hrs/week work" }
    ],
    timeline: [
        { week: "Week 0", title: "Onboarding + Baseline", desc: "Access, audit, and initial strategy." },
        { week: "Weeks 1-2", title: "Quick Wins", desc: "Fixing low-hanging fruit and setting cadence." },
        { week: "Weeks 3-6", title: "Build + Scale", desc: "Launching core campaigns and systems." },
        { week: "Ongoing", title: "Optimize + Expand", desc: "Iterative testing and channel expansion." }
    ],
    faqs: [
        { question: "How fast can you assemble a pod?", answer: "Typically 5-10 business days." },
        { question: "Do we get a dedicated lead?", answer: "Yes. Every pod has a dedicated Strategist/Lead." },
        { question: "How do you measure performance?", answer: "We align on KPIs during onboarding and track weekly." },
        { question: "Can you work with our internal team?", answer: "Absolutely. We embed into your slack and workflows." },
        { question: "What happens if someone isn't a fit?", answer: "We swap them out immediately at no cost." },
        { question: "What does handover look like?", answer: "Full documentation, Loom walkthroughs, and training." }
    ]
};

// --- AI EXCELLENCE PAGE DATA ---
export const aiData = {
    hero: {
        pill: "WHY US / AI EXCELLENCE",
        title: "AI as infrastructure. Not a gimmick.",
        subtitle: "We help teams audit readiness, set up secure AI foundations, train staff, and deploy automation and agents that improve real workflows—without compromising data or quality.",
    },
    problem: {
        title: "Most teams are stuck in AI limbo.",
        cards: [
            { title: "Tools everywhere", desc: "No cohesive operating model." },
            { title: "Risk unclear", desc: "Governance and security are afterthoughts." },
            { title: "No integration", desc: "AI sets outside day-to-day work." }
        ],
        response: "We turn AI from experiments into reliable production workflows."
    },
    audit: {
        assessments: [
            "Process Inventory", "Data Readiness", "Tool/Stack Map", "Risk + Governance", "Opportunity Map"
        ],
        artifacts: [
            "Stack Inventory", "Workflow Map", "AI Use-Case Shortlist",
            "Data Recommendations", "Governance Baseline", "Rollout Roadmap"
        ],
        delivery: "Delivered in: 2-3 Weeks"
    },
    training: [
        { title: "Leadership Track", desc: "Strategy + Governance", modules: ["AI Strategy", "Risk Frameworks"] },
        { title: "Team Track", desc: "Workflows + Safety", modules: ["Prompt Engineering", "Tool Safety"] },
        { title: "Builder Track", desc: "Agents + Automation", modules: ["Zapier/Make", "API Integrations"] }
    ],
    agents: [
        { title: "Lead Triage", desc: "Scores & routes leads instantly.", where: "CRM / Slack" },
        { title: "Insight Miner", desc: "Summarizes reports into actions.", where: "Dashboards" },
        { title: "Content Guard", desc: "Enforces brand voice & safety.", where: "CMS / Docs" },
        { title: "Comp. Monitor", desc: "Tracks competitor moves 24/7.", where: "Slack Alert" },
        { title: "Personalizer", desc: "Tailors lifecycle emails at scale.", where: "Email Tool" },
        { title: "Knowledge Bot", desc: "Instant internal answers.", where: "Slack / Wiki" }
    ]
};

// --- TECHNOLOGY PAGE DATA ---
export const techData = {
    hero: {
        pill: "WHY US / OUR TECHNOLOGY",
        title: "Technology built for marketing teams that ship.",
        subtitle: "We build marketing sites, dashboards, automation, and web products—then integrate and manage the stack so performance doesn’t decay after launch.",
    },
    problem: {
        title: "Most marketing stacks are expensive—and still unreliable.",
        cards: [
            { title: "Disconnected Tools", desc: "Silos that don't talk." },
            { title: "Bad Data", desc: "Decisions made on guesses." },
            { title: "Broken Attribution", desc: "Credit where credit isn't due." },
            { title: "Slow Shipping", desc: "Dev resources are always blocked." }
        ],
        response: "We make the stack coherent, measurable, and maintainable."
    },
    architecture: [
        { layer: "Data Layer", desc: "Tracking, Warehouse, CDP", fix: "Unified Schema" },
        { layer: "Orchestration", desc: "Automation, Routing, Pipelines", fix: "Robust APIs" },
        { layer: "Channels", desc: "CRM, Email, Web, Paid", fix: "Connected Stack" },
        { layer: "Intelligence", desc: "Analytics, Insights, Agents", fix: "Actionable Dashboards" },
        { layer: "Governance", desc: "Access, Policy, Logging", fix: "Audit Trails" }
    ],
    managed: {
        title: "Managed MarTech",
        items: [
            "Monitoring & Critical Fixes", "Vendor Governance", "Monthly Optimization", "Change Management", "Documentation"
        ],
        monitors: ["Uptime", "Tracking Integrity", "Form Flows", "Automation Failures", "Dashboard Freshness"]
    }
};

// --- SHARED CASE STUDIES ---
export const caseStudies: CaseStudy[] = [
    {
        id: "fintech-scale",
        title: "Fintech Scale-up",
        description: "Rebuilt marketing engine for Series B launch.",
        outcome: "2x Lead Volume",
        category: "Tech Audit + Rebuild",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: "saas-automation",
        title: "B2B SaaS Automation",
        description: "Full lifecycle automation.",
        outcome: "40hrs/mo Saved",
        category: "Workflow Automation",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: "ai-content",
        title: "AI Content Engine",
        description: "Deployed AI agents for blog ops.",
        outcome: "3x Output Speed",
        category: "AI Readiness",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: "dashboard-ui",
        title: "Executive Dashboards",
        description: "Unified data into actionable views.",
        outcome: "Real-time Visibility",
        category: "Data + Dashboards",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
    }
];
