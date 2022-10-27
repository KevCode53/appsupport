import jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'
import { refreshToken } from "services/ahuthServices";



export const customFetcher = async () => {
  let authTokens = window.localStorage.getItem('token') ? JSON.parse() : null

  const user = jwt_decode(authTokens)
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1

  if (isExpired) {
    authTokens = await refreshToken(authTokens)
  }

  // Proceed whit request
}