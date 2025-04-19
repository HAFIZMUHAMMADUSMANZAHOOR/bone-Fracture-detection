import React, { useState, useEffect } from 'react';

const Home = () => {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullTitle = "BONE FRACTURE DETECTION & ADVISORY SYSTEM";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      // Typing forward
      if (currentIndex < fullTitle.length) {
        timeout = setTimeout(() => {
          setDisplayedTitle(prev => prev + fullTitle[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, 100);
      } else {
        // Pause at full text
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Wait 2 seconds before erasing
      }
    } else {
      // Erasing backward
      if (displayedTitle.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedTitle(prev => prev.slice(0, -1));
        }, 50); // Faster erase speed
      } else {
        // Restart the cycle
        timeout = setTimeout(() => {
          setCurrentIndex(0);
          setIsTyping(true);
        }, 500); // Pause before restarting
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, displayedTitle, isTyping, fullTitle]);

  return (
    <div className="container">
      <div className="text-section">
        <h1>{displayedTitle}</h1>
        <p>
          Our AI-powered system helps detect fractures quickly and provides expert advice for better recovery.
        </p>
        <div className="buttons">
          <button className="seemore">See More...</button>
        </div>
      </div>
    </div>
  );
};

export default Home;