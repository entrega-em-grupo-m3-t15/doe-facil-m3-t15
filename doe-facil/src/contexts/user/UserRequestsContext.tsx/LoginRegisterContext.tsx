import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { API } from "../../../Services/API";

import {
  iAxiosError,
  iDoneeRegister,
  iDonorRegister,
  iUserForm,
  iUserLoginResponse,
  iUserRegister,
} from "../userInterfaces";
import { iUserRequestsContext } from "./interfaces";

export interface iUserRequestsrProps {
  children: React.ReactNode;
}

export const UserRequestsContext = createContext({} as iUserRequestsContext);

export const UserRequestsProvider = ({ children }: iUserRequestsrProps) => {
  const [user, setUser] = useState<iUserLoginResponse | null>(null);
  const [loading, setLoading] = useState(false);

  let userID = localStorage.getItem("@USERID");
  let userToken = localStorage.getItem("@USERTOKEN");

  const navigate = useNavigate();

  const createDoneeRequest = async (data: iDoneeRegister) => {
    try {
      await API.post<iUserRegister>("/users", data);

      toast.success("Cadastro realizado com sucesso!");

      navigate("/");
    } catch (error) {
      if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }
      console.error(error);
      toast.error("Não foi possível realizar o cadastro");
    }
  };

  const createDonorRequest = async (data: iDonorRegister) => {
    try {
      await API.post("/register", data);
    } catch (error) {
      if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }
      console.error(error);
      toast.error("Não foi possível realizar o cadastro");
    }
  };

  const loginUserRequest = async (data: iUserForm) => {
    try {
      const response = await API.post("/login", data);

      userID = response.data.user.id;
      userToken = response.data.accessToken;

      localStorage.setItem("@USERTOKEN", userToken!);
      localStorage.setItem("@USERID", userID!);

      toast.success("Login realizado com sucesso!");
      setUser(response.data);

      navigate(`/main-page/${userID}`);
    } catch (error) {
      if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }
      console.error(error);
      toast.error("Não foi possivel realizar o login");
    }
  };

  const autoLogin = async (userId: string | null) => {
    const token = localStorage.getItem("@USERTOKEN");

    if (token) {
      try {
        const response = await API.get(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
      } catch (error) {
        if (axios.isAxiosError<iAxiosError>(error)) {
          const errorMessage = error.response?.data?.message;
          toast.error(errorMessage);
        }
        console.error(error);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    autoLogin(userID);
  }, []);

  return (
    <UserRequestsContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        createDoneeRequest,
        createDonorRequest,
        loginUserRequest,
      }}
    >
      {children}
    </UserRequestsContext.Provider>
  );
};
