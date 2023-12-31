import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import ForgotPassword from "./components/User/ForgotPassword";
import Home from "./components/Home/Home";
import Profile from "./components/User/Profile";
import PoolHistory from "./components/Pool/PoolHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="home">Home</Link>
        <Link to="register">Register</Link>
        <Link to="login">Login</Link>
        <Link to="forgot-password">Forgot Password</Link>
        <Link to="profile">Profile</Link>
        <Link to="pool-history">Pool History</Link>
      </div>
    ),
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "pool-history",
    element: <PoolHistory />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
