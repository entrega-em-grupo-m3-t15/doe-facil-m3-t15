import { useContext } from "react";
import { ModalsContext } from "../../../../contexts/ModalsContext/ModalsContext";

export const ModalDeleteUser = () => {
  const { setEspecialModalIsOpen } = useContext(ModalsContext);
  return (
    <dialog>
      <div>
        <header>
          <button onClick={() => setEspecialModalIsOpen("")}>X</button>
          <h2>Disponível para resgate</h2>
        </header>

        <main>
          <div className="container_card">
            <div className="left">
              <img src="" alt="imagem da doação" />
            </div>
            <div className="right">
              <h4>Nome do card</h4>

              <div>
                {/* nesses buttons, preciso ver como ediatr somente isso se eu quiser, e ter a opção de alterar tudo também */}
                <button>Roupas</button>
                <button>Alimento</button>
              </div>
            </div>
            <button>Salvar</button>
          </div>
        </main>
      </div>
    </dialog>
  );
};
