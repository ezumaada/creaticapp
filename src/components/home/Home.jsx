import React from 'react';
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';
import CreateSection from '../createsection/CreateSection';
import ServicesSection from '../servicessection/ServicesSection';
import Achievements from '../achievements/Achievements';
import LatestWorks from '../latestworks/LatestWorks';
import Experience from '../experience/Experience';
import Testimonials from '../testimonials/Testimonials';
import Footer from '../footer/Footer';
import Contact from '../contact/Contact';

const Home = () => {
  return (
    <div className='home-page'>
        <Navbar/>
        <Header/>
        <CreateSection/>
        <ServicesSection/>
        <Achievements/>
        <LatestWorks/>
        <Experience/>
        <Testimonials/>
        <Contact/>
        <Footer/>
       
    </div>
  )
}

export default Home