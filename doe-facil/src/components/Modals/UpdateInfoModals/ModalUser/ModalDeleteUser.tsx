import { useContext } from "react";
import { ModalsContext } from "../../../../contexts/ModalsContext/ModalsContext";
import { UserContext } from "../../../../contexts/UserInfoContext/UserInfoContext";

export const ModalDeleteUser = () => {
  const { setEspecialModalIsOpen } = useContext(ModalsContext);
  const { deleteUser } = useContext(UserContext);
  return (
    <dialog>
      <div>
        <header>
          <button onClick={() => setEspecialModalIsOpen("")}>X</button>
          <h2>Deletar conta</h2>
        </header>

        <main>
          <h3>Deseja realmente deletar sua conta?</h3>

          <button onClick={() => setEspecialModalIsOpen("")}>Não</button>
          <button onClick={() => deleteUser}>Sim</button>
        </main>
      </div>
    </dialog>
  );
};
