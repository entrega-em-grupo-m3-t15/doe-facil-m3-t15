import { useContext } from "react";
import { DashboardContext } from "../../../../../contexts/DashboardContext/DashboardContext";
import { ModalsContext } from "../../../../../contexts/ModalsContext/ModalsContext";

export const DeleteModal = () => {
  const { setEspecialModalIsOpen } = useContext(ModalsContext);
  const { deleteDonation } = useContext(DashboardContext);

  return (
    <dialog>
      <header>
        <button onClick={() => setEspecialModalIsOpen("")}>X</button>
        <h2>Tem certeza que deseja excluir esta doação?</h2>
      </header>

      <main>
        <div className="buttons">
          <button className="button_no" onClick={() => deleteDonation}>
            Sim
          </button>
          <button
            className="button_yes"
            onClick={() => setEspecialModalIsOpen("")}
          >
            Não
          </button>
        </div>
      </main>
    </dialog>
  );
};
