import React from 'react';
import logo from '../../assets/images/creaticlogo.png';
import search from '../../assets/images/search-icon.png';


const Navbar = () => {
  return (
    <div className='nav'>
        <div className='logo-container'>
            <img src={logo} alt="logo" width="100px" height="100px" />
        </div>
        <div className='navigation'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Pages</li>
                <li>Contact Us</li>
                <li><img src={search} alt="" /></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar