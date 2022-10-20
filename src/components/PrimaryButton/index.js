import Styles from './styles.module.scss'

const PrimaryButton = ({text, icon, children}) => {
    return (
        <button className={Styles.PrimaryButton}>
            <span>{text}</span>
            {children}
        </button>
    );
}

export default PrimaryButton;