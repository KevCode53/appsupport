import { fetchWithoutToken } from 'helpers/fetch'
import {API_URL} from './settings'

// export const loginService = async ({username, password}) => {
//     const result = await fetch(`${API_URL}/login`, {
//         method: "POST",
//         headers: {
//             "Content-Type":"application/json",
//             "Accept":"application/json"
//         },
//         body: JSON.stringify({username, password})
//     })
//         .then(res => {
//             if(!res.ok) throw new Error('Verifique el usuario y contraseña!')
//             return res.json()
//         })

//     return result
// }

export const loginService = async({username, password}) => {
    const response = await fetchWithoutToken(
        'login',
        {username, password},
        'POST'
    )
    const body = await response.json()
    const {status} = await response

    // console.log(body)
    // console.log(status)

    return {body, status}
}