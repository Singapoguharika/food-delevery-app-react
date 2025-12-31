import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Hero.css';

function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const floatingEmojiRef = useRef([]);
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=600&fit=crop',
      title: '🍕 Fresh Pizzas',
      subtitle: 'Crispy & Delicious'
    },
    {
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&h=600&fit=crop',
      title: '🍔 Juicy Burgers',
      subtitle: 'Made with Love'
    },
    {
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=600&fit=crop',
      title: '🍜 Delicious Sushi',
      subtitle: 'Authentic & Fresh'
    },
    {
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&h=600&fit=crop',
      title: '🌮 Amazing Tacos',
      subtitle: 'Flavorful & Spicy'
    }
  ];

  useEffect(() => {
    // Title animation
    gsap.from(titleRef.current, {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out'
    });

    // Typewriter effect for subtitle
    const subtitleText = "Order from your favorite restaurants and get your favorite dishes in minutes";
    const subtitleElement = subtitleRef.current;
    let index = 0;

    const typeWriter = () => {
      if (index === 0) {
        subtitleElement.textContent = '';
      }
      
      if (index < subtitleText.length) {
        subtitleElement.textContent += subtitleText.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
      } else {
        // Restart after 3 seconds
        setTimeout(() => {
          index = 0;
          typeWriter();
        }, 3000);
      }
    };

    // Start typewriter after slight delay
    gsap.from(subtitleRef.current, {
      duration: 0.5,
      delay: 0.2,
      opacity: 0,
      ease: 'power3.out',
      onComplete: typeWriter
    });

    // Button animation
    gsap.from(buttonRef.current, {
      duration: 1,
      delay: 0.4,
      scale: 0.8,
      opacity: 0,
      ease: 'back.out'
    });

    // Floating emojis animation
    floatingEmojiRef.current.forEach((emoji, index) => {
      gsap.fromTo(emoji, 
        {
          opacity: 0,
          y: 50
        },
        {
          duration: 0.8,
          delay: 0.5 + index * 0.1,
          opacity: 1,
          y: 0,
          ease: 'power3.out'
        }
      );

      // Continuous floating animation
      gsap.to(emoji, {
        duration: 3 + index,
        y: -20,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });

    // Auto-carousel scroll
    const carouselInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(carouselInterval);
  }, []);

  useEffect(() => {
    if (!carouselRef.current) return;

    gsap.to(carouselRef.current, {
      x: `${-currentSlide * 100}%`,
      duration: 0.8,
      ease: 'power2.inOut'
    });
  }, [currentSlide]);

  return (
    <>
      {/* Carousel Banner */}
      <section className="carousel-section">
        <div className="carousel-container">
          <div className="carousel-wrapper" ref={carouselRef}>
            {slides.map((slide, index) => (
              <div key={index} className="carousel-slide">
                <img src={slide.image} alt={slide.title} className="carousel-image" />
                <div className="carousel-overlay"></div>
                <div className="carousel-content">
                  <h2 className="carousel-title">{slide.title}</h2>
                  <p className="carousel-subtitle">{slide.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="floating-emojis">
            <span ref={el => floatingEmojiRef.current[0] = el} className="float-emoji">🍕</span>
            <span ref={el => floatingEmojiRef.current[1] = el} className="float-emoji">🍔</span>
            <span ref={el => floatingEmojiRef.current[2] = el} className="float-emoji">🍜</span>
            <span ref={el => floatingEmojiRef.current[3] = el} className="float-emoji">🍱</span>
          </div>

          <h1 ref={titleRef} className="hero-title">
            Delicious Food Delivered to Your Door
          </h1>
          <p ref={subtitleRef} className="hero-subtitle">
          </p>
          <button ref={buttonRef} className="cta-button">
            <span>🚀 Start Ordering</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;
