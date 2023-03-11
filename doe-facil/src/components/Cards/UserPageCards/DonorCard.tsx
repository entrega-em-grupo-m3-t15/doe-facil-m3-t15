import { useContext } from "react";
import { ModalsContext } from "../../../contexts/ModalsContext/ModalsContext";
import { DeleteModal } from "../../Modals/UpdateInfoModals/ModalDonation/DeleteDonationModal/DeleteModal";
import { EditModal } from "../../Modals/UpdateInfoModals/ModalDonation/EditDonationModal/EditModal";

export const DonorCard = () => {
  //Fazer a requisição que mostra as informações dos cards aqui (/users/id) está como user Data no insominia
  //devo ver a lógica como colocar esse boleano de isAvaliable no insomonia

  const { especialModalIsOpen, setEspecialModalIsOpen } =
    useContext(ModalsContext);

  especialModalIsOpen == "editModal" && <EditModal />;
  especialModalIsOpen == "deleteModal" && <DeleteModal />;

  return (
    <div>
      <header>
        {/* deve ser dinamico */}
        <h2>Disponível para resgate</h2>
        <h2>lá resgatado</h2>
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
    </div>
  );
};
