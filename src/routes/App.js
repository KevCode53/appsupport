
import {Routes, Route, BrowserRouter} from 'react-router-dom'

import Layout from '../containers/Layout'
import Home from '../pages/Home'
import Login from '../pages/Login'

import {SideMenuContextProvider} from '../context/SideMenuContext'
import { UserContextProvider } from '../context/UserContext'
import {MessagesContextProvider} from 'context/MessagesContext' 
import ProtectedRoute from './ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
      <MessagesContextProvider>
      <SideMenuContextProvider>
        <Layout>
          <Routes>
            <Route exact path='/auth/login' element={<Login />} />
            <Route exact path='/' element={
                <ProtectedRoute><Home /></ProtectedRoute>
              } 
            />
            <Route exact path='/fiscalias' element={
                <ProtectedRoute><h1>Hola Fiscaliías</h1></ProtectedRoute>
              } 
            />
          </Routes>
        </Layout>
      </SideMenuContextProvider>
      </MessagesContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
