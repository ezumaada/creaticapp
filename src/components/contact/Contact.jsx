import React from 'react'
import location from '../../assets/images/location.png';
import phone from '../../assets/images/phone.png';
import email from '../../assets/images/gmail.png';



const Contact = () => {
    const Cards =(props) =>{
        return(
            <div className='theprops'>
                <img src={props.img} alt="" />
                <div><h3>{props.title}</h3>
                <p>{props.text}</p></div>
                </div>
        )
    }
  return (
    <div className='contact-container'>
        <div className='contact-frame'>
            <h1>GET IN <span>TOUCH</span></h1>
           <div> <p>Lorem ipsum Neque porro quisquam est qui do  lorem ipsum quia dolor sit amet, Neque porro elit <br /> NeDque porro</p></div>
           <div>
           <Cards img={location} title="Office Address" text="98, Arca St, PR City, 33414 , Indonesia"/>
           <Cards img={phone} title="Call Us" text="(+BK) 123 456 7891"/>
           <Cards img={email} title="Mail Us" text=" info@creaticagency.com"/>
           </div>
        </div>
        <div className='form-container'>
            <form >
             <label htmlFor="fullname">YOUR NAME</label>   
            <input type="text" id="fullname" />
            <label htmlFor="email"> YOUR EMAIL</label>
            <input type="text" id="email" />
            <label htmlFor="message"> YOUR MESSAGE</label>
            <textarea name="text" id="message"></textarea>
            <div className='form-button'>
            <button>Send Message</button></div>

            </form>
        </div>
    </div>
  )
}

export default Contact