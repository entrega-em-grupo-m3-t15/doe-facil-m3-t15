import { useContext } from "react";
import { ModalsContext } from "../../../../contexts/ModalsContext/ModalsContext";

export const DetailsModal = () => {
  //pegar as informações do DoneeCard

  const { isOpenModal, setIsOpenModal } = useContext(ModalsContext);

  return (
    <dialog open={isOpenModal}>
      <div>
        <div>
          <button onClick={() => setIsOpenModal(false)}>X</button>
          <h2>Título do card</h2>
        </div>
        <p>Descrição do card</p>
      </div>
    </dialog>
  );
};
