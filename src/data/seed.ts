
export const SEED_DATA = {
    user: {
        id: 'u1',
        name: 'Client User',
        email: 'demo@marketingextensions.com',
        role: 'client_admin',
        avatar: 'CU',
        organization: 'Acme Corp'
    },
    notifications: [
        { id: 'n1', type: 'approval', title: 'Approval Required', readout: 'Review the Social Media Carousel V2', link: '/app/requests/r2', isRead: false, timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString() }, // 30 mins ago
        { id: 'n2', type: 'comment', title: 'New Comment', readout: 'Sarah replied to your strategy doc', link: '/app/consulting/docs/d1', isRead: false, timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString() }, // 2 hours ago
        { id: 'n3', type: 'system', title: 'System Update', readout: 'MarTech Lab maintenance scheduled', link: '/app/martech', isRead: true, timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString() }, // 1 day ago
    ],
    projects: [
        { id: 'p1', title: 'Q1 GTM Strategy', status: 'In Progress', owner: 'Sarah Chen', progress: 45, type: 'Consulting', description: 'Comprehensive go-to-market strategy for Q1 product launches.' },
        { id: 'p2', title: 'Brand Refresh 2026', status: 'Planning', owner: 'Marcus Jo', progress: 10, type: 'Content+', description: 'Visual identity update across all social channels.' },
        { id: 'p3', title: 'HubSpot Implementation', status: 'Completed', owner: 'Alex Morgan', progress: 100, type: 'MarTech', description: 'Migration from Salesforce to HubSpot.' },
    ],
    requests: [
        { id: 'r1', title: 'GTM Strategy Deck', type: 'Consulting', status: 'In Progress', priority: 'High', dueDate: '2026-02-12', projectId: 'p1', brief: 'Create a deck outlining the Q1 GTM strategy.', requestedBy: 'u1', assignee: 'Sarah Chen' },
        { id: 'r2', title: 'LinkedIn Carousel Series', type: 'Content+', status: 'In Review', priority: 'Medium', dueDate: '2026-01-28', projectId: 'p2', brief: '5-slide carousel for LinkedIn.', requestedBy: 'u1', assignee: 'Marcus Jo' },
        { id: 'r3', title: 'Case Study Video Edit', type: 'Content+', status: 'Blocked', priority: 'Low', dueDate: '2026-01-30', projectId: 'p2', brief: 'Edit the customer testimonial video.', requestedBy: 'u1', assignee: 'Marcus Jo' },
        { id: 'r4', title: 'HubSpot Workflow Audit', type: 'MarTech', status: 'Completed', priority: 'High', dueDate: '2026-01-15', projectId: 'p3', brief: 'Audit existing workflows for clean up.', requestedBy: 'u1', assignee: 'Alex Morgan' },
        { id: 'r5', title: 'Landing Page Optimization', type: 'MarTech', status: 'In Progress', priority: 'Medium', dueDate: '2026-02-05', projectId: 'p3', brief: 'Optimize the main landing page for conversions.', requestedBy: 'u1', assignee: 'Alex Morgan' },
    ],
    assets: [
        { id: 'a1', name: 'GTM_Deck_v1.pdf', type: 'pdf', url: '#', requestId: 'r1', status: 'Draft', version: 1, uploadedAt: '2026-01-20' },
        { id: 'a2', name: 'Social_Carousel_v2.png', type: 'image', url: '#', requestId: 'r2', status: 'In Review', version: 2, uploadedAt: '2026-01-25' },
    ],
    activity: [
        { id: 'ac1', user: 'Sarah Chen', action: 'commented on', target: 'GTM Strategy Deck', link: '/app/requests/r1', timestamp: '2 hours ago' },
        { id: 'ac2', user: 'Marcus Jo', action: 'uploaded v2 of', target: 'Social Carousel', link: '/app/requests/r2', timestamp: '4 hours ago' },
        { id: 'ac3', user: 'Client User', action: 'created request', target: 'March Newsletter', link: '/app/requests/r6', timestamp: 'Yesterday' },
    ],
    insights: [
        { id: 'i1', title: 'January Performance Report', date: 'Jan 2026', type: 'Report', link: '#' },
        { id: 'i2', title: 'Q4 2025 Quarterly Review', date: 'Dec 2025', type: 'Report', link: '#' },
    ]
};
