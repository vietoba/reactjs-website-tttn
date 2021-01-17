import React , {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements';
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
                <HeroH1> CÔNG TY CỔ PHẦN CMEDIA </HeroH1>
                <HeroP>
                    Là công ty hàng đầu về lĩnh vực nghiên
                    cứu dữ liệu trực tuyến và
                    digital marketing
                </HeroP>
                <HeroWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Bắt đầu ngay {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
