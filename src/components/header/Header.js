import React from 'react';
import './Header.css';
import logo from './logo.png'
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header className="py-5">
            <Container>
                <img src={logo} alt="Hot Onion" className="w-75" />
                <h3 className="mt-3 mb-5">Best Food Waiting For Your Tummy</h3>
            </Container>
        </header>
    );
};

export default Header;