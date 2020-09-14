import React from 'react';
import './Navbar.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from './logo.png';
import cartIcon from './cart.png'

const TopNav = () => {
    return (
        <Navbar collapseOnSelect bg="white" expand="md" variant="light" id="Navbar" sticky="top">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Hot Onion" width="150px" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Button variant="transparent btn-sm my-3 my-md-0 mx-3">
                            <img src={cartIcon} alt="Cart"/>
                        </Button>
                        <Button variant="danger">Sign Up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNav;