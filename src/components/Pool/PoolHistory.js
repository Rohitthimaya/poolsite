import React from "react";
import "./PoolHistory.css";

const PoolHistory = () => {
  const poolHistoryData = [
    {
      id: 1,
      poolName: "Pool 1",
      date: "2023-08-15",
      partcipants: "10",
      winner: "User A",
    },
    {
      id: 2,
      poolName: "Pool 2",
      date: "2023-08-16",
      partcipants: "20",
      winner: "User B",
    },
    {
      id: 3,
      poolName: "Pool 3",
      date: "2023-08-17",
      partcipants: "30",
      winner: "User C",
    },
  ];

  return (
    <div className="pool-history-container">
      <h2>Pool History</h2>
      <div className="pool-history-list">
        {poolHistoryData.map((pool) => (
          <div key={pool.id} className="pool-history-item">
            <div className="pool-info">
              <h3>{pool.poolName}</h3>
              <p>Date entered: {pool.date}</p>
              <p>Winner: {pool.winner}</p>
              <p>Participants: {pool.partcipants}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoolHistory;
