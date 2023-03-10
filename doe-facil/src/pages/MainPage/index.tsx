import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserRequestsContext } from "../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";
import { BiUserCircle } from "react-icons/bi";
import { DashboardContext } from "../../contexts/DashboardContext/DashboardContext";

export const MainPage = () => {
  const { user } = useContext(UserRequestsContext);
  const { donations } = useContext(DashboardContext);

  const navigate = useNavigate();

  return (
    <>
      <header>
        <Link to={"/"}>Sair</Link>

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
            return (
              <li key={index}>
                <p>{donation.name}</p>
                <p>{donation.amount}</p>
                <button>Detalhes</button>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};
