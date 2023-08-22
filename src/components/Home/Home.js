import React from 'react';
import './Home.css';
import Navbar from './Navbar/Navbar';
import TitlePage from './Title/TitlePage'; 

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      < TitlePage />
    </div>
  );
}

export default Home;
