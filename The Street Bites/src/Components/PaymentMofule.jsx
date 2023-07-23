import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const PaymentModule = ({ isOpen, onClose, totalOrderValue }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform actual payment processing using Stripe here
    // For this example, we'll simulate a successful payment
    try {
      const { data: clientSecret } = await axios.post(
        'https://your-api-url.com/create-payment-intent', // Replace with your backend API URL to create a payment intent
        { amount: totalOrderValue * 100 } // Convert totalOrderValue to cents as Stripe accepts amounts in cents
      );

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: name,
            address: {
              line1: address,
            },
          },
        },
      });

      if (paymentResult.error) {
        console.log('Payment failed:', paymentResult.error.message);
        // Handle payment failure (display error message, etc.)
      } else {
        console.log('Payment successful:', paymentResult.paymentIntent);
        // Handle payment success (display success message, navigate to success page, etc.)
      }
    } catch (error) {
      console.error('Error processing payment:', error.message);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Payment Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl id="name" isRequired mb={3}>
              <FormLabel>Name</FormLabel>
              <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl id="address" isRequired mb={3}>
              <FormLabel>Delivery Address</FormLabel>
              <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </FormControl>
            <FormControl id="card-element" isRequired mb={3}>
              <FormLabel>Card Details</FormLabel>
              <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="yellow" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="green" onClick={handleSubmit}>
            Make Payment
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PaymentModule;
