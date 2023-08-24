import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="container">
      <h2>Password reset</h2>
      <div className="input-container">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </div>
      <button className="button-container">Reset</button>
      <hr />
      <button className="button-container">
        <Link to="/login" className="button-link">
          Login
        </Link>
      </button>
    </div>
  );
};

export default ForgotPassword;
