import { Link, useLocation } from 'react-router-dom';
import Styles from './styles.module.scss'

const Menu = () => {

  const location = useLocation()

  return (
    <ul className={Styles.MenuList}>
      <li>
        <Link 
          to={'/'} 
          className={
            `${location.pathname === '/' 
              && Styles.Active +' active'}`
          }>
          Dashboard
        </Link>
      </li>
      <li>
        <Link to={'/fiscalias'}>Fiscalías</Link>
      </li>
      <li><Link>Equipos</Link></li>
      <li><Link>Mantenimientos</Link></li>
      <li><Link>Reportes</Link></li>
    </ul>
  );
}

export default Menu;