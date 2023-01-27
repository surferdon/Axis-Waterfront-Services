import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap } from './SidebarElement'

const Sidebar = ({ isOpen, toggle, HandleClick}) => {


const HandleClick1=(i)=>{
HandleClick(i);
toggle();
}
    return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="services" onClick={toggle}>
                    Services
                </SidebarLink>
                <SidebarLink to="our work" onClick={toggle}>
                    Our Work
                </SidebarLink>
                <SidebarLink to="services" onClick={toggle}>
                    Services
                </SidebarLink>
                <SidebarLink to="about" onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to="contact" onClick={toggle}>
                    Contact
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
            <SidebarLink className='DockServiceBtn2' to="book" offset={120} onClick={HandleClick1}>
                    Request a Quote!
                </SidebarLink>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar