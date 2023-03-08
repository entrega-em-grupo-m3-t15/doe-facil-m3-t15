import logo from "../../img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ModalsContext } from "../../contexts/ModalsContext/ModalsContext";
import { RegisterModal } from "../Modals/RegisterModal/RegisterModal";
import { StyleHeader } from "./style";

export const Header = () => {
  const { isOpenModal, setIsOpenModal } = useContext(ModalsContext);

  return (
    <StyleHeader>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div>
          <nav>
            <Link to="saiba-mais">Quem somos</Link>
            <button onClick={() => setIsOpenModal(true)}>Cadastro</button>
            <Link to="/login">Entrar</Link>
          </nav>
        </div>

        {isOpenModal && <RegisterModal />}
      </div>
    </StyleHeader>
  );
};
