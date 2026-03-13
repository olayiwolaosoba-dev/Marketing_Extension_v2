
export type SubScoreCategory =
    | 'Strategy & Positioning'
    | 'Demand & Pipeline'
    | 'Content & Brand System'
    | 'Measurement & Experimentation'
    | 'Stack, Automation & AI Readiness';

export type PillarId =
    | 'strategy_positioning'
    | 'demand_pipeline'
    | 'content_brand'
    | 'measurement_experimentation'
    | 'stack_ai';

export interface AuditOption {
    label: string;
    score: number; // 0 to 4
}

export interface AuditQuestion {
    id: string;
    pillar: PillarId;
    category: SubScoreCategory;
    text: string;
    options: AuditOption[];
}

/* ── Qualification (non-scoring) questions ── */
export interface QualificationQuestion {
    id: string;
    text: string;
    options: string[];
    dataKey: 'companyStage' | 'industry' | 'teamSize';
}

export interface QualificationData {
    companyStage?: string;
    industry?: string;
    teamSize?: string;
}

/* ── Maturity framework ── */
export interface MaturityStage {
    min: number;
    max: number;
    label: string;
    descriptor: string;
}

export const MATURITY_STAGES: MaturityStage[] = [
    { min: 0, max: 20, label: 'SIGNAL', descriptor: "You have the raw ingredients. The engine hasn't started yet." },
    { min: 21, max: 40, label: 'SYSTEMS', descriptor: "You're building the foundation. Consistency is the next unlock." },
    { min: 41, max: 60, label: 'SCALE', descriptor: "Your engine is running. Now it's time to compound." },
    { min: 61, max: 80, label: 'VELOCITY', descriptor: "You're operating at pace. Optimisation drives the next 30% of growth." },
    { min: 81, max: 100, label: 'DOMINANCE', descriptor: "You're a benchmark. The goal is to stay ahead of the field." },
];

export const getMaturityStage = (score: number): MaturityStage => {
    return MATURITY_STAGES.find(s => score >= s.min && score <= s.max) || MATURITY_STAGES[0];
};

/* ── Result type ── */
export interface AuditResult {
    totalScore: number;
    subScores: Record<SubScoreCategory, number>; // 0-20 per category
    maturityLabel: string;
    maturityDescriptor: string;
    topPriorities: SubScoreCategory[];
    recommendedServices: { name: string; link: string; rationale?: string }[];
    qualificationData?: QualificationData;
}

// Map Pillar IDs to Display Names
export const PILLAR_MAP: Record<PillarId, SubScoreCategory> = {
    strategy_positioning: 'Strategy & Positioning',
    demand_pipeline: 'Demand & Pipeline',
    content_brand: 'Content & Brand System',
    measurement_experimentation: 'Measurement & Experimentation',
    stack_ai: 'Stack, Automation & AI Readiness'
};

/* ── Qualification questions (Improvement 8) ── */
export const QUALIFICATION_QUESTIONS: QualificationQuestion[] = [
    {
        id: 'QC_STAGE',
        text: 'Which best describes your company right now?',
        options: ['Pre-revenue', '$0\u2013$500K ARR', '$500K\u2013$3M ARR', '$3M\u2013$15M ARR', '$15M+ ARR', 'Part of a large enterprise'],
        dataKey: 'companyStage',
    },
    {
        id: 'QC_INDUSTRY',
        text: 'Which industry are you primarily in?',
        options: ['Fintech', 'Payments & Banking', 'RegTech & Compliance', 'B2B SaaS', 'Crypto & Digital Assets', 'Professional Services', 'Other'],
        dataKey: 'industry',
    },
    {
        id: 'QC_TEAM',
        text: 'How large is your current marketing team?',
        options: ['Just me', '2\u20133 people', '4\u20138 people', '9\u201320 people', '20+ people', 'No dedicated marketing team'],
        dataKey: 'teamSize',
    },
];

/* ── Dimension insights (Improvement 3) ── */
export const DIMENSION_INSIGHTS: Record<SubScoreCategory, { low: string; mid: string; high: string }> = {
    'Strategy & Positioning': {
        low: "Your positioning is undefined or inconsistent, making it hard for buyers to self-select. This is the highest-leverage starting point \u2014 without a clear ICP and narrative, every other investment underperforms.",
        mid: "You have a positioning foundation but it\u2019s not consistently activated across channels and teams. The gap between strategy and execution is costing you qualified pipeline.",
        high: "Your positioning is clear and well-deployed \u2014 the next frontier is turning it into a dynamic competitive moat that evolves with the market.",
    },
    'Demand & Pipeline': {
        low: "Your pipeline depends on relationships and referrals, which creates unpredictable revenue. Building a systematic demand engine is the unlock for scale.",
        mid: "You have some demand channels working but they\u2019re not compounding. A coordinated multi-channel system with proper attribution would multiply your current results.",
        high: "Your demand engine is performing well. The focus now should be efficiency \u2014 reducing CAC while expanding into adjacent segments.",
    },
    'Content & Brand System': {
        low: "Content is being created reactively rather than strategically. Without a brand system and content engine, you\u2019re invisible to buyers in research mode.",
        mid: "You have content assets but they\u2019re not working together as a system. Coherence and velocity are the two levers to pull here.",
        high: "Your brand and content system is a genuine asset. The next level is turning content into a pipeline attribution driver with measurable ROI.",
    },
    'Measurement & Experimentation': {
        low: "You\u2019re making marketing decisions based on instinct rather than data. This is the fastest way to waste budget and the easiest thing to fix with the right stack.",
        mid: "You have some data but attribution is unclear and experiments are rare. Closing this gap will immediately improve marketing ROI by eliminating underperforming spend.",
        high: "Your measurement is strong. The next evolution is predictive analytics and closed-loop revenue attribution from first touch to close.",
    },
    'Stack, Automation & AI Readiness': {
        low: "Your team is doing manually what machines should be doing. This creates bottlenecks, errors, and limits your capacity to scale without proportional headcount growth.",
        mid: "You have tools but they\u2019re not integrated. Data silos and manual handoffs between systems are costing you speed and accuracy.",
        high: "Your stack is well-integrated. AI-assisted workflows and predictive automation are the next layer that will compound your existing advantages.",
    },
};

export const getDimensionInsight = (category: SubScoreCategory, score: number): string => {
    const insights = DIMENSION_INSIGHTS[category];
    if (score <= 8) return insights.low;
    if (score <= 14) return insights.mid;
    return insights.high;
};

/* ── Growth Roadmap actions per weak dimension (Improvement 7) ── */
export const DIMENSION_ACTIONS: Record<SubScoreCategory, { action: string; time: string; ctaLabel: string; ctaLink: string }> = {
    'Strategy & Positioning': {
        action: 'Run a positioning sprint: 3 workshops to define ICP, competitive differentiation, and core narrative.',
        time: '2\u20134 weeks',
        ctaLabel: 'Start with Consulting',
        ctaLink: '/services/marketing-consulting',
    },
    'Demand & Pipeline': {
        action: 'Build a multi-channel demand playbook with 90-day pipeline targets and channel-specific KPIs.',
        time: '4\u20138 weeks',
        ctaLabel: 'See Demand Generation',
        ctaLink: '/services/marketing-consulting',
    },
    'Content & Brand System': {
        action: 'Launch a content engine: brand guidelines, 30-day content calendar, and 3 flagship assets.',
        time: '2\u20134 weeks',
        ctaLabel: 'Build My Content Engine',
        ctaLink: '/contentplus',
    },
    'Measurement & Experimentation': {
        action: 'Deploy a marketing dashboard connecting your CRM, ad channels, and website into one source of truth.',
        time: '4\u20138 weeks',
        ctaLabel: 'Upgrade My Stack',
        ctaLink: '/services/martech',
    },
    'Stack, Automation & AI Readiness': {
        action: 'Audit your current tools, eliminate redundancies, and implement 3 core automations (nurture, routing, reporting).',
        time: '4\u20138 weeks',
        ctaLabel: 'Get a Stack Audit',
        ctaLink: '/services/martech',
    },
};

// Full 30-Question Bank
export const AUDIT_QUESTION_BANK: AuditQuestion[] = [
    // --- Strategy & Positioning --- //
    {
        id: 'SP1', pillar: 'strategy_positioning', category: 'Strategy & Positioning',
        text: 'How clearly defined is your Ideal Customer Profile (ICP)?',
        options: [
            { label: 'Not defined / We sell to everyone', score: 0 },
            { label: 'Loosely defined (e.g., "small businesses")', score: 1 },
            { label: 'Documented, but we often stray outside it', score: 2 },
            { label: 'Clear ICP, but personas need work', score: 3 },
            { label: 'Precision-targeted ICP & personas used daily', score: 4 }
        ]
    },
    {
        id: 'SP2', pillar: 'strategy_positioning', category: 'Strategy & Positioning',
        text: 'How clear is your positioning (why you win) versus alternatives?',
        options: [
            { label: 'We sound like everyone else', score: 0 },
            { label: 'We have a tagline, but it doesn\u2019t guide decisions', score: 1 },
            { label: 'We have a pitch, but teams tell it differently', score: 2 },
            { label: 'Clear positioning used across sales + marketing', score: 3 },
            { label: 'Category narrative + proof points used consistently', score: 4 }
        ]
    },
    {
        id: 'SP3', pillar: 'strategy_positioning', category: 'Strategy & Positioning',
        text: 'How well-packaged is your offer (pricing, bundles, what\u2019s included)?',
        options: [
            { label: 'Pricing is case-by-case / unclear', score: 0 },
            { label: 'We have pricing, but buyers still get confused', score: 1 },
            { label: 'Clear packages, but discounting is common', score: 2 },
            { label: 'Packages are clear and protect margin', score: 3 },
            { label: 'Packaging is optimized (value-based, tested, scalable)', score: 4 }
        ]
    },
    {
        id: 'SP4', pillar: 'strategy_positioning', category: 'Strategy & Positioning',
        text: 'How clear is your go-to-market strategy for the next 90 days?',
        options: [
            { label: 'No clear plan', score: 0 },
            { label: 'Ideas exist, but not documented', score: 1 },
            { label: 'Documented, but not operationalized', score: 2 },
            { label: 'Clear plan with owners and timelines', score: 3 },
            { label: 'Clear plan + weekly operating cadence', score: 4 }
        ]
    },
    {
        id: 'SP5', pillar: 'strategy_positioning', category: 'Strategy & Positioning',
        text: 'How strong is your proof (case studies, results, credibility) for buyers?',
        options: [
            { label: 'No proof assets', score: 0 },
            { label: 'A few anecdotes, not structured', score: 1 },
            { label: 'Some proof, but inconsistent and outdated', score: 2 },
            { label: 'Strong proof used in sales consistently', score: 3 },
            { label: 'Proof engine: updated, measurable, and persuasive', score: 4 }
        ]
    },
    {
        id: 'SP6', pillar: 'strategy_positioning', category: 'Strategy & Positioning',
        text: 'How well do you understand competitors and how to win against them?',
        options: [
            { label: 'We don\u2019t track competitors', score: 0 },
            { label: 'Basic awareness, no strategy', score: 1 },
            { label: 'We track competitors occasionally', score: 2 },
            { label: 'We have a clear "why us" against top competitors', score: 3 },
            { label: 'Competitive insights actively shape GTM and messaging', score: 4 }
        ]
    },

    // --- Demand & Pipeline --- //
    {
        id: 'DP1', pillar: 'demand_pipeline', category: 'Demand & Pipeline',
        text: 'How predictable is your lead generation?',
        options: [
            { label: 'Unpredictable / rely on referrals', score: 0 },
            { label: 'We run ads but results vary wildly', score: 1 },
            { label: 'Steady flow, but quality is mixed', score: 2 },
            { label: 'Predictable flow, focused on optimizing cost', score: 3 },
            { label: 'Predictable, scalable, and high quality', score: 4 }
        ]
    },
    {
        id: 'DP2', pillar: 'demand_pipeline', category: 'Demand & Pipeline',
        text: 'Do you have a structured outbound sales motion?',
        options: [
            { label: 'No outbound', score: 0 },
            { label: 'Founder-led / ad-hoc emails', score: 1 },
            { label: 'Team sends cold emails, low customization', score: 2 },
            { label: 'Structured SDR team + automation', score: 3 },
            { label: 'ABM motion with target accounts + plays', score: 4 }
        ]
    },
    {
        id: 'DP3', pillar: 'demand_pipeline', category: 'Demand & Pipeline',
        text: 'How would you describe your funnel conversion (visit \u2192 lead \u2192 customer)?',
        options: [
            { label: 'We don\u2019t know conversion rates', score: 0 },
            { label: 'We know leads, not conversion by stage', score: 1 },
            { label: 'We track stages, but leaks are unclear', score: 2 },
            { label: 'We know key leaks and fix them quarterly', score: 3 },
            { label: 'Continuous CRO + pipeline optimization', score: 4 }
        ]
    },
    {
        id: 'DP4', pillar: 'demand_pipeline', category: 'Demand & Pipeline',
        text: 'How effective is the handoff between marketing and sales?',
        options: [
            { label: 'No defined handoff', score: 0 },
            { label: 'Handoff exists but unclear criteria', score: 1 },
            { label: 'Defined criteria, inconsistent adherence', score: 2 },
            { label: 'Clear SLA + feedback loop', score: 3 },
            { label: 'Tight alignment with shared pipeline dashboard', score: 4 }
        ]
    },
    {
        id: 'DP5', pillar: 'demand_pipeline', category: 'Demand & Pipeline',
        text: 'How diversified is your growth engine across channels?',
        options: [
            { label: 'One channel only', score: 0 },
            { label: 'Two channels, one dominates', score: 1 },
            { label: 'Several channels, but inconsistent', score: 2 },
            { label: 'Multiple channels performing reliably', score: 3 },
            { label: 'Balanced portfolio with deliberate experiments', score: 4 }
        ]
    },
    {
        id: 'DP6', pillar: 'demand_pipeline', category: 'Demand & Pipeline',
        text: 'How strong is your lead nurture (email, retargeting, follow-ups)?',
        options: [
            { label: 'No nurture', score: 0 },
            { label: 'Occasional follow-ups, no system', score: 1 },
            { label: 'Some sequences, not segmented', score: 2 },
            { label: 'Segmented nurture aligned to journey stages', score: 3 },
            { label: 'Lifecycle engine: personalized, tested, and optimized', score: 4 }
        ]
    },

    // --- Content & Brand System --- //
    {
        id: 'CB1', pillar: 'content_brand', category: 'Content & Brand System',
        text: 'How would you describe your content production?',
        options: [
            { label: 'Non-existent / ad-hoc', score: 0 },
            { label: 'Inconsistent (e.g., monthly)', score: 1 },
            { label: 'Consistent but generic', score: 2 },
            { label: 'High quality, but slow to produce', score: 3 },
            { label: 'High velocity, high quality media engine', score: 4 }
        ]
    },
    {
        id: 'CB2', pillar: 'content_brand', category: 'Content & Brand System',
        text: 'How consistent is your brand across website, decks, ads, and sales materials?',
        options: [
            { label: 'Inconsistent / different looks everywhere', score: 0 },
            { label: 'Some consistency, but no real system', score: 1 },
            { label: 'Basic brand kit exists', score: 2 },
            { label: 'Brand system + templates used by team', score: 3 },
            { label: 'Brand governance + QA keeps everything tight', score: 4 }
        ]
    },
    {
        id: 'CB3', pillar: 'content_brand', category: 'Content & Brand System',
        text: 'How consistent is your messaging across channels (website, sales calls, ads)?',
        options: [
            { label: 'Different message everywhere', score: 0 },
            { label: 'Some consistency, but unclear core narrative', score: 1 },
            { label: 'Core narrative exists, not always used', score: 2 },
            { label: 'Consistent narrative across major assets', score: 3 },
            { label: 'Message house + enablement keeps everyone aligned', score: 4 }
        ]
    },
    {
        id: 'CB4', pillar: 'content_brand', category: 'Content & Brand System',
        text: 'How well does your website convert and support sales?',
        options: [
            { label: 'Mostly a brochure', score: 0 },
            { label: 'Some CTAs, not optimized', score: 1 },
            { label: 'Clear CTAs, but conversion unknown', score: 2 },
            { label: 'Website is optimized with tracked conversion goals', score: 3 },
            { label: 'Website is a tested conversion engine', score: 4 }
        ]
    },
    {
        id: 'CB5', pillar: 'content_brand', category: 'Content & Brand System',
        text: 'How directly is content tied to pipeline goals (MQLs, SQLs, revenue)?',
        options: [
            { label: 'Content isn\u2019t tied to pipeline', score: 0 },
            { label: 'We hope content helps', score: 1 },
            { label: 'Some campaigns tie content to lead gen', score: 2 },
            { label: 'Clear content-to-pipeline strategy', score: 3 },
            { label: 'Content machine with measurable pipeline contribution', score: 4 }
        ]
    },
    {
        id: 'CB6', pillar: 'content_brand', category: 'Content & Brand System',
        text: 'How strong is your creative quality (design, copy, storytelling) compared to top peers?',
        options: [
            { label: 'Below category standard', score: 0 },
            { label: 'Average, inconsistent', score: 1 },
            { label: 'Good, but not differentiated', score: 2 },
            { label: 'Strong and credible across channels', score: 3 },
            { label: 'World-class quality with a repeatable system', score: 4 }
        ]
    },

    // --- Measurement & Experimentation --- //
    {
        id: 'ME1', pillar: 'measurement_experimentation', category: 'Measurement & Experimentation',
        text: 'Can you attribute revenue to specific marketing channels?',
        options: [
            { label: 'No idea / we don\u2019t track', score: 0 },
            { label: 'We track clicks/likes, not revenue', score: 1 },
            { label: 'First-touch only', score: 2 },
            { label: 'Good tracking, some gaps', score: 3 },
            { label: 'Full multi-touch attribution + CRM sync', score: 4 }
        ]
    },
    {
        id: 'ME2', pillar: 'measurement_experimentation', category: 'Measurement & Experimentation',
        text: 'How do you decide what to double down on in marketing?',
        options: [
            { label: 'Gut feel / loudest voice wins', score: 0 },
            { label: 'Vanity metrics drive decisions', score: 1 },
            { label: 'Some KPIs, inconsistent reviews', score: 2 },
            { label: 'Monthly performance reviews with clear KPIs', score: 3 },
            { label: 'Weekly cadence + experiments + learning loop', score: 4 }
        ]
    },
    {
        id: 'ME3', pillar: 'measurement_experimentation', category: 'Measurement & Experimentation',
        text: 'How clear are your KPIs from awareness \u2192 revenue?',
        options: [
            { label: 'No KPIs', score: 0 },
            { label: 'Basic top-of-funnel only', score: 1 },
            { label: 'Some funnel KPIs, not owned', score: 2 },
            { label: 'Full-funnel KPIs with owners', score: 3 },
            { label: 'Full-funnel KPIs + forecasting and targets', score: 4 }
        ]
    },
    {
        id: 'ME4', pillar: 'measurement_experimentation', category: 'Measurement & Experimentation',
        text: 'How often do you run structured experiments (ads, landing pages, messaging)?',
        options: [
            { label: 'Never', score: 0 },
            { label: 'Rarely, when something breaks', score: 1 },
            { label: 'Occasionally, but no system', score: 2 },
            { label: 'Monthly experiments with documented learnings', score: 3 },
            { label: 'Continuous experimentation system', score: 4 }
        ]
    },
    {
        id: 'ME5', pillar: 'measurement_experimentation', category: 'Measurement & Experimentation',
        text: 'How mature is your marketing reporting?',
        options: [
            { label: 'No reporting', score: 0 },
            { label: 'Manual reporting, inconsistent', score: 1 },
            { label: 'Consistent reporting, limited insight', score: 2 },
            { label: 'Clear dashboards with actionable insights', score: 3 },
            { label: 'Automated dashboards + decision cadence', score: 4 }
        ]
    },
    {
        id: 'ME6', pillar: 'measurement_experimentation', category: 'Measurement & Experimentation',
        text: 'How confident are you in the accuracy of your marketing data?',
        options: [
            { label: 'Not confident', score: 0 },
            { label: 'Some data, lots of gaps', score: 1 },
            { label: 'Mostly accurate, occasional issues', score: 2 },
            { label: 'Reliable data with basic QA', score: 3 },
            { label: 'Strong governance: reliable, audited, trusted', score: 4 }
        ]
    },

    // --- Stack, Automation & AI Readiness --- //
    {
        id: 'SA1', pillar: 'stack_ai', category: 'Stack, Automation & AI Readiness',
        text: 'How integrated is your MarTech stack?',
        options: [
            { label: 'Spreadsheets & manual email', score: 0 },
            { label: 'Disparate tools that don\u2019t talk', score: 1 },
            { label: 'Basic integrations', score: 2 },
            { label: 'Centralized CRM as truth source', score: 3 },
            { label: 'Fully automated, AI-enhanced data flow', score: 4 }
        ]
    },
    {
        id: 'SA2', pillar: 'stack_ai', category: 'Stack, Automation & AI Readiness',
        text: 'How are you using AI and automation in your marketing workflow today?',
        options: [
            { label: 'Not using AI', score: 0 },
            { label: 'Ad-hoc ChatGPT use, no workflow', score: 1 },
            { label: 'A few workflows (drafts, basic automation)', score: 2 },
            { label: 'Documented AI workflows + QA + approvals', score: 3 },
            { label: 'AI embedded across pipeline (content, ops, reporting, personalization)', score: 4 }
        ]
    },
    {
        id: 'SA3', pillar: 'stack_ai', category: 'Stack, Automation & AI Readiness',
        text: 'How effectively is your CRM used to manage pipeline and marketing performance?',
        options: [
            { label: 'No CRM / not used', score: 0 },
            { label: 'CRM exists but poorly maintained', score: 1 },
            { label: 'CRM used by sales, limited marketing integration', score: 2 },
            { label: 'CRM is source of truth with good hygiene', score: 3 },
            { label: 'CRM drives automation, reporting, and forecasting', score: 4 }
        ]
    },
    {
        id: 'SA4', pillar: 'stack_ai', category: 'Stack, Automation & AI Readiness',
        text: 'How strong is your lead capture and routing (forms, enrichment, assignment)?',
        options: [
            { label: 'Leads get lost', score: 0 },
            { label: 'Manual forwarding / slow response', score: 1 },
            { label: 'Basic routing, no enrichment', score: 2 },
            { label: 'Fast routing + basic enrichment', score: 3 },
            { label: 'Automated routing, enrichment, and SLA tracking', score: 4 }
        ]
    },
    {
        id: 'SA5', pillar: 'stack_ai', category: 'Stack, Automation & AI Readiness',
        text: 'How automated are your key workflows (nurture, follow-ups, reporting)?',
        options: [
            { label: 'Fully manual', score: 0 },
            { label: 'Some templates, minimal automation', score: 1 },
            { label: 'A few automated flows', score: 2 },
            { label: 'Most workflows automated with monitoring', score: 3 },
            { label: 'End-to-end automation with optimization', score: 4 }
        ]
    },
    {
        id: 'SA6', pillar: 'stack_ai', category: 'Stack, Automation & AI Readiness',
        text: 'How clean is your tracking setup (events, pixels, UTMs, conversion goals)?',
        options: [
            { label: 'Not set up / broken', score: 0 },
            { label: 'Basic analytics only', score: 1 },
            { label: 'Events set up, inconsistent naming', score: 2 },
            { label: 'Clean event taxonomy + conversion goals', score: 3 },
            { label: 'Robust tracking + governance + documentation', score: 4 }
        ]
    },
];


// --- Logic --- //

/**
 * Selects 12 questions:
 * 1. 2 questions per pillar (10 total)
 * 2. 2 random remaining questions
 * 3. Tries to avoid recentQuestionIds from localStorage
 */
export const selectAuditQuestions = (): AuditQuestion[] => {
    const recentIds = JSON.parse(localStorage.getItem('recentQuestionIds') || '[]') as string[];
    const pillars: PillarId[] = ['strategy_positioning', 'demand_pipeline', 'content_brand', 'measurement_experimentation', 'stack_ai'];

    const selectedQuestions: AuditQuestion[] = [];

    // 1. Select 2 per pillar
    pillars.forEach(p => {
        const questionsInPillar = AUDIT_QUESTION_BANK.filter(q => q.pillar === p);
        const freshQuestions = questionsInPillar.filter(q => !recentIds.includes(q.id));
        const staleQuestions = questionsInPillar.filter(q => recentIds.includes(q.id));

        const pickPool = [...shuffle(freshQuestions), ...shuffle(staleQuestions)];
        selectedQuestions.push(...pickPool.slice(0, 2));
    });

    // 2. Select remaining 2 from ANY leftover question
    const currentlySelectedIds = new Set(selectedQuestions.map(q => q.id));
    const remainingPool = AUDIT_QUESTION_BANK.filter(q => !currentlySelectedIds.has(q.id));

    const freshRemaining = remainingPool.filter(q => !recentIds.includes(q.id));
    const staleRemaining = remainingPool.filter(q => recentIds.includes(q.id));

    const finalPool = [...shuffle(freshRemaining), ...shuffle(staleRemaining)];
    selectedQuestions.push(...finalPool.slice(0, 2));

    // Update Recent (Keep last 24)
    const newRecent = [...selectedQuestions.map(q => q.id), ...recentIds].slice(0, 24);
    localStorage.setItem('recentQuestionIds', JSON.stringify(newRecent));

    return shuffle(selectedQuestions);
};

// Simple shuffle
const shuffle = <T>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
};


/**
 * Calculates score based on dynamic set of questions.
 * Updated with new maturity framework + dynamic recommendations.
 */
export const calculateAuditScore = (
    answers: Record<string, number>,
    qualificationData?: QualificationData
): AuditResult => {
    const subScores: Record<SubScoreCategory, number> = {
        'Strategy & Positioning': 0,
        'Demand & Pipeline': 0,
        'Content & Brand System': 0,
        'Measurement & Experimentation': 0,
        'Stack, Automation & AI Readiness': 0,
    };

    const counts: Record<SubScoreCategory, number> = {
        'Strategy & Positioning': 0,
        'Demand & Pipeline': 0,
        'Content & Brand System': 0,
        'Measurement & Experimentation': 0,
        'Stack, Automation & AI Readiness': 0,
    };

    // 1. Sum scores per category
    AUDIT_QUESTION_BANK.forEach(q => {
        if (answers[q.id] !== undefined) {
            subScores[q.category] += answers[q.id];
            counts[q.category] += 1;
        }
    });

    // 2. Normalize to 0-20 per category
    let totalScore = 0;

    Object.keys(subScores).forEach(key => {
        const k = key as SubScoreCategory;
        if (counts[k] > 0) {
            const avg = subScores[k] / counts[k]; // 0-4 range
            subScores[k] = Math.round(avg * 5); // 0-20 range
        } else {
            subScores[k] = 0;
        }
        totalScore += subScores[k];
    });

    // 3. Maturity stage (new framework)
    const stage = getMaturityStage(totalScore);

    // 4. Priorities (lowest subscores)
    const sortedCats = (Object.keys(subScores) as SubScoreCategory[]).sort((a, b) => subScores[a] - subScores[b]);
    const topPriorities = sortedCats.slice(0, 3);

    // 5. Dynamic recommendations (Improvement 9)
    const recommendedServices = buildDynamicRecommendations(subScores, sortedCats, qualificationData);

    return {
        totalScore,
        subScores,
        maturityLabel: stage.label,
        maturityDescriptor: stage.descriptor,
        topPriorities,
        recommendedServices,
        qualificationData,
    };
};

/**
 * Build 3 dynamic service recommendations based on weakest dimensions.
 * Improvement 9 logic.
 */
function buildDynamicRecommendations(
    subScores: Record<SubScoreCategory, number>,
    sortedCats: SubScoreCategory[],
    qualificationData?: QualificationData
): { name: string; link: string; rationale?: string }[] {
    const recs: { name: string; link: string; rationale: string; gap: number }[] = [];
    const twoLowest = sortedCats.slice(0, 2);

    // Rule: If two lowest include Measurement or Stack \u2192 MarTech + AI Ops
    if (twoLowest.includes('Measurement & Experimentation') || twoLowest.includes('Stack, Automation & AI Readiness')) {
        const dim = twoLowest.includes('Measurement & Experimentation') ? 'Measurement & Experimentation' : 'Stack, Automation & AI Readiness';
        recs.push({
            name: 'MarTech + AI Ops',
            link: '/services/martech',
            rationale: `Recommended because your ${dim} score is ${subScores[dim]}/20`,
            gap: 20 - subScores[dim],
        });
    }

    // Rule: If two lowest include Strategy or Demand \u2192 Growth Marketing Consulting
    if (twoLowest.includes('Strategy & Positioning') || twoLowest.includes('Demand & Pipeline')) {
        const dim = twoLowest.includes('Strategy & Positioning') ? 'Strategy & Positioning' : 'Demand & Pipeline';
        recs.push({
            name: 'Growth Marketing Consulting',
            link: '/services/marketing-consulting',
            rationale: `Recommended because your ${dim} score is ${subScores[dim]}/20`,
            gap: 20 - subScores[dim],
        });
    }

    // Rule: If Content & Brand System is the lowest \u2192 Content+ Studio
    if (sortedCats[0] === 'Content & Brand System') {
        recs.push({
            name: 'Content+ Studio',
            link: '/contentplus',
            rationale: `Recommended because your Content & Brand System score is ${subScores['Content & Brand System']}/20`,
            gap: 20 - subScores['Content & Brand System'],
        });
    }

    // Fill remaining slots to always have 3
    const existingNames = new Set(recs.map(r => r.name));
    const fallbacks = [
        { name: 'Growth Marketing Consulting', link: '/services/marketing-consulting', dim: 'Strategy & Positioning' as SubScoreCategory },
        { name: 'Content+ Studio', link: '/contentplus', dim: 'Content & Brand System' as SubScoreCategory },
        { name: 'MarTech + AI Ops', link: '/services/martech', dim: 'Stack, Automation & AI Readiness' as SubScoreCategory },
    ];

    for (const fb of fallbacks) {
        if (recs.length >= 3) break;
        if (!existingNames.has(fb.name)) {
            recs.push({
                name: fb.name,
                link: fb.link,
                rationale: `Recommended because your ${fb.dim} score is ${subScores[fb.dim]}/20`,
                gap: 20 - subScores[fb.dim],
            });
            existingNames.add(fb.name);
        }
    }

    // Sort by gap descending (biggest gap first), take 3
    recs.sort((a, b) => b.gap - a.gap);
    const finalRecs = recs.slice(0, 3).map(({ gap, ...rest }) => rest);

    // Improvement 9: If early-stage, prepend strategy call card
    if (qualificationData?.companyStage === 'Pre-revenue' || qualificationData?.companyStage === '$0\u2013$500K ARR') {
        finalRecs.unshift({
            name: 'Start with a Strategy Call',
            link: '/strategy-call',
            rationale: 'At your stage, a single focused strategy session delivers the highest ROI.',
        });
    }

    return finalRecs;
}
