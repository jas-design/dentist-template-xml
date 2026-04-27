/**
 * Utility to load and parse website-config.xml
 */

export interface WebsiteConfig {
  calendlyUrl: string;
  // Add more fields as needed
}

let configCache: WebsiteConfig | null = null;

export async function getWebsiteConfig(): Promise<WebsiteConfig> {
  if (configCache) return configCache;

  try {
    const response = await fetch('/website-config.xml');
    const text = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, 'text/xml');

    const calendlyUrl = xmlDoc.getElementsByTagName('calendly_url')[0]?.textContent || '';

    configCache = {
      calendlyUrl,
    };

    return configCache;
  } catch (error) {
    console.error('Error loading website-config.xml:', error);
    return {
      calendlyUrl: 'https://calendly.com/your-dentist-link', // Fallback
    };
  }
}

export async function openCalendly() {
  const config = await getWebsiteConfig();
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: config.calendlyUrl });
  } else {
    console.error('Calendly script not loaded');
  }
}

declare global {
  interface Window {
    Calendly: any;
  }
}
