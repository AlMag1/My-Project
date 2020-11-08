import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="section-landing">
        LANDING PAGE
        <Link to="/user">GO TO USER</Link>
      </div>
    );
  }
}

export default Landing;
