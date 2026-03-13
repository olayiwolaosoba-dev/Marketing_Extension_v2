import { useEffect } from 'react';

/**
 * GoogleAnalytics.tsx
 *
 * Dynamically injects the GA4 gtag.js script into <head>.
 * - Runs ONLY in production builds (import.meta.env.PROD === true)
 * - Safe to render multiple times — checks for existing script before injecting
 * - send_page_view: false prevents a double page_view on initial load;
 *   usePageTracking hook handles all page_view events instead.
 *
 * Render this component once, inside <Router> but outside <Routes>.
 */

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

const GoogleAnalytics: React.FC = () => {
    useEffect(() => {
        if (!import.meta.env.PROD || !GA_ID) return;

        // Guard against double-injection (e.g. React StrictMode double-effect)
        if (document.getElementById('ga-script')) return;

        // 1. Load gtag.js async
        const gtagScript = document.createElement('script');
        gtagScript.id = 'ga-script';
        gtagScript.async = true;
        gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
        document.head.appendChild(gtagScript);

        // 2. Initialise dataLayer and configure GA4
        //    send_page_view: false → page views handled by usePageTracking
        const initScript = document.createElement('script');
        initScript.id = 'ga-init';
        initScript.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: false });
        `;
        document.head.appendChild(initScript);
    }, []);

    return null;
};

export default GoogleAnalytics;
