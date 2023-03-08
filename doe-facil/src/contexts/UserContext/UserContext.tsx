import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { iAxiosError } from "../user/userInterfaces";
import { IUserContextProps, IChildrenProps, iUpdateUser } from "./inteface";
import { toast } from "react-toastify";
import axios from "axios";
import { API } from "../../Services/Api";

export const UserContext = createContext({} as IUserContextProps);

export const UserProvider = ({ children }: IChildrenProps) => {
  const navigate = useNavigate();

  const deleteUser = async () => {
    const token = localStorage.getItem("@USERTOKEN");

    try {
      const response = await API.delete("/users/4", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate("/");
      console.log(response);
    } catch (error) {
      if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }

      console.log(error);
    }
  };

  const updateUser = async (data: iUpdateUser) => {
    const token = localStorage.getItem("@userToken");

    try {
      const response = await API.patch<iUpdateUser>("/users/4", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
    } catch (error) {
      if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const getUser = () => {
  //     try {
  //       setLoading(true)

  //       const response = await api.get("/users/2/")

  //       //consertar quando testar requisição, ainda não sei onde está a resposta da api
  //       // setUsers(response.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getUser()
  // }, [])

  return (
    <UserContext.Provider value={{ deleteUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
