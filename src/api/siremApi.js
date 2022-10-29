import axios from 'axios'
import { BASE_URL } from '../services/settings'
import { getAccessToken, getRefreshToken, updateAccessToken, updateRefreshToken } from 'services/tokenServices'

export const siremApi = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type":"application/json",
        "Accept":"application/json",
    }
})

siremApi.interceptors.request.use(
    (config) => {
        // Tomamos el acces de localStorage
        const token = getAccessToken()
        // Validamos si existe
        if (token) {
            // Lo agregamos a las cabceras con el prefio Authoriaztion
            config.headers["Authorization"] = `Bearer ${token}`
        }
        // Devolvemos la coinfiguracion
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)


siremApi.interceptors.response.use(
    (res) => {
        return res
    },
    async(error) => {
        // console.log(error.config)
        const originalConfig = error.config

        if (originalConfig.url !== '/auth/login' && error.response){
            if (error.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true

                console.info('Token de acceso caducado')
                try {
                    const rs = await siremApi.post(
                        '/token/refresh',
                        JSON.stringify({"refresh": getRefreshToken()})
                    )
                    const {access, refresh} = rs.data
                    updateAccessToken(access)
                    updateRefreshToken(refresh)
                    console.info('Se actualizaron los tokens de ["accesso", "refresh"]')

                    return siremApi(originalConfig.url)
                } catch (_error) {
                    return Promise.reject(_error)
                }
            }
        }
        return Promise.reject(error)
    }
)