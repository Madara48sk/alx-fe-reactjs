import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated }) => {
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login, preserving current location for after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If authenticated, render the outlet component
  return <Outlet />;
};

export default ProtectedRoute;