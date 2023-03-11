import { useContext } from "react";
import { DashboardContext } from "../../../../../contexts/DashboardContext/DashboardContext";
import { ModalsContext } from "../../../../../contexts/ModalsContext/ModalsContext";

export const DetailsModal = () => {
  const { isOpenModal, setIsOpenModal } = useContext(ModalsContext);
  const { donations } = useContext(DashboardContext);

  return (
    <dialog open={isOpenModal}>
      <div>
        <button onClick={() => setIsOpenModal(false)}>X</button>
        {donations.map((element) => {
          return (
            <div>
              <div>{element.image}</div>
              <div>
                <h2>{element.name}</h2>
                <p>{element.description}</p>
                <p>{element.amount}</p>
              </div>
            </div>
          );
        })}
      </div>
    </dialog>
  );
};
