import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom";
import { UserRequestsContext } from "../../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";

export const DoneeRoutes = () => {
  const { user } = useContext(UserRequestsContext);

  const navigate = useNavigate()

  useEffect(() => {
    if(user?.user?.isDonor === false){
      navigate("/")
      console.log("91823")
    }
  }, [])

  return <>{user?.user?.isDonor ? null : <Outlet/>}</>
}