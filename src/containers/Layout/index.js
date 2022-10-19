import Styles from './styles.module.scss'

const Layout = ({children}) => {
  return (
    <div className={Styles.Layout}>
      {children}
    </div>
  );
}

export default Layout;