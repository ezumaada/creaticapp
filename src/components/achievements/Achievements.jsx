import React from 'react';
import team from '../../assets/images/team-icon.png';
import project from '../../assets/images/project-icon.png';
import happy from '../../assets/images/happy-icon.png';
import award from '../../assets/images/awards-icon.png';


const Achievements = () => {
    const Cards = (props) => {
       
        return(
            <div className='ach-props'>
                <img src={props.img} alt="" />
                <h3>{props.title}</h3>
                <p>{props.text}</p>
                

            </div>
        )
    }
  return (
    <div>
        <div className='achieved'>
            <Cards img={team} title= '50+' text='Team Members'/>
            <Cards img={project} title= '200+' text='Project Done'/>
            <Cards img={happy} title= '500+' text='Happy Customers'/>
            <Cards img={award} title= '75+' text='Award Winning'/>
        </div>
    </div>
  )
}

export default Achievements