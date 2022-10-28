
export const getAccessToken = () => {
    const token = window.localStorage.getItem('token')
    return token 
}

export const getRefreshToken = () => {
    const refreshToken = window.sessionStorage.getItem('refreshToken')
    return refreshToken
}

export const setAccessToken = (token) => {
    window.localStorage.setItem('token', token)
}

export const setRefreshToken = (refreshToken) => {
    window.sessionStorage.setItem('refreshToken', refreshToken)
}

export const updateAccessToken = (token) => {
    window.localStorage.setItem('token', token)
}

export const updateRefreshToken = (refreshToken) => {
    window.sessionStorage.setItem('refreshToken', refreshToken)
}

export const getUser = () => {
    return JSON.parse(window.localStorage.getItem("user"));
}

export const setUserInfo = (user) => {
    window.localStorage.setItem("user", JSON.stringify(user));
}
    
export const removeUser = () => {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
    window.window.sessionStorage.removeItem("refreshToken");
}