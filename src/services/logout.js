import {API_URL} from './settings'

export const logoutService = ({token}) => {
    return fetch(`${API_URL}/logout?token=${token}`, {
        method: "GET",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json",
        },
    })
        .then(res => res.json())
        .then(response => {
        })
}