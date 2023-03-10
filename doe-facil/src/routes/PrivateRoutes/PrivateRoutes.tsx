import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom";
import { UserRequestsContext } from "../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";

export const PrivateRoutes = () => {
  const { user } = useContext(UserRequestsContext);

  // const navigate = useNavigate()

  useEffect(() => {
    if(!user){
      console.log("obaa")
    }
  }, [])

  return <>{user ? <Outlet/> : null}</>
}