
import {Routes, Route, BrowserRouter} from 'react-router-dom'

import Layout from '../containers/Layout'
import Home from '../pages/Home'
import Login from '../pages/Login'

import {SideMenuContextProvider} from '../context/SideMenuContext'
import { UserContextProvider } from '../context/UserContext'

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <SideMenuContextProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Layout>
        </SideMenuContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
