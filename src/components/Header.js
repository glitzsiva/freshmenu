
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

//  Custom Imports





const Header = () => {
    return (
        <Navbar className='header sticky-top border-bottom' color="light" light expand="md">
            <div className="container">
                <NavbarBrand tag={Link} to="/"><img height="25" src={process.env.PUBLIC_URL + "images/header-logo.svg"} alt="logo" /></NavbarBrand>
                <Nav className="mr-auto flex-row" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/cart/"><i className="fa fa-bell-o" aria-hidden="true"></i></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/cart/"><i className="fa fa-percent" aria-hidden="true"></i><span > Offers</span></NavLink>
                    </NavItem>
                </Nav>
            </div>
        </Navbar>
    );
}

export default Header;