import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom";
import { UserRequestsContext } from "../../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";

export const DonorRoutes = () => {
  const { user } = useContext(UserRequestsContext);

  const navigate = useNavigate()

  useEffect(() => {
    if(user?.user?.isDonor === false){
      navigate("/userPage/donee")
    }   
  }, [])

  return <>{user?.user?.isDonor ? <Outlet/> : null}</>
}