import {API_URL} from '../services/settings'
import jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'
import { refreshToken } from 'services/ahuthServices'

export const verifyToken = (token) => {
    const user = jwt_decode(token)
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1
    return isExpired
}

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

export const fetchWithoutToken = (endpoint, data, method = 'GET') => {
    const url = `${API_URL}/${endpoint}`

    if (!method === 'POST') return fetch(url)

    return fetch(url, {
        method,
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify(data)
    })
}


export const fetchWithToken = async (endpoint, data, method = 'GET', headers={}) => {
    let token = window.localStorage.getItem('token')
        ? window.localStorage.getItem('token')
        : null

    const tokenExpired = verifyToken(token)
    if (tokenExpired) {
        console.log('El token ha expirado')
        token = await refreshToken(token)
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