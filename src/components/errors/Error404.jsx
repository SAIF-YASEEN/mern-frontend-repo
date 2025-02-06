import React from "react";
import { FaNodeJs, FaReact } from "react-icons/fa"; // Node.js and React Icons
import { SiExpress } from "react-icons/si"; // Express Logo
import { FaDatabase } from "react-icons/fa"; // MongoDB Logo
import "./Error.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function ErrorPage() {
  const location = useLocation();
  
  return (
    <div className="error-page">
      <h1 className="error-title">PAGE NOT FOUND</h1>
      <p className="error-body">
        {" "}
        WE DO NOT HANDLE THIS PAGE : {location.pathname}
      </p>
      <p className="error-solution">VISIT OUR HOME PAGE TO LEARN ABOUT MERN </p>
      <button
        className="error-btn"
        onClick={() => (window.location.href = "/")}
      >
        GO TO HOME
      </button>

      {/* MERN Stack Logos */}
      <div className="mern-logos">
        <FaDatabase className="nike-logo" />
        <SiExpress className="adidas-logo" />
        <FaReact className="puma-logo" />
        <FaNodeJs className="underarmour-logo" />
      </div>
    </div>
  );
}

export default ErrorPage;
