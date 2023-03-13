import { useContext } from "react";
import { BiUserCircle } from "react-icons/bi";
import { ModalsContext } from "../../../contexts/ModalsContext/ModalsContext";
import { UserRequestsContext } from "../../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";
import { ModalUpdateUser } from "../../Modals/UpdateInfoModals/ModalUser/ModalUpdateUser/ModalUpdateUser";
import { StyleProfileUser } from "./style";

export const UserInfo = () => {
  const { user } = useContext(UserRequestsContext);
  const { setEspecialModalIsOpen } = useContext(ModalsContext);

  return (
    <StyleProfileUser>
      <div className="box_profile">
        <header>
          <h2>Perfil</h2>
          <button onClick={() => setEspecialModalIsOpen("editUser")}>
            Editar perfil
          </button>
        </header>

        <span className="icon">
          <div className="box_icon">
            <BiUserCircle />
          </div>

          <h2>{user?.user.name}</h2>
        </span>
      </div>

      <div className="box_info">
        <h2>Informações</h2>
        <ul>
          <li>
            <span>Contato:</span> {user?.user.contact}
          </li>
          <li>
            <span>Endereço:</span> {user?.user.adress}
          </li>
          <li>
            <span> E-mail:</span> {user?.user.email}
          </li>
        </ul>
      </div>

    </StyleProfileUser>
  );
};
