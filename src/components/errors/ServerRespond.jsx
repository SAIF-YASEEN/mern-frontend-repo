import React, { useState } from "react";
import { FaNodeJs, FaReact } from "react-icons/fa"; // Icons for MERN stack
import { SiExpress } from "react-icons/si"; // Express logo
import { FaDatabase } from "react-icons/fa"; // MongoDB logo
import "./Error.css"; // Style for the error pages

const ServerError = ({ onRetry }) => {
  return (
    <div className="error-page">
      <h1 className="error-title">SERVER DID NOT RESPOND</h1>
      <p className="error-body">
        We are currently experiencing issues reaching the server. Please check
        your network or try again later.
      </p>
      <p className="error-solution">Please try again after a moment.</p>
      <button className="error-btn" onClick={onRetry}>
        RETRY
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
};

export default ServerError;
