import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login/", {
        username: email,
        password: password,
      });
      console.log(response.data); // Display the response, you can also redirect to a dashboard
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
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
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </div>
      <button className="button-container" onClick={handleLogin}>
      Login
    </button>
      <hr />
      <button className="button-container">
        <Link to="/register" className="button-link">
          Sign Up
        </Link>
      </button>
    </div>
  );
};

export default Login;
