import logo from "../../img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ModalsContext } from "../../contexts/ModalsContext/ModalsContext";
import { RegisterModal } from "../Modals/RegisterModal/RegisterModal";

export const Header = () => {
  const { isOpenModal, setIsOpenModal } = useContext(ModalsContext);

  const navigate = useNavigate();
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
      </div>

      <div>
        <nav>
          {/* os links devem ter o style de um button e não devemos fazer um button para coloca-lo dentro */}
          <button onClick={() => navigate("saiba-mais")}>Quem somos</button>
          <button onClick={() => setIsOpenModal(true)}>Cadastro</button>
          <Link to={"/login"}>Entrar</Link>
        </nav>
      </div>

      {isOpenModal && <RegisterModal />}
    </header>
  );
};
