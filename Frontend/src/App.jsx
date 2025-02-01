import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import User from './Pages/User'
import AddUser from './Pages/AddUser'
import NavBar from './Component/NavBar'
function App() {
  
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/adduser' element={<AddUser/>} />
      </Routes>
    </div>
  )
}

export default App
