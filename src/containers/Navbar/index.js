import { useState } from 'react';
import Styles from './styles.module.scss'

import {useSideMenu} from '../../hooks/useSideMenu'
import { useUser } from 'hooks/useUser';

// Import Components
import UserMenu from 'components/UserMenu';

const Navbar = () => {

  const [menuUser, setMenuUser] = useState(false)
  const {isOpen, openSide} = useSideMenu()
  const {logout, user} = useUser()

  const handleOpenUserMenu = () => {
    setMenuUser(!menuUser)
  }

  return (
    <nav className={Styles.navbar}>
      <button
        className={Styles.openBtn}
        onClick={openSide}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={Styles.NavbarMenu}>
        <ul>
          <li>
            <a>1</a>
          </li>
          <li>
            <a>1</a>
          </li>
          <li>
            <a>1</a>
          </li>
        </ul>
        <div onClick={handleOpenUserMenu}>
          <picture>
            {user !== null 
              && user.image !== null
                ? (<img src={`http://127.0.0.1:8000${user.image}`}/>)
                : (<img src='https://cdn-icons-png.flaticon.com/512/149/149071.png'/>)
            }
            <span></span>
          </picture>
          {
            menuUser && (<UserMenu />)
          }
          {/* <div onClick={logout} className={Styles.noImage}></div> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;