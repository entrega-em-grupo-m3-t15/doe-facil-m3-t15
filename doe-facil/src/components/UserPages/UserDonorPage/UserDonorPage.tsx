import { Link } from "react-router-dom";
import { UserInfo } from "../UserInfo/UserInfo";
import logo from "../../../img/logo.svg";
import { StyleHeaderUserPage, StyleUserPage } from "./style";
import { DonorCard } from "../../Cards/UserPageCards/DonorCard";
import { useContext } from "react";
import { DashboardContext } from "../../../contexts/DashboardContext/DashboardContext";
import ListDonation from "./ListDonation";
import { CreateDonationModal } from "../../Modals/UpdateInfoModals/ModalDonation/CreateDonationModal/CreateDonationModal";
import { ModalsContext } from "../../../contexts/ModalsContext/ModalsContext";
import { ModalUpdateUser } from "../../Modals/UpdateInfoModals/ModalUser/ModalUpdateUser/ModalUpdateUser";

export const UserDonorPage = () => {

  const { isOpenModal, setIsOpenModal, especialModalIsOpen } = useContext( ModalsContext )
  

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
                <Link to="/userPage">Voltar</Link>
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
              { especialModalIsOpen == "creatDonation" && <CreateDonationModal/> }
            </div>
           <section>
              <span className="button_creat_donation">
                <button onClick={() => setIsOpenModal(true)}>Fazer doação</button>
              </span>
              <div className="box_cards">
                <ListDonation/>
              </div>
           </section>
          </div>
        </main>
      </div>

      {isOpenModal && <CreateDonationModal/>}
      {especialModalIsOpen == "editUser" && <ModalUpdateUser />}
    </StyleUserPage>
  );
};
