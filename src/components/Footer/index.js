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
                            <FooterLinkTitle> About us </FooterLinkTitle>                
                            <FooterLink to="/signin">  How it works </FooterLink>
                            <FooterLink to="/signin"> Testimonials</FooterLink>
                            <FooterLink to="/signin"> Careers</FooterLink>
                            <FooterLink to="/signin"> Invenstors </FooterLink>
                            <FooterLink to="/signin"> Terms of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> About us </FooterLinkTitle>
                            <FooterLink to="/signin">  How it works </FooterLink>
                            <FooterLink to="/signin"> Testimonials </FooterLink>
                            <FooterLink to="/signin"> Careers </FooterLink>
                            <FooterLink to="/signin"> Invenstors </FooterLink>
                            <FooterLink to="/signin"> Terms of Services </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About us </FooterLinkTitle>
                            <FooterLink to="/signin">  How it works </FooterLink>
                            <FooterLink to="/signin"> Testimonials </FooterLink>
                            <FooterLink to="/signin"> Careers </FooterLink>
                            <FooterLink to="/signin"> Invenstors </FooterLink>
                            <FooterLink to="/signin"> Terms of Services </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> About us </FooterLinkTitle>
                            <FooterLink to="/signin">  How it works </FooterLink>
                            <FooterLink to="/signin"> Testimonials </FooterLink>
                            <FooterLink to="/signin"> Careers </FooterLink>
                            <FooterLink to="/signin"> Invenstors </FooterLink>
                            <FooterLink to="/signin"> Terms of Services </FooterLink>
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
