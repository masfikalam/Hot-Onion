import React from 'react';
import './Navbar.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from './logo.png';
import cartIcon from './cart.png'
import { useContext } from 'react';
import {CartContext} from '../../App'
import { Link } from 'react-router-dom';

const TopNav = () => {
    const [cart] = useContext(CartContext);
    const totalDish = cart.reduce((sum, dish) => sum + dish.count, 0)
    
    return (
        <Navbar collapseOnSelect bg="white" expand="md" variant="light" id="Navbar" sticky="top">
            <Container fluid>
                <Navbar.Brand>
                    <Link to="/">
                        <img src={logo} alt="Hot Onion"     width="150px" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto align-items-center">
                        <Link to="/checkout">
                            <Button variant="transparent btn-sm my-3 my-md-0 mx-3">
                                <h6 className="m-0 p-0">{totalDish}</h6>
                                <img src={cartIcon} alt="Cart"/>
                            </Button>
                        </Link>
                        <Link to="login">
                            <Button variant="danger">Sign Up</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNav;