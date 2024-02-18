// components/ProtectedRoute.jsx
import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({
  allowedRoles,
  isAuthenticated,
  userRole,
  ...rest
}) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <div>Unauthorized Access</div>;
  }

  return <Route {...rest} />;
};

export default ProtectedRoute;
