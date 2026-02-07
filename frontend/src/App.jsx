import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Home from './pages/Home.jsx'
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
        </Routes>

        
      </main>
    </div>
  )
}

export default App
