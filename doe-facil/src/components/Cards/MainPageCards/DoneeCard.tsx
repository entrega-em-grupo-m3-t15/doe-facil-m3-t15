import { useContext } from "react";
import { ICardDonation } from "../../../contexts/DashboardContext/interface";
import { ModalsContext } from "../../../contexts/ModalsContext/ModalsContext";
import { UserRequestsContext } from "../../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";
import { CollectModal } from "../../Modals/MainPageModal/CollectModal";
import { DetailsModal } from "../../Modals/UpdateInfoModals/ModalDonation/DetailsDonationModal/DetailsModal";
import { StyleCards } from "./style";
import imageFood  from "../../../img/profileImage/imagefood.png"
import imageClothes from "../../../img/profileImage/imageclothes.svg";

export const MainPageCard = ({ donation }: ICardDonation) => {
  //Fazer a requisição que mostra as informações dos cards aqui (/users/id) está como user Data no insominia
  //devo ver a lógica como colocar esse boleano de isAvaliable no insomonia

  const {
    isOpenModal,
    setIsOpenModal,
    especialModalIsOpen,
    setEspecialModalIsOpen,
  } = useContext(ModalsContext);
  const { user } = useContext(UserRequestsContext);

  return (
    <StyleCards
      onClick={() =>
        !user?.user?.isDonor && setEspecialModalIsOpen("collectModal")
      }
    >
      <div className="card_title">
        <h2>Disponível</h2>
      </div>
      <main>
        <div className="container_card">
          <div className="box_image">
            {
              donation.isClothes ? (<img src={imageClothes} alt="imagem d adoação" />)
              : (<img src={imageFood} alt="imagem d adoação" />) 
            }
          </div>
          <div className="card_description">
            <h4>{donation.name}</h4>
            <p>{donation.description}</p>
            <p>{donation.amount}</p>
          </div>
        </div>
        <button onClick={() => {
          setIsOpenModal(true)
        }
          }>Detalhes</button>
      </main>
       {especialModalIsOpen == "collectModal" && (
        <CollectModal cardId={donation.id} />
      )}
    </StyleCards>
  );
};
