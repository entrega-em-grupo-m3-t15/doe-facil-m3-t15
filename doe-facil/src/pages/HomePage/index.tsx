import { ToastContainer } from "react-toastify";
import { Header } from "../../components/Header/Header";

export const HomePage = () => (
  <>
    <div>
      <div>
        <Header />
      </div>
      <main>
        <h2>você está na HomePage</h2>
      </main>
    </div>
    <ToastContainer/>
  </>
);
