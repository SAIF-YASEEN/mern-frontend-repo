import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { GrHomeRounded } from "react-icons/gr";
import { FaRegUser, FaChartBar, FaCube, FaTools } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNode, FaLaptopCode, FaBars, FaTimes } from "react-icons/fa"; // FaBars for menu, FaTimes for close
import { FaBookOpen } from "react-icons/fa";
import { MdPriorityHigh } from "react-icons/md";
import "./Header.css";

const Header = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => setDropdownOpen(!dropdownOpen);
  const handleMobileMenuToggle = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleDocsItemClick = () => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    document.body.style.backgroundColor = "grey";
  };

  useEffect(() => {
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

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger-menu" onClick={handleMobileMenuToggle}>
        {mobileMenuOpen ? (
          <FaTimes size={25} color="white" />
        ) : (
          <FaBars size={25} color="white" />
        )}
      </div>

      <nav className={`nav ${mobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link
              to="/"
              className={`nav-link-issue ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <GrHomeRounded size={20} className="iconsaif home-icon" />
              <span className="spanHome">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`nav-link-issue ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              <FaRegUser size={20} className="iconsaif" />
              <span className="spanHome">About</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`nav-link-issue ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              <AiOutlineMail size={20} className="iconsaif" />
              <span className="spanHome">Contact</span>
            </Link>
          </li>

          {/* Docs Dropdown */}
          <li className="dropdown" ref={dropdownRef}>
            <button
              className={`nav-link-issue docs-btn ${
                location.pathname.startsWith("/docs") ? "active" : ""
              }`}
              onClick={handleDropdownToggle}
            >
              <FaBookOpen size={20} className="iconsaif" />{" "}
              <span className="spanHome">Docs</span>
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
                    <FaCube size={30} />
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
                    <FaTools size={30} />
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
                    <FaLaptopCode size={30} />
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
                className={`nav-link-issue ${
                  location.pathname === "/register" ? "active" : ""
                }`}
              >
                <BiLogIn size={20} className="iconsaif" />
                <span className="spanHome">Register</span>
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to="/profile"
                className={`nav-link-issue ${
                  location.pathname === "/profile" ? "active" : ""
                }`}
              >
                <FaRegUser size={20} className="iconsaif" />
                <span className="spanHome">Profile</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
