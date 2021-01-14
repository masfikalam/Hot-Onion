import React from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useHistory } from 'react-router-dom';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    if (error) {
      document.getElementById('error').innerHTML = error.message;
    } else {
        document.getElementById('error').innerHTML = '';
        if(paymentMethod.billing_details) {
            history.push('/thanks')
        }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="form-control my-3 bg-light" />
      <button type="submit" className="btn btn-success" disabled={!stripe}>
        Pay Now
      </button>
      <p id="error" className="mt-3 text-danger text-center"></p>
    </form>
  );
};

export default CheckoutForm;