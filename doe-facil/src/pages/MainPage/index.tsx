import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserRequestsContext } from "../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";
import { BiUserCircle } from "react-icons/bi";
import { DashboardContext } from "../../contexts/DashboardContext/DashboardContext";
import { MainPageCard } from "../../components/Cards/MainPageCards/DoneeCard";
import logo from "../../img/logo.svg";
import {
  StyledCardListMain,
  StyledContainerMobile,
  StyledHeaderMain,
} from "./style";

export const MainPage = () => {
  const { user } = useContext(UserRequestsContext);
  const { donations } = useContext(DashboardContext);
  const userId = localStorage.getItem("@USERID");

  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("@USERID");
    localStorage.removeItem("@USERTOKEN");
    navigate("/");
  };

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
              user?.user.isDonor
                ? `/userPage/donor/${user?.user.id}`
                : `/userPage/donee/${user?.user.id}`
            }
          >
            Perfil
          </Link>
        </div>
      </StyledHeaderMain>

      <section>
        <div className="box_profile">
          <div className="box_icon"
            onClick={() =>
              navigate(
                user?.user.isDonor
                  ? `/userPage/donor/${user?.user.id}`
                  : `/userPage/donee/${user?.user.id}`
              )
            }
          >
            <BiUserCircle style={{ width: 100, height: 80 }} />
          </div>

          <div className="user_information">
            <h2>{user?.user.name}</h2>
          </div>
        </div>
      </section>

      <main>
        <h2>Doações</h2>

        <StyledCardListMain>
          {donations.map((donation, index) => {
            return <MainPageCard donation={donation} key={index} />;
          })}
        </StyledCardListMain>
      </main>
    </StyledContainerMobile>
  );
};
