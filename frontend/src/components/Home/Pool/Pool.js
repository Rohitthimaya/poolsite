import React, { useState } from 'react';
import './Pool.css';
import PoolDetails from '../PoolDetails/PoolDetails';

const Pool = ({ name, ticketPrice, duration, firstPrize, secondPrize, thirdPrize }) => {
  const [entered, setEntered] = useState(false);
  const durationInSeconds = parseDurationToSeconds(duration); // Calculate duration in seconds

  const enterPool = () => {
    setEntered(true);
  };

  const closeDetails = () => {
    setEntered(false);
  };

  return (
    <div className="pool">
      <h2>{name}</h2>
      <p>Ticket Price: {ticketPrice}</p>
      <p>Duration: {duration}</p>
      {entered ? (
        <PoolDetails
          onClose={closeDetails}
          users={['User 1', 'User 2', 'User 3']} // Replace with actual users
          firstPrize={firstPrize}
          secondPrize={secondPrize}
          thirdPrize={thirdPrize}
          poolDuration={durationInSeconds}
        />
      ) : (
        <button className="enter-button" onClick={enterPool}>Enter Pool</button>
      )}
    </div>
  );
};

export default Pool;

function parseDurationToSeconds(duration) {
  const weeks = parseInt(duration.split(' ')[0]);
  return weeks * 7 * 24 * 60 * 60; // Convert weeks to seconds
}
