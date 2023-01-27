import React from 'react';
import Carousel from 'framer-motion-carousel';




const data = [
      {
        class: "img1",
        label: "Axis Waterfront"
      },
      {
        class: "img2",
        label: "Axis Waterfront"
      },      {
        class: "img3",
        label: "Axis Waterfront"
      },      {
        class: "img4",
        label: "Axis Waterfront"
      },
      {
        class: "img5",
        label: "Axis Waterfront"
      },      {
        class: "img6",
        label: "Axis Waterfront"
      }]

const DockServices = () => {

    return (

<div className='DockServiceMain' style={{height: 'fit-content'}}>
    <div className="DockServiceWords" id="our work" style={{height: 'fit-content'}}>
    <span className="DockServiceSpan">Dock Services</span>
    <h1 className="DockServiceH1">

    No job too big or small
    </h1>
    <p className="DockServiceP">
    Axis Waterfront Services offers a variety of dock repair and maintenance services to help with all of your needs so that your dock is always ready for you.  No job is too big or small, and we’ll be happy to stop by and review or discuss your issue and possible solutions at no cost.  Just fill out the request form link at the top of the page or below and we’ll be in touch to schedule a consultation.  Axis Waterfront Services offers digital invoicing and payment systems to simplify your experience.  We also accept all major credit cards.

    </p><br/><br/>
    <p>Axis Waterfront Services has partnered with Spillar Custom Boat Docks for new dock construction.  Click on the link below to visit their website and get a quote for your new dock.  Axis will support installation and maintenance of your dock including access needs so that you have a turnkey service for your new dock.</p>
    <a className="ServicesBtn"
   target="_blank" rel="noopener noreferrer" href= "https://www.spillarcustomdocks.com/"
    ><button className="DockServiceBtn"

                >
                    Spillar Custom Boat Docks
                   
                   
                </button></a>
</div>


                    <div className="DockServiceCarousel" style={{height: 'fit-content', position: 'relative', float: "left"}}>
  <Carousel interval="10000" >
    {data.map((item, i) => (
   
      <div
        draggable="false"
        className={item.class}
        key={i}
        style={{display:"flex", alignItems: "center", justifyContent: "center",
        overflowY: "hidden"}}

     >
      <span className="CarouselLabel">{item.label}</span></div>
    ))}
  </Carousel>
</div>
        </div>
    );
};

export default DockServices;