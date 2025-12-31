import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import gsap from 'gsap';
import './Header.css';

function Header() {
  const { getTotalItems } = useCart();
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Header is already visible, no need to animate from y: -100
    // Logo animation
    gsap.from(logoRef.current, {
      duration: 0.6,
      delay: 0.1,
      scale: 0.8,
      opacity: 0.3,
      ease: 'back.out'
    });

    // Nav animation - stagger the links
    gsap.from(navRef.current?.querySelectorAll('.nav-link, .cart-link'), {
      duration: 0.5,
      delay: 0.2,
      opacity: 0.5,
      y: 0,
      stagger: 0.08,
      ease: 'power2.out'
    });
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">
        <Link to="/" className="logo" ref={logoRef}>
          <span className="logo-emoji">🍽️</span>
          <span className="logo-text">Harika Food</span>
        </Link>
        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`} ref={navRef}>
          <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            <span className="nav-icon">🏠</span>
            <span>Home</span>
          </Link>
          <Link to="/restaurants" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            <span className="nav-icon">🍽️</span>
            <span>Restaurants</span>
          </Link>
          <Link to="/foods" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            <span className="nav-icon">🥘</span>
            <span>All Foods</span>
          </Link>
          <div className="nav-divider"></div>
          <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            <span className="nav-icon">ℹ️</span>
            <span>About</span>
          </a>
          <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            <span className="nav-icon">📞</span>
            <span>Contact</span>
          </a>
        </nav>

        <Link to="/cart" className="cart-link">
          <span className="cart-icon">🛒</span>
          {getTotalItems() > 0 && <span className="cart-badge">{getTotalItems()}</span>}
          <span className="cart-text">Cart</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
