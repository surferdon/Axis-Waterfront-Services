import React from 'react';
import Carousel from 'framer-motion-carousel';


const data = [
      {
        class: "img1",
        label: "Label"
      },
      {
        class: "img2",
        label: "Label"
      },      {
        class: "img3",
        label: "Label"
      },      {
        class: "img4",
        label: "Label"
      },
      {
        class: "img5",
        label: "Label"
      }]

const DockServices = () => {
    return (

<div className='DockServiceMain'>
    <div className="DockServiceWords">
    <span className="DockServiceSpan">Dock Services</span>
    <h1 className="DockServiceH1">

    No job too big or small
    </h1>
    <p className="DockServiceP">
    Axis Waterfront Services offers a variety of repair and maintenance services to help with all of your dock repair needs. We can assist with anything from on-water welding(aluminum or steel) to gangway replacement

    </p>
</div>


                    <div className="DockServiceCarousel">
  <Carousel>
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