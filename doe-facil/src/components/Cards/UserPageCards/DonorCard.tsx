import { useContext } from "react";
import { ICardDonation } from "../../../contexts/DashboardContext/interface";
import { ModalsContext } from "../../../contexts/ModalsContext/ModalsContext";
import { DeleteModal } from "../../Modals/UpdateInfoModals/ModalDonation/DeleteDonationModal/DeleteModal";
import { EditModal } from "../../Modals/UpdateInfoModals/ModalDonation/EditDonationModal/EditModal";
import imageFood from "../../../img/profileImage/imagefood.png";
import imageClothes from "../../../img/profileImage/imageclothes.svg";
import { StyleCardsDonor } from "./style";

export const DonorCard = ({ donation }: ICardDonation) => {
  //Fazer a requisição que mostra as informações dos cards aqui (/users/id) está como user Data no insominia
  //devo ver a lógica como colocar esse boleano de isAvaliable no insomonia

  const { especialModalIsOpen, setEspecialModalIsOpen } =
    useContext(ModalsContext);

  return (
    <StyleCardsDonor>
      <div className="card_title">
        {donation.isAvailable ? (
          <h2>Disponível para resgate</h2>
        ) : (
          <h2>Já resgatado</h2>
        )}
      </div>

      <section className="box_card">
        <div className="container_card">
          <div className="box_image">
            {donation.isClothes ? (
              <img src={imageClothes} alt="imagem d adoação" />
            ) : (
              <img src={imageFood} alt="imagem d adoação" />
            )}
          </div>
          <div className="card_description">
            <h2>{donation.name}</h2>
            <p>{donation.description}</p>
          </div>
          <div className="box_btn">
            <button onClick={() => setEspecialModalIsOpen("editModal")}>
              Editar
            </button>
            <button onClick={() => setEspecialModalIsOpen("deleteModal")}>
              Excluir
            </button>
          </div>
        </div>
      </section>
      {especialModalIsOpen == "editModal" && <EditModal />}
      {especialModalIsOpen == "deleteModal" && <DeleteModal />}
    </StyleCardsDonor>
  );
};
