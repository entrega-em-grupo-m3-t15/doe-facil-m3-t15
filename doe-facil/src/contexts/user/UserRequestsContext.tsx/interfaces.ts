import { SetStateAction } from "react";
import {
  iAxiosError,
  iDoneeRegister,
  iDonorRegister,
  iUserLogin,
  iUserLoginResponse,
} from "../userInterfaces";

export interface iUserRequestsContext {
  user: iUserLoginResponse | null;
  setUser: React.Dispatch<SetStateAction<iUserLoginResponse | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  createDoneeRequest: (
    data: iDoneeRegister,
    isDonor: boolean
  ) => Promise<iAxiosError | void>;
  loginUserRequest: (data: iUserLogin) => Promise<iAxiosError | void>;
}
