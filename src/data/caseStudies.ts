export type Vertical = 'fintech' | 'crypto' | 'regtech' | 'saas' | 'consulting';
export type ServicePillar = 'Consulting' | 'Content+' | 'MarTech';
export type ProjectStage = 'Launch' | 'Scale' | 'Reposition' | 'Fix';
export type AssetType = 'Strategy' | 'Website' | 'Content Engine' | 'PR' | 'GTM';

export interface CaseStudy {
    id: string;
    client: string;
    clientLogo: string; // URL
    title: string; // 1-line "what changed"
    outcome: string; // 1-line proof
    vertical: Vertical;
    pillar: ServicePillar[];
    stage: ProjectStage;
    assets: AssetType[];
    image: string; // Main case study image
    description?: string;
    deliverables?: string[];
    team?: string[]; // e.g. "Strategy Lead", "Creative Director"
    duration?: string;
    path?: string;
}

export const caseStudies: CaseStudy[] = [
    {
        id: '1',
        client: 'Zone',
        clientLogo: '', // Can be empty or placeholder if not used
        title: 'Building Africa’s First Regulated Blockchain Network for Payments',
        outcome: 'Onboarded 12+ leading banks',
        vertical: 'fintech',
        pillar: ['Consulting', 'MarTech'],
        stage: 'Scale',
        assets: ['Strategy', 'PR', 'Content Engine'],
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200',
        deliverables: ['Brand Architecture', 'Executive Comms', 'Marketing OS'],
        duration: '2022 – Present',
        path: '/work/zone-regulated-blockchain-payments'
    },
    {
        id: '2',
        client: 'VERYPAY',
        clientLogo: '',
        title: 'Building a Multi-Country Marketing Bench for Mobile Money',
        outcome: 'Launched in 4 countries simultaneously',
        vertical: 'fintech',
        pillar: ['Consulting'],
        stage: 'Launch',
        assets: ['Strategy', 'GTM'],
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200',
        deliverables: ['Operating Model', 'Hiring Rubrics', 'Oversight Cadence'],
        duration: 'Oct 2024 – May 2025',
        path: '/work/verypay-multi-country-marketing-bench'
    },
    {
        id: '3',
        client: 'Smartcomply',
        clientLogo: '',
        title: 'From Social-Only Marketing to a Full-Funnel Growth Engine',
        outcome: '3x qualified pipeline growth',
        vertical: 'regtech',
        pillar: ['MarTech', 'Consulting'],
        stage: 'Scale',
        assets: ['Content Engine', 'GTM'],
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
        deliverables: ['Unified Narrative', 'Pipeline Dashboard', 'Campaign Creative'],
        duration: '2025 – Present',
        path: '/work/smartcomply-full-funnel-growth-engine'
    },
    {
        id: '4',
        client: 'Mercurie',
        clientLogo: '',
        title: 'Mercurie — Local-currency billing for global subscriptions',
        outcome: 'Launch story that became the default explainer for customers + investors',
        vertical: 'fintech',
        pillar: ['Consulting', 'Content+'],
        stage: 'Launch',
        assets: ['PR', 'Strategy'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1200',
        deliverables: ['Launch Narrative', 'PR', 'Content'],
        duration: 'Launch',
        path: '/work/mercurie-launch-pr-narrative'
    },
    {
        id: '5',
        client: 'Quidax',
        clientLogo: '',
        title: 'Quidax — Making crypto feel safe, simple, and mainstream',
        outcome: '~100,000 new customers onboarded (campaign cohort)',
        vertical: 'crypto',
        pillar: ['Consulting', 'Content+', 'MarTech'],
        stage: 'Scale',
        assets: ['Content Engine', 'PR'],
        image: 'https://images.unsplash.com/photo-1516245834210-c4c14278733f?auto=format&fit=crop&q=80&w=1200',
        deliverables: ['Campaign Strategy', 'Don Jazzy Partnership', 'Growth'],
        duration: 'Campaign',
        path: '/work/quidax-don-jazzy-crypto-education'
    },
    {
        id: '6',
        client: 'SabiTrack',
        clientLogo: '',
        title: 'SabiTrack — From idea to investor-ready business foundation',
        outcome: 'Deck + plan + GTM system built; Head of Marketing role designed',
        vertical: 'saas',
        pillar: ['Consulting', 'Content+', 'MarTech'],
        stage: 'Launch',
        assets: ['Strategy', 'GTM'],
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
        deliverables: ['Investor Deck', 'GTM Plan', 'Org Design'],
        duration: 'Foundation',
        path: '/work/sabitrack-investor-ready-foundation'
    },
    {
        id: '7',
        client: 'Tamy Consulting',
        clientLogo: '',
        title: 'Tamy Consulting — Turning referrals into a visible growth engine',
        outcome: 'Consistent digital presence + clearer positioning',
        vertical: 'consulting',
        pillar: ['Consulting', 'Content+'],
        stage: 'Scale',
        assets: ['Content Engine'],
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
        deliverables: ['Positioning', 'Digital Presence', 'Content'],
        duration: 'Ongoing',
        path: '/work/tamy-consulting-growth-engine'
    }
];

export const industries = [
    { id: 'fintech', label: 'Payments & Fintech Infra' },
    { id: 'crypto', label: 'Crypto & Digital Assets' },
    { id: 'regtech', label: 'RegTech & Cybersecurity' },
    { id: 'saas', label: 'B2B SaaS & Platforms' },
    { id: 'consulting', label: 'Professional Services & Consulting' }
];
