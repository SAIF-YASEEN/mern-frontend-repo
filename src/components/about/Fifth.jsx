import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import './Fifth.css';

const FitfthAboutComponent = () => {
  return (
    <section className="elephant-tech-history" data-aos="fade-left">
      <h2>History of MERN Technologies</h2>
      <div className="whale-tech-histories">
        <div>
          <h3><FaReact style={{ marginRight: "10px", color: "#61DAFB" }} /> React.js</h3>
          <p>React was developed by Facebook and first released in 2013.</p>
        </div>
        <div>
          <h3><FaNodeJs style={{ marginRight: "10px", color: "#68A063" }} /> Node.js</h3>
          <p>
            Created by Ryan Dahl in 2009, Node.js brought JavaScript to
            servers.
          </p>
        </div>
        <div>
          <h3><SiExpress style={{ marginRight: "10px", color: "#000000" }} /> Express.js</h3>
          <p>
            Express.js was built as a lightweight framework for Node.js in
            2010.
          </p>
        </div>
        <div>
          <h3><SiMongodb style={{ marginRight: "10px", color: "#47A248" }} /> MongoDB</h3>
          <p>
            Launched in 2009, it became a game-changer in database solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FitfthAboutComponent;
