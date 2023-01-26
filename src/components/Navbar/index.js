import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    JobberBtnLink
} from './NavbarElements';

const Navbar = ({ toggle, children,  HandleClick}) => {
    const [scrollNav, setScrollNav] = useState(false);
    
const changeNav = () => {
    if(window.scrollY >= 80) {
        setScrollNav(true)
    } else {
        setScrollNav(false);
    }
}

useEffect (() => {
    window.addEventListener('scroll', changeNav)
}, []);

const toggleHome = () => {
    scroll.scrollToTop()
};
 

return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                {children}
                <NavLogo to='/' onClick={toggleHome}>Axis Waterfront Services</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks 
                        to='services'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >
                          Services
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='our work'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >Our Work
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='about'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >About
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact'
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >Contact
                        </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                <JobberBtnLink><NavLinks to='book'
                        onClick={()=>HandleClick(true)}
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >Request a quote
                        </NavLinks></JobberBtnLink>
                 
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>      
    );
};

export default Navbar;