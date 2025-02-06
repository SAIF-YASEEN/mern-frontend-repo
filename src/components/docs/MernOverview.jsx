import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import "./MernOverview.css";
import Footer from '../partials/Footer'


const MERNOverview = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    <main className="mern-overview-page-container">
      <section className="hero-container-with-mern-header sectionsection">
        <header>
          <h2 className="mern-stack-overview-title" data-aos="fade-up">
            MERN Overview
          </h2>
          <p className="mern-stack-intro-paragraph" data-aos="fade-right">
            The MERN stack is a popular JavaScript-based technology stack for
            developing modern web applications. It combines four powerful
            technologies: <strong>MongoDB</strong>, <strong>Express.js</strong>,{" "}
            <strong>React.js</strong>, and <strong>Node.js</strong>, enabling
            developers to build full-stack, scalable, and real-time
            applications. The stack’s components work in harmony with each
            other, making development faster, more efficient, and streamlined.
            MongoDB, a NoSQL database, stores data in a flexible, JSON-like
            format, making it a great fit with JavaScript and React. Express.js
            simplifies backend development and Node.js supports high scalability
            through its non-blocking I/O model. React allows developers to
            create dynamic, responsive UIs while maintaining clear,
            component-based code. The stack provides powerful tools for both
            front-end and back-end development in a unified language—JavaScript.
            With increased community support, an abundance of tutorials, and
            many libraries and frameworks, MERN has become one of the most
            popular choices for building dynamic, full-stack web applications.
          </p>
        </header>

        <div
          className="mern-stack-technology-logos-container"
          data-aos="fade-up"
        >
          <div className="technology-logo-container">
            <FaReact
              className="mern-logo"
              size={150}
              style={{
                color: "#61DAFB",
                animation: "rotateReact 15s linear infinite",
              }}
            />
          </div>
          <div className="technology-logo-container">
            <SiExpress
              className="mern-logo"
              size={150}
              style={{ color: "#000" }}
            />
          </div>
          <div className="technology-logo-container">
            <FaNodeJs
              className="mern-logo"
              size={150}
              style={{ color: "#68A063" }}
            />
          </div>
          <div className="technology-logo-container">
            <SiMongodb
              className="mern-logo"
              size={150}
              style={{ color: "#47A248" }}
            />
          </div>
        </div>
      </section>

      {/* MongoDB Section */}
      <section
        className="technology-description-section sectionsection"
        data-aos="fade-up"
      >
        <h3>MongoDB</h3>
        <p>
          MongoDB is a NoSQL database that was designed to be highly scalable,
          flexible, and easy to use. Unlike traditional relational databases
          that store data in tables with predefined schemas, MongoDB stores data
          in flexible JSON-like documents, known as BSON (Binary JSON), that can
          be easily mapped to objects in application code. This makes MongoDB an
          excellent choice for web developers who need a database that is fast,
          efficient, and capable of handling complex data models. One of the
          main advantages of MongoDB is its scalability. It supports horizontal
          scaling using sharding, which allows data to be distributed across
          multiple servers to handle increased load. MongoDB's schema-less
          design also makes it adaptable to changes in data structure, without
          requiring complex migrations like in SQL-based systems. Its support
          for real-time data, rapid querying, and the ability to scale
          effortlessly make MongoDB a popular choice for applications with
          dynamic and evolving data sets, such as social media platforms,
          e-commerce sites, and real-time data analytics. The integration
          between MongoDB and Node.js in the MERN stack streamlines the
          full-stack development process, allowing data to be seamlessly queried
          and modified on both the server and client sides.
        </p>
        <ul>
          <li>Schema-less NoSQL database</li>
          <li>Stores data as BSON (Binary JSON)</li>
          <li>Horizontal scalability with sharding</li>
          <li>Highly flexible and adaptable to change</li>
          <li>Ideal for large volumes of dynamic, real-time data</li>
          <li>
            Highly secure with advanced security features like data encryption
          </li>
        </ul>
      </section>

      {/* Express.js Section */}
      <section
        className="technology-description-section sectionsection"
        data-aos="fade-up"
      >
        <h3>Express.js</h3>
        <p>
          Express.js is a fast, lightweight web application framework for
          Node.js, designed to simplify and streamline the process of creating
          backend applications and APIs. It is highly regarded for its
          minimalist design, allowing developers to build web services quickly
          without getting bogged down by unnecessary features. Express
          simplifies routing, middleware integration, and server-side logic. It
          provides a range of built-in middleware that allows developers to
          handle HTTP requests, manage static files, parse request bodies, and
          authenticate users. Express is also highly customizable, with an
          ecosystem of plugins that extend its functionality. As part of the
          MERN stack, Express serves as the intermediary between the client-side
          application (React.js) and the server-side Node.js application. It
          takes care of handling incoming requests, interacting with MongoDB,
          and sending responses back to the client. Express makes it easy to
          build scalable APIs with its routing system, which allows developers
          to define clean and readable routes to handle various HTTP methods
          (GET, POST, PUT, DELETE). With a large and active community behind it,
          Express is consistently updated with new features, security patches,
          and performance optimizations.
        </p>
        <ul>
          <li>Minimalist yet feature-rich framework</li>
          <li>Handles routing, middleware, and HTTP requests</li>
          <li>Fast development of RESTful APIs</li>
          <li>Middleware architecture for custom logic</li>
          <li>Seamless integration with Node.js and MongoDB</li>
          <li>Large ecosystem of plugins for additional functionality</li>
        </ul>
      </section>

      {/* React.js Section */}
      <section
        className="technology-description-section sectionsection"
        data-aos="fade-up"
      >
        <h3>React.js</h3>
        <p>
          React.js is a JavaScript library for building user interfaces,
          particularly for creating dynamic and high-performance web
          applications. Unlike traditional JavaScript approaches, React focuses
          on building the UI as a series of reusable, self-contained components.
          Each component is responsible for rendering its part of the UI and
          managing its state, which makes React a great tool for building highly
          interactive applications. React's virtual DOM ensures minimal
          re-rendering of components by updating only parts of the UI that have
          changed. This increases performance and responsiveness. React uses JSX
          (JavaScript XML), a syntax extension that allows developers to write
          HTML elements and components within JavaScript code. JSX simplifies
          the process of building UI components because it allows the code to
          more closely resemble HTML, making it easier to read and maintain.
          React’s unidirectional data flow also helps manage the state in large
          applications. It integrates well with tools like Redux for state
          management and React Router for navigation. React's vibrant ecosystem
          offers numerous tools, third-party libraries, and a thriving community
          of developers who contribute to improving the library. In the MERN
          stack, React is used for front-end development, handling the user
          interface, rendering dynamic content, and allowing for efficient
          interaction with users.
        </p>
        <ul>
          <li>Component-based architecture for modular UI design</li>
          <li>Virtual DOM for efficient rendering and updates</li>
          <li>JSX syntax that blends HTML and JavaScript seamlessly</li>
          <li>Unidirectional data flow and state management</li>
          <li>Integrates easily with Redux for global state management</li>
          <li>Huge developer community and ecosystem with rich tools</li>
        </ul>
      </section>

      {/* Node.js Section */}
      <section
        className="technology-description-section sectionsection"
        data-aos="fade-up"
      >
        <h3>Node.js</h3>
        <p>
          Node.js is a server-side runtime environment for executing JavaScript
          code outside of a browser. It uses Google’s V8 engine, which compiles
          JavaScript code into native machine code for fast execution. Node.js
          was specifically built to be scalable and efficient for building
          networked applications such as APIs, web servers, real-time services,
          and microservices. Node.js uses a single-threaded event loop with a
          non-blocking I/O model, meaning it handles requests asynchronously
          rather than waiting for each request to complete. This event-driven
          architecture ensures high performance and scalability, making Node.js
          particularly suitable for I/O-heavy applications like chat apps, file
          sharing systems, and live-streaming services. Node.js’s package
          manager, npm, provides access to an extensive range of libraries and
          tools that help speed up development. One of Node’s core features is
          its ability to handle a large number of concurrent connections
          simultaneously, making it ideal for real-time applications. In the
          MERN stack, Node.js powers the back-end server, handling business
          logic, interacting with the database, and communicating with front-end
          React components. The use of JavaScript across both client and server
          side makes development smoother, faster, and more consistent, as
          developers can reuse code and concepts across the entire stack.
        </p>
        <ul>
          <li>Server-side JavaScript runtime built on V8 engine</li>
          <li>Single-threaded, non-blocking I/O model</li>
          <li>Handles high concurrency with ease</li>
          <li>Great for real-time applications like chat and live data</li>
          <li>Extensive library support via npm</li>
          <li>Integrates seamlessly with Express.js and MongoDB</li>
        </ul>
      </section>

      {/* Why MERN Section */}
      <section
        className="why-choose-mern-technology-section sectionsection"
        data-aos="fade-right"
      >
        <h3>Why MERN?</h3>
        <p>
          The MERN stack is an excellent choice for developers who want to build
          modern web applications using JavaScript throughout the entire
          development process. One of the biggest advantages of using MERN is
          the consistency it offers, as all components in the stack use
          JavaScript as the primary programming language. This reduces context
          switching for developers and results in a more unified codebase, where
          both front-end and back-end development share the same language.
          MongoDB's flexible, schema-less data model aligns well with Node.js's
          asynchronous and non-blocking architecture, making the entire stack
          suitable for high-performance, real-time applications. Express.js
          provides a robust framework for building RESTful APIs, while React.js
          is perfect for creating dynamic, highly interactive front-end user
          interfaces. MERN also supports the rapid development of full-stack
          applications, thanks to powerful tools and frameworks for both
          front-end and back-end developers. Additionally, its vibrant
          ecosystem, large developer community, and widespread use across the
          tech industry make MERN an attractive and future-proof choice. Whether
          you are building social networks, dashboards, e-commerce platforms, or
          content management systems, MERN’s flexibility, scalability, and
          developer-friendliness make it a reliable stack for building robust,
          scalable, and real-time web applications.
        </p>

        {/* MERN Stack Icons */}
        <div className="mern-icons-container" data-aos="fade-up">
          <div className="mern-icon">
            <FaReact size={100} style={{ color: "#61DAFB" }} />
          </div>
          <div className="mern-icon">
            <SiExpress size={100} style={{ color: "#000" }} />
          </div>
          <div className="mern-icon">
            <FaNodeJs size={100} style={{ color: "#68A063" }} />
          </div>
          <div className="mern-icon">
            <SiMongodb size={100} style={{ color: "#47A248" }} />
          </div>
        </div>
      </section>
    </main>
        <Footer/>

</>
  );
};

export default MERNOverview;
