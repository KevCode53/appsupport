import Styles from './styles.module.scss'

const InputLogin = ({label, type, name}) => {
    return (
        <div className={Styles.InputLoginContainer}>
            <input required type={type} name={name}  autoComplete="off"/>
            <label>{label}</label>
        </div>
    );
}

export default InputLogin;