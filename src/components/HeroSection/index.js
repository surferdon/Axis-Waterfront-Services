import React, {useState} from 'react';
import Video from '../../videos/video1.mp4';
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    };
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Boat dock ownership made easy</HeroH1>
            <HeroP>
                Serving the Texas Highland lakes since 1945
            </HeroP>
            <HeroBtnWrapper>
                <Button 
                to='signup'
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                >
                    Get Started {hover ? <ArrowForward /> : <ArrowRight 
                    />}
                   
                   
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;