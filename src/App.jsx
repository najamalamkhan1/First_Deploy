import './App.css'
import img from './assets/download.jpg'
import FirstComp from './componets/FirstComp/FirstComp'
import SecondComp from './componets/FirstComp/SecondComp'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Login from './componets/Login/Login'
import LocalStorge from './componets/FirstComp/localstorge/LocalStorge'
const user = localStorage.getItem('user')
const objUser = JSON.parse(user)
const App = ()=>{

return(
  <BrowserRouter>
  <Routes>
    <Route path='/home' element={<SecondComp />}></Route>
    <Route path='/ls' element={<LocalStorge />}></Route>
    <Route path='/login' element={
      <Login /> }></Route>
    <Route path='/products' element={<Protected>
      <FirstComp />
    </Protected>}></Route>


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


