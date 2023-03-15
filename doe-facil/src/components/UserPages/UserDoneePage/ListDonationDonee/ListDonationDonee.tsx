import { useContext } from "react";
import { DashboardContext } from "../../../../contexts/DashboardContext/DashboardContext";
import { UserRequestsContext } from "../../../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";
import { MainPageCard } from "../../../Cards/MainPageCards/DoneeCard";

const ListDonationDonee = () => {
  const { donationsUser } = useContext(DashboardContext);
  const { user } = useContext(UserRequestsContext);

  console.log(donationsUser);
  console.log(user);

  return (
    <ul>
      {donationsUser.length > 0 ? (
        donationsUser.map((donation) => (
          <MainPageCard donation={donation} key={donation.id} />
        ))
      ) : (
        <div className="list_donation_empty">
          <h2>Você ainda não resgatou doações</h2>
        </div>
      )}
    </ul>
  );
};

export default ListDonationDonee;
