import Styles from './styles.module.scss'

// Import Components
import LogoGold from '../../components/icons/LogoGold'
import LoginForm from '../../components/LoginForm'
import InputLogin from "../../components/InputLogin"
import PrimaryButton from '../../components/PrimaryButton'

// Imoprt Hooks
import { useUser } from '../../hooks/useUser'

const Login = () => {

    const {isLogged} = useUser()

    return (
        <div className={Styles.LoginPage}>
            <header>
                <LogoGold />
                <h1>SIREM</h1>
                <p>Sistema de Reportes de Matenimiento</p>
                <p>Soporte Técnico</p>
            </header>
            <LoginForm />
        </div>
    )
}

export default Login