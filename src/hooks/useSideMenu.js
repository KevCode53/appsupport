import { useState, useEeffect, useContext } from "react";
import { SideMenuContext } from "../context/SideMenuContext";

export const useSideMenu = () => {
  const {open, setOpen} = useContext(SideMenuContext)

  const openSide = () => {
    setOpen(true)
  }

  const closeSide = () => {
    setOpen(false)
  }

  const isOpen = open

  return {isOpen, openSide, closeSide}
}