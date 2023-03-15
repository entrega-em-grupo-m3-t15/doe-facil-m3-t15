import { iAxiosError, IGetDonations } from "../DashboardContext/interface";

export interface IUserRegister {
  id: string;
  name: string;
  email: string;
  contact: string;
  password: string;
  error?: string | undefined;
}

export interface IUserData {
  id: string;
  name: string;
  email: string;
  contact: string;
  adress: string;
  userInCome: string;
  isDonor: boolean;
  password: string;
  donations?: IGetDonations[];
}

export interface IUserLoginResponse {
  accessToken: string;
  user: IUserData;
}

export interface IUserDataExample {
  id?: string;
  name?: string;
  email?: string;
  contact?: string;
  adress?: string;
  userInCome?: string;
  isDonor?: boolean;
  password?: string;
  donations?: IGetDonations[];
  acessToken?: string;
  user?: IUserData;
}

export interface IUserLogin {
  email: string;
  password: string;
  axiosErrors?: iAxiosError;
  error?: string | undefined;
}

export interface IDoneeRegister {
  name: string;
  email: string;
  contact: string;
  adress: string;
  userInCome?: string;
  password: string;
  confirm_password: string;
}

export interface IDonorRegister {
  name: string;
  email: string;
  contact: string;
  adress: string;
  password: string;
  confirm_password: string;
}
