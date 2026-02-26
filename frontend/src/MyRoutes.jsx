import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Account from './pages/Account.jsx'

function MyRoutes({currUser, setCurrUser}) {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={!currUser ? <Login onSuccess={setCurrUser} /> : <Navigate to="/account"/>}/>
            <Route path='/signup' element={!currUser ? <Signup /> : <Navigate to="/account"/>} />
            <Route path='/account' element={currUser ? <Account user={currUser}/> : <Navigate to="/login"/>}/>
            <Route path="*" element={<Home />} />
          </Routes>
    )
}
export default MyRoutes;
