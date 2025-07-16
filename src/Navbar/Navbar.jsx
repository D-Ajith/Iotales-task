import React, { useState } from 'react';
import './Navbar.css';
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

import BrandLogo from "../assets/Brand Logo.png";
import topsection from "../assets/topsection.png";
import navbarbg from "../assets/navbarbg.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <img
        src={topsection}
        alt="top wave"
        style={{ width: '100%', display: 'block', marginBottom: '-5px' }}
      />

      <header className="navbar">
        <div className="navbar__logo">
          <img src={BrandLogo} alt="logo" />
        </div>

        <div className="navbar__right">
          <div className="navbar__icons">
            <span><FiSearch /></span>
            <span><FiUser /></span>
            <span><FiShoppingCart /></span>
          </div>

          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>

        <nav className={`navbar__menu ${menuOpen ? 'active' : ''}`}>
          <a href="#">MENU 01</a>
          <a href="#">MENU 02</a>
          <a href="#">MENU 03</a>
          <a href="#">MENU 04</a>
          <a href="#">MENU 05</a>
          <a href="#">MENU 06</a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;