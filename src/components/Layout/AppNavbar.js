import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import {NavLink} from 'react-router-dom'
import SearchBar from "./SearchBar";

const AppNavbar = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" light expand="md">
                <NavbarBrand href="/" className='custom-nav-bar main-logo'>FetFlix</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar className='nav-items-container custom-nav-bar' >
                        <NavItem className='custom-nav-item'>
                            <NavLink to="/" className='nav-link-text'>Home</NavLink>
                        </NavItem>
                        <NavItem className='custom-nav-item'>
                            <NavLink to="/movies" className='nav-link-text'>Movies</NavLink>
                        </NavItem>
                        <NavItem className='custom-nav-item'>
                            <NavLink to="/tv-shows" className='nav-link-text'>Tv Shows</NavLink>
                        </NavItem>
                        <NavItem className='pusher-nav-item'/>
                        <NavItem className='custom-nav-item search-bar-item'>
                            <SearchBar/>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default AppNavbar;