import React from 'react';
import Video from '../../videos/video1.mp4';

import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper} from './HeroElements';

const HeroSection = () => {



  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Boat dock ownership made easy</HeroH1>
            <HeroP>
                Serving the Texas Highland Lakes 
            </HeroP>
            <HeroBtnWrapper>

            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;