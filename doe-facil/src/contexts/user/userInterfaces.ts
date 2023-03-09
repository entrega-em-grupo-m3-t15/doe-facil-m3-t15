export interface iAxiosError {
  status: string;
  message: string;
}

export interface iUserRegister {
  id: string;
  name: string;
  email: string;
  contact: string;
  password: string;
  error?: string | undefined;
  axiosError: iAxiosError;
}

export interface iUserData {
  id: string;
  name: string;
  email: string;
  contact: string;
  adress: string;
  userInCome: string;
  isDonor: boolean;
  password: string;
}

export interface iUserLoginResponse {
  accessToken: string;
  user: iUserData;
}

export interface iUserLogin {
  email: string;
  password: string;
  axiosErrors?: iAxiosError;
  error?: string | undefined;
}

export interface iDoneeRegister {
  name: string;
  email: string;
  contact: string;
  adress: string;
  userInCome?: string;
  password: string;
  confirm_password: string;
}

export interface iDonorRegister {
  name: string;
  email: string;
  contact: string;
  adress: string;
  password: string;
  confirm_password: string;
}
