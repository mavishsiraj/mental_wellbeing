import { useState, useEffect } from 'react';

/**
 * Custom hook for rotating quotes at specified intervals
 * @param {Array} quotes - Array of quote strings
 * @param {number} interval - Rotation interval in milliseconds (default: 5000)
 * @returns {number} Current quote index
 */
const useQuoteRotation = (quotes, interval = 5000) => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [quotes.length, interval]);

  return currentQuote;
};

export default useQuoteRotation;
