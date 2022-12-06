import React, {useState} from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne,homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/Sidebar'
import Quote from "../components/Jobber/jobberForm";
import Carousel from "framer-motion-carousel";


import { 
    InfoContainer, 
} from '../components/InfoSection/InfoElements';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
const [isActive, setIsActive] = useState(false)

const HandleClick = () => {
    setIsActive(!isActive)
    console.log(isActive)
};
    const toggle = () => {
        setIsOpen ( !isOpen)
        console.log(isActive)
    };

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle ={toggle} HandleClick={HandleClick}/>
        <HeroSection />
        <Services />
        
        <div style={{ width: 600, height: 400, margin: "0 auto" }}>
  <Carousel>
    {[1, 2, 3, 4].map((item, i) => (
      <img
        draggable="false"
        src={`./${item}.jpg`}
        key={i}
        width="100%"
        alt=""
      />
    ))}
  </Carousel>
</div>



        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjOne} />
        <InfoSection isActive={isActive} setIsActive={setIsActive} HandleClick={HandleClick} {...homeObjThree} />
        <InfoContainer id="book"> <Quote className={isActive ? "JobberOpen" : "JobberClosed"}/></InfoContainer>
        <Footer />
        
        </>
    );
};

export default Home