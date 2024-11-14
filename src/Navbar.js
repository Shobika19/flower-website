
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import p1 from './images/p1.webp';

const NavigationBar = () => {
    return (
        <Navbar bg="info" variant="light" expand="lg" className="w-100">
            <Navbar.Brand href="/">
                <img src={p1} alt="Logo" height="50px" style={{ marginLeft: '25px' }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/cruds">
                        <Nav.Link>Cruds</Nav.Link>
                    </LinkContainer>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
