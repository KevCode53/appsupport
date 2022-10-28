import { useCallback } from "react"
import { useState, useContext } from "react";
import { loginService, logoutService } from "services/ahuthServices";
import { UserContext } from "../context/UserContext"
import { setUserInfo, setAccessToken, setRefreshToken, removeUser } from "services/tokenServices";

import { useMessages } from "./useMessages";

export const useUser = () => {
    const {token, setToken, user, setUser} = useContext(UserContext)
    const { setMessage } = useMessages()
    const [isLoading, setIsLoading] = useState(false)
    const [tokenChecking, setTokenChecking] = useState(false)

    // Login method for user in form
    const login = useCallback(({username, password}) => {
    setIsLoading(true)
    const res = loginService({username, password})
        .then( res => {
            if (res.error) {
                setMessage({
                    "show": true,
                    "type": 'error',
                    "icon": '',
                    "title": 'Error en inicio de sessión',
                    "content": res.error,
                })
            } else {
                const {token, user} = res
                const refreshToken = res['refresh-token']
                setToken(token)
                setAccessToken(token)
                setUser(user)
                setUserInfo(user)
                setRefreshToken(refreshToken)
            }
        })
        .finally(() => setIsLoading(false))
    }, [isLoading, setMessage])

    // Logout method for delete credentials of the user
    const logout = useCallback(() => {
        const { username } = user
        logoutService({ username })
            .then(res => {
                if(res.error) {
                    throw new Error(res.error)
                }
                removeUser()
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