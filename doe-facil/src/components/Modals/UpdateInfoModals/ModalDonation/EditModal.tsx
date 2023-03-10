import { ChangeEvent, useContext, useState } from "react";
import { ModalsContext } from "../../../../contexts/ModalsContext/ModalsContext";

export const EditModal = () => {
  const { setEspecialModalIsOpen } = useContext(ModalsContext);
  const [cardDescription, setCardDescription] = useState("");

  const handleCardDescriptionChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCardDescription(event.target.value);
  };

  return (
    <dialog>
      <div>
        <header>
          <button onClick={() => setEspecialModalIsOpen("")}>X</button>
          <h2>Editar Doação</h2>
        </header>

        <main>
          <div className="container_card">
            <div className="left">
              <img src="" alt="imagem da doação" />
            </div>
            <div className="right">
              <h4>Nome do card</h4>

              <div>
                <h3>aqui deve ficar se ele é roupa ou alimento</h3>
              </div>
              <textarea
                cols={30}
                rows={10}
                value={cardDescription}
                onChange={handleCardDescriptionChange}
              ></textarea>
            </div>
            <button>Salvar</button>
          </div>
        </main>
      </div>
    </dialog>
  );
};
