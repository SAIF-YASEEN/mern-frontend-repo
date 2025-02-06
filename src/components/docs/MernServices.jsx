import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Icon for check marks
import "./MernServices.css";
import Footer from "../partials/Footer";

const MernAdvantages = () => {
  return (
    <>
      <div className="mern-advantages">
        <h3>Why MERN is the Best Stack for Web Development</h3>

        {/* Services Section */}
        <section className="mern-services">
          <h4>Services Provided by MERN</h4>
          <ul>
            <li>
              <FaCheckCircle /> MongoDB: A NoSQL database for scalable storage.
            </li>
            <li>
              <FaCheckCircle /> Express: Simplifies backend APIs in Node.js.
            </li>
            <li>
              <FaCheckCircle /> React: Popular for building fast UIs with
              reusable components.
            </li>
            <li>
              <FaCheckCircle /> Node.js: Server-side JavaScript for scalable
              network apps.
            </li>
          </ul>
        </section>

        {/* Comparison Section */}
        <section className="mern-comparison">
          <h4>How MERN Compares to Other Stacks</h4>
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>MERN</th>
                <th>LAMP</th>
                <th>MEAN</th>
                <th>JAMstack</th>
                <th>Django</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Full Stack JavaScript</td>
                <td>✅</td>
                <td>❌</td>
                <td>✅</td>
                <td>❌</td>
                <td>❌</td>
              </tr>
              <tr>
                <td>Real-time Performance</td>
                <td>✅</td>
                <td>❌</td>
                <td>✅</td>
                <td>❌</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Scalability</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Ease of Development</td>
                <td>✅</td>
                <td>❌</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Popular in Startups</td>
                <td>✅</td>
                <td>❌</td>
                <td>✅</td>
                <td>✅</td>
                <td>❌</td>
              </tr>
              <tr>
                <td>Flexible NoSQL Database</td>
                <td>✅</td>
                <td>❌</td>
                <td>❌</td>
                <td>✅</td>
                <td>❌</td>
              </tr>
              <tr>
                <td>Frontend Framework (React/Vue)</td>
                <td>✅ (React)</td>
                <td>❌</td>
                <td>✅ (Angular)</td>
                <td>✅ (Static Sites)</td>
                <td>❌</td>
              </tr>
              <tr>
                <td>Backend Framework</td>
                <td>✅ (Node.js + Express)</td>
                <td>✅ (PHP)</td>
                <td>✅ (Node.js + Express)</td>
                <td>✅ (Various APIs)</td>
                <td>✅ (Python Django)</td>
              </tr>
              <tr>
                <td>Database Type</td>
                <td>✅ (MongoDB, NoSQL)</td>
                <td>✅ (MySQL, SQL)</td>
                <td>✅ (MongoDB, NoSQL)</td>
                <td>❌ (Uses APIs / External)</td>
                <td>✅ (PostgreSQL, MySQL, etc.)</td>
              </tr>
              <tr>
                <td>Development Speed</td>
                <td>✅</td>
                <td>❌</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Ease of Deployment</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>Ideal Use Case</td>
                <td>Modern web apps, real-time apps</td>
                <td>Traditional websites, content-driven sites</td>
                <td>Single-page apps, real-time apps</td>
                <td>Static websites, fast delivery</td>
                <td>Enterprise-level, data-driven websites</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Why MERN is the Best */}
        <section className="mern-benefits">
          <h4>Why MERN is the Best Stack</h4>
          <p>
            The MERN stack allows for rapid development due to its single
            language—JavaScript—being used throughout the entire stack. This
            consistency improves workflow, enhances collaboration among
            developers, and reduces context switching between languages.
          </p>
          <ul>
            <li>
              <FaCheckCircle /> Full JavaScript Stack for improved efficiency.
            </li>
            <li>
              <FaCheckCircle /> Strong Community Support from React and Node.js.
            </li>
            <li>
              <FaCheckCircle /> Perfect for Real-time Apps, thanks to Node.js.
            </li>
            <li>
              <FaCheckCircle /> Scalable and Efficient with MongoDB and React.
            </li>
            <li>
              <FaCheckCircle /> Fast and Lightweight, increasing the app’s
              performance.
            </li>
          </ul>
        </section>

        {/* MERN Popularity Section */}
        <section className="mern-popularity">
          <h4>MERN Popularity and Community</h4>
          <p>
            The MERN stack has become extremely popular due to its powerful
            features and JavaScript-based ecosystem. With active support from
            the open-source community and major tech companies, MERN is the
            go-to choice for many developers.
          </p>
          <ul>
            <li>
              Big companies such as Netflix and Instagram rely on React for the
              frontend.
            </li>
            <li>
              MongoDB powers high-performance applications with NoSQL
              flexibility.
            </li>
            <li>
              Node.js supports a massive number of simultaneous connections,
              making it an ideal choice for building scalable systems.
            </li>
            <li>
              React allows developers to build responsive UIs with ease, cutting
              down on development time.
            </li>
          </ul>
        </section>

        {/* Example MERN Projects Section */}
        <section className="example-projects">
          <h4>Example MERN Projects</h4>
          <p>
            Here are a few examples of applications built using the MERN stack:
          </p>
          <ul>
            <li>
              Real-Time Chat Application (e.g., Facebook Messenger, Slack)
            </li>
            <li>
              Project Management App with Task Scheduling (e.g., Trello clone)
            </li>
            <li>
              Dynamic E-commerce Website (e.g., an online store with product
              catalog, cart functionality)
            </li>
            <li>Social Media Platforms (e.g., Instagram clone)</li>
            <li>
              Online Learning Platforms (e.g., an interactive course dashboard)
            </li>
          </ul>
        </section>
      </div>{" "}
      <Footer />
    </>
  );
};

export default MernAdvantages;
