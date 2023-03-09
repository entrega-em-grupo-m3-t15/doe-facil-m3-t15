import { useContext } from "react";
import { ModalsContext } from "../../../contexts/ModalsContext/ModalsContext";
import { DetailsModal } from "../../Modals/UpdateInfoModals/ModalDonation/DetailsModal";

export const DonorCard = () => {
  //Fazer a requisição que mostra as informações dos cards aqui (/users/id) está como user Data no insominia
  //devo ver a lógica como colocar esse boleano de isAvaliable no insomonia

  const { isOpenModal, setIsOpenModal } = useContext(ModalsContext);

  isOpenModal && <DetailsModal />;
  return (
    <div>
      <header>
        <h2>Disponível para resgate</h2>
      </header>

      <main>
        <div className="container_card">
          <div className="left">
            <img src="" alt="imagem da doação" />
          </div>
          <div className="right">
            <h4>Nome do card</h4>
            <p>Description do card</p>
          </div>
        </div>
        <button onClick={() => setIsOpenModal(true)}>Detalhes</button>
      </main>
    </div>
  );
};
