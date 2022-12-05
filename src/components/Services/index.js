import React from 'react'
import Icon1 from '../../images/weld.png'
import Icon2 from '../../images/Stairs.svg'
import Icon3 from '../../images/wrenchhammer.jpeg'
import { 
    ServicesContainer,
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP 
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
         <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Dock Modification</ServicesH2>
                <ServicesP>We offer a variety of dock Modification services to make your existing dock to the dock of your dreams.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Dock Stairs and Access</ServicesH2>
                <ServicesP>What ever you need to make the trip to your dock easier, we have the equipment and experience to do so.</ServicesP>
            </ServicesCard>  
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Maintenance</ServicesH2>
                <ServicesP>We offer montly plans to ensure your dock and lifts are in top shape so you don't have to.</ServicesP>
            </ServicesCard> 
         </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services