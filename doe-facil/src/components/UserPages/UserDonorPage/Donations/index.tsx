import React, { useContext } from "react";
import { DashboardContext } from "../../../../contexts/DashboardContext/DashboardContext";
import { DonorCard } from "../../../Cards/UserPageCards/DonorCard";

const Donations = () => {

  const { donationsUser } = useContext( DashboardContext )

  return (
    <>
      {donationsUser.map((donation) => {
        return <DonorCard donation={donation} key={donation.id} />;
      })}
    </>
  );
};

export default Donations;
