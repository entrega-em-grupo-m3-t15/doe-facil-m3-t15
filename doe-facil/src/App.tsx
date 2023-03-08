import { ToastContainer } from "react-toastify";
import { Router } from "./routes/routes";
import { GlobalStyles } from "./styles/components/globalStyle";

export const App = () => (
  <>
    <GlobalStyles/>
    <Router />
    <ToastContainer />
  </>
);
