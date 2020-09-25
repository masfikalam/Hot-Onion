import React, { useContext } from 'react';
import './Navbar.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from './logo.png';
import cartIcon from './cart.png';
import {CartContext, UserContext} from '../../App';
import { Link } from 'react-router-dom';

const TopNav = () => {
    const [cart] = useContext(CartContext);
    const [user, setUser] = useContext(UserContext);
    const totalDish = cart.reduce((sum, dish) => sum + dish.count, 0);

    // signing out
    function signOutAll(){
        firebase.auth().signOut()
        .then(() => setUser({
            signed: false,
            name: '',
            email: '',
            password: '',
            message: ''
        }))
        .catch(error => console.log(error))   
    }
    
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
                        {
                            user.signed ?
                            <Button onClick={signOutAll} variant="danger">Sign Out, {user.name}</Button> : 
                            <Link to="/login">
                                <Button variant="danger">Sign Up</Button>
                            </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNav;