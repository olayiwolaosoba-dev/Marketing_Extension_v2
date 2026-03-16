import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface StudentUser {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
  joinedAt: string;
}

interface AcademyAuthState {
  student: StudentUser | null;
  isAuthenticated: boolean;
  login: (user: StudentUser) => void;
  logout: () => void;
}

// ─── Store ────────────────────────────────────────────────────────────────────

export const useAcademyAuth = create<AcademyAuthState>()(
  persist(
    (set) => ({
      student: null,
      isAuthenticated: false,

      login: (user: StudentUser) =>
        set({ student: user, isAuthenticated: true }),

      logout: () =>
        set({ student: null, isAuthenticated: false }),
    }),
    {
      // Separate key from 'me-os-store' to avoid any collision
      name: 'academy-auth-store',
    }
  )
);
