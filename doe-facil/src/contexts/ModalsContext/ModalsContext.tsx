import { createContext, useState } from "react";
import { iModalsContext } from "./interfaces";

export interface iModalsContextrProps {
  children: React.ReactNode;
}

export const ModalsContext = createContext({} as iModalsContext);

export const ModalsProvider = ({ children }: iModalsContextrProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <ModalsContext.Provider value={{ isOpenModal, setIsOpenModal }}>
      {children}
    </ModalsContext.Provider>
  );
};
