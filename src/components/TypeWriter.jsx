import React, { useEffect, useRef } from 'react';

const TypeWriter = ({ text, className = '' }) => {
  const el = useRef(null);
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypeWriter;