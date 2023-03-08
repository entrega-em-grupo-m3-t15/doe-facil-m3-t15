import { ReactNode } from "react"

export interface IUserProps {
  name: string;
  email: string;
  password: string;
  userIncome?: string;
}

export interface IUserContextProps{
  deleteUser: () => void;
  updateUser: () => void;
}

export interface IChildrenProps {
  children: ReactNode;
}