import { createContext } from "react";
import { IUserContextProps, IChildrenProps  } from "./inteface";

export const IUserContext = createContext<IUserContextProps | null>(null)

export const UserProvider = ({children}: IChildrenProps) => {

  const deleteUser = async () => {
    const token = localStorage.getItem("@userToken")

    try {
      const response = await api.delete("/users/4", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const updateUser = async () => {
    const token = localStorage.getItem("@userToken")

    try {
      const response = await api.patch("/users/4", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

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

  return(
    <IUserContext.Provider value={{deleteUser, updateUser}}>
      {children}
    </IUserContext.Provider>
  )
}