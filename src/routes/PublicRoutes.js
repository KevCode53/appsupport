import { Navigate, Route } from "react-router-dom";

const PublicRoutes = ({ isAuthenticated, element, ...rest}) => {
    return (
        <Route {...rest} element={(props) => (
            (isAuthenticated)
                ? (<element {...props} />)
                : (<Navigate to='/'/>)
        )}/>
    );
}

export default PublicRoutes;