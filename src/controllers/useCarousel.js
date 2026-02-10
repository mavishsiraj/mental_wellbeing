import { useRef, useState, useEffect } from 'react';

/**
 * Custom hook for managing infinite carousel scrolling
 * @param {Array} cards - The array of cards to display
 * @returns {Object} Carousel state and handlers
 */
const useCarousel = (cards) => {
  const [isPaused, setIsPaused] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const carouselRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  // Triple the cards for infinite scroll effect
  const infiniteCards = [...cards, ...cards, ...cards];

  // Handle edge hover scrolling
  const handleEdgeHover = (direction) => {
    setScrollDirection(direction);
    if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    
    scrollIntervalRef.current = setInterval(() => {
      if (carouselRef.current) {
        const scrollAmount = direction === 'left' ? -3 : 3;
        carouselRef.current.scrollLeft += scrollAmount;
        
        // Reset position for infinite loop
        const maxScroll = carouselRef.current.scrollWidth / 3;
        if (carouselRef.current.scrollLeft <= 0) {
          carouselRef.current.scrollLeft = maxScroll;
        } else if (carouselRef.current.scrollLeft >= maxScroll * 2) {
          carouselRef.current.scrollLeft = maxScroll;
        }
      }
    }, 16);
  };

  const handleEdgeLeave = () => {
    setScrollDirection(null);
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
  };

  // Arrow navigation
  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const cardWidth = 300;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      // Check bounds after scroll
      setTimeout(() => {
        if (carouselRef.current) {
          const maxScroll = carouselRef.current.scrollWidth / 3;
          if (carouselRef.current.scrollLeft <= 0) {
            carouselRef.current.scrollLeft = maxScroll;
          } else if (carouselRef.current.scrollLeft >= maxScroll * 2) {
            carouselRef.current.scrollLeft = maxScroll;
          }
        }
      }, 400);
    }
  };

  // Auto-scroll animation
  useEffect(() => {
    let animationId;
    let lastTime = 0;
    
    const animate = (currentTime) => {
      if (!isPaused && carouselRef.current && !scrollDirection) {
        if (currentTime - lastTime > 30) {
          carouselRef.current.scrollLeft += 1;
          
          // Reset for infinite loop
          const maxScroll = carouselRef.current.scrollWidth / 3;
          if (carouselRef.current.scrollLeft >= maxScroll * 2) {
            carouselRef.current.scrollLeft = maxScroll;
          }
          lastTime = currentTime;
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    // Set initial scroll position to middle section
    if (carouselRef.current) {
      const maxScroll = carouselRef.current.scrollWidth / 3;
      carouselRef.current.scrollLeft = maxScroll;
    }
    
    return () => cancelAnimationFrame(animationId);
  }, [isPaused, scrollDirection]);

  return {
    carouselRef,
    infiniteCards,
    isPaused,
    scrollDirection,
    setIsPaused,
    handleEdgeHover,
    handleEdgeLeave,
    scrollCarousel
  };
};

export default useCarousel;
