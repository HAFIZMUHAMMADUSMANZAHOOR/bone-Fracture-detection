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
    <div className="flex items-center justify-center min-h-[90vh] w-full bg-gradient-to-br from-slate-900 to-slate-800 bg-center bg-cover p-5 text-center">
      <div className="text-white text-center p-5 max-w-4xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-100">
          {displayedTitle}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
          Our AI-powered system helps detect fractures quickly and provides expert advice for better recovery.
        </p>
        <div className="flex justify-center">
          <button className="bg-yellow-400 hover:bg-teal-300 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-sm sm:text-base">
            See More...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;