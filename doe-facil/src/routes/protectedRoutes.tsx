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

  if (!user) {
    return <Navigate to={"/"} />;
  }

  if (user.user?.isDonor && window.location.pathname.includes("/donee/")) {
    return <Navigate to={"/mainPage"} />;
  }

  if (!user.user?.isDonor && window.location.pathname.includes("/donor/")) {
    return <Navigate to={"/mainPage"} />;
  }

  return <Outlet />;
};
