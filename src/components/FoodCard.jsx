import React, { useEffect, useRef, useState } from 'react';
import { useCart } from '../context/CartContext';
import Toast, { useToast } from './Toast';
import './FoodCard.css';

function FoodCard({ food }) {
  const { addToCart } = useCart();
  const { toast, showToast } = useToast();
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      card.classList.add('hover');
    };

    const handleMouseLeave = () => {
      card.classList.remove('hover');
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({
      id: food.id,
      name: food.name,
      price: food.price,
      image: food.image,
    });
    
    // Show toast notification
    showToast(`✓ ${food.name} Added to Cart`, 'success', 3000);
    
    // Add pulse animation
    const btn = e.currentTarget;
    btn.classList.add('pulse');
    setTimeout(() => btn.classList.remove('pulse'), 600);
  };

  const getTypeIcon = () => {
    if (food.type === 'veg') return '🟢';
    if (food.type === 'nonveg') return '🔴';
    return '';
  };

  return (
    <>
      <Toast message={toast?.message} type={toast?.type} />
      <div className="food-card" ref={cardRef}>
        <div className="food-image-wrapper">
          <img src={food.image} alt={food.name} className="food-image" />
          <div className="food-overlay"></div>
          <div className="food-type-badge">{getTypeIcon()}</div>
          <div className="food-rating-badge">⭐ {food.rating}</div>
        </div>
        
        <div className="food-info">
          <h3 className="food-name">{food.name}</h3>
          {food.description && (
            <p className="food-description">{food.description}</p>
          )}
          
          <div className="food-footer">
            <span className="food-price">${food.price.toFixed(2)}</span>
            <button 
              className="add-btn" 
              onClick={handleAddToCart}
            >
              + Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodCard;
