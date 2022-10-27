import { fetchWithoutToken, fetchWithToken } from 'helpers/fetch'

// Service for create a fetch to login url
export const loginService = async({username, password}) => {
  return await fetchWithoutToken(
    'login',
    {username, password},
    'POST'
  )
    .then(res => {
      const response = res.json()
      return response
    })
    .catch((err) => console.log(err.message))
}

// Service for create a fetch to logout url
export const logoutService = async({username}) => {
  return await fetchWithToken(
    'logout',
    {username},
    'POST'
  )
    .then(res => {
      const response = res.json()
      console.log(response)
      return response
    })
    .catch((err) => console.log(err.message))
}

// Service for fetch to Refresh Token url
export const refreshToken = async() => {
  let refreshToken = window.sessionStorage.getItem('refreshToken')
        ? window.sessionStorage.getItem('refreshToken')
        : null
  let response = await fetchWithoutToken(
    'token/refresh',
    {"refresh": refreshToken},
    'POST'
  )
  let data = await response.json()
  console.log('se refresco el token')
  console.log(data)
  return data
}
