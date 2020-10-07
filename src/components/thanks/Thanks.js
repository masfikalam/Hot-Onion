import React, { useContext } from 'react';
import './Thanks.css';
import { Col, Container, Row } from 'react-bootstrap';
import map from './map.png';
import bike from './bike.png';
import { CartContext } from '../../App';

const Thanks = () => {
    document.title = 'Hot Onion';
    const [cart] = useContext(CartContext);
    const dishes = cart.reduce((sum, dish) => sum + dish.count, 0);
    return (
        <Container id="thanks" className="py-5">
                {
                    dishes !== 0 ? 
                    <Row className="align-items-center">
                        <Col md={6}>
                            <img src={map} alt="map" className="w-100 shadow border mb-4" />
                        </Col>
                        <Col md={6} className="text-center bikeFlow">
                        <img id="bike" src={bike} alt="bike" className="w-50" />
                        <h3 className="my-5">Delivering {dishes} items to your home.</h3>
                        {cart.map(dish => <div key={dish.id} className="bg-light p-3">
                            <h4 className="text-dark">{dish.name}, {dish.count} Plate</h4>
                        </div> )}
                        </Col>
                    </Row> : 
                    <h3 className="text-center text-danger">Please Order First</h3>
                }
        </Container>
    );
};

export default Thanks;