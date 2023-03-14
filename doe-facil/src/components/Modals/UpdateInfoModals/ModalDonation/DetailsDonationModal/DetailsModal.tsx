import { useContext } from "react";
import { DashboardContext } from "../../../../../contexts/DashboardContext/DashboardContext";
import { StyledDialog } from "./style";

export interface iDatailsModalProps {
  donation: number;
  closeModal: () => void;
}

export const DetailsModal = ({ donation, closeModal }: iDatailsModalProps) => {
  const { donations } = useContext(DashboardContext);
  const donationDetails = donations.find((card) => card.id === donation);

  return (
    <StyledDialog>
      <div className="box_modal">
        <button onClick={closeModal}>X</button>

        <div>{donationDetails?.image}</div>
        <h2>{donationDetails?.name}</h2>
        <div className="box_description">
          <p>{donationDetails?.description}</p>
          <p>{donationDetails?.amount}</p>
        </div>
      </div>
    </StyledDialog>
  );
};
