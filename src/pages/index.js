import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,

  homeObjThree,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";
import Quote from "../components/Jobber/jobberForm";
import "./DockServices.scss";
import { InfoContainer } from "../components/InfoSection/InfoElements";
import DockServices from "./DockServices";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const HandleClick = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };
  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isActive);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} HandleClick={HandleClick} />
      <HeroSection />
      <Services />

      <DockServices />
      <InfoSection {...homeObjOne} />
      <InfoSection
        isActive={isActive}
        setIsActive={setIsActive}
        HandleClick={HandleClick}
        {...homeObjThree}
      />
      <InfoContainer id="book">
        {" "}
        <Quote className={isActive ? "JobberOpen" : "JobberClosed"} />
      </InfoContainer>
      <Footer />
    </>
  );
};

export default Home;
