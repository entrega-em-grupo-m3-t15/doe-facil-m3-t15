import { useContext } from "react";
import { Link } from "react-router-dom";
import { ModalsContext } from "../../../contexts/ModalsContext/ModalsContext";
import { StyledDialog } from "./style";

export const RegisterModal = () => {
  const { setIsOpenModal } = useContext(ModalsContext);
  return (
    <StyledDialog>
      <section>
        <div className="closeBtn">
          <button onClick={() => setIsOpenModal(false)}>X</button>
        </div>

        <div>
          <main>
            <h2>Sou um</h2>

            <div >
              <div>
                <Link to={"/registro/donatario"}>Donatário</Link>
                <small>Quem precisa de doações</small>
              </div>

              <div>
                <Link to={"/registro/doador"}>Doador</Link>
                <small>Quem deseja ajudar com doações</small>
              </div>
            </div>
          </main>
        </div>
      </section>
    </StyledDialog>
    
  );
};
