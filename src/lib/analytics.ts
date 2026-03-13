/**
 * analytics.ts — GA4 event tracking helpers
 *
 * All functions are no-ops in dev / preview builds.
 * Production guard: import.meta.env.PROD (Vite sets this to true on `vite build`)
 *
 * Measurement ID is read from VITE_GA_MEASUREMENT_ID env variable.
 */

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
const isProd = import.meta.env.PROD;

// --------------------------------------------------------------------------
// Global type augmentation — keeps TypeScript happy when we call window.gtag
// --------------------------------------------------------------------------
declare global {
    interface Window {
        gtag: (...args: unknown[]) => void;
        dataLayer: unknown[];
    }
}

type EventParams = Record<string, unknown>;

// --------------------------------------------------------------------------
// Core event dispatcher
// --------------------------------------------------------------------------
function trackEvent(eventName: string, params?: EventParams): void {
    if (!isProd) return;
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('event', eventName, params ?? {});
}

// --------------------------------------------------------------------------
// Page-view tracker (called by usePageTracking on every route change)
// --------------------------------------------------------------------------
export function trackPageView(path: string): void {
    if (!isProd || !GA_ID) return;
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('config', GA_ID, { page_path: path });
}

// --------------------------------------------------------------------------
// Named event helpers — 6 required custom events
// --------------------------------------------------------------------------

/** Fired when a user completes account registration */
export const trackSignUp = (): void => trackEvent('sign_up');

/** Fired when a user successfully logs in */
export const trackLogin = (): void => trackEvent('login');

/**
 * Fired when a key CTA button is clicked.
 * @param buttonName  Human-readable label, e.g. "Book a strategy call"
 */
export const trackCTAClick = (buttonName: string): void =>
    trackEvent('cta_click', { button_name: buttonName });

/** Fired when a user views the /pricing page */
export const trackPricingView = (): void => trackEvent('pricing_view');

/** Fired when a user clicks the extension install CTA */
export const trackExtensionInstallClick = (): void =>
    trackEvent('extension_install_click');

/** Fired when a user submits the strategy-call / demo request form */
export const trackDemoRequest = (): void => trackEvent('demo_request');
