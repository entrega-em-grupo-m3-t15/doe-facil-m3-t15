import { Route, Routes } from "react-router-dom";
import { UserDoneePage } from "../components/UserPages/UserDoneePage/UserDoneePage";
import { UserDonorPage } from "../components/UserPages/UserDonorPage/UserDonorPage";
import { NotFoundPage } from "../pages/404";
import { AboutUsPage } from "../pages/AbaoutUsPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { MainPage } from "../pages/MainPage";
import { RegisterDoneePage } from "../pages/RegisterPages/RegisterDoneePages";
import { RegisterDonorPage } from "../pages/RegisterPages/RegisterDonorPage";

import { ProtectedRoutes } from "./protectedRoutes";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/saiba-mais" element={<AboutUsPage />} />
      <Route path="/registro/donatario" element={<RegisterDoneePage />} />
      <Route path="/registro/doador" element={<RegisterDonorPage />} />
      <Route path="*" element={<NotFoundPage />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/mainPage/donee/:id" element={<UserDoneePage />} />
        <Route path="/mainPage/donor/:id" element={<UserDonorPage />} />
      </Route>
    </Routes>
  );
};
