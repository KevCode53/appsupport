import { useContext, useCallback } from 'react'
import { UserContext } from "../context/UserContext"
import {API_URL} from '../services/settings'
import { verifyToken } from '../helpers/fetch'
import { fetchWithoutToken, fetchWithToken } from 'helpers/fetch'


import jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'

export const useFetch = () => {
  let headers = {}

  const {token, setToken} = useContext(UserContext)

  const originalRequest = async(url, data, method, headers) => {
    if (!method === 'POST') {
        let response = await fetch(url, {
            method,
            headers
        })
        let res = response.json()
        return {response, res}
    }

    let response =  await fetch(url, {
        method,
        headers,
        data
    })
    let res = response.json()
    return {response, res}
  }

  // Service for fetch to Refresh Token url
  const refreshToken = useCallback(async() => {
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
    const {access, refresh} = await data
    setToken(access)
    window.localStorage.setItem('token', access)
    window.sessionStorage.setItem('refreshToken', refresh)
    return data
  }, [])

  const callFetch = async(endpoint, data, method = 'GET', headers={}) => {
    const tokenExpired = verifyToken(token)

    if (tokenExpired) {
      console.log('El token ha expirado')
      await refreshToken(token)
      // token = refreshToken(token)
    } else {
        console.info('El token sigue vigente')
    }

    const url = `${API_URL}/${endpoint}`

    headers = {
        "Content-Type":"application/json",
        "Accept":"application/json",
        "Authorization": `Bearer ${token}`
    }

    console.log('Antes de la Consulta')
    let {response, res} = await originalRequest(url, data, method, headers)
    console.log('Despues de la Consulta')

    return {response, res}
  }

  return {callFetch}
}