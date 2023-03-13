import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserRequestsContext } from "../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";
import { BiUserCircle } from "react-icons/bi";
import { DashboardContext } from "../../contexts/DashboardContext/DashboardContext";
import { MainPageCard } from "../../components/Cards/MainPageCards/DoneeCard";
import {
  StyledCardListMain,
  StyledContainerMobile,
  StyledHeaderMain,
} from "./style";
import { DetailsModal } from "../../components/Modals/UpdateInfoModals/ModalDonation/DetailsDonationModal/DetailsModal";
import { ModalsContext } from "../../contexts/ModalsContext/ModalsContext";

export const MainPage = () => {
  const { isOpenModal } = useContext(ModalsContext)
  const { user } = useContext(UserRequestsContext);
  const { donations } = useContext(DashboardContext);

  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("@USERID");
    localStorage.removeItem("@USERTOKEN");
    navigate("/");
  };

  return (
    <StyledContainerMobile>
      <StyledHeaderMain>
        <button onClick={() => logoutUser}>Sair</button>

        <Link
          to={
            user?.user.isDonor
              ? `/userPage/donor/${user?.user.id}`
              : `/userPage/donee/${user?.user.id}`
          }
        >
          Perfil
        </Link>
      </StyledHeaderMain>

      <StyledHeaderMain>
        <div>
          <div onClick={() => navigate("userPage/:id")}>
            <BiUserCircle />
          </div>

          <div className="user_information">
            <h2>{user?.user.email}</h2>
            <p>{user?.user.contact}</p>
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
