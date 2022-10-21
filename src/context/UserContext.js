import React, {useState} from "react";

export const UserContext = React.createContext({})

export const UserContextProvider = ({children}) => {
  const [token, setToken] = useState(
    () => window.sessionStorage.getItem('token')
  )
  const [user, setUser] = useState(
    () => window.sessionStorage.getItem('user')
  )

  return <UserContext.Provider value={{token, setToken, user, setUser}}>
    {children}
  </UserContext.Provider>
}