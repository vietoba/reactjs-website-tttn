import React from 'react';
import Icon1 from '../../images/svg-3.svg';
import Icon2 from '../../images/svg-6.svg';
import Icon3 from '../../images/svg-5.svg';
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
            <ServicesH1> Tuyển dụng  </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2> Nhân viên Kinh doanh </ServicesH2>
                    <ServicesP> Liên hệ với chúng tôi nếu bạn muốn ứng tuyển vào vị trí này. Gửi CV  </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2> Nhân viên IT  </ServicesH2>
                    <ServicesP> Liên hệ với chúng tôi nếu bạn muốn ứng tuyển vào vị trí này. Gửi CV </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2> CSKH,Saler </ServicesH2>
                    <ServicesP> Liên hệ với chúng tôi nếu bạn muốn ứng tuyển vào vị trí này. Gửi CV </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
