import { createContext, useState } from "react";
import { iModalsContext } from "./interfaces";

export interface iModalsContextrProps {
  children: React.ReactNode;
}

export const ModalsContext = createContext({} as iModalsContext);

export const ModalsProvider = ({ children }: iModalsContextrProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [especialModalIsOpen, setEspecialModalIsOpen] = useState("");

  return (
    <ModalsContext.Provider
      value={{
        isOpenModal,
        setIsOpenModal,
        especialModalIsOpen,
        setEspecialModalIsOpen,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};
