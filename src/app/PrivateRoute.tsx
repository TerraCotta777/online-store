import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../shared/hooks/useAuth";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  console.log(user)
  return <>{user.token ? <>{children}</> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
