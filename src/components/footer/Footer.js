import React from 'react';
import logo2 from './logo2.png'
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark mt-3 py-5 text-white">
            <Container>
                <Row>
                    <Col md="3">
                        <img src={logo2} alt="Hot Onion" className="w-100" />
                        <p className="mt-5">Copyright &copy; 2020 Hot Onion </p>
                    </Col>
                    <Col md="3"></Col>
                    <Col md="3">
                        <p>About Hot Onion</p>
                        <p>Our blogs</p>
                        <p>Sign up for delivery</p>
                        <p>Add your restaurants</p>
                    </Col>
                    <Col md="3">
                        <p>Get help</p>
                        <p>Read FAQs</p>
                        <p>View all cities</p>
                        <p>Restaurants near me</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;