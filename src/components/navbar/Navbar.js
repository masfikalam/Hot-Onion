import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { UserContext} from '../../App';
import { Link } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import cartIcon from './cart.png';
import logo from './logo.png';
import './Navbar.css';

const TopNav = () => {
    const cart = useSelector(state => state.cart);
    const [user, setUser] = useContext(UserContext);
    const totalDish = cart.reduce((sum, dish) => sum + dish.count, 0);

    // signing out
    function signOutAll(){
        firebase.auth().signOut()
        .then(() => setUser({}))
        .catch(error => console.log(error))   
    }
    
    return (
        <Navbar className="px-2 px-sm-4 py-md-2 shadow" bg="white" expand="md" variant="light" id="Navbar" sticky="top">
            <Link to="/" className="navbar-brand">
                <img src={logo} alt="Hot Onion" width="150px" />
            </Link>
            <Nav className="ml-auto flex-row justify-content-center align-items-center">
                <Link to="/cart" className="cartIcon">
                    <Button variant="transparent btn-sm">
                        <span id="number">{totalDish}</span>
                        <img src={cartIcon} width="35px" alt="Cart"/>
                    </Button>
                </Link>
                {
                    user.signed ?
                    <Button className="d-none d-sm-block ml-3" onClick={signOutAll} variant="danger">Sign Out, {user.name}</Button> : 
                    <Link className="d-none d-sm-block ml-3" to="/login">
                        <Button variant="danger">Sign In</Button>
                    </Link>
                }
            </Nav>
        </Navbar>
    );
};

export default TopNav;