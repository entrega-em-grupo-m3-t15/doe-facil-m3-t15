import { ReactNode } from "react";

export interface iAxiosError {
  status: string;
  message: string;
}

export interface IFormRegisterDonation {
  name: string;
  description: string;
  isClothes: boolean;
}

export interface IRegisterDonation {
  name: string;
  description: string;
  amount: number;
  id: number;
  userId: number;
  image: string;
  isAvailable: boolean;
  isClothes: boolean;
}

export interface IUpdateDonation {
  name: string;
  description: string;
  amount: number;
}

export interface IGetDonations {
  isClothes: boolean;
  name: string;
  description: string;
  amount: number;
  id: number;
  userId: number;
  image: string;
  isAvailable: boolean;
}

export interface IAddProductToUser {
  cardId: number | string;
}

export interface ICardDonation {
  donation: IGetDonations;
  modalType?: string;
  setModalType?: Function;
}

export interface IDashboardContext {
  donations: IGetDonations[];
  setDonations: React.Dispatch<React.SetStateAction<IGetDonations[]>>;
  isClothes: boolean;
  setIsClothes: React.Dispatch<React.SetStateAction<boolean>>;
  donationsUser: IGetDonations[];
  setDonationsUser: React.Dispatch<React.SetStateAction<IGetDonations[]>>;
  registerDonation: (data: IFormRegisterDonation) => void;
  addDonationToUser: (cardId: number | string) => void;
  removeDonationFromUser: (cardId: number, userId: number) => Promise<void>;
  updateDonation: (data: IUpdateDonation) => void;
  deleteDonation: () => Promise<void>;
}

export interface IChildrenProps {
  children: ReactNode;
}
