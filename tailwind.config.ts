import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF6B3D',
                'primary-dark': '#E55A2D',
                'primary-soft': '#FFE4D8',
                'bg-dark': '#05060A',
                'bg-light': '#FFFFFF',
                'bg-gray': '#F5F5F7',
                'text-dark': '#0B0D17',
                'text-muted': '#6B7280',
                'border-default': '#E5E7EB',
                success: '#10B981',
                warning: '#F59E0B',
                error: '#EF4444',
            },
            animation: {
                'scroll': 'scroll 40s linear infinite',
                'infinite-scroll': 'infinite-scroll 40s linear infinite',
                'float': 'float 3s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'scramble': 'scramble 0.5s ease-out forwards',
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 61, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(255, 107, 61, 0.6)' },
                },
                scramble: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
            },
            fontFamily: {
                sans: ['Albert Sans', 'sans-serif'],
                display: ['Bricolage Grotesque', 'sans-serif'],
            },
            borderRadius: {
                'lg': '24px',
                'md': '12px',
            },
        },
    },
    plugins: [],
};

export default config;
