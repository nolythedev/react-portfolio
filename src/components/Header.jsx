import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/Header.css';

function Header() {
    return (
        <header className='header'>
            <NavLink to='/'>
                <h2 className="logo">Studio Noch</h2>
            </NavLink>
            <nav className='nav-container'>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <NavLink to='/' className="nav-link">
                            Studio
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/about' className="nav-link">
                           About
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/projectGallery' className="nav-link">
                            Work
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/contact' className="nav-link">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header