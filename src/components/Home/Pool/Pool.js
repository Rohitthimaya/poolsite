import React from 'react';
import './Pool.css';

const Pool = ({ name, ticketPrice, duration }) => {
  return (
    <div className="pool">
      <h2>{name}</h2>
      <p>Ticket Price: {ticketPrice}</p>
      <p>Duration: {duration}</p>
      <button className="enter-button">Enter Pool</button> {/* Add the button */}
    </div>
  );
};

export default Pool;
