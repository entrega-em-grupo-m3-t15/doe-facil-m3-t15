import { ReactNode } from "react";
import { iAxiosError } from "../../DashboardContext/interface";
import { IUserData } from "../userInterfaces";

export interface iUpdateUser
  extends Pick<IUserData, "name" | "adress" | "contact" | "userInCome"> {}

export interface IUserContextProps {
  deleteUser: () => Promise<iAxiosError | void>;
  updateUser: (data: iUpdateUser) => Promise<iAxiosError | void>;
}

export interface IChildrenProps {
  children: ReactNode;
}
