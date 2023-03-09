import { useContext } from "react";
import { ModalsContext } from "../../../../contexts/ModalsContext/ModalsContext";
import { UserRequestsContext } from "../../../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";
import { EditModal } from "../../../Modals/UpdateInfoModals/ModalDonation/EditModal";

export const DoneeInfo = () => {
  const { user } = useContext(UserRequestsContext);
  const { especialModalIsOpen, setEspecialModalIsOpen } =
    useContext(ModalsContext);

  console.log(user);

  return (
    <>
      <div>
        <header>
          <h2>Perfil</h2>
          <button onClick={() => setEspecialModalIsOpen("editUser")}>
            Editar perfil
          </button>
        </header>

        <img src="" alt="Imagem de perfil" />
        <h2>{user?.user.name}</h2>
      </div>

      <div>
        <h2>Informações</h2>
        <ul>
          <li>Contato: {user?.user.contact}</li>
          <li>Endereço: {user?.user.adress}</li>
          <li>E-mail: {user?.user.email}</li>
        </ul>
      </div>
    </>
  );
};
