import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { UserRequestsContext } from "../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserRequestsContext);

  if (loading) {
    return (
      <div className="loading_theme">
        <SyncLoader loading={loading} color="#3902ff" />
      </div>
    );
  }

  return <>{user ? <Outlet /> : <Navigate to="/" />}</>;
};
