import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

// Second Home Page Component
export const SecondHomeComponent = () => {

  return (
    <>
      <section className="mern-stack">
        <div className="stack-content" data-aos="fade-right">
          <div className="icon-container">
            <SiMongodb size={80} style={{ color: "#47A248" }} />
            <h2>MongoDB</h2>
          </div>
          <p>
            MongoDB is a document-oriented NoSQL database that stores data in
            flexible, JSON-like documents. It provides a scalable,
            high-performance storage solution and is commonly used in full-stack
            JavaScript applications.
          </p>
          <ul>
            <li>
              <strong>Schema-less</strong> structure
            </li>
            <li>
              <strong>Highly scalable</strong> & distributed architecture
            </li>
            <li>
              <strong>Flexible</strong> with data models (like embedded
              documents)
            </li>
          </ul>
        </div>

        <div className="stack-content" data-aos="fade-left">
          <div className="icon-container">
            <SiExpress size={80} style={{ color: "#000000" }} />
            <h2>Express.js</h2>
          </div>
          <p>
            Express is a web application framework for Node.js, designed for
            building fast and minimalist server-side logic. It's an
            unopinionated framework, making it a flexible choice for both small
            applications and large-scale server solutions.
          </p>
          <ul>
            <li>
              <strong>Routing capabilities</strong> for REST APIs
            </li>
            <li>
              <strong>Middleware support</strong> for added functionality
            </li>
            <li>
              <strong>Efficient</strong> for handling server-side logic
            </li>
          </ul>
        </div>
      </section>

      <section className="react-node">
        <div className="stack-content" data-aos="fade-right">
          <div className="icon-container">
            <FaReact size={80} style={{ color: "#61DAFB" }} />
            <h2>React.js</h2>
          </div>
          <p>
            React.js is a powerful JavaScript library for building user
            interfaces, especially for single-page applications. Its
            component-based architecture allows for reusability and efficient
            state management across the application.
          </p>
          <ul>
            <li>
              <strong>Virtual DOM</strong> for enhanced performance
            </li>
            <li>
              <strong>Component-based</strong> structure for maintainability
            </li>
            <li>
              <strong>React Router</strong> for client-side routing
            </li>
          </ul>
        </div>

        <div className="stack-content" data-aos="fade-left">
          <div className="icon-container">
            <FaNodeJs size={80} style={{ color: "#68A063" }} />
            <h2>Node.js</h2>
          </div>
          <p>
            Node.js is an open-source JavaScript runtime built on Chrome’s V8
            JavaScript engine. It's used to build server-side applications in
            JavaScript and is the foundation for building scalable network
            applications.
          </p>
          <ul>
            <li>
              <strong>Asynchronous</strong> and non-blocking I/O model
            </li>
            <li>
              <strong>Event-driven</strong> architecture for high-performance
              apps
            </li>
            <li>
              <strong>Rich ecosystem</strong> of open-source libraries
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
