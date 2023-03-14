import { useContext } from "react";
import { DashboardContext } from "../../../../contexts/DashboardContext/DashboardContext";
import DonationsDonne from "./Donations";

const ListDonationDonee = () => {
  const { donationsUser } = useContext(DashboardContext);

  return (
    <ul>
      {donationsUser.length > 0 ? (
        <DonationsDonne />
      ) : (
        <div className="list_donation_empty">
          <h2>Você ainda não resgatou doações</h2>
        </div>
      )}
    </ul>
  );
};

export default ListDonationDonee;
