import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAcademyAuth } from '../../lib/academyAuth';

/**
 * Wraps any Academy app route — redirects unauthenticated users to sign-in.
 * Passes `state.from` so sign-in can redirect back to the originally requested page.
 */
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAcademyAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/academy/sign-in"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
