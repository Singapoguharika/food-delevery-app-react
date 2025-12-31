import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Your cart is empty</h1>
        <p>Add some delicious food to your cart!</p>
        <Link to="/" className="continue-shopping">Continue Shopping</Link>
      </div>
    );
  }

  const handleCheckout = () => {
    alert('Thank you for your order! Your food will be delivered soon.');
    clearCart();
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="price">${item.price.toFixed(2)}</p>
              </div>
              <div className="quantity-control">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <div className="item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Delivery Fee:</span>
            <span>$2.99</span>
          </div>
          <div className="summary-row">
            <span>Tax:</span>
            <span>${(getTotalPrice() * 0.1).toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>${(getTotalPrice() * 1.1 + 2.99).toFixed(2)}</span>
          </div>
          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
          <Link to="/" className="continue-shopping-link">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
