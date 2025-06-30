// Google Analytics 4 Configuration
// This file contains the GA4 setup without inline scripts to comply with CSP

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Initialize GA4
gtag('js', new Date());

// Replace 'G-PYBMEVY9WQ' with your actual GA4 Measurement ID
gtag('config', 'G-PYBMEVY9WQ', {
  page_title: document.title,
  page_location: window.location.href
});

// Optional: Enhanced measurement events
gtag('config', 'G-PYBMEVY9WQ', {
  custom_map: {
    'custom_parameter': 'custom_value'
  }
});

// Export gtag for use in React components if needed
window.gtag = gtag;