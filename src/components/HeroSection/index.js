import React , {useState} from 'react';
import Video from '../../videos/video.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1> Virtual Banking Made Easy </HeroH1>
                <HeroP>
                    Sign up for a new accoun today and raceive $250 in 
                    cerdit towards your
                    next payment.
                </HeroP>
                <HeroWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
