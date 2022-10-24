import { useLocation } from 'react-router-dom';

// Import Styles
import Styles from './styles.module.scss'

// Import Components
import Message from 'components/Message';
import Sidebar from 'containers/Sidebar'
import LoadingSpinner from 'containers/LoadingSpiner';

// Imports Hooks
import { useUser } from 'hooks/useUser';
import { useEffect, useState } from 'react';

const Layout = ({children}) => {

  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const {isLogged, checkToken} = useUser()

  const handleLogin = () => {
    setInterval(() => {
      setIsLoading(false)
    }, 1000);
  }
  
  handleLogin()

  useEffect(()=>{
    checkToken()
  },[])

  return (
    <div className={
        `${location.pathname.includes('/auth')
        ? Styles.Login
        : Styles.Layout
        }`
      }>
      {/* <Message /> */}
      {
        isLogged & isLoading
        ? (<LoadingSpinner />)
        : null
      }
      <Sidebar />
      {children}
    </div>
  );
}

export default Layout;