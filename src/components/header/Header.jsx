import React from 'react';
import woman from '../../assets/images/jewel-woman.png';


const Header = () => {
  return (
    <div className='header-body'>
      <div className='main-header'>
        <div><h6>WELCOME TO CREATIC</h6></div>
        <div><h1>WE ARE <span>CREATIVE </span> <br /> DESIGN AGENCY</h1></div>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquid aspernatur eaque omnis veniam corporis voluptatem velit, explicabo iste, officia eum quia veritatis nobis itaque architecto in sequi porro consequuntur.</p></div>
        <div className='header-button'>
            <button>Get in Touch</button>
        </div>
      </div>
      <div>
        <img src={woman} alt="" />
      </div>
    </div>
  )
}

export default Header