import { createContext, useEffect, useState } from "react";
import { API } from "../../Services/API";
import { iAxiosError } from "../user/userInterfaces";
import { IChildrenProps, IDashboardContext, IGetDonations, IRegisterDonation, IUpdateDonation } from "./interface";
import axios from "axios";
import { toast } from "react-toastify";

export const DashboardContext = createContext({} as IDashboardContext)

export const DashboardProvider = ({children}: IChildrenProps) => {

  const [donations, setDonations] = useState<IGetDonations[]>([])

  useEffect(() => {
    const getDonations = async () => {
      try {
        const response = await API.get("/donations/")

        // setDonations(response.data)
        
      } catch (error) {
        if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }
        
        console.error(error)
      }
    }
    getDonations()
  },[])

  const registerDonation = async (data: IRegisterDonation) => {
    try {
      const response = API.post<IRegisterDonation>("/donations", data)

      
    } catch (error) {
       if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }

      console.error(error)
    }
  }

  const updateDonation = async (data: IUpdateDonation) => {
    try {
      const response = API.patch<IUpdateDonation>("/donations/3", data)
      
    } catch (error) {
       if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }

      console.error(error)
    }
  }

  const deleteDonation = async () => {
    try {
      const response = API.delete("/donations/6")
      
    } catch (error) {
       if (axios.isAxiosError<iAxiosError>(error)) {
        const errorMessage = error.response?.data?.message;
        toast.error(errorMessage);
      }

      console.error(error)
    }
  }

  return(
    <DashboardContext.Provider value={{donations, setDonations, registerDonation, updateDonation, deleteDonation }}>
      {children}
    </DashboardContext.Provider>
  )
}