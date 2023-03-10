import { Link } from "react-router-dom";
import { UserInfo } from "../UserDoneePage/DoneeInfo/DoneeInfo";
import logo from "../../../img/logo.svg";

export const UserDonorPage = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div>
            <nav>
              <Link to="/userPage">Voltar</Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="container">
        <main>
          <div className="box_profile">
            <UserInfo />
          </div>
          <div className="box_cards">
            
              <ul>
                <li>Aqui devem ficar os cards</li>
              </ul>
            
          </div>
        </main>
      </div>
    </>
  );
};
