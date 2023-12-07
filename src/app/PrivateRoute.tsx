import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../shared/hooks/useAuth";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  return <>{user.isAutorised ? <>{children}</> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
