import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoHeaderLayout from "./components/layouts/NoHeaderLayout";
import HeaderLayout from "./components/layouts/HeaderLayout";
import HeaderLayoutRouter from "./routes/HeaderLayoutRouter.jsx";
import Error404 from "./components/errors/Error404";
import LogoDisplay from "./components/landing/LogoPage";
import { AuthProvider } from "./context/AuthContext.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Ofline from "./components/errors/Ofline.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(!navigator.onLine); // Track online/offline status

  // Handle internet connection changes
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []); // Only runs once when the component is mounted

  // Display loading screen for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []); // Only runs once when the component is mounted

  return (
    <AuthProvider>
      <div className="App">
        {isLoading ? (
          <LogoDisplay /> // Loading screen
        ) : isOffline ? (
          <Ofline /> // Show offline page if user is offline
        ) : (
          // All routes inside the Router only if online
          <Router>
            <Routes>
              <Route element={<HeaderLayout />}>{HeaderLayoutRouter()}</Route>
              <Route element={<NoHeaderLayout />}>
                <Route path="*" element={<Error404 />} />
              </Route>
            </Routes>
          </Router>
        )}
      </div>
    </AuthProvider>
  );
}

export default App;
