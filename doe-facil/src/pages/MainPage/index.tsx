import { useContext, useState } from "react";
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
import logo from "../../img/logo.svg";

export const MainPage = () => {
  const { user } = useContext(UserRequestsContext);
  const { donations } = useContext(DashboardContext);
  const userId = localStorage.getItem("@USERID");
  const [modalType, setModalType] = useState("");

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
        <div className="box_header">
          <button onClick={() => logoutUser}>Sair</button>

          <div className="box_logo">
            <img src={logo} alt="" />
          </div>

          <Link
            to={
              user?.isDonor
                ? `/mainPage/donor/${userId}`
                : `/mainPage/donee/${userId}`
            }
          >
            Perfil
          </Link>
        </div>
      </StyledHeaderMain>

      <section>
        <div className="box_profile">
          <div
            className="box_icon"
            onClick={() =>
              navigate(
                user?.isDonor
                  ? `/mainPage/donor/${userId}`
                  : `/mainPage/donee/${userId}`
              )
            }
          >
            <BiUserCircle style={{ width: 100, height: 80 }} />
          </div>

          <div className="user_information">
            <h2>{user?.name}</h2>
            <p>{user?.contact}</p>
          </div>
        </div>
      </section>

      <main>
        <h2>Doações</h2>

        <StyledCardListMain>
          {donations.map((donation, index) => {
            return (
              <MainPageCard
                donation={donation}
                key={index}
                modalType={modalType}
                setModalType={setModalType}
              />
            );
          })}
        </StyledCardListMain>
      </main>
    </StyledContainerMobile>
  );
};
