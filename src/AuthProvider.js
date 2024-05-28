import Cookies from 'js-cookie';
import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get('authToken');
    setIsAuthenticated(!!token);
  }, [isAuthenticated]);

  return <AuthContext.Provider value={isAuthenticated}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };