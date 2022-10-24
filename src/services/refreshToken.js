import {API_URL} from './settings'

export const refreshToken = async ({username}) => {
    const response = await fetch(
        `${API_URL}/refres-token/?username=${username}`, {
            method: "GET",
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json",
            },
        }
    )
    .then(res => res.json())
    .then(res => {
        console.log(response)
    })
}