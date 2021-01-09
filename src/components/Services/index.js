import React from 'react';
import Icon1 from '../../images/svg-7.svg';
import Icon2 from '../../images/svg-8.svg';
import Icon3 from '../../images/svg-9.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1> Our Sercices </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2> Reduces expenses </ServicesH2>
                    <ServicesP> We help reduce your fess and incresse your aerall revenue. </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2> Virtual Offices  </ServicesH2>
                    <ServicesP> We help reduce your fess and incresse your aerall revenue. </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2> Premium Benefits </ServicesH2>
                    <ServicesP> We help reduce your fess and incresse your aerall revenue. </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
