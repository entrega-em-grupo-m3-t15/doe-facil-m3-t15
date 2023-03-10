import { useContext } from "react";
import { ModalsContext } from "../../../../contexts/ModalsContext/ModalsContext";
import { UserRequestsContext } from "../../../../contexts/user/UserRequestsContext.tsx/LoginRegisterContext";

export const ModalUpdateUser = () => {
  const { setEspecialModalIsOpen } = useContext(ModalsContext);
  const { user } = useContext(UserRequestsContext);

  return (
    <dialog>
      <div>
        <header>
          <button onClick={() => setEspecialModalIsOpen("")}>X</button>
          <h2>Editar Perfil</h2>
        </header>

        <main>
          <form></form>
          <button type="submit">Salvar</button>
        </main>
      </div>
    </dialog>
  );
};
