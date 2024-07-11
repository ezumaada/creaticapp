import React from 'react';
import aiimage from '../../assets/images/aiimage.png';

const CreateSection = () => {
  return (
    <div className='create'>
        <div>
            <img src={aiimage} alt="" />
        </div>
        <div className='create-texts'>
            <h6>ABOUT US</h6>
            <h1>We Bring <span>Creative</span> ideas <br /> to life.</h1>
            <h5>We love Creating</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, optio. Velit perspiciatis omnis voluptatibus nostrum iure explicabo aliquid illo recusandae possimus sapiente, dolorem mollitia! Unde enim dolorem alias qui doloremque!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nemo porro velit odio ab possimus alias beatae.</p>
        
            <div><button>Read More</button></div>
        </div>
    </div>
  )
}

export default CreateSection