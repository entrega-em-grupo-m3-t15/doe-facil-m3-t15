import { useContext } from "react";
import { DashboardContext } from "../../../contexts/DashboardContext/DashboardContext";
import { IAddProductToUser } from "../../../contexts/DashboardContext/interface";
import { ModalsContext } from "../../../contexts/ModalsContext/ModalsContext";

export const CollectModal = ({ cardId }: IAddProductToUser) => {
  const { isOpenModal, setIsOpenModal } = useContext(ModalsContext);
  const { addDonationToUser } = useContext(DashboardContext);
  return (
    <dialog open={isOpenModal}>
      <div className="container_collectModal">
        <header>
          <button onClick={() => setIsOpenModal(false)}>X</button>
          <h2>Resgatar doação?</h2>
        </header>

        <main>
          <div className="buttons_collectModal">
            <button className="button_no" onClick={() => setIsOpenModal(false)}>
              Não
            </button>
            <button
              className="button_yes"
              onClick={() => addDonationToUser({ cardId: cardId })}
            >
              Sim
            </button>
          </div>
        </main>
      </div>
    </dialog>
  );
};
