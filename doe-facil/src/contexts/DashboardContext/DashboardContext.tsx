import { createContext, useEffect, useState } from "react";
import { iAxiosError } from "../user/userInterfaces";
import {
  IChildrenProps,
  IDashboardContext,
  IGetDonations,
  IRegisterDonation,
  IUpdateDonation,
} from "./interface";
import axios from "axios";
import { toast } from "react-toastify";
import { API } from "../../Services/api";

export const DashboardContext = createContext({} as IDashboardContext);

export const DashboardProvider = ({ children }: IChildrenProps) => {
  const [donations, setDonations] = useState<IGetDonations[]>([]);
  const [donationsUser , setDonationsUser] = useState<IGetDonations[]>([])

  const donationId = localStorage.getItem("@DONATIONID");
  const userToken = localStorage.getItem("@USERTOKEN");
  const userId = localStorage.getItem("@USERID");

  useEffect(() => {
    const getDonations = async () => {
      try {
        const response = await API.get("/donations", {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
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
  }, []);

  const getDonationsUser = async () => {
    try {
      const response = await API.get(`/users/${userId}`,{
        headers: {
          Authorization: `Bearer ${userToken}`
        }
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

  const registerDonation = async (data: IRegisterDonation) => {
    try {
      const response = await API.post<IRegisterDonation>("/donations", data);

      toast.success("Doação cadastrada com sucesso!");
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
      const response = await API.patch<IUpdateDonation>(
        `/donations/${donationId}`,
        data
      );

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
        registerDonation,
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
