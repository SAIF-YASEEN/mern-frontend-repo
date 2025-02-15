import React from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle } from "react-icons/fa";
import "./Upcoming.css";
AOS.init();

const upcomingFeatures = [
  {
    title: "Dark Mode",
    description: "A sleek dark mode for better user experience.",
  },
  {
    title: "New Dashboard",
    description: "A redesigned dashboard with better analytics.",
  },
  {
    title: "Live Chat",
    description: "Real-time chat for instant communication.",
  },
  {
    title: "Profile Customization",
    description: "Personalized profiles with advanced settings.",
  },
  {
    title: "Enhanced Security",
    description: "Two-factor authentication and more.",
  },
  {
    title: "AI-Powered Suggestions",
    description: "Smart recommendations based on user activity.",
  },
  {
    title: "Multi-Language Support",
    description: "Access the platform in multiple languages.",
  },
  {
    title: "Offline Mode",
    description: "Use core features without an internet connection.",
  },
  {
    title: "Responsive Laoytout",
    description: "Use MERN form smaller screens like mobile",
  },
];

const UpcomingPage = () => {
  return (
    <div className="upcoming-container">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="upcoming-title"
      >
        Upcoming Features
      </motion.h1>

      <div className="upcoming-grid">
        {upcomingFeatures.map((feature, index) => (
          <motion.div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className="upcoming-card"
          >
            <FaCheckCircle className="upcoming-icon" />
            <div>
              <h2 className="upcoming-feature-title">{feature.title}</h2>
              <p className="upcoming-feature-description">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingPage;
