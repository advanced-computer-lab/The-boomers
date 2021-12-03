import React from "react";

import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";


const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/UserPortal" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/UserPortal/usersearch" activeStyle>
                    Search for a flight
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;
