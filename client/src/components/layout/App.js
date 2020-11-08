import React from 'react';
import NavBar from './navbar';
import Footer from './Footer';

const Landing = ({ children }) => {
  return (
    <div className="app-container">
      <main id="main" className="app-container__main">
        <div className="app-container__header">
          <NavBar />
        </div>
        <div className="app-container__body">{children}</div>
        <div className="app-container__footer">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Landing;
