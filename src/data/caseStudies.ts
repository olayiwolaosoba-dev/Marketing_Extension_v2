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
}

export const caseStudies: CaseStudy[] = [
    {
        id: '1',
        client: 'PayFlow',
        clientLogo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop&q=80',
        title: 'From Series A stealth to category leader in 9 months',
        outcome: '3x qualified pipeline growth',
        vertical: 'fintech',
        pillar: ['Consulting', 'Content+'],
        stage: 'Scale',
        assets: ['Strategy', 'PR', 'Content Engine'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800',
        deliverables: ['Brand Positioning', 'Executive Ghostwriting', 'Sales Deck Overhaul'],
        duration: '12 months'
    },
    {
        id: '2',
        client: 'CoinSafe',
        clientLogo: 'https://images.unsplash.com/photo-1622630998477-20aa696fab05?w=100&h=100&fit=crop&q=80',
        title: 'Rebuilding trust after the crypto winter',
        outcome: '40% reduction in CAC',
        vertical: 'crypto',
        pillar: ['Content+', 'MarTech'],
        stage: 'Reposition',
        assets: ['Content Engine', 'Website'],
        image: 'https://images.unsplash.com/photo-1621504450168-b8c6816db70a?auto=format&fit=crop&q=80&w=800',
        deliverables: ['Community Management', 'SEO Cluster Build', 'HubSpot Implementation'],
        duration: '6 months'
    },
    {
        id: '3',
        client: 'SecureNet',
        clientLogo: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=100&h=100&fit=crop&q=80',
        title: 'Simplifying enterprise security for the mid-market',
        outcome: '200% increase in demo requests',
        vertical: 'regtech',
        pillar: ['Consulting', 'MarTech'],
        stage: 'Launch',
        assets: ['Strategy', 'GTM', 'Website'],
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
        deliverables: ['Messaging Matrix', 'Webflow Dev', 'LinkedIn Ads Setup'],
        duration: '9 months'
    },
    {
        id: '4',
        client: 'DataFlow',
        clientLogo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop&q=80',
        title: 'Pivot from service to SaaS platform',
        outcome: '$2M ARR added in Y1',
        vertical: 'saas',
        pillar: ['Consulting', 'MarTech'],
        stage: 'Scale',
        assets: ['GTM', 'PR'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        deliverables: ['Pricing Strategy', 'Product Hunt Launch', 'CRM Migration'],
        duration: '18 months'
    },
    {
        id: '5',
        client: 'Alpha Partners',
        clientLogo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3dab?w=100&h=100&fit=crop&q=80',
        title: 'Establishing thought leadership for a new fund',
        outcome: 'Featured in TechCrunch, WSJ, and Forbes',
        vertical: 'consulting',
        pillar: ['Content+'],
        stage: 'Launch',
        assets: ['Content Engine', 'PR'],
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
        deliverables: ['Founder Brand Kit', 'Podcast Production', 'Substack Growth'],
        duration: 'Ongoing'
    },
    {
        id: '6',
        client: 'ChainLink',
        clientLogo: 'https://images.unsplash.com/photo-1622630998477-20aa696fab05?w=100&h=100&fit=crop&q=80',
        title: 'DeFi protocol education portal',
        outcome: '10k+ developer signups',
        vertical: 'crypto',
        pillar: ['Content+', 'MarTech'],
        stage: 'Scale',
        assets: ['Website', 'Content Engine'],
        image: 'https://images.unsplash.com/photo-1639322537228-ad7117a394ec?auto=format&fit=crop&q=80&w=800',
        deliverables: ['Docs Site', 'Developer Relations', 'Discord Management'],
        duration: '8 months'
    }
];

export const industries = [
    { id: 'fintech', label: 'Payments & Fintech Infra' },
    { id: 'crypto', label: 'Crypto & Digital Assets' },
    { id: 'regtech', label: 'RegTech & Cybersecurity' },
    { id: 'saas', label: 'B2B SaaS & Platforms' },
    { id: 'consulting', label: 'Professional Services' }
];
