import {API_URL} from './settings'

// export const loginService = ({username, password}) => {
//     return fetch(`${API_URL}/login`, {
//         method: "POST",
//         headers: {
//             "Content-Type":"application/json",
//             "Accept":"application/json"
//         },
//         body: JSON.stringify({username, password})
//     })
//         .then(res => {
//             if (!res.ok) throw new Error('Response is NOT ok')
//             return res.json()
//         })
//         .then(res => {
//             const {message, token, user} = res
//             return {
//                 message,
//                 token,
//                 user
//             }
//         })
// }

export const loginService = ({username, password}) => {
    return fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify({username, password})
    })
        .then(res => res.json())
        .then(response => {
            if (response.error) throw new Error(response.error)
            return response
        })
}