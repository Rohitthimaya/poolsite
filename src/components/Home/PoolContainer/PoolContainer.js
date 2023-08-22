import React from 'react';
import Pool from '../Pool/Pool'; // Import the Pool component
import './PoolContainer.css'; // Import your CSS file for styling

const PoolContainer = () => {
  // Mock data for pools (replace with actual data)
  const pools = [
    { name: 'Demo Pool One', ticketPrice: '10 points', duration: '2 weeks' },
    { name: 'Demo Pool Two', ticketPrice: '20 points', duration: '3 weeks' },
    { name: 'Demo Pool Three', ticketPrice: '15 points', duration: '1 weeks' },
    // Add more pool data
  ];

  return (
    <div className="pool-container">
      {pools.map((pool, index) => (
        <Pool key={index} name={pool.name} ticketPrice={pool.ticketPrice} duration={pool.duration} />
      ))}
    </div>
  );
};

export default PoolContainer;
