import './NavBar.css';
import React from 'react';
import logo from '../images/logo.png';
import {useEffect, useState} from 'react';

function NavBar() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={`nav ${show && "nav_black"}`}>
        <img
        className='nav__logo'
            src={logo}
            alt="events++ Logo"
            />
        <a href="">Home</a>
            <a href="">Reviews</a>
            <a href="">Create Event</a>
            <a href="">Sign Up</a>
            <a href="">Login</a>
    </div>
    );
}

export default NavBar;