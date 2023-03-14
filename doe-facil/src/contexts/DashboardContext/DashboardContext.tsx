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
  const userId = localStorage.getItem("@USERID");

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

  const getDonationsUser = async () => {
    const userToken = localStorage.getItem("@USERTOKEN");
    const userId = localStorage.getItem("USERID");

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

  const addDonationToUser = async (cardId: IAddProductToUser) => {
    const userId = localStorage.getItem("USERID");

    try {
      setLoading(true);
      const response = await API.get(`/donations/${cardId}`);

      await API.put(`/users/${userId}`, {
        ...user,
        donations: user?.user!.donations
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
    } finally {
      setLoading(false);
    }
  };

  const removeDonationFromUser = async (cardId: number, userId: number) => {
    try {
      setLoading(true);
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
        updateDonation,
        deleteDonation,
        setDonationsUser,
        donationsUser,
        getDonationsUser,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
