import { useContext, useEffect } from "react";
import { DashboardContext } from "../../../../contexts/DashboardContext/DashboardContext";
import { UserRequestsContext } from "../../../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";
import { DonorCard } from "../../../Cards/UserPageCards/DonorCard";

export const ListDonorDonations = () => {
  const { donationsUser, getDonationsUser } = useContext(DashboardContext);
  const { user } = useContext(UserRequestsContext);

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
