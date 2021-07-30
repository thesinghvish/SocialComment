import React from 'react'

import img1 from '../Images/logo.png';



import  './Navbar.css';

const Navbar = () => {
    return (
        <>
        <nav className="main-nav">
        <div className="logo">
        <img src={img1} alt='logo'>
        </img>

        </div>
        <div className='menu'>
            
            <ul>
                <li><a href='#'>Integration</a></li>
                <li><a href='#'>Pricing</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>About us</a></li>

            </ul>
        <div className="hamburger-menu">
                    <a href="#"></a>

            </div>
        </div>

        <div className="button1">
            <button className='btn1'>Get early access</button>
        </div>
        </nav>

        </>
    )
}

export default Navbar
