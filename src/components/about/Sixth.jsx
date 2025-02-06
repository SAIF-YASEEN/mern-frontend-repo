import { DiJavascript } from "react-icons/di";
import { FaBroadcastTower, FaExpandArrowsAlt } from "react-icons/fa";
import "./Sixth.css";

const SixthAboutComponent = () => {
  return (
    <section className="turtle-advanced-features" data-aos="zoom-in-up">
      <h2>Advanced Features of MERN</h2>
      <div className="feature-container">
        <div className="feature-item">
          <h3>Real-time Data Updates</h3> <FaBroadcastTower />
          <p>
            With MongoDB and Socket.io, MERN apps can handle real-time data
            updates and notifications. These technologies allow your app to push
            new information immediately to the users without needing them to
            refresh the page. It’s commonly used in chat applications, stock
            market feeds, and live data dashboards.
          </p>
        </div>
        <div className="feature-item">
          {" "}
          <FaExpandArrowsAlt />
          <h3>Scalability</h3>
          <p>
            The MERN stack's flexibility allows developers to scale both
            front-end and back-end easily. From handling more traffic to
            managing increased database loads, MongoDB’s schema-less design and
            Node.js’s asynchronous architecture make it a go-to for large
            applications. Additionally, the React frontend makes it easier to
            add complex features without affecting performance.
          </p>
        </div>
        <div className="feature-item">
          <h3>
            Full-stack JavaScript{" "}
            <span className="js-box">
              <DiJavascript size={30} />
            </span>
          </h3>
          <p>
            MERN uses JavaScript throughout the application, which ensures
            smoother workflow, flexibility, and efficiency. All layers (client,
            server, and database) are written in JavaScript, enabling developers
            to work with a single language throughout the development process.
            This leads to more consistent and easier-to-debug code across the
            stack.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SixthAboutComponent;
