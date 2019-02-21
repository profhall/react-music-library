import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
    <nav>
        <NavLink className="home-link" to="/">React Music Browser</NavLink>
        <NavLink to="/artists">Artist</NavLink>
        <NavLink to="/about">About</NavLink>
    </nav>
);

export default NavBar;
