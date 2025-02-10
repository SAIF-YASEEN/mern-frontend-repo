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
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPopup, setShowInstallPopup] = useState(false);

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
  }, []);

  // Display loading screen for 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Capture PWA install event and show custom popup
  useEffect(() => {
    const beforeInstallPromptHandler = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setShowInstallPopup(true);
    };

    window.addEventListener("beforeinstallprompt", beforeInstallPromptHandler);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        beforeInstallPromptHandler
      );
    };
  }, []);

  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show install prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted PWA install");
        } else {
          console.log("User dismissed PWA install");
        }
        setDeferredPrompt(null);
        setShowInstallPopup(false);
      });
    }
  };

  return (
    <AuthProvider>
      <div className="App">
        {isLoading ? (
          <LogoDisplay />
        ) : isOffline ? (
          <Ofline />
        ) : (
          <>
            {showInstallPopup && (
              <div className="custom-install-popup">
                <div className="popup-content">
                  <h2>Install Our App 🚀</h2>
                  <p>Get the best experience by installing our PWA!</p>
                  <button className="install-btn" onClick={handleInstall}>
                    Install Now
                  </button>
                  <button
                    className="cancel-btn"
                    onClick={() => setShowInstallPopup(false)}
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            )}

            <Router>
              <Routes>
                <Route element={<HeaderLayout />}>{HeaderLayoutRouter()}</Route>
                <Route element={<NoHeaderLayout />}>
                  <Route path="*" element={<Error404 />} />
                </Route>
              </Routes>
            </Router>
          </>
        )}
      </div>
    </AuthProvider>
  );
}

export default App;
