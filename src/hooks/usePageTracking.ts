import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackPricingView } from '../lib/analytics';

/**
 * usePageTracking
 *
 * Listens to React Router location changes and fires GA4 page_view events.
 * Must be called from a component rendered inside <Router> (e.g. AppContent).
 *
 * Also fires targeted custom events for key pages:
 *  - /pricing → pricing_view
 */
export function usePageTracking(): void {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname + location.search;

        // Generic page view on every route change
        trackPageView(path);

        // Page-specific custom events
        if (location.pathname === '/pricing') {
            trackPricingView();
        }
    }, [location]);
}
