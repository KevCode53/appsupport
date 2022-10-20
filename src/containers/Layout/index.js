import { useLocation } from 'react-router-dom';

import Styles from './styles.module.scss'

const Layout = ({children}) => {

  const location = useLocation()

  return (
    <div className={
        `${location.pathname === '/login'
        ? Styles.Login
        : Styles.Layout
        }`
      }>
      {children}
    </div>
  );
}

export default Layout;