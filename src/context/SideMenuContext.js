import React, {useState} from "react";

export const SideMenuContext = React.createContext({})

export const SideMenuContextProvider = ({children}) => {
  const [open, setOpen] = useState(false)

  return <SideMenuContext.Provider value={{open, setOpen}}>
    {children}
  </SideMenuContext.Provider>
}