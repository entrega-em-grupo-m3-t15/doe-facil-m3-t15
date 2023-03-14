import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Router } from "./routes/routes";
import { GlobalStyles } from "./styles/components/globalStyle";

export const App = () => (
  <>
    <GlobalStyles/>
    <Router />
    <ToastContainer />
  </>
);
