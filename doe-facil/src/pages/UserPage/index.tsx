import { useContext } from "react";
import { UserDoneePage } from "../../components/UserPages/UserDoneePage/UserDoneePage";
import { UserDonorPage } from "../../components/UserPages/UserDonorPage/UserDonorPage";
import { UserRequestsContext } from "../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";

export const UserPage = () => {
  const { user } = useContext(UserRequestsContext);

  if (user?.user.isDonor) {
    return <UserDonorPage />;
  } else {
    return <UserDoneePage />;
  }
};
