import React from 'react';
import './Home.css';
import Navbar from './Navbar/Navbar';
import TitlePage from './Title/TitlePage'; 
import Footer from './Footer/Footer'
import PoolContainer from './PoolContainer/PoolContainer';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <TitlePage />
      <PoolContainer/>
      <Footer />
    </div>
  );
}

export default Home;
