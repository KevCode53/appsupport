import { useNavigate } from 'react-router-dom';
import Main from '../../containers/Main'
import Sidebar from '../../containers/Sidebar'

// Import Hooks
import { useUser } from 'hooks/useUser';
import { useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate()
  const {isLogged} = useUser()

  useEffect(()=> {
    if (!isLogged) navigate('/login')
}, [navigate, isLogged])

  return (
    <>
      <Sidebar />
      <Main />
      </>
  );
}

export default Home;