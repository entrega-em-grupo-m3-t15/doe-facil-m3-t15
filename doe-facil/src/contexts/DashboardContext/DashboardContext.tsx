import { createContext, useContext, useEffect, useState } from "react";

import {
  IAddProductToUser,
  iAxiosError,
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

  const { user, setLoading } = useContext(UserRequestsContext);

  useEffect(() => {
    const userToken = localStorage.getItem("@USERTOKEN");
    const userId = localStorage.getItem("USERID");

    if (userId || userToken) {
      setLoading(true);
      const getDonations = async () => {
        try {
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
        } finally {
          setLoading(false);
        }
      };
      getDonations();
    }
  }, [user]);

  useEffect(() => {
    const getDonationsUser = async () => {
      const userToken = localStorage.getItem("@USERTOKEN");
      const userId = localStorage.getItem("@USERID");

      try {
        setLoading(true);
        const response = await API.get(`/users/${userId}?_embed=donations`, {
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
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      getDonationsUser();
    }
  }, [user]);

  const registerDonation = async (data: IFormRegisterDonation) => {
    const userId = localStorage.getItem("USERID");

    try {
      setLoading(true);
      const donationData = { ...data, isAvailable: true };
      await API.post<IRegisterDonation>(`/donations/${userId}}`, donationData);

      toast.success("Doação cadastrada com sucesso!");
    } catch (error) {
      if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }

      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addDonationToUser = async (cardId: number | string) => {
    const userId = localStorage.getItem("@USERID");

    console.log(cardId);

    try {
      setLoading(true);

      const { data: response } = await API.get(`/donations/${cardId}`);

      const { data: user } = await API.get(`/users/${userId}`);

      const updatedDonations = user.donations
        ? [...user.donations, response]
        : [response];

      await API.put(`/users/${userId}`, {
        ...user,
        donations: updatedDonations,
      });

      toast.success("Produto adicionado ao seu perfil com sucesso!");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }

      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const removeDonationFromUser = async (cardId: number, userId: number) => {
    try {
      setLoading(true);

      const { data } = await API.get(`/users/${userId}`);
      const { user } = data;

      const updatedDonations = user.donations.filter(
        (donation: { _id: number }) => donation._id !== cardId
      );

      await API.put(`/users/${userId}`, {
        ...user,
        donations: updatedDonations,
      });

      toast.success("Doação removida do seu perfil com sucesso!");
    } catch (error) {
      if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }

      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const updateDonation = async (data: IUpdateDonation) => {
    try {
      setLoading(true);
      await API.patch<IUpdateDonation>(`/donations/${donationId}`, data);

      toast.success("Doação atualizada com sucesso!");
    } catch (error) {
      if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }

      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteDonation = async () => {
    try {
      setLoading(true);
      await API.delete(`/donations/${donationId}`);
      toast.success("Doação deletada com sucesso!");
    } catch (error) {
      if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }

      console.error(error);
    } finally {
      setLoading(false);
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
        removeDonationFromUser,
        updateDonation,
        deleteDonation,
        setDonationsUser,
        donationsUser,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
