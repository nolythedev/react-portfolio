import React from 'react';
import '../assets/styles/Footer.css';
import logo from '../assets/footer-logo.svg';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
     <img src={logo} alt="" className='footer-logo'/>


    <div className="links">
    <h2>&copy;2024</h2>
    <a href="https://www.github.com/nolythedev">GITHUB</a>
    </div>
    </div>
  )
}

export default Footer
