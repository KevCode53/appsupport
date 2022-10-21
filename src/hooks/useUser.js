import { useCallback } from "react"
import { useState, useEeffect, useContext } from "react";
import { loginService } from "services/login";
import { logoutService } from "services/logout";

import { UserContext } from "../context/UserContext"

export const useUser = () => {
    const {token, setToken, user, setUser} = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    const login = useCallback(({username, password}) => {
        setIsLoading(true)
        loginService({username, password})
            .then((res) => {
                const {message, token, user} = res
                window.sessionStorage.setItem('token', token)
                window.sessionStorage.setItem('user', JSON.stringify(user))
                setUser(user)
                setToken(token)
                setIsLoading(false)
                return user
            })
            .catch((err) => {
                window.sessionStorage.removeItem('token')
                window.sessionStorage.removeItem('user', JSON.stringify(user))
                setHasError(true)
                setIsLoading(false)
                console.log(err)
                return err
            })
    }, [setToken])

    const logout = useCallback(({toekn}) => {
        logoutService({token})
            .then(res => {
                console.log(res)
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
        hasError
    }
}