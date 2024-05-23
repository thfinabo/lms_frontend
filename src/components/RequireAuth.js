import React, { useContext } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const RequireAuth = () => {
    const isAuthenticated = useContext(AuthContext);
    const location =  useLocation()
  return (
    isAuthenticated ? <Outlet />
    : <Navigate to={'/login'} state={{from:location}} replace/>
  )
}

export default RequireAuth;