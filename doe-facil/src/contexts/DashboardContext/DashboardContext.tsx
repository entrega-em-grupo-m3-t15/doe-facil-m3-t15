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

  const donationId = localStorage.getItem("@DONATIONID")
  const token = localStorage.getItem("@USERTOKEN")

  useEffect(() => {
    const getDonations = async () => {
      try {
        const response = await API.get("/donations", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

        // setDonations(response.data)
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

  const registerDonation = async (data: IRegisterDonation) => {
    try {
      const response = API.post<IRegisterDonation>("/donations", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Doação cadastrada com sucesso!")
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
      const response = API.patch<IUpdateDonation>(`/donations/${donationId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Doação atualizada com sucesso!")
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
      const response = API.delete(`/donations/${donationId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Doação deletada com sucesso!")
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
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
