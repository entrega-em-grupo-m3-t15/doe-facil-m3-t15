import { ReactNode } from "react";
import { iAxiosError } from "../userInterfaces";

export interface IUserProps {
  name: string;
  email: string;
  password: string;
  userIncome?: string;
}

export interface iUpdateUser {
  name: string;
  adress: string;
  contact: string;
  userInCome: string;
}

export interface IUserContextProps {
  deleteUser: () => Promise<iAxiosError | void>;
  updateUser: (data: iUpdateUser) => Promise<iAxiosError | void>;
}

export interface IChildrenProps {
  children: ReactNode;
}
