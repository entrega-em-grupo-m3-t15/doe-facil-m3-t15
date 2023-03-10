import { useContext } from "react";
import { DashboardContext } from "../../../../contexts/DashboardContext/DashboardContext";
import { ModalsContext } from "../../../../contexts/ModalsContext/ModalsContext";

export const DeleteModal = () => {
  const { setEspecialModalIsOpen } = useContext(ModalsContext);
  const { deleteDonation } = useContext(DashboardContext);

  return (
    <dialog>
      <button onClick={() => setEspecialModalIsOpen("")}>X</button>
      <h2>Tem certeza que deseja excluir esta doação?</h2>

      <div>
        <button onClick={() => deleteDonation}>Sim</button>
        <button onClick={() => setEspecialModalIsOpen("")}>Não</button>
      </div>
    </dialog>
  );
};
