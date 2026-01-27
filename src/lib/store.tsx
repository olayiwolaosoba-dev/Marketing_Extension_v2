import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { SEED_DATA } from '../data/seed';

// Types
export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    avatar: string;
    organization: string;
}

export interface Notification {
    id: string;
    type: string;
    title: string;
    readout: string;
    link: string;
    isRead: boolean;
    timestamp: string;
}

export interface Project {
    id: string;
    title: string;
    status: string;
    owner: string;
    progress: number;
    type: string;
    description: string;
}

export interface Request {
    id: string;
    title: string;
    type: string;
    status: string;
    priority: string;
    dueDate: string;
    projectId: string;
    brief: string;
    requestedBy: string;
    assignee: string;
}

export interface Asset {
    id: string;
    name: string;
    type: string;
    url: string;
    requestId: string;
    status: string;
    version: number;
    uploadedAt: string;
}

export interface Activity {
    id: string;
    user: string;
    action: string;
    target: string;
    link: string;
    timestamp: string;
}

export interface Insight {
    id: string;
    title: string;
    date: string;
    type: string;
    link: string;
}

interface AppState {
    user: User;
    notifications: Notification[];
    projects: Project[];
    requests: Request[];
    assets: Asset[];
    activity: Activity[];
    insights: Insight[];

    // Actions
    markNotificationRead: (id: string) => void;
    addRequest: (request: Request) => void;
    updateRequestStatus: (id: string, status: string) => void;
    addProject: (project: Project) => void;
    resetStore: () => void;
}

export const useStore = create<AppState>()(
    persist(
        (set) => ({
            user: SEED_DATA.user,
            notifications: SEED_DATA.notifications,
            projects: SEED_DATA.projects,
            requests: SEED_DATA.requests,
            assets: SEED_DATA.assets,
            activity: SEED_DATA.activity,
            insights: SEED_DATA.insights,

            markNotificationRead: (id) => set((state) => ({
                notifications: state.notifications.map(n =>
                    n.id === id ? { ...n, isRead: true } : n
                )
            })),

            addRequest: (request) => set((state) => ({
                requests: [request, ...state.requests],
                activity: [{
                    id: Date.now().toString(),
                    user: state.user.name,
                    action: 'created request',
                    target: request.title,
                    link: `/app/requests/${request.id}`,
                    timestamp: 'Just now'
                }, ...state.activity]
            })),

            updateRequestStatus: (id, status) => set((state) => ({
                requests: state.requests.map(r =>
                    r.id === id ? { ...r, status } : r
                )
            })),

            addProject: (project) => set((state) => ({
                projects: [project, ...state.projects]
            })),

            resetStore: () => set({
                user: SEED_DATA.user,
                notifications: SEED_DATA.notifications,
                projects: SEED_DATA.projects,
                requests: SEED_DATA.requests,
                assets: SEED_DATA.assets,
                activity: SEED_DATA.activity,
                insights: SEED_DATA.insights,
            })
        }),
        {
            name: 'me-os-store', // name of the item in the storage (must be unique)
        }
    )
);
