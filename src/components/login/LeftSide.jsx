import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa6";

function LoginLeftSide() {
  const logos = [
    { Icon: FaReact, label: "React.js", color: "#61DAFB" },
    { Icon: SiExpress, label: "Express.js", color: "#000000" },
    { Icon: FaNodeJs, label: "Node.js", color: "#68A063" },
    { Icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  ];

  return (
    <div className="register-left-side">
      <h1 className="register-title">Join the MERN Community</h1>
      <div className="mern-logos">
        {logos.map(({ Icon, label, color }, index) => (
          <div className="logo-container" key={index}>
            <Icon
              size={100}
              style={{
                color,
                animation:
                  label === "React.js"
                    ? "rotateReact 15s linear infinite"
                    : undefined,
              }}
            />
            <h3>{label}</h3>
          </div>
        ))}
      </div>
      <div className="arrow">
        <h1>REGISTER TO</h1>
        <div className="merncolors">
          <span className="mongo">M</span>
          <span className="express">E</span>
          <span className="react">R</span>
          <span className="node">N</span>
        </div>

        <FaArrowRight size={50} className="animated-arrow" />
      </div>
    </div>
  );
}

export default LoginLeftSide;
