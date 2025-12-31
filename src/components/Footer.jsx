import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>🍕 FoodHub</h3>
          <p>Delivering delicious food to your doorstep.</p>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/restaurants">Restaurants</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#help">Help Center</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Download App</h3>
          <p>Get FoodHub on your mobile device</p>
          <div className="app-links">
            <a href="#ios" className="app-link">📱 iOS App</a>
            <a href="#android" className="app-link">🤖 Android App</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 FoodHub. All rights reserved. | Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
}

export default Footer;
