import { useContext } from "react";
import { ICardDonation } from "../../../contexts/DashboardContext/interface";
import { ModalsContext } from "../../../contexts/ModalsContext/ModalsContext";
import { UserRequestsContext } from "../../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";
import { CollectModal } from "../../Modals/MainPageModal/CollectModal";
import { DetailsModal } from "../../Modals/UpdateInfoModals/ModalDonation/DetailsDonationModal/DetailsModal";

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
    <li
      onClick={() =>
        !user?.user.isDonor && setEspecialModalIsOpen("collectModal")
      }
    >
      <div className="card_title">
        <h2>Disponível para resgate</h2>
      </div>
      <main>
        <div className="container_card">
          <div className="left">
            <img src="" alt="imagem da doação" />
          </div>
          <div className="right">
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
      {/* {especialModalIsOpen == "collectModal" && (
        <CollectModal cardId={donation.id} />
      )} */}
    </li>
  );
};
