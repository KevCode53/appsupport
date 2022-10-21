import { useCallback } from "react"
import { useState, useContext } from "react";
import { loginService } from "services/login";
import { logoutService } from "services/logout";

import { UserContext } from "../context/UserContext"


export const useUser = () => {
    const {token, setToken, user, setUser} = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)

    const login = useCallback(({username, password}) => {
        loginService({username, password})
            .then((res) => {
                const {token, user} = res
                window.sessionStorage.setItem('token', token)
                window.sessionStorage.setItem('user', JSON.stringify(user))
                setUser(user)
                setToken(token)
                setHasError(false)
                return user
            })
            .catch((err) => {
                setHasError(true)
                window.sessionStorage.removeItem('token')
                window.sessionStorage.removeItem('user', JSON.stringify(user))
            })
    }, [setToken, setUser, user])

    const logout = useCallback(({toekn}) => {
        logoutService({token})
            .then(res => {
                // console.log(res)
            })
        window.sessionStorage.removeItem('token')
        window.sessionStorage.removeItem('user', JSON.stringify(user))
        setToken(null)
        setUser(null)
    }, [setToken])

    return {
        isLogged: Boolean(token),
        login,
        logout,
        isLoading,
        setIsLoading,
        hasError,
        user
    }
}