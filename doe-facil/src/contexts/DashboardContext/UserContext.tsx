import { createContext } from "react";
import { API } from "../../Services/API";
import { IUserContextProps, IChildrenProps } from "./inteface";

export const IUserContext = createContext<IUserContextProps | null>(null);

export const UserProvider = ({ children }: IChildrenProps) => {
  const token = localStorage.getItem("@userToken");
  const deleteUser = async () => {
    try {
      const response = await API.delete("/users/4", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async () => {
    const token = localStorage.getItem("@userToken");

    try {
      const response = await API.patch("/users/4", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <IUserContext.Provider value={{ deleteUser, updateUser }}>
      {children}
    </IUserContext.Provider>
  );
};
