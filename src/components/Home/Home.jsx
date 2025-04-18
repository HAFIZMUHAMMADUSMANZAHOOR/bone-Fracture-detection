import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <div className="text-section">
        <h1>BONE FRACTURE DETECTION & ADVISORY SYSTEM</h1>
        <p>
          Our AI-powered system helps detect fractures quickly and provides expert advice for better recovery.
        </p>
        <div className="buttons">
          <button className="seemore">See More...</button>
        </div>
      </div>
      {/* Optional: Add an image section here */}
        
      <img
          src="/images/Nurse.png"
          alt="Fracture Detection"
          style={{ width: '30%', borderRadius: '10px' }}
        />
      
    </div>
  );
};

export default Home;
