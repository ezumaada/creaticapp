import React from 'react';
import vector from '../../assets/images/Vector.png';

const Experience = () => {
  return (
    <div className='exp-section'>
        <div className='exp-left'>
            <h5>WHY  US</h5>
            <h2>25 YEARS OF <span>EXPERIENCE</span> AS A CREATIVE AGENCY</h2>
            <div><button>Read More</button></div>
        </div>
        <div className='exp-right'>
            <p>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit NeDque porro  Lorem ipsum
            </p>
            <div className='vectors'>
                <p><img src={vector} alt="" /> Happy Customer</p>
                <p><img src={vector} alt="" /> Experienced Team</p>
                <p><img src={vector} alt="" /> Modern Technology</p>
            </div>
        </div>
    </div>
  )
}

export default Experience