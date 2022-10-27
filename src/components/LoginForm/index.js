import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Import Styles Module
import Styles from './styles.module.scss'

// Import Components
import InputLogin from "../../components/InputLogin"
import PrimaryButton from '../../components/PrimaryButton'
import RightArrow from '../icons/RightArrow'
import LoadingHashtag from '../icons/LoadingHashtag'

// Import Services

// Import Hooks
import { useUser } from '../../hooks/useUser'

const LoginForm = ({onSubmit}) => {


    const {login, isLoading} = useUser()
    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        let data = new FormData(formRef.current)
        data = {"username": data.get('username'), "password": data.get('password')}
        login(data)
    }

    return (
        <form
            ref={formRef}
            className={Styles.LoginForm}
            onSubmit={handleSubmit}
        >
            <header>
                <h3>SIREM</h3>
            </header>
            <div>
                <InputLogin
                        label='NIP / Usuario / Correo'
                        name='username'
                        type='text'
                    />
                <InputLogin
                    label='Contraseña'
                    name='password'
                    type='password'
                />
                {
                    isLoading
                    ? (
                        <PrimaryButton disabled={isLoading} text='Cargando..!' >
                            <LoadingHashtag />
                        </PrimaryButton>
                    )
                    :(
                        <PrimaryButton disabled={isLoading} text='Iniciar Sessión' >
                            <RightArrow />
                        </PrimaryButton>
                    )
                    }
            </div>
            <a>¿Olvidaste tu contraseña?</a>
        </form>
    );
}

export default React.memo(LoginForm);