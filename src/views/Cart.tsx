import React from "react";
import { Button } from "react-bootstrap";
import { Book } from "../models/Book";

interface CartProps {
  cartItems: Book[];
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {
  const calculateTotalPrice = (): number => {
    // Implement the logic to calculate the total price of the items in the cart
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const renderCartItems = (): JSX.Element[] => {
    // Implement the logic to render the cart items
    return cartItems.map((item) => (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>Author: {item.author}</p>
        <p>Price: {item.price}</p>
      </div>
    ));
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {renderCartItems()}
          <h3>Total Price: {calculateTotalPrice()}</h3>
          <Button variant="primary" type="button">
            Checkout
          </Button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
