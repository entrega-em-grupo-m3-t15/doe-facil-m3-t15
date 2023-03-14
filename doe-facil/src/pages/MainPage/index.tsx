import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserRequestsContext } from "../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";
import { BiUserCircle } from "react-icons/bi";
import { DashboardContext } from "../../contexts/DashboardContext/DashboardContext";

import {
  StyledCardListMain,
  StyledContainerMobile,
  StyledHeaderMain,
} from "./style";
import { MainPageCard } from "../../components/Cards/MainPageCards/DoneeCard";
import { DetailsModal } from "../../components/Modals/UpdateInfoModals/ModalDonation/DetailsDonationModal/DetailsModal";
import { ModalsContext } from "../../contexts/ModalsContext/ModalsContext";
import { CollectModal } from "../../components/Modals/MainPageModal/CollectModal";

export const MainPage = () => {
  const { isOpenModal, especialModalIsOpen } = useContext(ModalsContext)
  const { user } = useContext(UserRequestsContext);
  const { donations } = useContext(DashboardContext);

  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("@USERID");
    localStorage.removeItem("@USERTOKEN");
    navigate("/");
  };

  console.log(user);

  return (
    <StyledContainerMobile>
      <StyledHeaderMain>
        <button onClick={() => logoutUser}>Sair</button>

        <Link
          to={
            user?.user?.isDonor
              ? `/mainPage/donor/${user && user.id}`
              : `/mainPage/donee/${user && user.id}`
          }
        >
          Perfil
        </Link>
      </StyledHeaderMain>

      <StyledHeaderMain>
        <div>
          <div onClick={() => navigate("mainPage/:id")}>
            <BiUserCircle />
          </div>

          <div className="user_information">
            <h2>{user?.user?.email}</h2>
            <p>{user?.user?.contact}</p>
          </div>
        </div>
      </StyledHeaderMain>

      <main>
        <h2>Doações</h2>

        <StyledCardListMain>
          {donations.map((donation, index) => {
            return <MainPageCard donation={donation} key={index} />;
          })}
        </StyledCardListMain>
      </main>
      {isOpenModal && <DetailsModal />}
      
    </StyledContainerMobile>
  );
};
