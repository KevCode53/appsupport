import { Navigate } from "react-router-dom";
import { useUser } from "hooks/useUser";

const ProtectedRoute = ({children}) => {
    const {isLogged} = useUser()
    return isLogged ? children : <Navigate to='/auth/login' />
}

export default ProtectedRoute;