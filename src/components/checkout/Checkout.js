import React, { useContext } from 'react';
import { Container, FormControl } from 'react-bootstrap';
import { UserContext } from '../../App';
import Payment from '../Payment/Payment';

const Checkout = () => {
    document.title = 'Red Onion - Checkout';
    const [user] = useContext(UserContext);

    return (
        <Container id="checkout" className="py-5">
            <h3 className="my-4">Your Details -</h3>
            <FormControl type="text" placeholder="Your Name" readOnly value={user.name} className="my-3 bg-light" required />
            <FormControl type="email" placeholder="Your Email" readOnly value={user.email} className="my-3 bg-light" required />
            <FormControl type="text" placeholder="Your Address" className="my-3 bg-light" required />
            <Payment />
        </Container>
    );
};

export default Checkout;