import { ReactNode } from "react";

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
}

export interface IAddProductToUser {
  cardId: number | string;
  setModalType?: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export interface ICardDonation {
  donation: IGetDonations;
}

export interface IDashboardContext {
  donations: IGetDonations[];
  setDonations: React.Dispatch<React.SetStateAction<IGetDonations[]>>;
  isClothes: boolean;
  setIsClothes: React.Dispatch<React.SetStateAction<boolean>>;
  donationsUser: IGetDonations[];
  registerDonation: (data: IFormRegisterDonation) => void;
  addDonationToUser: (productId: IAddProductToUser) => void;
  updateDonation: (data: IUpdateDonation) => void;
  setDonationsUser: React.Dispatch<React.SetStateAction<IGetDonations[]>>;
  getDonationsUser: () => Promise<void>;
  deleteDonation: () => Promise<void>;
}

export interface IChildrenProps {
  children: ReactNode;
}
