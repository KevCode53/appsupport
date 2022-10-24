import {API_URL} from '../services/settings'

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

export const fetchWithToken = (endpoint, data, method = 'GET') => {

    const url = `${API_URL}/${endpoint}`
    const token = window.localStorage.getItem('token') || ' '

    if (!method === 'POST') {
        return fetch(url, {
            method,
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json",
                "Authorization": `Token ${token}`
            }
        })
    }

    return fetch(url, {
        method,
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Authorization": `Token ${token}`
        },
        body: JSON.stringify(data)
    })
}