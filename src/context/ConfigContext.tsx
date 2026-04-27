import React, { createContext, useContext, useEffect, useState } from 'react';
import { WebsiteConfig, fetchWebsiteConfig } from '../utils/config';

interface ConfigContextType {
  config: WebsiteConfig | null;
  loading: boolean;
  error: any;
  refreshConfig: () => Promise<void>;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<WebsiteConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  const loadConfig = async () => {
    try {
      setLoading(true);
      const data = await fetchWebsiteConfig();
      setConfig(data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadConfig();
  }, []);

  useEffect(() => {
    if (config?.branding?.colors) {
      const colors = config.branding.colors;
      const root = document.documentElement;
      
      if (colors.primary) root.style.setProperty('--color-primary', colors.primary);
      if (colors.secondary) root.style.setProperty('--color-secondary', colors.secondary);
      if (colors.accentBlue) root.style.setProperty('--color-accent-blue', colors.accentBlue);
      if (colors.darkNavy) root.style.setProperty('--color-dark-navy', colors.darkNavy);
      if (colors.lightBg) root.style.setProperty('--color-light-bg', colors.lightBg);
    }
  }, [config]);

  return (
    <ConfigContext.Provider value={{ config, loading, error, refreshConfig: loadConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};
