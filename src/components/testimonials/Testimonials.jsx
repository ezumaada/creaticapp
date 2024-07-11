import React from 'react';
import ellipse from '../../assets/images/Ellipseimg.png';
import left from '../../assets/images/leftimg.png';
import right from '../../assets/images/rightimg.png';
import commas from '../../assets/images/Coomas.png';



const Testimonials = () => {
  return (
    <div>
        <div className='testimonials'>
        <div>
            <img src={left} alt="" />
        </div>
        <div className='testimonial-texts'>
            <div className='top'>
                <div  className="text-header">
            <h1>WHAT <span>OUR</span> <br /> CLIENTS SAY?</h1>
             </div>
             <h5>TESTIMONIALS</h5></div>
            <div className='frame3'>
                
            <p>Lorem ipsum Neque porro quisquam <br /> est qui do lorem ipsum quia dolor sit <br /> amet, Neque porro elit</p>
            </div>
                <div className='eclipse'>
                    <img src={ellipse} alt="" />
                    <div>
                        <h6>Carol Chaves</h6>
                        <p>@caroles.gmail.com</p>
                    </div>
                   <div  className='comma'> <img src={commas} alt="" /></div>
                </div>
            
            <div>
                <button>VIEW ALL TESTIMONIALS</button>
            </div>
        </div>
        <div>
            <img src={right} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Testimonials