import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserRequestsContext } from "../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";

export const PrivateRoutes = () => {
  const { user } = useContext(UserRequestsContext);

  // const navigate = useNavigate()

  // console.log(user)

  // useEffect(() => {
  //  if (user) {

  //  }
  // }, []);

  // return <>{user?.user ? <Outlet/> : navigate("/login")}</>

  return user ? <Outlet /> : <Navigate to={"/"} />;
};
