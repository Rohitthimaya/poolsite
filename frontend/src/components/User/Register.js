import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios for API calls
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("/api/users/", {
        username: name,
        email: email,
        password: password,
        phone_number: number,
      });
      console.log(response.data); // Display the response, you can also redirect to login
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="container">
      <h2>Account Registration</h2>
      <div className="input-container">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
      </div>
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
      <div className="input-container">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </div>
      <div className="input-container">
        <label>Phone Number (Optional)</label>
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Phone Number (Optional)"
          required
        />
      </div>
      <button className="button-container" onClick={handleRegister}>
        Sign Up
      </button>
      <hr />
      <button className="button-container">
        <Link to="/login" className="button-link">
          Login
        </Link>
      </button>
    </div>
  );
};

export default Register;
