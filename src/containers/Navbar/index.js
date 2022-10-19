import { useState } from 'react';
import Styles from './styles.module.scss'

import {useSideMenu} from '../../hooks/useSideMenu'


const Navbar = () => {

  const {isOpen, openSide} = useSideMenu()

  console.log(isOpen)

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
      <div className='navbar-menu'>
        <div>
          <div className={Styles.noImage}></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;