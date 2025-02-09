import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { GrHomeRounded } from "react-icons/gr";
import {
  FaRegUser,
  FaChartBar,
  FaCube ,  FaTools,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNode, FaLaptopCode } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown
  const handleDropdownToggle = () => setDropdownOpen(!dropdownOpen);

  // Handle when a Docs item is clicked
  const handleDocsItemClick = () => {
    setDropdownOpen(false);
    document.body.style.backgroundColor = "grey"; // Set Docs background
  };

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <h1>MERN</h1>
        <div className="tech-icons">
          <SiMongodb className="icon mongo" title="MongoDB" />
          <SiExpress className="icon express" title="Express.js" />
          <FaReact className="icon react" title="React.js" />
          <FaNode className="icon node" title="Node.js" />
        </div>
      </div>

      <nav className="nav">
        <ul>
          <li>
            <Link
              to="/"
              className={` nav-link-issue  ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <GrHomeRounded size={25} className="icon" /> Home vercel
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={` nav-link-issue  ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              <FaRegUser size={25} className="icon" /> About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={` nav-link-issue  ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              <AiOutlineMail size={25} className="icon" /> Contact
            </Link>
          </li>

          {/* Docs Dropdown */}
          <li className="dropdown" ref={dropdownRef}>
            <button
              className={` nav-link-issue  docs-btn ${
                location.pathname.startsWith("/docs") ? "active" : ""
              }`}
              onClick={handleDropdownToggle}
            >
              Docs
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li onClick={handleDocsItemClick}>
                  <Link
                    to="/docs/overview"
                    className={`custom-sidebar-link ${
                      location.pathname === "/docs/overview" ? "active" : ""
                    }`}
                  >
                    <FaChartBar size={30} />
                    <span className="Spansss">Overview</span>
                  </Link>
                </li>
                <li onClick={handleDocsItemClick}>
                  <Link
                    to="/docs/building"
                    className={`custom-sidebar-link ${
                      location.pathname === "/docs/building" ? "active" : ""
                    }`}
                  >
                    <FaCube  size={30} />{" "}
                    <span className="Spansss">Building</span>
                  </Link>
                </li>
                <li onClick={handleDocsItemClick}>
                  <Link
                    to="/docs/services"
                    className={`custom-sidebar-link ${
                      location.pathname === "/docs/services" ? "active" : ""
                    }`}
                  >
                    <FaTools size={30} />{" "}
                    <span className="Spansss">Services</span>
                  </Link>
                </li>
                <li onClick={handleDocsItemClick}>
                  <Link
                    to="/docs/developer"
                    className={`custom-sidebar-link ${
                      location.pathname === "/docs/developer" ? "active" : ""
                    }`}
                  >
                    <FaLaptopCode size={30} />{" "}
                    <span className="Spansss">Developer</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Register/Profile */}
          {!isLoggedIn ? (
            <li>
              <Link
                to="/register"
                className={` nav-link-issue  ${
                  location.pathname === "/register" ? "active" : ""
                }`}
              >
                <BiLogIn size={25} className="icon" /> Register
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to="/profile"
                className={` nav-link-issue  ${
                  location.pathname === "/profile" ? "active" : ""
                }`}
              >
                <FaRegUser size={25} className="icon" /> Profile
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
