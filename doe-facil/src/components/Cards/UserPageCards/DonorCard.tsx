import { useContext } from "react";
import { ICardDonation } from "../../../contexts/DashboardContext/interface";
import { ModalsContext } from "../../../contexts/ModalsContext/ModalsContext";
import { DeleteModal } from "../../Modals/UpdateInfoModals/ModalDonation/DeleteDonationModal/DeleteModal";
import { EditModal } from "../../Modals/UpdateInfoModals/ModalDonation/EditDonationModal/EditModal";

export const DonorCard = ({ donation }: ICardDonation) => {
  //Fazer a requisição que mostra as informações dos cards aqui (/users/id) está como user Data no insominia
  //devo ver a lógica como colocar esse boleano de isAvaliable no insomonia

  const { especialModalIsOpen, setEspecialModalIsOpen } =
    useContext(ModalsContext);

  return (
    <li>
      <header>
        <h2>Disponível para resgate</h2>
        <h2>lá resgatado</h2>
      </header>

      <main>
        <div className="container_card">
          <div className="left">
            <img src="" alt="imagem da doação" />
          </div>
          <div className="right">
            <h4>{donation.name}</h4>
            <p>{donation.description}</p>
          </div>
          <div>
            <button onClick={() => setEspecialModalIsOpen("editModal")}>
              Editar
            </button>
            <button onClick={() => setEspecialModalIsOpen("deleteModal")}>
              Excluir
            </button>
          </div>
        </div>
      </main>
      {especialModalIsOpen == "editModal" && <EditModal />}
      {especialModalIsOpen == "deleteModal" && <DeleteModal />}

    </li>
  );
};
