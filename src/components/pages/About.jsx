import React, { useEffect } from "react";
import  Footer from '../partials/Footer'

// Import AOS for animations
import AOS from "aos";
import "aos/dist/aos.css";

// Import CSS for the AboutPage
import "../styles/AboutPage.css";

// Importing individual sections as components
import FirstAboutComponent from "../about/First";
import SecondAboutComponent from "../about/Second";
import FourthAboutComponent from "../about/Fourth";
import FifthAboutComponent from "../about/Fifth";
import SixthAboutComponent from "../about/Sixth";

const AboutPage = () => {
  useEffect(() => {
    // Initialize AOS (Animation On Scroll)
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <div className="lion-page">
      {/* Render the individual sections */}
      <FirstAboutComponent />
      <SecondAboutComponent />
      <FourthAboutComponent />
      <FifthAboutComponent />
      <SixthAboutComponent />
      <Footer/>
    </div>
  );
};

export default AboutPage;
