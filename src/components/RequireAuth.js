import React, { useContext, useState, useEffect } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const RequireAuth = () => {
    const isAuthenticated = useContext(AuthContext);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
  }, []);

    const location =  useLocation()
  return (
    isMounted ?
    (isAuthenticated ? <Outlet />
    : <Navigate to={'/login'} state={{from:location}} replace/>)
    : null
  )
}

export default RequireAuth;