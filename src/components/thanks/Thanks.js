import React, { useContext } from 'react';
import './Thanks.css';
import { Col, Container, Row } from 'react-bootstrap';
import map from './map.png';
import bike from './bike.png';
import { useSelector } from 'react-redux';

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
                    {
                        cart.map(dish => <div key={dish.id} className="bg-light p-3">
                        <h4 className="text-dark">{dish.name}, {dish.count} Plate</h4>
                        </div> )
                    }
                </Col>
                <Col md={6}>
                    <img src={map} alt="map" className="w-100 shadow border mb-4" />
                </Col>
            </Row>
        </Container>
    );
};

export default Thanks;