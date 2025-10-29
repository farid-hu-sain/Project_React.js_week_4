import { useAuth } from "contexts/AuthContext";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";


export const PrivateRoute: React.FC<{children: React.ReactElement}> = ({ children }) => {
  const { user, setRedirectPath } = useAuth();
  const location = useLocation();

  if (!user) {
    // Simpan path yang ingin diakses untuk redirect setelah login
    setRedirectPath(location.pathname);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};