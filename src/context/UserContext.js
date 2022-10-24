import React, {useState} from "react";

export const UserContext = React.createContext({})

export const UserContextProvider = ({children}) => {
  const [token, setToken] = useState(
    () => window.localStorage.getItem('token')
  )
  const [user, setUser] = useState(
    () => JSON.parse(window.localStorage.getItem('user'))
  )
  const [compromise, setCompromise] = useState(
    () => JSON.parse(window.localStorage.getItem('compromise'))
  )

  return <UserContext.Provider value={{token, setToken, user, setUser, compromise, setCompromise}}>
    {children}
  </UserContext.Provider>
}