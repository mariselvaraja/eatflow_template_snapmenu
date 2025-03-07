import React, { createContext, useState, useEffect } from 'react';

export const MenuContext = createContext(null);

export const MenuProvider = ({ children, restaurant_id, isPreview }) => {
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        console.log(`restaurant_id: ${restaurant_id}`);
        console.log(`isPreview: ${isPreview}`);
        const response = await import(`../data/${restaurant_id}/menu.json`);
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
  }, [restaurant_id, isPreview]);

  return (
    <MenuContext.Provider value={{ menu, loading, error, restaurant_id, isPreview }}>
      {children}
    </MenuContext.Provider>
  );
};

import { useContext } from 'react';

export const useMenu = () => {
  return useContext(MenuContext);
};
