import { ReactNode } from "react";

export interface IRegisterDonation {
  name: string;
	description: string;
	amount: number;
	userId: number;
	image: string;
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
	userId: number;
	image: string;
}

export interface IDashboardContext {
  donations: IGetDonations[];
  setDonations: React.Dispatch<React.SetStateAction<IGetDonations[]>>;
  registerDonation: (data: IRegisterDonation) => void;
  updateDonation: (data: IUpdateDonation) => void;
  deleteDonation: () => void
}

export interface IChildrenProps {
  children: ReactNode;
}