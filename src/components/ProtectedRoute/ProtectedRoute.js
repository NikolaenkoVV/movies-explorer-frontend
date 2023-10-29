import * as React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ currentUser, element: Component, ...props }) {
  return currentUser ? (
    <Component {...props} />
  ) : (
    <Navigate to="/" replace />
  );
}

export default ProtectedRoute;
