import React from "react";
import { FaNodeJs, FaReact } from "react-icons/fa"; // For Node.js and React logos
import { SiMongodb, SiExpress } from "react-icons/si"; // For MongoDB and Express.js logos
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

import "./Footer.css"; // Add custom styles here

const Footer = () => {
  return (
    <footer className="mern-footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about-section-lt">
          <h3>About My MERN Site</h3>
          <p>
            Welcome to my MERN-based website! Crafted using MongoDB, Express.js,
            React, and Node.js, this platform is scalable, efficient, and
            user-friendly. Stay tuned for upcoming features and improvements!
          </p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <FaFacebook size={30} color="#4267B2" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <FaTwitter size={30} color="#1DA1F2" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <FaInstagram size={30} color="#E1306C" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin size={30} color="#0077B5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube"
            >
              <FaYoutube size={30} color="#FF0000" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub size={30} color="#000000" />
            </a>
          </div>
        </div>

        {/* Pagination Links */}
        <div className="footer-section pagination-section">
          <h3>Quick Links</h3>
          <ul className="pagination-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Upcoming Features */}
        <div className="footer-section features-section">
          <h3>Upcoming Features</h3>
          <ul>
            <li>User Dashboard</li>
            <li>Real-time Chat Integration</li>
            <li>AI-Powered Analytics</li>
            <li>Enhanced Mobile Responsiveness</li>
            <li>Progressive Web App (PWA) Support</li>
          </ul>
        </div>

        {/* MERN Logos */}
        <div className="footer-section ">
          <h3>Powered by MERN</h3>
          <div className="logos">
            <FaNodeJs size={50} color="#68A063" title="Node.js" />
            <SiExpress size={50} color="#000000" title="Express.js" />
            <FaReact size={50} color="#61DAFB" title="React.js" />
            <SiMongodb size={50} color="#4DB33D" title="MongoDB" />
          </div>
        </div>
      </div>
      <div className="coprightDiv">
      <p className="copyright">&copy; COPYRIGHT -- All RIGHT RESERVED -- SAIF UR REHMAN</p>
      </div>
    </footer>
  );
};

export default Footer;
