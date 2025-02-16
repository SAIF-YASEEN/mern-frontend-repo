import { useState, useEffect } from "react";
import React from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaMoon,
  FaTachometerAlt,
  FaComments,
  FaUserEdit,
  FaShieldAlt,
  FaBrain,
  FaGlobe,
  FaWifi,
  FaMobileAlt,
} from "react-icons/fa";
import "./Upcoming.css";
AOS.init();

const upcomingFeatures = [
  {
    title: "Dark Mode",
    icon: <FaMoon className="feature-icon text-blue-500" />,
    description:
      "A sleek and modern dark mode to reduce eye strain and enhance the user experience, especially at night.",
  },
  {
    title: "New Dashboard",
    icon: <FaTachometerAlt className="feature-icon text-green-500" />,
    description:
      "A completely redesigned dashboard offering advanced analytics, better navigation, and real-time updates.",
  },
  {
    title: "Live Chat",
    icon: <FaComments className="feature-icon text-yellow-500" />,
    description:
      "Instant real-time messaging system allowing users to communicate seamlessly within the platform.",
  },
  {
    title: "Profile Customization",
    icon: <FaUserEdit className="feature-icon text-purple-500" />,
    description:
      "Users will be able to personalize their profiles with themes, avatars, and bio descriptions.",
  },
  {
    title: "Enhanced Security",
    icon: <FaShieldAlt className="feature-icon text-red-500" />,
    description:
      "Implementing two-factor authentication, biometric login, and improved data encryption to keep accounts safe.",
  },
  {
    title: "AI-Powered Suggestions",
    icon: <FaBrain className="feature-icon text-pink-500" />,
    description:
      "A machine-learning-based system to provide personalized recommendations based on user activity.",
  },
  {
    title: "Multi-Language Support",
    icon: <FaGlobe className="feature-icon text-indigo-500" />,
    description:
      "Users will be able to switch between multiple languages, making the platform accessible worldwide.",
  },
  {
    title: "Offline Mode",
    icon: <FaWifi className="feature-icon text-gray-500" />,
    description:
      "Some core features will be available offline, ensuring accessibility even without an internet connection.",
  },
  {
    title: "Responsive Layout",
    icon: <FaMobileAlt className="feature-icon text-orange-500" />,
    description:
      "An improved responsive design to make the platform smoother and more efficient on mobile and tablet devices.",
  },
];

const UpcomingPage = () => {
  const releaseVersion = "2.1";
  const releaseDate = new Date().toLocaleDateString();
  const [releaseTime, setReleaseTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setReleaseTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="upcoming-container">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="upcoming-title"
      >
        🚀 Upcoming Features
      </motion.h1>
      <p className="upcoming-subtitle">
        We are continuously improving our platform with new and exciting
        features. Here's what’s coming next!
      </p>
      <p className="upcoming-version-info">
        The next version <strong className="vinfop">{releaseVersion}</strong> is
        scheduled for release on
        <p className="vinfop">
          <strong> {releaseDate}</strong>
        </p>{" "}
        at{" "}
        <p className="vinfop">
          <strong>12:00:00</strong>
        </p>
        . This update brings enhanced security, a redesigned dashboard, and
        several performance improvements to ensure a smoother user experience.
      </p>

      <div className="upcoming-grid">
        {upcomingFeatures.map((feature, index) => (
          <motion.div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className="upcoming-card expanded-card"
          >
            {feature.icon}
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
