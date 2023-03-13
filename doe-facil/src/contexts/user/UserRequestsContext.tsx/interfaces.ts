import { SetStateAction } from "react";
import {
  iAxiosError,
  iDoneeRegister,
  iUserData,
  iUserDataExample,
  iUserLogin,
  iUserLoginResponse,
} from "../userInterfaces";

export interface iUserRequestsContext {
  user: iUserDataExample | null;
  setUser: React.Dispatch<SetStateAction<iUserDataExample | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  createUserRequest: (
    data: iDoneeRegister,
    isDonor: boolean
  ) => Promise<iAxiosError | void>;
  loginUserRequest: (data: iUserLogin) => Promise<iAxiosError | void>;
  autoLogin: (userId: string | null) => Promise<void>;
}
