import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserDoneePage } from "../components/UserPages/UserDoneePage/UserDoneePage";
import { UserDonorPage } from "../components/UserPages/UserDonorPage/UserDonorPage";
import { UserRequestsContext } from "../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";
import { NotFoundPage } from "../pages/404";
import { AboutUsPage } from "../pages/AbaoutUsPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterDoneePage } from "../pages/RegisterPages/RegisterDoneePages";
import { RegisterDonorPage } from "../pages/RegisterPages/RegisterDonorPage";
import { UserPage } from "../pages/UserPage";
import { DoneeRoutes } from "./PrivateRoutes/DoneeRoutes/DoneeRoutes";
import { DonorRoutes } from "./PrivateRoutes/DonorRoutes/DonorRoutes";
import { PrivateRoutes } from "./PrivateRoutes/PrivateRoutes";
// import { ProtectedRoutes } from "./protectedRoutes";
import { PublicRoutes } from "./PublicRoutes/PublicRoutes";
import { MainPage } from "../pages/MainPage";
import { DashboardProvider } from "../contexts/DashboardContext/DashboardContext";
import { UserProvider } from "../contexts/UserInfoContext/UserInfoContext";

export const Router = () => {
  // console.log(user?.user.isDonor)

  return (
    <Routes>
      <Route path="/" element={<PublicRoutes />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/saiba-mais" element={<AboutUsPage />} />
        <Route path="/registro/donatario" element={<RegisterDoneePage />} />
        <Route path="/registro/doador" element={<RegisterDonorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* <Route path="/mainPage" element={<PrivateRoutes/>}> */}

      <Route element={<PrivateRoutes />}>
        <Route path="/userPage" element={<MainPage />} />
        <Route path="/userPage/donee/:id" element={<UserDoneePage />} />
        <Route path="/userPage/donor/:id" element={<UserDonorPage />} />
      </Route>

      {/* <Route path="/userPage/donor" element={<DonorRoutes/>}> */}
      {/* </Route> */}

      {/* </Route> */}
    </Routes>
  );
};
