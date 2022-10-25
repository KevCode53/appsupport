import Styles from './styles.module.scss'

import Navbar from '../Navbar'

const Main = ({children}) => {
  return (
    <div className={Styles.MainGrid}>
      <Navbar />
      <div className={Styles.mainContainer}>
        {children}
      </div>
    </div>
  );
}

export default Main;