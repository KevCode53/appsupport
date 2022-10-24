import Styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'

// Import Components
import LogoGold from '../../components/icons/LogoGold'
import LoginForm from '../../components/LoginForm'
import InputLogin from "../../components/InputLogin"
import PrimaryButton from '../../components/PrimaryButton'

// Imoprt Hooks
import { useUser } from '../../hooks/useUser'
import { useEffect } from 'react'

const Login = () => {

    const navigate = useNavigate()
    const {isLogged} = useUser()



    useEffect(()=>{
        if (isLogged) {
            navigate('/')
        }
    }, [navigate, isLogged])

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