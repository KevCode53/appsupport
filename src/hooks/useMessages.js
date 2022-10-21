import { useContext } from "react";
import { MessagesContext } from "../context/MessagesContext";


export const useMessages = () => {
  const {message, setMessage} = useContext(MessagesContext)

  return {
    message,
    setMessage
  }
}