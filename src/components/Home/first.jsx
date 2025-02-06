import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

export const FirstHomeComponent = () => {
  return (
    <section className="hero" data-aos="fade-up">
      <h1 className="h1res400">WELCOME TO MERN</h1>
      <p className="upercasep">
        Build full-stack web apps using MongoDB, Express, React, and Node.js
      </p>

      {/* MERN Logos Section */}
      <div className="mern-logos" data-aos="fade-up">
        <div className="logo-container">
          <FaReact
            className="reactIcon iconResp"
            size={200}
            style={{
              color: "#61DAFB",
              animation: "rotateReact 15s linear infinite", // Keep rotation running
            }}
          />
          <h3>React.js</h3>
        </div>
        <div className="logo-container">
          <SiExpress
            className="iconResp"
            size={200}
            style={{
              color: "#000000",
            }}
          />
          <h3>Express.js</h3>
        </div>
        <div className="logo-container">
          <FaNodeJs
            className="iconResp"
            size={200}
            style={{
              color: "#68A063",
            }}
          />
          <h3>Node.js</h3>
        </div>
        <div className="logo-container">
          <SiMongodb
            size={200}
            className="iconResp"
            style={{
              color: "#47A248",
            }}
          />
          <h3>MongoDB</h3>
        </div>
      </div>
    </section>
  );
};
