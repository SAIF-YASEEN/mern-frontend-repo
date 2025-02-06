import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./MernBuilding.css";
import Footer from '../partials/Footer'

const SiteDescription = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <div className="mern-overview">
        <div className="heroMERNmern">
          <h1 className="mern-title" data-aos="fade-up">
            How This Site Was Made
          </h1>
          <p className="mern-intro" data-aos="fade-up">
            A website built with modern technologies using React, Node.js,
            MongoDB, and Express, powered by various NPM packages.
          </p>
        </div>

        <div className="mern-section mongoSec" data-aos="fade-in-left">
          <h3>MongoDB</h3>
          <p>MongoDB is used for storing data efficiently with flexibility.</p>
          <ul>
            <li>Version: ^8.9.5</li>
          </ul>
        </div>

        <div className="mern-section expressSec" data-aos="fade-in-left">
          <h3>Express</h3>
          <p>Handles backend APIs and server-side routing with ease.</p>
          <ul>
            <li>Version: ^4.21.2</li>
          </ul>
        </div>

        <div className="mern-section nodeSec" data-aos="fade-in-left">
          <h3>Node.js</h3>
          <p>
            The runtime environment that powers the back end with event-driven
            architecture.
          </p>
          <ul>
            <li>Version: ^16.x.x</li>
          </ul>
        </div>

        <div className="mern-conclusion" data-aos="fade-in-up">
          <h3>Conclusion</h3>
          <p>
            Using these technologies ensures scalability, security, and
            performance. The site is built with a modern stack that ensures high
            performance and scalability for users.
          </p>
        </div>
      </div>

      {/* New sections added */}
      <div
        className="mern-section mern-featured-libraries"
        data-aos="fade-in-left"
      >
        <h3>Featured Libraries</h3>
        <p>
          Below are the important libraries that brought this site to life. Each
          has been instrumental in building various components.
        </p>
        <ul>
          <li>
            <strong>React Hooks:</strong> Provides functionality to manage
            component state and side effects seamlessly.
          </li>
          <li>
            <strong>React-Router-Dom:</strong> Used for routing across various
            components for a seamless experience.
          </li>
          <li>
            <strong>SweetAlert2:</strong> Adds stunning interactive feedback
            dialogs.
          </li>
        </ul>
      </div>

      <div
        className="mern-section mern-performance-enhancements"
        data-aos="fade-in-left"
      >
        <h3>Performance Enhancements</h3>
        <p>
          A strong focus was placed on optimizing this app's performance,
          resulting in faster loading times and superior user experience.
        </p>
        <ul>
          <li>
            <strong>Code Splitting:</strong> Enables the application to load
            only the required code, reducing initial load times.
          </li>
          <li>
            <strong>Image Optimization:</strong> Used lazy loading for images to
            improve page load speed.
          </li>
          <li>
            <strong>Minification and Bundling:</strong> Reduced file sizes using
            Webpack to minimize the time to download resources.
          </li>
        </ul>
      </div>

      <div className="mern-conclusion mernmerntimeline">
        <h3>Timeline for Development</h3>
        <p>
          The timeline for developing this app was divided into several stages:
        </p>
        <ol>
          <li>
            <strong>Stage 1:</strong> Planning and Research (2 weeks) - Analyzed
            the requirements for both frontend and backend integration. Decided
            on technologies and libraries.
          </li>
          <li>
            <strong>Stage 2:</strong> Backend Development (3 weeks) - Set up
            Express server, MongoDB, API routes, and implemented authentication
            using JWT and bcrypt.
          </li>
          <li>
            <strong>Stage 3:</strong> Frontend Development (4 weeks) - Developed
            dynamic UI components with React, connected it with the backend APIs
            using Axios, and implemented state management and routing.
          </li>
          <li>
            <strong>Stage 4:</strong> Styling & Animations (1 week) - Styled the
            pages and added animations with AOS and custom CSS animations to
            enhance the user experience.
          </li>
          <li>
            <strong>Stage 5:</strong> Testing & Deployment (2 weeks) - Conducted
            final testing of all features, fixed any bugs, and prepared the app
            for deployment using cloud services.
          </li>
        </ol>
      </div>
      <Footer/>
      </>
  );
};

export default SiteDescription;
