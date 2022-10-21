import Styles from './styles.module.scss'

const InputLogin = ({label, type, name, handleChange}) => {
    return (
        <div 
            className={Styles.InputLoginContainer}
            onChange={handleChange}
        >
            <input required type={type} name={name}  autoComplete="off"/>
            <label>{label}</label>
        </div>
    );
}

export default InputLogin;