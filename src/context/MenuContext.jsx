import React, { createContext, useState, useEffect } from 'react';

export const MenuContext = createContext(null);

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('/src/data/menu.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMenu(data);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return (
    <MenuContext.Provider value={{ menu, loading, error }}>
      {children}
    </MenuContext.Provider>
  );
};
