import React, { useState, useEffect } from 'react';
import './PoolDetails.css';

const PoolDetails = ({ onClose, users, firstPrize, secondPrize, thirdPrize, poolDuration }) => {
  const [timeRemaining, setTimeRemaining] = useState(poolDuration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const days = Math.floor(time / 86400); // Number of seconds in a day
    const hours = Math.floor((time % 86400) / 3600); // Number of seconds in an hour
    const minutes = Math.floor((time % 3600) / 60); // Number of seconds in a minute
    const seconds = time % 60;
  
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };
  

  return (
    <div className="pool-details-container">
      <div className="pool-details-content">
        <div className="top-section">
          <div className="prizes-and-timer">
            <h2>Pool Details</h2>
            <div className="timer">
              <p>Time Remaining: {formatTime(timeRemaining)}</p>
            </div>
            <div className="prize">
              <p>1st Prize: {firstPrize} points</p>
              <p>2nd Prize: {secondPrize} points</p>
              <p>3rd Prize: {thirdPrize} points</p>
            </div>
          </div>
        </div>
        <div className="user-list">
          <h3>Users Entered:</h3>
          <table>
            <thead>
              <tr>
                <th>User</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="pool-details-close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PoolDetails;
