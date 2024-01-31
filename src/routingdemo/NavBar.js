import React from 'react'
import {Link, Route, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import './navbar.css';

export default function NavBar() {
  return (
    <div>
        <ul className='navbar'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Contact">Contact Us</Link></li>
        </ul>
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/home" Component={Home}/>
            <Route path="/about" Component={About}/>
            <Route path="/contact" Component={Contact}/>
            <Route path="/login" Component={Login}/>
        </Routes>

    </div>
  )
}

