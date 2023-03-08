import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export interface IDoneeRegister{
  email: string,
	password: number,
	name: string,
	userIncome: string,
}

export interface IRegisterContext{
  registerDonee: (data: IDoneeRegister)=> Promise<void>,
  registerDonor: (data: IDonorRegister)=> Promise<void>,
  setUsers: React.Dispatch<React.SetStateAction<IGetUsers[]>>;
  users: IGetUsers[]
}

export interface IDonorRegister{
  email: string,
	password: string,
	name: string,
}

export interface IChildrenProp{
  children: ReactNode
}

interface IGetUsers{
  name: string;
  email: string;
  password: string;

}

export const RegisterContext = createContext<IRegisterContext | null>(null)

export const RegisterProvider = ({children }: IChildrenProp) => {
  
  

  const registerDonee = async (data: IDoneeRegister) => {
  try {
    const response = await api.post("/register", data)
    console.log(response)
    console.log("foi")
  } catch (error) {
    console.log(error)
  }
  }

  const registerDonor = async (data: IDonorRegister) => {
  try {
    const response = await api.post("/register", data)
    console.log(response)
    console.log("foi")
  } catch (error) {
    console.log(error)
  }
  }

  const [users, setUsers] = useState<IGetUsers[]>([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await api.get("/users/2")
        console.log(response)
       
      } catch (error) {
        console.log(error)
      } finally{
        console.log("foi")
        console.log(users)
      }
      
    }
    getUsers()
  }, [])

  return(
    <RegisterContext.Provider value={{registerDonee, registerDonor, setUsers, users}}>
      {children}
    </RegisterContext.Provider>
  )
}