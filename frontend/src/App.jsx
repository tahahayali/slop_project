import React, { useState } from 'react';
import './App.css'
import Navbar from './components/navbar.jsx';
import MyRoutes from './MyRoutes.jsx'

function App() {
  const [currentUser, setCurrentUser] = useState(null);


  return (
    <div>
        <Navbar user={currentUser} onLogout={() => setCurrentUser(null)}/>
        <main className='main-content'>
          <MyRoutes currUser={currentUser} setCurrUser={setCurrentUser}/>
        </main>
    </div>
  )
}

export default App
