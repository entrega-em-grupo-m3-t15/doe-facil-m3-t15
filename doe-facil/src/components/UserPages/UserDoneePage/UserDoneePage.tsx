import { Link } from "react-router-dom";
import { StyleUserPage, StyleHeaderUserPage } from "../UserDonorPage/style";
import { UserInfo } from "../UserInfo/UserInfo";
import logo from "../../../img/logo.svg";
import { ListDonationDonee } from "./ListDonationDonee/ListDonationDonee";
import { useContext } from "react";
import { ModalsContext } from "../../../contexts/ModalsContext/ModalsContext";
import { ModalUpdateUser } from "../../Modals/UpdateInfoModals/ModalUser/ModalUpdateUser/ModalUpdateUser";

export const UserDoneePage = () => {
  const { especialModalIsOpen } = useContext(ModalsContext);

  return (
    <StyleUserPage>
      <StyleHeaderUserPage>
        <div className="container">
          <div className="box_header">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div>
              <nav>
                <Link to="/mainPage">Voltar</Link>
              </nav>
            </div>
          </div>
        </div>
      </StyleHeaderUserPage>

      <div className="container">
        <main>
          <div className="box_profile-main">
            <div className="box_info">
              <UserInfo />
            </div>
            <section>
              <div className="box_cards">
                <ListDonationDonee />
              </div>
            </section>
          </div>
        </main>
      </div>

      {especialModalIsOpen === "editUser" ? <ModalUpdateUser /> : null}
    </StyleUserPage>
  );
};
