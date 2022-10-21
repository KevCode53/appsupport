import Styles from './styles.module.scss'

const PrimaryButton = ({text, icon, children, disabled}) => {
    return (
        <button 
            className={Styles.PrimaryButton}
            disabled={disabled}
        >
            <span>{text}</span>
            {children}
        </button>
    );
}

export default PrimaryButton;