import { IGetDonations, iAxiosError } from "../DashboardContext/interface";

export interface IUserRegister {
  id: string;
  name: string;
  email: string;
  contact: string;
  password: string;
  error?: string | undefined;
}

export interface IUserData
  extends Pick<
    IUserRegister,
    "id" | "name" | "email" | "contact" | "password"
  > {
  adress: string;
  userInCome: string;
  isDonor: boolean;
  donations?: IGetDonations[];
}

export interface IUserDataExample
  extends Pick<
    IUserData,
    "id" | "name" | "email" | "adress" | "contact" | "password" | "donations"
  > {
  isDonor: any;
  acessToken?: string;
  user?: IUserData;
}

export interface IUserLogin {
  email: string;
  password: string;
  axiosErrors?: iAxiosError;
  error?: string | undefined;
}

export interface IDoneeRegister
  extends Pick<
    IUserData,
    "name" | "email" | "contact" | "adress" | "password"
  > {
  confirm_password: string;
}

export interface IDonorRegister
  extends Pick<
    IUserData,
    "name" | "email" | "contact" | "adress" | "password"
  > {
  confirm_password: string;
}
