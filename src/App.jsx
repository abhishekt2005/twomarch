import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Signup from './pages/Signup'
import View from './pages/View'
import Navbar from './components/Navbar';
import { useContext } from 'react'
import UserContext from './context/UserContext'

function App() {
      let userStore = useContext(UserContext);
      console.log(userStore)
  let login = userStore.user.login  //false

  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route path='/' element={login===true? <Home/> : <Navigate to={'/login'}/>}/>
              <Route path='/cart' element={login===true? <Cart/> : <Navigate to ='/login'/>}/>
              <Route path='/login' element={login===false? <Login/> : <Navigate to='/'/>}/>
              <Route path='/signup' element={login===false? <Signup/> : <Navigate to='/'/>}/>
              <Route path='/view' element={login===true?<View/>:<Navigate to='/login'/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
