import React from 'react';
import './Navbar.css';
import navbarbg from "../assets/navbarbg.png"
import { FiSearch, FiUser, FiShoppingCart, FiMenu } from 'react-icons/fi';
import BrandLogo from "../assets/Brand Logo.png"
import topsection from "../assets/topsection.png"

const Navbar = () => {
    return (
<>       
 <img src={topsection} alt="top wave" style={{ width: '100%', display: 'block', marginBottom: '-5px' }} />

 <header className="navbar">
            <div className="navbar__logo"><img src={BrandLogo} alt=""/></div>

            <nav className="navbar__menu">
                <a href="#">MENU 01</a>
                <a href="#">MENU 02</a>
                <a href="#">MENU 03</a>
                <a href="#">MENU 04</a>
                <a href="#">MENU 05</a>
                <a href="#">MENU 06</a>
            </nav>

            <div className="navbar__icons">
                <span><FiSearch /></span>
                <span><FiUser /></span>
                <span><FiShoppingCart /></span>
                <span><FiMenu /></span>
            </div>

        </header>
 
</>
    );
};

export default Navbar;