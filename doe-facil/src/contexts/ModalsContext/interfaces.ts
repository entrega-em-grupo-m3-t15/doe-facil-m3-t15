export interface iModalsContext {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  especialModalIsOpen: string | null;
  setEspecialModalIsOpen: React.Dispatch<React.SetStateAction<string>>;
}
