import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../pages/404";
import { AboutUsPage } from "../pages/AbaoutUsPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterDoneePage } from "../pages/RegisterPages/RegisterDoneePages";
import { RegisterDonorPage } from "../pages/RegisterPages/RegisterDonorPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/saiba-mais" element={<AboutUsPage />} />

      <Route path="/registro/donatario" element={<RegisterDoneePage />} />
      <Route path="/registro/doador" element={<RegisterDonorPage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
