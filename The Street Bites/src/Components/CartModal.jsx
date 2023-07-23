// CartModal.js
import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    FormControl,
    FormLabel,
  } from '@chakra-ui/react';
  import axios from 'axios';

  const CartModal = ({ isOpen, onClose, dishName, prices, category, image }) => {
    const [halfPortionQuantity, setHalfPortionQuantity] = useState(0);
  const [fullPortionQuantity, setFullPortionQuantity] = useState(0);

  const calculatePriceTotal = () => {
    const halfPortionPrice = prices.halfPortion * halfPortionQuantity;
    const fullPortionPrice = prices.fullPortion * fullPortionQuantity;
    return halfPortionPrice + fullPortionPrice;
  };
  const handleAddToCart = () => {
    // Calculate the total order value
    const totalOrderValue = calculatePriceTotal();

    // Prepare the order details to send in the POST request
    const orderDetails = {
      dishName,
      category,
      image,
      halfPortionQuantity,
      fullPortionQuantity,
      totalOrderValue, // Include the total order value in the order details
    };
    console.log(orderDetails)

    // Make a post request to the server API with the order details
    axios
      .post('https://street-bites-api.onrender.com/cart', orderDetails)
      .then((response) => {
        onClose(); // Close the modal after adding to cart
        alert('Added to the Cart successfully');
      })
      .catch((error) => {
        console.error('Error placing order:', error);
        onClose(); // Close the modal in case of an error
      });
  };


  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add to Cart: {dishName}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Half Portion: {prices.halfPortion}</FormLabel>
            <NumberInput
              defaultValue={halfPortionQuantity}
              onChange={(value) => setHalfPortionQuantity(value)}
              min={0}
              max={10} // You can adjust the max quantity value as needed
            >
              <NumberInputField placeholder="Enter quantity" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Full Portion: {prices.fullPortion}</FormLabel>
            <NumberInput
              defaultValue={fullPortionQuantity}
              onChange={(value) => setFullPortionQuantity(value)}
              min={0}
              max={10} // You can adjust the max quantity value as needed
            >
              <NumberInputField placeholder="Enter quantity" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <p style={{ marginTop: '1rem' }}>
            Total Price: ₹{calculatePriceTotal().toFixed(2)}
          </p>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleAddToCart}>
            Add
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CartModal;
