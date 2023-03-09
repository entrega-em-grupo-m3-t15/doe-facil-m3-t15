import { useContext } from "react";
import { UserRequestsContext } from "../../../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";

export const DoneeInfo = () => {
  const { user } = useContext(UserRequestsContext);

  return (
    <>
      <div>
        <header>
          <h2>Perfil</h2>
          <button>Editar perfil</button>
        </header>

        <img src="" alt="Imagem de perfil" />
        <h2>nome do usuário</h2>
      </div>

      <div>
        <h2>Informações</h2>
        <ul>
          <li>Contato: </li>
          <li>Endereço:</li>
          <li>E-mail: </li>
        </ul>
      </div>
    </>
  );
};
