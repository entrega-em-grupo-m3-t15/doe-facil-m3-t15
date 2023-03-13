import { ReactNode } from "react";

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
  name: string;
  description: string;
  amount: number;
  id: number;
  userId: number;
  image: string;
}

export interface IAddProductToUser {
  cardId: number;
}

export interface ICardDonation {
  donation: IGetDonations;
}

export interface IDashboardContext {
  donations: IGetDonations[];
  setDonations: React.Dispatch<React.SetStateAction<IGetDonations[]>>;
  isClothes: boolean;
  setIsClothes: React.Dispatch<React.SetStateAction<boolean>>;
  registerDonation: (data: IRegisterDonation) => void;
  addDonationToUser: (productId: IAddProductToUser) => void;
  updateDonation: (data: IUpdateDonation) => void;
  setDonationsUser: React.Dispatch<React.SetStateAction<IGetDonations[]>>;
  donationsUser: IGetDonations[];
}

export interface IChildrenProps {
  children: ReactNode;
}
