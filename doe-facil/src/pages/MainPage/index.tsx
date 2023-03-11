import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserRequestsContext } from "../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";
import { BiUserCircle } from "react-icons/bi";
import { DashboardContext } from "../../contexts/DashboardContext/DashboardContext";
import { MainPageCard } from "../../components/Cards/MainPageCards/DoneeCard";

export const MainPage = () => {
  const { user } = useContext(UserRequestsContext);
  const { donations } = useContext(DashboardContext);

  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("@USERID");
    localStorage.removeItem("@USERTOKEN");
    navigate("/");
  };

  return (
    <>
      <header>
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
      </header>

      <section>
        <div>
          <div onClick={() => navigate("userPage/:id")}>
            <BiUserCircle />
          </div>

          <div>
            <h2>{user?.user.email}</h2>
            <p>{user?.user.contact}</p>
          </div>
        </div>
      </section>

      <main>
        <h2>Doações</h2>

        <ul>
          {donations.map((donation, index) => {
            return <MainPageCard donation={donation} key={index} />;
          })}
        </ul>
      </main>
    </>
  );
};
