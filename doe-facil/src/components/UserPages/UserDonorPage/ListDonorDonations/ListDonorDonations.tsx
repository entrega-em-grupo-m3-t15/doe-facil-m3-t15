import { useContext } from "react";
import { DashboardContext } from "../../../../contexts/DashboardContext/DashboardContext";
import { DonorCard } from "../../../Cards/UserPageCards/DonorCard";

export const ListDonorDonations = () => {
  const { donationsUser } = useContext(DashboardContext);

  return (
    <ul>
      {donationsUser.length > 0 ? (
        <>
          {donationsUser.map((donation) => (
            <DonorCard donation={donation} key={donation.id} />
          ))}
        </>
      ) : (
        <div className="list_donation_empty">
          <h2>Você ainda não adicionou doações</h2>
        </div>
      )}
    </ul>
  );
};
