import logo from "../../img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ModalsContext } from "../../contexts/ModalsContext/ModalsContext";
import { RegisterModal } from "../Modals/RegisterModal/RegisterModal";
import { StyleHeader } from "./style";

export const Header = () => {
  const { isOpenModal, setIsOpenModal } = useContext(ModalsContext);

  const navigate = useNavigate();

  return (
    <StyleHeader>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div>
          <nav>
            <button
              className="aboutUsBtn"
              onClick={() => navigate("/saiba-mais")}
            >
              Quem somos
            </button>
            <button onClick={() => setIsOpenModal(true)}>Cadastro</button>
            <Link to="/login">Entrar</Link>
          </nav>
        </div>

        {isOpenModal && <RegisterModal />}
      </div>
    </StyleHeader>
  );
};
