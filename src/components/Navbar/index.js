import React from 'react';
import { FaBars } from 'react-icons/fa';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo , 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';
const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'> cmedia </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'> Giới Thiệu </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'> Công nghệ </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'> Tuyển dụng </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'> Đăng ký </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin"> Đăng nhập </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
