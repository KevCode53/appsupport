import { useCallback } from "react"
import { useState, useContext } from "react";
// import { logoutService } from "services/logout";
import { fetchWithToken } from "helpers/fetch";
import { loginService, logoutService } from "services/ahuthServices";
import { UserContext } from "../context/UserContext"

import { useMessages } from "./useMessages";

export const useUser = () => {
    const {token, setToken, user, setUser} = useContext(UserContext)
    const { setMessage } = useMessages()
    const [isLoading, setIsLoading] = useState(false)
    const [tokenChecking, setTokenChecking] = useState(false)


    // Set a info of login in te storage and context
    const setLoginData = useCallback((data) => {
        /*
            Get a response for login data
            and set the storage and set the user context
        */
        const refreshToken = data['refresh-token']
        const {token, user} = data
        window.localStorage.setItem('token', token)
        window.sessionStorage.setItem('refreshToken', refreshToken)
        window.localStorage.setItem('user', JSON.stringify(user))
        setUser(user)
        setToken(token)

    }, [setToken, setUser])

    // Login method for user in form
    const login = useCallback(({username, password}) => {
        console.log(isLoading)
        setIsLoading(true)
        loginService({username, password})
            .then(res => {
                if (res.error) {
                    setMessage({
                        "show": true,
                        "type": 'error',
                        "icon": '',
                        "title": 'Error en inicio de sessión',
                        "content": res.error,
                    })
                } else {
                    setLoginData(res)
                }
            })
            .finally(() => setIsLoading(false))
    }, [isLoading, setLoginData, setMessage])

    // Logout method for delete credentials of the user
    const logout = useCallback(() => {
        const { username } = user
        logoutService({ username })
            .then(res => {
                if(res.error) {
                    throw new Error(res.error)
                }
                window.localStorage.removeItem('token')
                window.localStorage.removeItem('user', JSON.stringify(user))
                window.sessionStorage.removeItem('refreshToken', JSON.stringify(user))
                setToken(null)
                setUser(null)
            })
    }, [setToken, setUser, user])



    return {
        isLogged: Boolean(token),
        login,
        logout,
        isLoading,
        setIsLoading,
        user,
        tokenChecking
    }
}