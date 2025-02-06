import React, { useEffect, useState } from "react";
import { FaNodeJs, FaReact } from "react-icons/fa"; // Node.js and React Icons
import { SiExpress } from "react-icons/si"; // Express Logo
import { FaDatabase } from "react-icons/fa"; // MongoDB Logo
import "./Error.css"; // The same CSS file can be reused for styling

function Ofline() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine); // Initial offline check
  const [isTryingToReconnect, setIsTryingToReconnect] = useState(false); // Track whether we're trying to reconnect

  // Listen for online and offline status changes
  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false); // When the user is back online
      setIsTryingToReconnect(false); // Stop trying to reconnect
    };
    const handleOffline = () => {
      setIsOffline(true); // When the user goes offline
      setIsTryingToReconnect(true); // Start attempting to reconnect
    };

    // Monitor the online/offline events
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (isOffline) {
    return (
      <div className="error-page">
        <h1 className="error-title">NO INTERNET CONNECTION</h1>
        <p className="error-body">
          You are currently offline. We couldn't connect to the internet.
        </p>
        <p className="error-solution">
          Please check your connection and try again.
        </p>
        <button
          className="error-btn"
          onClick={() => window.location.reload()} // Retry button for reconnecting
        >
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
  }

  // Show trying to reconnect if the internet is temporarily lost but connection is being established
  if (isTryingToReconnect) {
    return (
      <div className="error-page">
        <h1 className="error-title">We Are Trying to Reconnect You</h1>
        <p className="error-body">
          It seems you're experiencing network issues. We're trying to reconnect
          you to the internet.
        </p>
        <p className="error-solution">Please wait a moment...</p>

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

  return null; // Render nothing if everything is working fine
}

export default Ofline;
