import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";


export default function App() {
    return (
        <BrowserRouter>
            <nav style={{display: "flex", gap: "10px", marginBottom: "20px"}}>
                <Link to="/">Home</Link> 
                <Link to="/login">Login</Link>
            </nav>
        </BrowserRouter>
    );
}  