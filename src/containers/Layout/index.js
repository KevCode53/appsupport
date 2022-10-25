import { useLocation } from 'react-router-dom';

// Import Styles
import Styles from './styles.module.scss'

// Import Components
import Sidebar from 'containers/Sidebar'
import LoadingSpinner from 'containers/LoadingSpiner';
import Message from 'containers/Message';

// Imports Hooks
import { useUser } from 'hooks/useUser';
import { useEffect, useState } from 'react';
import { useMessages } from 'hooks/useMessages';

const Layout = ({children}) => {

  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const {isLogged, checkToken} = useUser()
  const {message} = useMessages()

  const handleLogin = () => {
    setInterval(() => {
      setIsLoading(false)
    }, 1000);
  }

  handleLogin()

  return (
    <div className={
        `${location.pathname.includes('/auth')
        ? Styles.Login
        : Styles.Layout
        }`
      }>
      {
        isLogged & isLoading
        ? (<LoadingSpinner />)
        : null
      }
      <Sidebar />
      {message.show && (<Message />)}
      {children}
    </div>
  );
}

export default Layout;