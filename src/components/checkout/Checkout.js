import React, { useContext } from 'react';
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import { CartContext } from '../../App';

const Checkout = () => {
    const [cart, setCart] = useContext(CartContext);
    const dishes = cart.reduce((sum, dish) => sum + dish.count, 0);
    const total = cart.reduce((sum, dish) => sum + dish.price, 0);

    function removeDish(id) {
        const newCart = cart.filter(dish => dish.id !== id);
        setCart(newCart);
    }

    return (
        <Container id="checkout" className="py-5">
            <h3>
                Total Dishes: <span className="text-danger">{dishes}</span>
            </h3>
            <Row>
                <Col md={6}>
                    {dishes>0 && <div className="mt-4 bg-dark text-white rounded p-4">
                        <h5>Subotal: ${total}</h5>
                        <h5>Tax : $1</h5>
                        <h5>Delivery Fee: $4</h5>
                        <h5>Total: ${(total+5).toFixed(2)}</h5>
                    </div>}
                    {
                        cart.map(dish => <div className="my-5 bg-light text-center p-3">
                            <h4 className="text-danger">{dish.name}</h4>
                            <h5>Quantity: <span className="text-primary">{dish.count}</span></h5>
                            <h5>Price: <span className="text-success">${(dish.price)*(dish.count)}</span></h5>
                            <Button variant="danger" className="mt-4" onClick={()=>removeDish(dish.id)}>Remove</Button>
                        </div>)
                    }
                </Col>
                <Col md={6}>
                    {dishes>0 && <Form>
                        <h3 className="my-4">Your Details -</h3>
                        <FormControl variant="text" placeholder="Your Name" className="my-3 bg-light" />
                        <FormControl variant="email" placeholder="Your Email" className="my-3 bg-light" />
                        <FormControl variant="text" placeholder="Your Address" className="my-3 bg-light" />
                        <Button variant="success">Place Order</Button>
                    </Form>}
                </Col>
            </Row>
        </Container>
    );
};

export default Checkout;