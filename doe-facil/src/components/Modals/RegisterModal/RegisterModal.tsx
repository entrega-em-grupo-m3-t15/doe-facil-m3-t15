import { useContext } from "react";
import { Link } from "react-router-dom";
import { ModalsContext } from "../../../contexts/ModalsContext/ModalsContext";

export const RegisterModal = () => {
  const { isOpenModal, setIsOpenModal } = useContext(ModalsContext);
  return (
    <dialog open={isOpenModal}>
      <div>
        <button onClick={() => setIsOpenModal(false)}>X</button>
      </div>

      <div>
        <main>
          <h2>Sou um</h2>

          <div>
            <div>
              <Link to={"/registro/donatario"}>Donatário</Link>
              <small>Quem precisa de doações</small>
            </div>

            <div>
              <Link to={"/registro/doador"}>Doador</Link>
              <small>quem deseja ajudar com doações</small>
            </div>
          </div>
        </main>
      </div>
    </dialog>
  );
};
