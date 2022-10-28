import { siremApi } from "api/siremApi";
import TokenServices from "./tokenServices";

// Service for create a fetch to login url
export const loginService = async({username, password}) => {
    // AXIOS
    try {
      const resp = await siremApi.post(`/login`, {username, password})
      const {data} = resp
      return data
    } catch (error) {
      if (error.response) {
        // console.log(error.response.data)
        // console.log(error.response.status)
        // console.log(error.response.headers)
        return error.response.data
      } else if (error.request) {
        // console.log({'error': 'No fue posible enviar la petición!'})
        return {'error': 'No fue posible enviar la petición!'}
      } else {
        throw new Error('Error', error.message)
      }
    }
}

// Service for create a fetch to logout
export const logoutService = async({username}) => {
  try {
    const resp = await siremApi.post(`/logout`, {username})
    const {data} = resp
    return data
  } catch (error) {
    if (error.response) {
      return error.response.data
    } else if (error.request) {
      return {'error': 'No fue posible enviar la petición!'}
    } else {
      throw new Error('Error', error.message)
    }
  }
}
