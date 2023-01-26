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
    <ServicesContainer >
        <ServicesH1 id="services">Our Services</ServicesH1>
         <ServicesWrapper >
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Dock Upgrades</ServicesH2>
                <ServicesP>We do custom upgrades and modifications to your existing dock to include: add-ons, new facades, changes to existing lifts and winches, etc.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Dock Stairs and Access</ServicesH2>
                <ServicesP>We do all things with stairs and platforms to access your dock or waterfront to include: new construction, extensions, upgrades, replacements, and repairs.  Unfortunately, we do not do tram systems at this time.</ServicesP>
            </ServicesCard>  
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Maintenance and Service</ServicesH2>
                <ServicesP>We offer routine maintenance services to monitor and adjust your dock with the changes in lake levels and greasing/lubricating of lift equipment.  We also perform repairs and maintenance on-call.  Call today for a routine maintenance quote and become one of our preferred customers.</ServicesP>
            </ServicesCard> 
         </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services