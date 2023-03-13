import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { API } from "../../../Services/api";

import {
  iAxiosError,
  iDoneeRegister,
  iDonorRegister,
  iUserData,
  iUserDataExample,
  iUserLogin,
  iUserLoginResponse,
} from "../userInterfaces";
import { iUserRequestsContext } from "./interfaces";

export interface iUserRequestsrProps {
  children: React.ReactNode;
}

export const UserRequestsContext = createContext({} as iUserRequestsContext);

export const UserRequestsProvider = ({ children }: iUserRequestsrProps) => {
  const [user, setUser] = useState<iUserDataExample | null>(null);
  const [loading, setLoading] = useState(false);

  const [userID, setUserID] = useState<string | null>(
    localStorage.getItem("@USERID")
  );
  const [userToken, setUserToken] = useState<string | null>(
    localStorage.getItem("@USERTOKEN")
  );

  const navigate = useNavigate();

  const createUserRequest = async (
    data: iDoneeRegister | iDonorRegister,
    isDonor: boolean
  ) => {
    const { confirm_password, ...dataRegister } = data;
    const baseURL = isDonor ? "/register" : "/users";
    try {
      setLoading(true);
      await API.post(baseURL, {
        ...dataRegister,
        isDonor: isDonor,
      });

      toast.success("Cadastro realizado com sucesso!");

      navigate("/");
    } catch (error) {
      if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }
      console.error(error);
      toast.error("Não foi possível realizar o cadastro");
    } finally {
      setLoading(false);
    }
  };

  const loginUserRequest = async (data: iUserLogin) => {
    try {
      setLoading(true);
      const response = await API.post("/login", data);

      setUserID(response.data.user.id);
      setUserToken(response.data.accessToken);
      localStorage.setItem("@USERTOKEN", response.data.accessToken);
      localStorage.setItem("@USERID", response.data.user.id);

      API.defaults.headers.common.Authorization = `Bearer ${response.data.acessToken}`;

      toast.success("Login realizado com sucesso!");

      setUser(response.data);

      navigate(`/mainPage`);
    } catch (error) {
      if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }
      console.error(error);
      toast.error("Não foi possivel realizar o login");
    } finally {
      setLoading(false);
    }
  };

  const autoLogin = async (userId: string | null) => {
    const token = localStorage.getItem("@USERTOKEN");

    if (token) {
      try {
        setLoading(true);
        API.defaults.headers.common.Authorization = `Bearer ${token}`;

        const response = await API.get(`/users/${userId}`);

        setUser(response.data);

        navigate("/mainPage");
      } catch (error) {
        if (axios.isAxiosError<iAxiosError>(error)) {
          const errorMessage = error.response?.data?.message;
          toast.error(errorMessage);
        }
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    autoLogin(userID);
  }, [userID]);

  return (
    <UserRequestsContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        createUserRequest,
        loginUserRequest,
        autoLogin,
      }}
    >
      {children}
    </UserRequestsContext.Provider>
  );
};
