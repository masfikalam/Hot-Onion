import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CardForm';

const stripePromise = loadStripe('pk_test_51HZfLkGZekxRHO8JUPC84k0UPyzfCHrGO7rzzG9eg1SLP7eJEsGGCRCfysSKQjGgTO795UgmDXX0qx85rFUDqfh300O8sYphOj');

const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default Payment;