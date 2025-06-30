import { Helmet } from 'react-helmet';

interface GoogleAnalyticsProps {
  measurementId?: string;
}

export function GoogleAnalytics({ measurementId = 'G-PYBMEVY9WQ' }: GoogleAnalyticsProps) {
  return (
    <Helmet>
      {/* Load Google Analytics library */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      
      {/* Load our external configuration script */}
      <script src="/gtag.js" />
    </Helmet>
  );
}

// Utility function to track events from React components
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Utility function to track page views
export function trackPageView(page_title: string, page_location: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-PYBMEVY9WQ', {
      page_title,
      page_location,
    });
  }
}

// Type declaration for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}