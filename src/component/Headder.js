import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Headder = () => {
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Headder;
