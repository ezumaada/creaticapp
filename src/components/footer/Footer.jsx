import React from 'react';
import logo from '../../assets/images/creaticlogo.png';
import fb from '../../assets/images/fb-logo.png';
import ig from '../../assets/images/ig-logo.png';
import wa from '../../assets/images/whatsapp-logo.png';
import lin from '../../assets/images/linkedin.png';
import pin from '../../assets/images/pintrest.png';
import twit from '../../assets/images/xx.png';


const Footer = () => {
  return (
    <div className='footer'>
        <div className='top-footer'>
        <div>
            <img src={logo} alt="" />
        </div>
        <div>
            <ul>
                <li>Categories</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Pages</li>
                <li>Support</li>
            </ul>
        </div>
        <div>
            <p>Lorem ipsum Neque porro quisquam est qui do lorem ipsum <br /> quia dolor sit amet, Neque porro elit NeDque</p>
        </div>
        <div className='logos'>
            <img src={fb} alt="" />
            <img src={ig} alt="" />
            <img src={wa} alt="" />
            <img src={lin} alt="" />
            <img src={pin} alt="" />
            <img src={twit} alt="" />
        </div>
        </div>
        
        <div>
            <p>Copyright © 2003-2023 Creatic Agency All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer