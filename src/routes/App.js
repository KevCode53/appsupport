
import {Routes, Route, BrowserRouter} from 'react-router-dom'

import Layout from '../containers/Layout'
import Home from '../pages/Home'

import {SideMenuContextProvider} from '../context/SideMenuContext'

function App() {
  return (
    <BrowserRouter>
      <SideMenuContextProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Layout>
      </SideMenuContextProvider>
    </BrowserRouter>
  );
}

export default App;
