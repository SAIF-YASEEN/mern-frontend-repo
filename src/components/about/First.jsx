import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import "./FirstAboutComponent.css"; // Import the necessary styles (assuming you have styles for it)

const FirstAboutComponent = () => {
  return (
    <section className="elephant-intro" data-aos="fade-down">
     <div className="first">
     <p className="mern">mongoDb for database </p>
      <p className="mern">express for routes and controller</p>
      <p className="mern">react for frontend or client</p>
      <p className="mern">node for backend or server</p>
     </div>
      <h1>ABOUT THE MERN STACK</h1>
      <div className="mern-logos" data-aos="fade-up">
        <div className="logo-container">
          <FaReact
            className="reactIcon iconRes"
            size={150}
            style={{
              color: "#61DAFB",
              animation: "rotateReact 15s linear infinite", // For the rotating effect on React icon
            }}
          />
          <h3>React.js</h3>
        </div>
        <div className="logo-container">
          <SiExpress
            className="iconRes"
            size={150}
            style={{ color: "#000000" }}
          />
          <h3>Express.js</h3>
        </div>
        <div className="logo-container">
          <FaNodeJs
            className="iconRes"
            size={150}
            style={{ color: "#68A063" }}
          />
          <h3>Node.js</h3>
        </div>
        <div className="logo-container">
          <SiMongodb
            className="iconRes"
            size={150}
            style={{ color: "#47A248" }}
          />
          <h3>MongoDB</h3>
        </div>
      </div>
    </section>
  );
};

export default FirstAboutComponent;
