import React from "react";
import "./LandingPage.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";


const LogoDisplay = () => {
  return (
    <>
      <div className="outer">
        <div className="loading-screen">
          <div className="logoLanding">
            <FaReact
              className="reactIcon Animation"
              size={70}
              style={{
                color: "#61DAFB",
                animation: "rotateReact 15s linear infinite", // Keep rotation running
              }}
            />

            <SiExpress
              className="iconResp Animation"
              size={70}
              style={{
                color: "#000",
              }}
            />
            <FaNodeJs
              className="iconResp Animation"
              size={70}
              style={{
                color: "#68a063",
              }}
            />
            <SiMongodb
              className="iconResp Animation"
              size={70}
              style={{
                color: "#47a248",
              }}
            />
          </div>
        </div>
        <div className="italy-merncolors">
          <span className="spain-m">M</span>
          <span className="portugal-e">E</span>
          <span className="china-r">R</span>
          <span className="russia-n">N</span>
        </div>
      </div>
    </>
  );
};

export default LogoDisplay;
