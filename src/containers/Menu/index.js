import Styles from './styles.module.scss'

const Menu = () => {
  return (
    <ul className={Styles.MenuList}>
      <li>Fiscalías</li>
      <li>Equipos</li>
      <li>Mantenimientos</li>
      <li>Reportes</li>
    </ul>
  );
}

export default Menu;