import React from 'react';
import videoM from '../../assets/images/videoM.png';
import graphics from '../../assets/images/graphic-icon.png';
import ux from '../../assets/images/ux.png';
import web from '../../assets/images/Web-icon.png';

const ServicesSection = () => {
    const Cards = (props) => {
       
        return(
            <div className='my-props'>
                <img src={props.img} alt="" />
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                

            </div>
        )
    }
  return (
    <div className='service-section'>
        <div className='details'>
            <h5>OUR SERVICES</h5>
            <h2>Experience the power of <span>innovation</span>.</h2>
            <p>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet, Neque porro elit NeDque porro Neque porro quisquam est qui do lorem ipsum quia dolor sit amets ipsum</p>
            <button>View All</button>
        </div>
        <div className='service-cards'>
            <Cards img = {videoM} title = "VIDEO MARKETING" text = "Lorem ipsum Neque do porro quisquam est qui do quam "/>
            <Cards img = {graphics} title = "GRAPHIC DESIGN" text='Lorem ipsum Neque do porro quisquam est qui do quam'/>
            <Cards img = {ux} title = "UI/UX DESIGN" text='Lorem ipsum Neque do porro quisquam est qui do quam'/>
            <Cards img = {web} title = "WEBSITE DESIGN" text='Lorem ipsum Neque do porro quisquam est qui do quam'/>
        </div>
    </div>
  )
}

export default ServicesSection