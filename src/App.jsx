import './App.css'
import img from './assets/download.jpg'
import FirstComp from './componets/FirstComp/FirstComp'
import SecondComp from './componets/FirstComp/SecondComp'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Login from './componets/Login/Login'
import LocalStorge from './componets/FirstComp/localstorge/LocalStorge'
import Cover from './componets/Cover'
import Signup from './componets/FirstComp/Signup'
const token = localStorage.getItem('token')
const App = ()=>{

return(
  // <Cover />
  // <Signup />
  <BrowserRouter>
  <Routes>
    <Route path='/' element={token ? <Navigate to="/products" />:<Signup />}  />
    <Route path='/products' element={token ? <Cover />:<Navigate to ="/" />} />

    </Routes>
  </BrowserRouter>
  

  
)
}
export default App


const Protected = () =>{
  return objUser ?(
    <Navigate to='/products' />
  ):(
    <Navigate to = '/login' />
  )
}


