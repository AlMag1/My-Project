import React from 'react';

const Landing = ({ children }) => {
  return (
    <div className="app-container">
      <main id="main" className="app-container--main">
        {children}
      </main>
    </div>
  );
};

export default Landing;
