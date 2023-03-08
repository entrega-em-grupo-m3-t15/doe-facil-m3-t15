import { SetStateAction } from "react";
import {
  iAxiosError,
  iUserForm,
  iUserLoginResponse,
  iUserRegister,
} from "../userInterfaces";

export interface iUserRequestsContext {
  user: iUserLoginResponse | null;
  setUser: React.Dispatch<SetStateAction<iUserLoginResponse | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  createUserRequest: (data: iUserRegister) => Promise<iAxiosError | void>;
  loginUserRequest: (data: iUserForm) => Promise<iAxiosError | void>;
}
