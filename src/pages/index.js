import React, {useState} from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne,homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/Sidebar'
import Quote from "../components/Jobber/jobberForm";


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen ( !isOpen)
    };

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle ={toggle} />
        <HeroSection />
        <Services />
        
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjThree} />
        <Quote />
        <Footer />
        
        </>
    );
};

export default Home