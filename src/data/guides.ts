
import { BookOpen, Target, TrendingUp, Cpu, Layers } from 'lucide-react';

export type GuideCategory = 'Strategy' | 'Growth' | 'Brand' | 'Content' | 'AI' | 'Operations';

export interface Contributor {
    name: string;
    title: string;
    company: string;
    image: string;
}

export interface Quote {
    text: string;
    author: string;
    title: string;
    company: string;
}

export interface Section {
    title: string;
    content: string; // Markdown-like or HTML
}

export interface Guide {
    slug: string;
    title: string;
    category: GuideCategory;
    shortDescription: string;
    coverImage: string;
    heroTheme: 'light' | 'dark';
    estimatedReadTime: string;
    publishDate: string;
    featured: boolean;

    // Detailed Content
    hookHeadline: string;
    hookText: string;

    keyTopics: { title: string; description: string; icon?: any }[]; // Icon component

    contributors: Contributor[];
    quotes: Quote[];

    sections: Section[];

    gated: boolean;
    downloadUrl?: string; // If gated, this is unlocked. If ungated, displayed as button.
}

export const guides: Guide[] = [
    {
        slug: 'ai-content-operations-playbook',
        title: 'The AI Content Operations Playbook',
        category: 'AI',
        shortDescription: 'How to scale production 10x without losing your brand soul.',
        coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200',
        heroTheme: 'dark',
        estimatedReadTime: '12 min read',
        publishDate: 'Jan 15, 2026',
        featured: true,

        hookHeadline: "Most teams use AI to write faster. Smart teams use it to think bigger.",
        hookText: "We analyzed 50+ enterprise marketing teams to see how they're actually using Generative AI. The result isn't just a list of prompts—it's a complete operating model for the modern content factory.",

        keyTopics: [
            { title: 'The Hybrid Workflow', description: 'Where humans stop and machines begin.', icon: Layers },
            { title: 'Prompt Engineering', description: 'System prompts for brand consistency.', icon: Cpu },
            { title: 'Quality Control', description: 'The new role of "AI Editor".', icon: Target }
        ],

        contributors: [
            { name: 'Marcus Jo', title: 'Head of AI', company: 'Marketing Ext.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
            { name: 'Sarah Chen', title: 'VP Growth', company: 'TechFlow', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400' }
        ],

        quotes: [
            { text: "This isn't about replacing writers. It's about giving them superpowers.", author: "Marcus Jo", title: "Head of AI", company: "Marketing Ext." }
        ],

        sections: [
            {
                title: "1. The Broken Content Supply Chain",
                content: "Traditional content operations are bottlenecked by manual drafting. In the old world, 80% of time was spent on creation, and 20% on strategy. AI flips this ratio."
            },
            {
                title: "2. The AI-First Operating Model",
                content: "We propose a 'Sandwich Model': Human strategy first, AI drafting second, Human editing and polishing third. This ensures high throughput with high relevance."
            },
            {
                title: "3. Tool Consolidation",
                content: "Stop buying point solutions. You need an orchestration layer that connects your LLMs to your CMS."
            }
        ],

        gated: true,
        downloadUrl: '/downloads/ai-content-ops-2026.pdf'
    },
    {
        slug: 'saas-pricing-psychology',
        title: 'SaaS Pricing Psychology: Beyond Good-Better-Best',
        category: 'Strategy',
        shortDescription: 'Optimizing your monetization model for expansion revenue.',
        coverImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200',
        heroTheme: 'light',
        estimatedReadTime: '8 min read',
        publishDate: 'Dec 10, 2025',
        featured: true,

        hookHeadline: "Pricing is the strongest lever for growth, yet typically the least optimized.",
        hookText: "We break down the psychological triggers that drive upgrades, from 'Decoy Pricing' to 'Usage-Based anchoring'.",

        keyTopics: [
            { title: 'Anchor Pricing', description: 'Setting the reference point.', icon: Target },
            { title: 'Expansion Loops', description: 'Built-in upsell mechanics.', icon: TrendingUp },
            { title: 'Packaging', description: 'Feature fencing that makes sense.', icon: Layers }
        ],

        contributors: [
            { name: 'Elena Rodriguez', title: 'CMO', company: 'NextGen', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' }
        ],

        quotes: [],

        sections: [
            { title: "The Decoy Effect", content: "..." },
            { title: "Usage Scaling", content: "..." }
        ],

        gated: false,
        downloadUrl: '#' // Just a placeholder
    },
    {
        slug: 'founder-brand-playbook',
        title: 'The Founder Brand Playbook',
        category: 'Brand',
        shortDescription: 'Turning your CEO into your best marketing channel.',
        coverImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200',
        heroTheme: 'light',
        estimatedReadTime: '15 min read',
        publishDate: 'Nov 22, 2025',
        featured: false,

        hookHeadline: "People buy from people. Your founder is your biggest unfair advantage.",
        hookText: "A step-by-step guide to building a LinkedIn and Twitter presence that drives real pipeline, not just likes.",

        keyTopics: [
            { title: 'Narrative Design', description: 'Finding your core story.', icon: BookOpen },
            { title: 'Content Matrix', description: 'Repurposing internal memos.', icon: Layers }
        ],

        contributors: [],
        quotes: [],
        sections: [],
        gated: true
    },
    {
        slug: 'web-performance-2026',
        title: 'Web Performance Standards 2026',
        category: 'Content', // Using Content as proxy for Tech/Web here or add Tech category
        shortDescription: 'Core Web Vitals are old news. Here is what matters now.',
        coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
        heroTheme: 'dark',
        estimatedReadTime: '10 min read',
        publishDate: 'Oct 05, 2025',
        featured: false,

        hookHeadline: "Speed is a feature. Interaction is the product.",
        hookText: "How to balance heavy visuals with instant interactivity using the new View Transitions API and Server Components.",

        keyTopics: [],
        contributors: [],
        quotes: [],
        sections: [],
        gated: false
    }
];

export const getGuideBySlug = (slug: string): Guide | undefined => {
    return guides.find(g => g.slug === slug);
};
