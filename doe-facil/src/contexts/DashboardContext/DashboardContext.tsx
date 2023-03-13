import { createContext, useContext, useEffect, useState } from "react";
import { iAxiosError } from "../user/userInterfaces";
import {
  IAddProductToUser,
  IChildrenProps,
  IDashboardContext,
  IFormRegisterDonation,
  IGetDonations,
  IRegisterDonation,
  IUpdateDonation,
} from "./interface";
import axios from "axios";
import { toast } from "react-toastify";
import { API } from "../../Services/api";
import { UserRequestsContext } from "../user/UserRequestsContext.tsx/LoginRegisterContext";

export const DashboardContext = createContext({} as IDashboardContext);

export const DashboardProvider = ({ children }: IChildrenProps) => {
  const [donations, setDonations] = useState<IGetDonations[]>([]);
  const [donationsUser, setDonationsUser] = useState<IGetDonations[]>([]);
  const [isClothes, setIsClothes] = useState(false);

  const donationId = localStorage.getItem("@DONATIONID");

  const { user } = useContext(UserRequestsContext);

  useEffect(() => {
    const userToken = localStorage.getItem("@USERTOKEN");
    const userId = localStorage.getItem("USERID");

    console.log(userToken, userId);

    if (userId || userToken) {
      const getDonations = async () => {
        try {
          console.log("entrou no getDonations");
          const response = await API.get("/donations", {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          });

          setDonations(response.data);
        } catch (error) {
          if (axios.isAxiosError<iAxiosError>(error)) {
            const errorMessage = error.response?.data?.message;
            toast.error(errorMessage);
          }

          console.error(error);
        }
      };
      getDonations();
    }
  }, [user]);

  const getDonationsUser = async () => {
    try {
      const userToken = localStorage.getItem("@USERTOKEN");
      const userId = localStorage.getItem("USERID");

      const response = await API.get(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      setDonationsUser(response.data.donations);
    } catch (error) {
      if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }

      console.error(error);
    }
  };

  const registerDonation = async (data: IFormRegisterDonation) => {
    console.log("registerDonation", data);
    const userId = localStorage.getItem("USERID");

    try {
      const donationData = { ...data, isAvailable: true };
      await API.post<IRegisterDonation>(`/donations/${userId}}`, donationData);

      toast.success("Doação cadastrada com sucesso!");
    } catch (error) {
      if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }

      console.error(error);
    }
  };

  const addDonationToUser = async (cardId: IAddProductToUser) => {
    const userId = localStorage.getItem("USERID");

    try {
      const response = await API.get(`/donations/${cardId}`);

      await API.put(`/users/${userId}`, {
        ...user,
        donations: user?.user.donations
          ? [...user.user.donations, response.data]
          : [response.data],
      });

      toast.success("Produto adicionado ao seu perfil com sucesso!");
    } catch (error) {
      if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }

      console.error(error);
    }
  };

  const removeDonationFromUser = async (cardId: number, userId: number) => {
    try {
      const user = await API.get(`/users/${userId}`);

      const donations = user?.data?.user?.donations;

      const updatedDonations = donations?.filter(
        (donation: { _id: number }) => donation._id !== cardId
      );

      await API.put(`/users/${userId}`, {
        ...user?.data?.user,
        donations: updatedDonations,
      });

      toast.success("Doação removida do seu perfil com sucesso!");
    } catch (error) {
      if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }

      console.error(error);
    }
  };

  const updateDonation = async (data: IUpdateDonation) => {
    try {
      await API.patch<IUpdateDonation>(`/donations/${donationId}`, data);

      toast.success("Doação atualizada com sucesso!");
    } catch (error) {
      if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }

      console.error(error);
    }
  };

  const deleteDonation = async () => {
    try {
      await API.delete(`/donations/${donationId}`);
      toast.success("Doação deletada com sucesso!");
    } catch (error) {
      if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }

      console.error(error);
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        donations,
        setDonations,
        isClothes,
        setIsClothes,
        registerDonation,
        addDonationToUser,
        updateDonation,
        deleteDonation,
        getDonationsUser,
        donationsUser,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
