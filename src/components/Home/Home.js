import React from 'react';
import './Home.css';
import Navbar from './Navbar/Navbar';
import TitlePage from './Title/TitlePage'; 
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <TitlePage />
      <Footer />
    </div>
  );
}

export default Home;
