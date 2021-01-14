import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import bike from './bike.png';
import map from './map.png';
import './Thanks.css';

const Thanks = () => {
    document.title = 'Red Onion - Thank You';
    const cart = useSelector(state => state.cart);
    const dishes = cart.reduce((sum, dish) => sum + dish.count, 0);
    
    return (
        <Container id="thanks" className="py-5">
            <Row className="align-items-center">
                <Col md={6} className="text-center bikeFlow">
                    <img id="bike" src={bike} alt="bike" className="w-50" />
                    <h3 className="my-5">Delivering {dishes} items to your home.</h3>
                </Col>
                <Col md={6}>
                    <img src={map} alt="map" className="w-100 shadow border mb-4" />
                </Col>
            </Row>
        </Container>
    );
};

export default Thanks;