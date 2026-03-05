import React, { useState, useEffect, use } from 'react';
import './App.css'
import Navbar from './components/navbar.jsx';
import MyRoutes from './MyRoutes.jsx'
import axios from 'axios';
import { logout } from './utils/authstuff.js';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const BASE_URL = import.meta.env.VITE_BASE_URL;


  useEffect(() => {
    const fetchCurrentUser = async () => {
      try { 
        const response = await axios.get(`${BASE_URL}/auth/me`, {withCredentials: true});
        if (response.status === 200) { 
          setCurrentUser(response.data.user);
        }
      }
      catch (error) {
        console.log("Error: " + error + "- User is not logged in.");
        setCurrentUser(null);
      }
    }
    fetchCurrentUser();
  }, []);

  const handleLogout = async () => {
    const loggedOut = await logout();
    if (loggedOut) {
      setCurrentUser(null);
    }
    else {
      alert("Logout failed, problem with server");
    }
  };

  return (
    <div>
        <Navbar user={currentUser} onLogout={handleLogout}/>
        <main className='main-content'>
          <MyRoutes currUser={currentUser} setCurrUser={setCurrentUser}/>
        </main>
    </div>
  )
}

export default App
