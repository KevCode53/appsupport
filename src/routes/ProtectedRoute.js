import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "hooks/useUser";

const ProtectedRoute = ({children}) => {

    const {checkToken, isLogged} = useUser()
    useEffect(()=>{
        checkToken()
    },[])
    return isLogged ? children : <Navigate to='/auth/login' />
}

export default ProtectedRoute;