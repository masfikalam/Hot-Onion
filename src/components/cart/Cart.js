import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Cart = () => {
    document.title = 'Red Onion - Cart';
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const history = useHistory();

    // calculations
    const dishes = cart.reduce((sum, dish) => sum + dish.count, 0);
    const total = cart.reduce((sum, dish) => sum + (dish.price * dish.count), 0);

    // remove dish
    function removeDish(id) {
        dispatch({
            type: 'DELETE_FOOD',
            payload: id
        })
    }

    // checking empty cart
    if (dishes < 1) {
        history.push('/');
    }

    return (
        <section id="cart" className="container py-5">
            <Row>
                <Col md={6} className="text-center">
                    <h3>Total Dishes: <span className="text-danger">{dishes}</span></h3>
                    <div className="mt-4 bg-dark text-white rounded text-left p-4">
                        <h5>Total: ${total}</h5>
                        <h5>Tax : $1.5</h5>
                        <h5>Delivery Fee: $4.0</h5>
                        <h5>Subotal: ${(total + 5.5).toFixed(2)}</h5>
                    </div>
                    <Link to="/checkout">
                        <Button variant="success" className="mt-5 btn-lg rounded shadow">Proceed Checkout</Button>
                    </Link>
                </Col>
                <Col md={6} className="text-center pt-5 pt-md-0 mt-5 mt-md-0">
                    <h3>List of Dishes -</h3>
                    {
                        cart.map(dish =>
                        <div key={dish.id} className="my-4 shadow bg-light p-3">
                            <h4 className="text-danger">{dish.name}</h4>
                            <h5>Quantity: <span className="text-primary">{dish.count}</span></h5>
                            <h5>Price: <span className="text-success">${dish.price}</span></h5>
                            <Button variant="danger" className="mt-4" onClick={() => removeDish(dish.id)}>Remove</Button>
                        </div>)
                    }
                </Col>
            </Row>
        </section>
    );
};

export default Cart;