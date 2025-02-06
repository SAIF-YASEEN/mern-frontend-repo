import React, { useEffect } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css"; // Importing AOS styles
import "./fourth.css";
export const FourthHomeComponent = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1200, // Time in milliseconds for the animation
      once: true, // Set to true if the animation should only happen once when scrolling in
      easing: "ease-in-out", // The easing function for the animation
    });
  }, []);

  return (
    <section className="more-mern-knowledge">
      <h2>Want to Learn More About MERN?</h2>
      <p>
        The MERN stack is a powerful and highly versatile toolset for building
        modern web applications. To help you dive deeper into each technology,
        here’s where you can explore further:
      </p>
      <div className="mern-links">
        {/* MongoDB Box */}
        <div className="mern-link mongo" data-aos="fade-up">
          <h3>
            <SiMongodb size={50} style={{ color: "#47A248" }} />
            MongoDB
          </h3>
          <p>
            <a
              href="https://www.mongodb.com/what-is-mongodb"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official MongoDB Guide
            </a>
            - Learn about MongoDB's powerful document-based database and how it
            stores, queries, and manages data at scale.
          </p>
          <p>
            MongoDB is great for handling unstructured data and offers
            flexibility for large-scale applications.
          </p>
          <div className="logo-letter M">M</div> {/* Letter 'M' */}
        </div>

        {/* Express Box */}
        <div
          className="mern-link express"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3>
            <SiExpress size={50} style={{ color: "#000000" }} />
            Express.js
          </h3>
          <p>
            <a
              href="https://expressjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Express Guide
            </a>
            - Discover how to build web servers and APIs efficiently using
            Express.js. A powerful and minimal framework for Node.js.
          </p>
          <p>
            Express simplifies routing and is often used to build APIs and
            manage middleware efficiently.
          </p>
          <div className="logo-letter E">E</div> {/* Letter 'E' */}
        </div>

        {/* React Box */}
        <div
          className="mern-link react"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3>
            <FaReact size={50} style={{ color: "#61DAFB" }} />
            React.js
          </h3>
          <p>
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official React Documentation
            </a>
            - Master React's component-based architecture and build
            high-performance UIs.
          </p>
          <p>
            React allows you to build dynamic user interfaces with reusable
            components and has a large developer community.
          </p>
          <div className="logo-letter R">R</div> {/* Letter 'R' */}
        </div>

        {/* Node.js Box */}
        <div className="mern-link node" data-aos="fade-up" data-aos-delay="300">
          <h3>
            <FaNodeJs size={50} style={{ color: "#68A063" }} />
            Node.js
          </h3>
          <p>
            <a
              href="https://nodejs.org/en/docs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Node.js Documentation
            </a>
            - Explore the Node.js platform, an essential tool for building
            scalable backend applications with JavaScript.
          </p>
          <p>
            Node.js's non-blocking architecture allows you to handle many
            simultaneous tasks, enabling real-time application performance.
          </p>
          <div className="logo-letter N">N</div> {/* Letter 'N' */}
        </div>
      </div>
      {/* <p>
        Start building full-stack applications by integrating these
        technologies. You'll find excellent tutorials and courses online to help
        deepen your understanding.
      </p> */}
    </section>
  );
};
