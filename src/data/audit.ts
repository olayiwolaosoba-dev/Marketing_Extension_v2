
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

export interface AuditResult {
    totalScore: number;
    subScores: Record<SubScoreCategory, number>; // 0-20 per category
    maturityLabel: 'Foundations' | 'Building' | 'Scaling' | 'Optimizing';
    topPriorities: SubScoreCategory[];
    recommendedServices: { name: string; link: string }[];
}

// Map Pillar IDs to Display Names
export const PILLAR_MAP: Record<PillarId, SubScoreCategory> = {
    strategy_positioning: 'Strategy & Positioning',
    demand_pipeline: 'Demand & Pipeline',
    content_brand: 'Content & Brand System',
    measurement_experimentation: 'Measurement & Experimentation',
    stack_ai: 'Stack, Automation & AI Readiness'
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
            { label: 'We have a tagline, but it doesn’t guide decisions', score: 1 },
            { label: 'We have a pitch, but teams tell it differently', score: 2 },
            { label: 'Clear positioning used across sales + marketing', score: 3 },
            { label: 'Category narrative + proof points used consistently', score: 4 }
        ]
    },
    {
        id: 'SP3', pillar: 'strategy_positioning', category: 'Strategy & Positioning',
        text: 'How well-packaged is your offer (pricing, bundles, what’s included)?',
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
            { label: 'We don’t track competitors', score: 0 },
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
        text: 'How would you describe your funnel conversion (visit → lead → customer)?',
        options: [
            { label: 'We don’t know conversion rates', score: 0 },
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
            { label: 'Content isn’t tied to pipeline', score: 0 },
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
            { label: 'No idea / we don’t track', score: 0 },
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
        text: 'How clear are your KPIs from awareness → revenue?',
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
            { label: 'Disparate tools that don’t talk', score: 1 },
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

    let selectedParams: string[] = [];
    let selectedQuestions: AuditQuestion[] = [];

    // 1. Select 2 per pillar
    pillars.forEach(p => {
        const questionsInPillar = AUDIT_QUESTION_BANK.filter(q => q.pillar === p);
        // Prioritize questions NOT in recentIds
        const freshQuestions = questionsInPillar.filter(q => !recentIds.includes(q.id));
        const staleQuestions = questionsInPillar.filter(q => recentIds.includes(q.id));

        // Pick 2
        const pickPool = [...shuffle(freshQuestions), ...shuffle(staleQuestions)]; // bias towards fresh
        selectedQuestions.push(...pickPool.slice(0, 2));
    });

    // 2. Select remaining 2 from ANY leftover question
    const currentlySelectedIds = new Set(selectedQuestions.map(q => q.id));
    const remainingPool = AUDIT_QUESTION_BANK.filter(q => !currentlySelectedIds.has(q.id));

    // Also bias remaining pool
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
    return array.sort(() => Math.random() - 0.5);
};


/**
 * Calculates score based on dynamic set of questions
 */
export const calculateAuditScore = (answers: Record<string, number>): AuditResult => {
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
    // answers keys are Question IDs (SP1, DP1, etc.)
    AUDIT_QUESTION_BANK.forEach(q => {
        if (answers[q.id] !== undefined) {
            subScores[q.category] += answers[q.id];
            counts[q.category] += 1;
        }
    });

    // 2. Normalize to 0-20 per category
    // Average score (0-4) -> map to 0-20 means simply multiply by 5 check:
    // Avg 4 (max) * 5 = 20. Avg 0 * 5 = 0. Correct.
    let totalScore = 0;

    Object.keys(subScores).forEach(key => {
        const k = key as SubScoreCategory;
        if (counts[k] > 0) {
            const avg = subScores[k] / counts[k]; // 0 to 4
            subScores[k] = Math.round(avg * 5); // 0 to 20
        } else {
            subScores[k] = 0;
        }
        totalScore += subScores[k];
    });

    // Maturity
    let maturityLabel: AuditResult['maturityLabel'] = 'Foundations';
    if (totalScore >= 80) maturityLabel = 'Optimizing';
    else if (totalScore >= 60) maturityLabel = 'Scaling';
    else if (totalScore >= 40) maturityLabel = 'Building';

    // Priorities (lowest subscores)
    // Sort categories by score ascending
    const sortedCats = (Object.keys(subScores) as SubScoreCategory[]).sort((a, b) => subScores[a] - subScores[b]);
    const topPriorities = sortedCats.slice(0, 3);

    // Recommendations
    const recommendedServices: { name: string; link: string }[] = [];

    // Logic from prompt:
    // If Strategy low -> Marketing Consulting
    // If Content/Brand low -> Content+ Studio
    // If Stack/Measurement low -> MarTech + AI Ops

    // Check priorities to determine recs
    if (topPriorities.includes('Strategy & Positioning') || topPriorities.includes('Demand & Pipeline')) {
        recommendedServices.push({ name: 'Marketing Consulting', link: '/services/marketing-consulting' });
    }

    if (topPriorities.includes('Content & Brand System')) {
        recommendedServices.push({ name: 'Content+ Studio', link: '/services/content-studio' });
    }

    if (topPriorities.includes('Stack, Automation & AI Readiness') || topPriorities.includes('Measurement & Experimentation')) {
        recommendedServices.push({ name: 'MarTech + AI Ops', link: '/services/martech' });
    }

    // Dedupe by name
    const uniqueRecs = Array.from(new Map(recommendedServices.map(item => [item.name, item])).values()).slice(0, 2);

    if (uniqueRecs.length === 0) {
        uniqueRecs.push({ name: 'Marketing Consulting', link: '/services/marketing-consulting' });
    }

    return {
        totalScore,
        subScores,
        maturityLabel,
        topPriorities,
        recommendedServices: uniqueRecs
    };
};
