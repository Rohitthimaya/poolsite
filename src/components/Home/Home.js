import React from 'react';
import './Home.css';
import './Navbar/Navbar'
import Navbar from './Navbar/Navbar';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <h1>Welcome to My Website</h1>
      <p>This is the home page of my awesome website.</p>
    </div>
  );
}

export default Home;
