import { useNavigate } from 'react-router-dom';
import Main from '../../containers/Main'

// Import Hooks
import { useUser } from 'hooks/useUser';

// Import Components
import CompromiseInfo from 'components/Compromise'

const Home = () => {
  const navigate = useNavigate()
  const {isLogged} = useUser()

//   useEffect(()=> {
//     if (!isLogged) navigate('/auth/login')
// }, [navigate, isLogged])

  return (
    <Main>
      <CompromiseInfo />
    </Main>
  );
}

export default Home;