import React, { useState } from 'react';
import './App.css'
import Navbar from './components/navbar.jsx';
import MyRoutes from './MyRoutes.jsx'

function App() {
  const [currUser, setCurrUser] = useState(null);


  return (
    <div>
        <Navbar user={currUser} onLogout={() => setCurrUser(null)}/>
        <main className='main-content'>
          <MyRoutes currUser={currUser} setCurrUser={setCurrUser}/>
        </main>
    </div>
  )
}

export default App
