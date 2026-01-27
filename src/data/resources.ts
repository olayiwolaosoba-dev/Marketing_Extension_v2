export type ResourceType = 'Article' | 'Report' | 'Playbook';

export interface Resource {
    id: string;
    type: ResourceType;
    title: string;
    description: string; // 1-line value
    readTime: string;
    tags: string[];
    link: string;
    isGated: boolean;
    isFeatured?: boolean;
    image?: string;
}

export const resources: Resource[] = [
    {
        id: '1',
        type: 'Report',
        title: 'The 2026 State of Marketing Engines',
        description: 'Benchmarks from 50+ high-growth B2B startups.',
        readTime: '15 min read',
        tags: ['Strategy', 'Benchmarks'],
        link: '#',
        isGated: true,
        isFeatured: true,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: '2',
        type: 'Playbook',
        title: 'The Founder-Led Sales Transition',
        description: 'How to hand off sales without losing the magic.',
        readTime: '10 min read',
        tags: ['Sales', 'Leadership'],
        link: '#',
        isGated: true
    },
    {
        id: '3',
        type: 'Article',
        title: 'Why Most "Content Strategies" Fail',
        description: 'Stop publishing noise. Start building an asset.',
        readTime: '5 min read',
        tags: ['Content', 'Opinion'],
        link: '#',
        isGated: false
    },
    {
        id: '4',
        type: 'Article',
        title: 'MarTech Stack Minimalism',
        description: 'You only need these 5 tools to scale to $10M.',
        readTime: '7 min read',
        tags: ['MarTech', 'Tools'],
        link: '#',
        isGated: false
    },
    {
        id: '5',
        type: 'Playbook',
        title: 'The 90-Day GTM Launch Checklist',
        description: 'Everything you need to verify before launch day.',
        readTime: 'Checklist',
        tags: ['GTM', 'Launch'],
        link: '#',
        isGated: true
    }
];
