import { useContext } from "react";
import { ModalsContext } from "../../../contexts/ModalsContext/ModalsContext";

export const CollectModal = () => {
  const { isOpenModal, setIsOpenModal } = useContext(ModalsContext);
  return (
    <dialog open={isOpenModal}>
      <div>
        <header>
          <button onClick={() => setIsOpenModal(false)}>X</button>
          <h2>resgatar doação?</h2>
        </header>

        <main>
          <div>
            <button onClick={() => setIsOpenModal(false)}>Não</button>
            {/* Aqui deve ficar a funionalidade de resgatar o modal */}
            <button>Sim</button>
          </div>
        </main>
      </div>
    </dialog>
  );
};
