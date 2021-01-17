import React from 'react'
import {
    SidebarContainer , 
    Icon , 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle} > Giới thiệu </SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}> Công nghệ </SidebarLink>
                    <SidebarLink to='services' onClick={toggle} > Tuyển dụng </SidebarLink>
                    <SidebarLink to='signup' onClick={toggle} > Đăng ký </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'> Đăng nhập </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
