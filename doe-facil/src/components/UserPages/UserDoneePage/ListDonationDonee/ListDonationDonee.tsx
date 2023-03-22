import { useContext, useEffect } from "react";
import { DashboardContext } from "../../../../contexts/DashboardContext/DashboardContext";
import { DonorCard } from "../../../Cards/UserPageCards/DonorCard";

export const ListDonationDonee = () => {
  const { donationsUser, getDonationsUser } = useContext(DashboardContext);

  useEffect(() => {
    getDonationsUser();
  }, []);

  return (
    <ul>
      {donationsUser.length > 0 ? (
        donationsUser.map((donation) => (
          <DonorCard donation={donation} key={donation.id} />
        ))
      ) : (
        <div className="list_donation_empty">
          <h2>Você ainda não resgatou doações</h2>
        </div>
      )}
    </ul>
  );
};
