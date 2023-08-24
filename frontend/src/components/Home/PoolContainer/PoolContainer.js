import React from 'react';
import Pool from '../Pool/Pool';
import './PoolContainer.css';

const PoolContainer = () => {
  // Mock data for pools (replace with actual data)
  const pools = [
    { name: 'Demo Pool One', ticketPrice: '10 points', duration: '2 weeks', firstPrize: 100, secondPrize: 50, thirdPrize: 25 },
    { name: 'Demo Pool Two', ticketPrice: '20 points', duration: '3 weeks', firstPrize: 200, secondPrize: 100, thirdPrize: 50 },
    { name: 'Demo Pool Three', ticketPrice: '15 points', duration: '1 week', firstPrize: 150, secondPrize: 75, thirdPrize: 40 },
    // Add more pool data
  ];

  return (
    <div className="pool-container">
      {pools.map((pool, index) => (
        <Pool
          key={index}
          name={pool.name}
          ticketPrice={pool.ticketPrice}
          duration={pool.duration}
          firstPrize={pool.firstPrize}
          secondPrize={pool.secondPrize}
          thirdPrize={pool.thirdPrize}
        />
      ))}
    </div>
  );
};

export default PoolContainer;
