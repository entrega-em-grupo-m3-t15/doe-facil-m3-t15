import { SetStateAction } from "react";
import { iDoneeRegister } from "../../../components/Form/RegistersForm/RegisterDoneeForm/RegisterDoneeForm";
import { iAxiosError } from "../../DashboardContext/interface";
import { IUserDataExample, IUserLogin } from "../userInterfaces";

export interface iUserRequestsContext {
  user: IUserDataExample | null;
  setUser: React.Dispatch<SetStateAction<IUserDataExample | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  createUserRequest: (
    data: iDoneeRegister,
    isDonor: boolean
  ) => Promise<iAxiosError | void>;
  loginUserRequest: (data: IUserLogin) => Promise<iAxiosError | void>;
  autoLogin: (userId: string | null) => Promise<void>;
}
