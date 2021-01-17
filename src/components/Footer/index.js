import React from 'react';
import { 
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from "react-icons/fa";
import {  
    FooterConatiner,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';
const Footer = () => {
    return (
        <FooterConatiner>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Tiêu chí </FooterLinkTitle>                
                            <FooterLink to="/signin">  Chúng tôi luôn nỗ lực hết sức để hỗ trợ tối đa, có hiệu quả việc phân tích, dự báo xu hướng phục vụ các chiến lược kinh doanh, quảng bá hình ảnh sản phẩm, quảng bá thương hiệu của khách hàng. </FooterLink>


                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Thông tin </FooterLinkTitle>
                            <FooterLink to="/signin">  Giới thiệu </FooterLink>
                            <FooterLink to="/signin"> Dịch vụ </FooterLink>
                            <FooterLink to="/signin"> Các điều khoản và điều kiện </FooterLink>
                            <FooterLink to="/signin"> Trở thành đối tác </FooterLink>
                            <FooterLink to="/signin"> Đảm bảo giá tốt nhất </FooterLink>
                            <FooterLink to="/signin"> Quyền riêng tư và chính sách </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Hỗ trợ khách hàng </FooterLinkTitle>
                            <FooterLink to="/signin"> Câu hỏi thường gặp </FooterLink>
                            <FooterLink to="/signin"> Phương thức thanh toán </FooterLink>
                            <FooterLink to="/signin"> Những dịch vụ của chúng tôi </FooterLink>
                            <FooterLink to="/signin"> Làm thế nào để đăng ký các khoá học </FooterLink>
                            <FooterLink to="/signin"> Thiết kế website theo yêu cầu </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Liên hệ </FooterLinkTitle>
                            <FooterLink to="/signin"> Địa chỉ: A12/BT2 Trần Văn Cẩn, phường Mỹ Đình 2, quận Nam Từ Liêm, thành phố Hà Nội. </FooterLink>
                            <FooterLink to="/signin"> Số điện thoại/Fax: (+84) 43-795-3333/(+84) 985-779-933 </FooterLink>
                            <FooterLink to="/signin"> Email: cmedia.jsc@gmail.com </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>               
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'> Cmedia</SocialLogo>
                        <WebsiteRights> Cmedia @ {new Date().getFullYear()} All rights reserved </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook" >
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram" >
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube" >
                                <FaYoutube />
                            </SocialIconLink>
                            {/* <SocialIconLink href="/" target="_blank" aria-label="Twitter" >
                                <FaTwitter />
                            </SocialIconLink> */}
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin" >
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterConatiner>
    )
}

export default Footer
