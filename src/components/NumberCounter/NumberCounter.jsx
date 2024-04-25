import React, { useState, useEffect } from 'react';

const NumberCounter = ({ start, end, duration }) => {
  const [currentNumber, setCurrentNumber] = useState(start);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateNumber = () => {
      const now = Date.now();
      const timePassed = now - startTime;
      const progress = Math.min(1, timePassed / duration);
      const nextNumber = Math.floor(progress * (end - start) + start);
      
      setCurrentNumber(nextNumber);
      
      if (now < endTime) {
        requestAnimationFrame(updateNumber);
      }
    };

    requestAnimationFrame(updateNumber);

    return () => {
      // Clean up
    };
  }, [start, end, duration]);

  return <span>{currentNumber}</span>;
};

export default NumberCounter;
