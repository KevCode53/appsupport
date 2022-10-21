import React, {useState} from "react";

export const MessagesContext = React.createContext({})

export const MessagesContextProvider = ({children}) => {
  const [message, setMessage] = useState({
    show: false,
    type: 'error',
    icon: '',
    title: 'Login Error!',
    content: 'Verifique el usuario y la contraseña!'
  })

  return <MessagesContext.Provider value={{message, setMessage}}>
    {children}
  </MessagesContext.Provider>
}