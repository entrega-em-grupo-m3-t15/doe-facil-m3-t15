import { Link } from "react-router-dom";
import { DonneInfo } from "../UserDoneePage/DoneeInfo/DoneeInfo";
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
            <DonneInfo />
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
