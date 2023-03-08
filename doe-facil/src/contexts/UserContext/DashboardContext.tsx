import { createContext, useEffect, useState } from "react";
import { IChildrenProps, IDashboardContext, IGetDonations, IRegisterDonation, IUpdateDonation } from "./interface";

export const DashboardContext = createContext<IDashboardContext | null>(null)

export const DashboardProvider = ({children}: IChildrenProps) => {

  const [donations, setDonations] = useState<IGetDonations[]>([])

  useEffect(() => {
    const getDonations = async () => {
      try {
        const response = await api.get("/donations/")

        // setDonations(response.data)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    getDonations()
  },[])

  const registerDonation = async (data: IRegisterDonation) => {
    try {
      const response = api.post("/donations", data)

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const updateDonation = async (data: IUpdateDonation) => {
    try {
      const response = api.patch("/donations/3", data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteDonation = async () => {
    try {
      const response = api.delete("donations/6")
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <DashboardContext.Provider value={{donations, setDonations, registerDonation, updateDonation, deleteDonation }}>
      {children}
    </DashboardContext.Provider>
  )
}