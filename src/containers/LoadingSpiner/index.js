import Logo from 'assets/images/MP_logo.png'
import './styles.scss'

const LoadingSpinner = () => {
    return (
        <div className='spiner-container'>
            <div className='spinner'>
                <img loading='lazy' src={Logo} />
                <div className="loader-container">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </div>
        </div>
    );
}

export default LoadingSpinner;