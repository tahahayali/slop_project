import { Routes, Route } from "react-router-dom";

import './App.css'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Account from './pages/Account.jsx'
import Navbar from './components/navbar.jsx';

function App() {

  return (
    <div>
        <Navbar />
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/account' element={<Account />} />
            <Route path="*" element={<Home />} />
          </Routes>
          
        </main>
    </div>
  )
}

export default App
