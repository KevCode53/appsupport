import { useCallback } from "react"
import { useState, useContext } from "react";
import { loginService } from "services/login";
import { logoutService } from "services/logout";
import { fetchWithToken } from "helpers/fetch";

import { UserContext } from "../context/UserContext"

import { useMessages } from "./useMessages";

export const useUser = () => {
    const {token, setToken, user, setUser} = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(false)
    const [tokenChecking, setTokenChecking] = useState(false)

    const { setMessage } = useMessages()

    const login = useCallback(({username, password}) => {
        const response = loginService({username, password})
        response.then(({body, status}) => {

            if (status === 200 || status === 201) {
                const {token, user} = body
                setMessage(
                    {
                        show: true,
                        type: 'success',
                        icon: '',
                        title: 'Bienvenido!',
                        content: `Se ha iniciado sesion como: ${user.username}`
                    }
                )
                window.localStorage.setItem('token', token)
                window.localStorage.setItem('user', JSON.stringify(user))
                setUser(user)
                setToken(token)
            } else {
                setMessage({
                    show: true,
                    type: 'error',
                    icon: '',
                    title: 'No se pudo Iniciar Sessión!',
                    content: body.error
                })
                // throw new Error(body.error)
            }
        })
    }, [setToken, setUser, setMessage])

    const logout = useCallback(({toekn}) => {
        logoutService({token})
            .then(res => {
                // console.log(res)
            })
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user', JSON.stringify(user))
        setToken(null)
        setUser(null)
    }, [setToken, setUser, token, user])

    const checkToken = async () => {
        const response = await fetchWithToken('refresh-token/')
        const body = await response.json()
        if (response.status === 200 || response.status === 201) {
            const {token, user} = body
            console.log(token)
            window.localStorage.setItem('token', token)
            window.localStorage.setItem('user', JSON.stringify(user))
            setUser(user)
            setToken(token)
            setTokenChecking(true)
        } else {
            setTokenChecking(false)
            // throw new Error(body.error)
        }
    }

    return {
        isLogged: Boolean(token),
        login,
        logout,
        isLoading,
        setIsLoading,
        user,
        checkToken,
        tokenChecking
    }
}