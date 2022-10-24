import 'animate.css';

// Import Hooks
import { useUser } from 'hooks/useUser';

const UserMenu = () => {

    const {logout} = useUser()

    return (
        <ul className="animate__animated animate__fadeIn">
            <li>
                <a>Cambiar contraseña</a>
            </li>
            <li>
                <button onClick={logout}>Cerrar Sessión</button>
            </li>
        </ul>
    );
}

export default UserMenu;
