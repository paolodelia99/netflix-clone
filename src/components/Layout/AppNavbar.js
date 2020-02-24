import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import {Link, NavLink} from 'react-router-dom'
import SearchBar from "./SearchBar";

const AppNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" light expand="md">
                <Link to='/' className='custom-nav-bar main-logo text-decoration-none'>
                    Movie App
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar className='nav-items-container custom-nav-bar' >
                        <NavItem className='custom-nav-item'>
                            <NavLink exact to="/" className='nav-link-text'  activeStyle={{fontWeight: "bold"}} >Home</NavLink>
                        </NavItem>
                        <NavItem className='custom-nav-item'>
                            <NavLink to="/movies" className='nav-link-text' activeStyle={{fontWeight: "bold"}} >Movies</NavLink>
                        </NavItem>
                        <NavItem className='custom-nav-item'>
                            <NavLink to="/tv-shows" className='nav-link-text' activeStyle={{fontWeight: "bold"}} >Tv Shows</NavLink>
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