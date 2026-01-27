import { LucideIcon, Database, Zap, Brain, Activity, Code, Layers, Bot, Shield, Server, Terminal, LineChart, FileText, CheckCircle2, AlertTriangle, MonitorPlay, GitBranch } from 'lucide-react';

/* --- TYPES --- */

export interface SystemStatus {
    id: string;
    label: string;
    status: 'Connected' | 'Healthy' | 'Ready' | 'Bottleneck' | 'Drift' | 'Velocity';
    value?: string;
    meta?: string;
    icon: LucideIcon;
    color: 'green' | 'amber' | 'blue' | 'purple';
}

export interface MarTechModule {
    id: string;
    title: string;
    outcome: string;
    deliverables: string[];
    link: string;
    icon: LucideIcon;
}

export interface AuditDeliverable {
    label: string;
    desc: string;
}

export interface ProcessStep {
    id: number;
    title: string;
    subtitle: string;
    duration: string;
    description: string;
    output: string;
    role: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

/* --- DATA --- */

export const systemStatuses: SystemStatus[] = [
    {
        id: 'data',
        label: "Data Layer",
        status: "Drift",
        value: "Connected",
        meta: "Drift detected",
        icon: Database,
        color: 'amber'
    },
    {
        id: 'automation',
        label: "Automation",
        status: "Bottleneck",
        value: "Unknown",
        meta: "Bottleneck at step 3",
        icon: Zap,
        color: 'green'
    },
    {
        id: 'ai',
        label: "AI Readiness",
        status: "Ready",
        value: "62%",
        meta: "Governance: Missing",
        icon: Brain,
        color: 'purple'
    },
    {
        id: 'velocity',
        label: "Experiment Velocity",
        status: "Velocity",
        value: "1.2",
        meta: "releases / week",
        icon: Activity,
        color: 'blue'
    }
];

export const martechModules: MarTechModule[] = [
    {
        id: 'product-engineering',
        title: "Product & Web Engineering",
        outcome: "Marketing sites that feel like software products.",
        deliverables: ["Next.js / Headless Transformations", "Custom Calculators & Tools", "Performance Engineering"],
        link: "/services/martech/product-engineering",
        icon: Code
    },
    {
        id: 'systems-automation',
        title: "Marketing Systems & Automation",
        outcome: "The plumbing that makes growth repeatable.",
        deliverables: ["CDP & Warehouse Setup", "Cross-Channel Orchestration", "Revenue Data Pipelines"],
        link: "/services/martech/automation-revops",
        icon: Layers
    },
    {
        id: 'ai-enablement',
        title: "AI Enablement & Agents",
        outcome: "Not just prompts. Autonomous infrastructure.",
        deliverables: ["Proprietary LLM Agents", "Knowledge Base APIs", "Team AI Training"],
        link: "/services/martech/ai-audit",
        icon: Bot
    },
    {
        id: 'managed-martech',
        title: "Managed MarTech",
        outcome: "We guard the stack while you ship campaigns.",
        deliverables: ["24/7 Monitoring & Fixes", "Vendor Governance", "Monthly Optimization"],
        link: "/services/martech/managed-stack",
        icon: Shield
    }
];

export const auditDeliverables: AuditDeliverable[] = [
    { label: "Stack Inventory", desc: "Redundancy map & cost analysis" },
    { label: "Data Diagnostics", desc: "Tracking integrity & schema validation" },
    { label: "Automation Map", desc: "Visualizing silent breakages" },
    { label: "Attribution Review", desc: "Reporting vs. reality check" },
    { label: "AI Readiness", desc: "Infrastructure & governance score" },
    { label: "90-Day Roadmap", desc: "Prioritized fix & build plan" }
];

export const buildGallery = [
    {
        id: 'dashboard',
        title: "Revenue Command Center",
        type: "Dashboard UI",
        desc: "Unified view of pipeline velocity and attribution.",
        icon: LineChart
    },
    {
        id: 'web',
        title: "Headless CMS Portal",
        type: "Marketing Site",
        desc: "Next.js + Sanity architecture for sub-second loads.",
        icon: MonitorPlay
    },
    {
        id: 'workflow',
        title: "Lead Routing Logic",
        type: "Automation Builder",
        desc: "Complex multi-state routing with fallbacks.",
        icon: GitBranch
    }
];


export const aiCapabilities = [
    {
        id: 'enablement',
        title: "Enablement & Readiness",
        promise: "We quantify where AI fits, what to automate, and what not to touch.",
        bullets: [
            "AI readiness score + risk map",
            "Use-case backlog (ranked by ROI)",
            "Team enablement (playbooks)"
        ],
        chips: ["Readiness Score", "Use-case Backlog", "AI Playbook", "Training Kit"],
        examples: [
            { label: "Readiness Assessment", desc: "Data access, tooling, security, workflows" },
            { label: "Training Modules", desc: "AI for Marketing Ops, Prompting for Teams" }
        ],
        consoleData: {
            score: 72,
            metrics: [
                { label: "Data", value: 85 },
                { label: "Workflow", value: 60 },
                { label: "Security", value: 92 },
                { label: "Team", value: 45 }
            ],
            status: "Guardrails: Active • Logging: On"
        },
        color: 'blue'
    },
    {
        id: 'automation',
        title: "Agentic Automation",
        promise: "We build governed agents that run workflows end-to-end.",
        bullets: [
            "Agent workflows (triage, reporting)",
            "Human-in-the-loop approvals",
            "Monitoring + iteration loop"
        ],
        chips: ["Agent Blueprints", "Workflow Maps", "Integration Specs", "Runbooks"],
        examples: [
            { label: "Lead Scoring", desc: "Pulls CRM + enrichment -> recommends priority" },
            { label: "Campaign Ops", desc: "QA links/UTMs, checks budgets, flags anomalies" }
        ],
        consoleData: {
            activeAgents: 3,
            automations: [
                "Lead Scoring Assistant",
                "Marketing Reporting Agent",
                "Campaign Ops Copilot"
            ],
            status: "Approval gates: Enabled"
        },
        color: 'purple'
    },
    {
        id: 'governance',
        title: "Governance & Controls",
        promise: "Security, auditability, and accuracy—built in.",
        bullets: [
            "Data boundaries (PII rules)",
            "Prompt/version logging",
            "Model + tool governance"
        ],
        chips: ["Policy Pack", "Eval Suite", "Audit Logs", "Access Controls"],
        examples: [
            { label: "No Public Leakage", desc: "Support private deployments / controlled access" },
            { label: "Evaluation", desc: "Hallucination checks, regression tests" }
        ],
        consoleData: {
            flags: 0,
            checks: [
                "PII Exposure Risk: None",
                "Event Tracking: Validated",
                "Manual Loops: Flagged"
            ],
            status: "Logging: On • Model: Private"
        },
        color: 'green'
    }
];

export const processTimeline: ProcessStep[] = [
    {
        id: 1,
        title: "Diagnose",
        subtitle: "Audit",
        duration: "1-2 Weeks",
        description: "We tear down the stack to find hidden friction and cost leaks.",
        output: "Engine Audit & Roadmap",
        role: "Solutions Architect",
        details: [
            "Full stack inventory & cost analysis",
            "Data integrity & schema validation",
            "Process bottleneck identification"
        ],
        deliverables: ["Redundancy Map", "Cost Analysis", "Fix Roadmap"],
        signal: "Sources: CRM • Analytics • Ads"
    },
    {
        id: 2,
        title: "Architect",
        subtitle: "Target Stack",
        duration: "1 Week",
        description: "Designing the future state data models and integration specs.",
        output: "Technical Blueprint",
        role: "Data Engineer",
        details: [
            "Data model design (CDP/Warehouse)",
            "Integration specifications",
            "Tool selection & displacement plan"
        ],
        deliverables: ["Data Schema", "Integration Spec", "Migration Plan"],
        signal: "Modes: Design • Plan • Spec"
    },
    {
        id: 3,
        title: "Build",
        subtitle: "Sprints",
        duration: "2-6 Weeks",
        description: "Heads-down engineering. Systems, scripts, and front-end code.",
        output: "Production-Ready Systems",
        role: "Engineering Squad",
        details: [
            "API configuration & script writing",
            "Frontend development (Next.js)",
            "Automation workflow construction"
        ],
        deliverables: ["Codebase", "Configured Tools", "Automations"],
        signal: "Status: Building • Testing"
    },
    {
        id: 4,
        title: "Integrate",
        subtitle: "Data + Workflows",
        duration: "Continuous",
        description: "Wiring it all together and validating data flow integrity.",
        output: "End-to-End Test Suite",
        role: "QA Automation",
        details: [
            "End-to-end data flow testing",
            "Error handling & alert setup",
            "User acceptance testing (UAT)"
        ],
        deliverables: ["Test Report", "Live Integrations", "Error Logs"],
        signal: "Reliability: Monitoring ON"
    },
    {
        id: 5,
        title: "Operate",
        subtitle: "Managed + Scale",
        duration: "Monthly",
        description: "Monitoring the engine and shipping iterative improvements.",
        output: "Monthly Health Report",
        role: "Reliability Engineer",
        details: [
            "24/7 Uptime monitoring",
            "Proactive optimization",
            "Monthly strategy reviews"
        ],
        deliverables: ["Health Dashboard", "Optimization Log", "Strategy Deck"],
        signal: "Uptime: 99.9% • Optimization: Active"
    }
];

export const faqs: FAQItem[] = [
    {
        question: "Are you an agency or an engineering team?",
        answer: "We are engineers. We don't just run ads or write copy; we write code, build schemas, and configure APIs. Think of us as a DevOps team for Marketing."
    },
    {
        question: "Do you replace our in-house team?",
        answer: "No. We handle the heavy lifting of infrastructure and complex builds so your in-house marketers can focus on strategy and creative execution."
    },
    {
        question: "What stacks do you support?",
        answer: "We are agnostic but opinionated. We work deep in HubSpot, Salesforce, Segment, Snowflake, and the modern headless web stack (Next.js, Vercel)."
    },
    {
        question: "How do you handle security and privacy?",
        answer: "Governance is part of our audit. We enforce GDPR/CCPA compliance in data flows and ensure rigorous role-based access controls."
    },
    {
        question: "How do you avoid AI hype?",
        answer: "We don't sell 'magic'. We build the data pipelines and context windows required for AI to actually work reliably in a business context."
    },
    {
        question: "What does ongoing management look like?",
        answer: "It's like Site Reliability Engineering (SRE). We monitor uptimes, fix API breaks, manage vendor updates, and optimize costs monthly."
    },
    {
        question: "Typical timelines?",
        answer: "Audits take 1-2 weeks. Build sprints range from 2-6 weeks depending on complexity. We ship fast."
    },
    {
        question: "Pricing approach?",
        answer: "Project-based for audits and builds. Flat monthly retainer for Managed MarTech. No hidden hourly billing."
    }
];
