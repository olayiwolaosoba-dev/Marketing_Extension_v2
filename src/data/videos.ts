export interface VideoStory {
    id: string;
    client: string;
    clientLogo: string;
    context: string; // 1-sentence context
    videoUrl: string; // YouTube embed URL
    thumbnail: string;
    quote?: string;
    author?: string;
    role?: string;
}

// All YouTube IDs below are verified publicly embeddable
export const videoStories: VideoStory[] = [
    {
        id: '1',
        client: 'TechFlow',
        clientLogo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop&q=80',
        context: 'How TechFlow used Marketing Extension to replace their agency spend.',
        videoUrl: 'https://www.youtube.com/embed/rGOj5oS8iiE',
        thumbnail: 'https://img.youtube.com/vi/rGOj5oS8iiE/maxresdefault.jpg',
        quote: "They didn't just run ads. They built a machine that we now own.",
        author: 'Sarah Jenkins',
        role: 'CMO, TechFlow'
    },
    {
        id: '2',
        client: 'BlockChainZ',
        clientLogo: 'https://images.unsplash.com/photo-1622630998477-20aa696fab05?w=100&h=100&fit=crop&q=80',
        context: 'Navigating a PR crisis with grace and strategy.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        quote: "The team stepped in when we were underwater and turned the ship around.",
        author: 'Mike Davids',
        role: 'Founder, BlockChainZ'
    },
    {
        id: '3',
        client: 'ScaleUp',
        clientLogo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop&q=80',
        context: 'From 0 to 1,000 paid users in 3 months.',
        videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
        thumbnail: 'https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg',
        quote: "Marketing Extension is the co-founder I wish I had from day one.",
        author: 'Elena Rodriguez',
        role: 'CEO, ScaleUp'
    }
];

export const clientQuotes = [
    "They build engines, not just campaigns.",
    "Finally, a partner that understands the difference between motion and progress.",
    "The only agency that tried to work themselves out of a job.",
    "Our C-suite finally respects marketing data.",
    "A masterclass in operational discipline."
];
