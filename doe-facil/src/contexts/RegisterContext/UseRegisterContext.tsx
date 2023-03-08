import { useContext } from "react";
import { RegisterContext } from "./RegisterContext";

export const useRegisterContext = () => {
  const registerContext = useContext(RegisterContext)

  if(!registerContext){
    throw 'Contexto não encontrado!';
  }

  return registerContext
}