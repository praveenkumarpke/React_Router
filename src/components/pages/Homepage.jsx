import React from 'react';
import logo from '../images/homepage.webp';

function Homepage() {
  return (
    <div>
        <h1>Homepage</h1>
        <img src={logo} style={{width:'450px',height:'300px'}} alt="homepage-image" />
    </div>
  )
}

export default Homepage