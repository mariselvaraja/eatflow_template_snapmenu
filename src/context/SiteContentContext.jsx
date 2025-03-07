import React, { createContext, useState, useEffect } from 'react';

export const SiteContentContext = createContext(null);

export const SiteContentProvider = ({ children }) => {
  const [siteContent, setSiteContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSiteContent = async () => {
      try {
        const response = await fetch('/src/data/siteContent.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSiteContent(data);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };

    fetchSiteContent();
  }, []);

  return (
    <SiteContentContext.Provider value={{ siteContent, loading, error }}>
      {children}
    </SiteContentContext.Provider>
  );
};
