import Cookies from 'js-cookie';
import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get('authToken'));

  useEffect(() => {
    const interval = setInterval(() => {
      const token = Cookies.get('authToken');
      setIsAuthenticated(!!token);
    }, 1000); // Check every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <AuthContext.Provider value={isAuthenticated}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
