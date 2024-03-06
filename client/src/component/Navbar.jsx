import React from 'react';
import '../style/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <div className="navbar-container">
        <img className='navbar-logo' src="https://job-board.dexignzone.com/xhtml/images/icons/google.png" alt="Nav-logo" />
        <div className="navbar-items">
          <NavLink to='/' className="navbar-item">Blog</NavLink>
          <NavLink to='/' className="navbar-login">Login / Signup</NavLink>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Navbar
