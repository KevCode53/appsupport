import { useLocation } from 'react-router-dom';

// Import Styles
import Styles from './styles.module.scss'

// Import Components
import Message from 'components/Message';

const Layout = ({children}) => {

  const location = useLocation()

  return (
    <div className={
        `${location.pathname === '/login'
        ? Styles.Login
        : Styles.Layout
        }`
      }>
      <Message />
      {children}
    </div>
  );
}

export default Layout;