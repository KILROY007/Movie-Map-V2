import './App.css';
import {BrowserRouter, Switch,Route } from 'react-router-dom';
import Movies from './Pages/Movies/Movies'
import Series from './Pages/Series/Series'
import Trending from './Pages/Trending/Trending'
import Sidebar from './Components/Desktop/Sidebar/Sidebar'
import { useMediaQuery } from 'react-responsive'
import MobileDashboard from './Components/Mobile/MobileDashboard/MobileDashboard'
import MobileNavbar from './Components/Mobile/MobileNavbar/MobileNavbar'
function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  return (
    <BrowserRouter>
        {
          isMobile ? <MobileNavbar/> : <Sidebar/> 
        }
        <Trending/>
        <Switch>
          <Route path='/trending' extact>
          {
            isMobile && <MobileDashboard/>
          }
            
          </Route>
          <Route path='/movies'>
            <Movies/>
          </Route>
          <Route path='/series'>
            <Series/>
          </Route>
        </Switch>
      
    </BrowserRouter>
  )
}

export default App;
